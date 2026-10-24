/* eslint-disable react/no-unknown-property */
import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => t * t * (3 - 2 * t);

/** Parámetros del campo por sección: [grid, densidad, warp, acento(0..1)] */
const TABLE: number[][] = [
  [0.0, 13, 1.3, 0.9], // inicio: orgánico
  [0.3, 17, 1.0, 0.6], // qué te llevás
  [1.0, 11, 0.3, 0.8], // IA: retícula de plano
  [0.55, 19, 1.5, 0.7], // liderazgo
  [0.0, 24, 1.1, 0.6], // impacto
  [0.85, 30, 0.45, 0.5], // stack: denso, ordenado
  [0.1, 15, 1.9, 0.6], // proyectos
  [0.0, 11, 2.1, 1.0], // contacto
];

const vert = /* glsl */ `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const frag = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform float uTime, uGrid, uDensity, uWarp, uAccent, uAspect, uScroll, uVel, uDim;
uniform vec2 uMouse;

float hash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
}
float fbm(vec2 p){ float a = 0.5, s = 0.0; for(int i=0;i<4;i++){ s += a*noise(p); p = p*2.03 + 7.1; a *= 0.5; } return s; }

float contour(float v, float w){ return 1.0 - smoothstep(0.0, w, abs(fract(v + 0.5) - 0.5)); }

void main(){
  vec2 uv = vUv;
  vec2 p = (uv - 0.5) * vec2(uAspect, 1.0) * 2.4;
  p.y += uScroll * 1.4;
  float t = uTime * 0.035;
  vec2 q = vec2(fbm(p + t), fbm(p + vec2(5.2, 1.3) - t));
  vec2 w = p + (uWarp + uVel * 0.6) * q;

  float nf = fbm(w * 1.05 + t);
  float gf = 0.25 * (cos(w.x * 2.6) + cos(w.y * 2.6)) + 0.5;
  float f = mix(nf, gf, uGrid);
  float v = f * uDensity;

  float fw = fwidth(v);
  float minor = contour(v, fw * 1.15);
  float major = contour(v / 5.0, fwidth(v / 5.0) * 1.6);

  // curva de nivel "señal" que viaja con el scroll
  float target = 0.5 + 0.18 * sin(uScroll * 7.0 + uTime * 0.15);
  float signal = 1.0 - smoothstep(0.0, fwidth(f) * 1.5, abs(f - target));

  // acento alrededor del cursor
  vec2 m = (uMouse - 0.5) * vec2(uAspect, 1.0);
  vec2 c = (uv - 0.5) * vec2(uAspect, 1.0);
  float g = exp(-pow(distance(c, m) * 2.6, 2.0));

  vec3 bone = vec3(0.925, 0.92, 0.9);
  vec3 acc = vec3(1.0, 0.36, 0.12);
  float a = minor * 0.06 + major * 0.11;
  vec3 col = bone;
  col = mix(col, acc, clamp(g * 1.1 * uAccent, 0.0, 1.0));
  a += g * (minor * 0.35 + major * 0.3) * uAccent;
  col = mix(col, acc, signal);
  a += signal * 0.45 * uAccent;

  // calma detrás del texto (izquierda) y viñeta
  float mask = mix(uDim, 1.0, smoothstep(0.38, 0.9, uv.x));
  float vig = smoothstep(1.15, 0.25, distance(uv, vec2(0.5)));
  gl_FragColor = vec4(col, a * mask * vig);
}
`;

const state = { f: 0, vel: 0, lastY: 0, mx: 0.7, my: 0.5 };

function Field() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();
  const uniforms = useMemo(() => ({
    uTime: { value: 0 }, uGrid: { value: 0 }, uDensity: { value: 13 }, uWarp: { value: 1.3 }, uAccent: { value: 0.9 },
    uAspect: { value: 1 }, uScroll: { value: 0 }, uVel: { value: 0 }, uDim: { value: 0.35 }, uMouse: { value: new THREE.Vector2(0.7, 0.5) },
  }), []);

  useEffect(() => {
    const move = (e: MouseEvent) => { state.mx = e.clientX / window.innerWidth; state.my = 1 - e.clientY / window.innerHeight; };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useFrame((_, dt) => {
    if (!mat.current) return;
    const u = mat.current.uniforms;
    // escena fraccional según las secciones reales (data-scene)
    const secs = Array.from(document.querySelectorAll<HTMLElement>('[data-scene]'));
    let f = 0;
    if (secs.length) {
      const y = window.scrollY + window.innerHeight / 2;
      const pts = secs.map((el) => ({ c: el.offsetTop + el.offsetHeight / 2, s: Number(el.dataset.scene) }));
      if (y <= pts[0].c) f = pts[0].s;
      else if (y >= pts[pts.length - 1].c) f = pts[pts.length - 1].s;
      else {
        const i = pts.findIndex((q, k) => y >= q.c && y < pts[k + 1].c);
        f = pts[i].s + (pts[i + 1].s - pts[i].s) * ease((y - pts[i].c) / (pts[i + 1].c - pts[i].c));
      }
    }
    state.f += (f - state.f) * Math.min(1, dt * 3);
    const i0 = Math.floor(state.f), i1 = Math.min(TABLE.length - 1, i0 + 1), k = state.f - i0;
    const P = TABLE[Math.min(i0, TABLE.length - 1)].map((v, j) => v + (TABLE[i1][j] - v) * k);
    u.uGrid.value = P[0]; u.uDensity.value = P[1]; u.uWarp.value = P[2]; u.uAccent.value = P[3];

    const sy = window.scrollY;
    const v = (sy - state.lastY) / Math.max(dt, 0.001); state.lastY = sy;
    state.vel += (clamp(Math.abs(v) / 2500) - state.vel) * Math.min(1, dt * 5);
    u.uVel.value = state.vel;
    u.uTime.value += dt;
    u.uScroll.value = sy / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    u.uAspect.value = size.width / size.height;
    u.uDim.value = size.width > 900 ? 0.16 : 0.3;
    (u.uMouse.value as THREE.Vector2).lerp(new THREE.Vector2(state.mx, state.my), 0.08);
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial ref={mat} vertexShader={vert} fragmentShader={frag} uniforms={uniforms} transparent depthTest={false} depthWrite={false} />
    </mesh>
  );
}

export default function World() {
  return (
    <Canvas className="j2-canvas" dpr={[1, 1.5]} gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }} camera={{ position: [0, 0, 1] }}>
      <Field />
    </Canvas>
  );
}
