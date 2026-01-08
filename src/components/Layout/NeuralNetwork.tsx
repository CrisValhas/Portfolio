import React, { useEffect, useRef } from 'react';
import './NeuralNetwork.css';

interface NeuralNetworkProps {
  onClick: () => void;
}

export const NeuralNetwork: React.FC<NeuralNetworkProps> = ({ onClick }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar el tamaño del canvas con DPI scaling para mejor calidad
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Crear nodos (neuronas)
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulseSize: number;
    }> = [];

    const nodeCount = 8;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 4 + Math.random() * 3,
        pulseSize: 0,
      });
    }

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      // Limpiar canvas con transparencia
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      // Actualizar y dibujar nodos
      nodes.forEach((node, i) => {
        // Mover nodos
        node.x += node.vx;
        node.y += node.vy;

        // Rebotar en los bordes
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Mantener dentro del canvas
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Efecto de pulso
        node.pulseSize = Math.sin(time + i * 0.3) * 3;

        // Dibujar nodo
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius + node.pulseSize + 5
        );
        gradient.addColorStop(0, 'rgba(25, 118, 210, 0.8)');
        gradient.addColorStop(1, 'rgba(25, 118, 210, 0.1)');

        ctx.fillStyle = gradient;
        ctx.fillRect(
          node.x - node.radius - node.pulseSize - 5,
          node.y - node.radius - node.pulseSize - 5,
          (node.radius + node.pulseSize + 5) * 2,
          (node.radius + node.pulseSize + 5) * 2
        );

        ctx.fillStyle = `rgba(25, 118, 210, ${0.6 + 0.4 * Math.sin(time + i)})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + node.pulseSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // Dibujar conexiones entre nodos cercanos
      const connectionDistance = 200;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.4;

            ctx.strokeStyle = `rgba(25, 118, 210, ${opacity})`;
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            // Dibujar partículas que viajan por las conexiones
            const t = (time * 0.3) % 1;
            const px = nodes[i].x + (nodes[j].x - nodes[i].x) * t;
            const py = nodes[i].y + (nodes[j].y - nodes[i].y) * t;

            ctx.fillStyle = `rgba(66, 165, 245, ${opacity * 1.5})`;
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="neural-network-container">
      <canvas ref={canvasRef} className="neural-network-canvas" />
      <button className="neural-cta-button" onClick={onClick}>
        <span className="button-icon">🚗</span>
        <span className="button-text">Comenzar Recorrido</span>
      </button>
    </div>
  );
};
