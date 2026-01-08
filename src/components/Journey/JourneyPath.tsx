import React from 'react';

export const JourneyPath: React.FC = () => {
  // Path SVG que define la ruta del camión - Mapa del tesoro
  const pathD = `
    M 150 100
    L 150 300
    Q 150 400 100 450
    L 80 600
    Q 70 700 120 750
    L 180 850
    Q 220 900 180 950
    L 100 1050
    Q 80 1100 130 1150
    L 180 1250
    Q 200 1350 150 1400
  `;

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(scrollTop / docHeight, 1);
      
      const progressLine = document.querySelector('.journey-progress-line') as SVGPathElement;
      if (progressLine) {
        const pathLength = progressLine.getTotalLength();
        progressLine.style.strokeDashoffset = String((1 - scrollPercent) * pathLength);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <svg
      className="journey-path-svg"
      viewBox="0 0 300 1500"
      preserveAspectRatio="none"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '120px',
        height: '100vh',
        zIndex: 5,
        pointerEvents: 'none'
      }}
    >
      {/* Decoración de mapa: círculos y puntos */}
      <circle cx="150" cy="100" r="8" fill="#ff6b6b" opacity="0.7" />
      <circle cx="150" cy="100" r="12" fill="none" stroke="#ff6b6b" strokeWidth="1" opacity="0.5" />
      
      <circle cx="100" cy="450" r="6" fill="#4ecdc4" opacity="0.6" />
      <circle cx="180" cy="750" r="6" fill="#4ecdc4" opacity="0.6" />
      <circle cx="100" cy="1050" r="6" fill="#4ecdc4" opacity="0.6" />
      
      <circle cx="150" cy="1400" r="10" fill="#ffd700" opacity="0.8" />
      <circle cx="150" cy="1400" r="15" fill="none" stroke="#ffd700" strokeWidth="2" opacity="0.5" />

      {/* Línea base del camino */}
      <path
        d={pathD}
        fill="none"
        stroke="rgba(139, 69, 19, 0.3)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Línea de progreso animada */}
      <path
        className="journey-progress-line"
        d={pathD}
        fill="none"
        stroke="#d32f2f"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2000"
        strokeDashoffset="2000"
        style={{
          transition: 'stroke-dashoffset 0.1s linear'
        }}
      />

      {/* Decoración: X marcas en puntos intermedios */}
      <g opacity="0.4">
        <line x1="140" y1="340" x2="160" y2="360" stroke="#8b4513" strokeWidth="1" />
        <line x1="160" y1="340" x2="140" y2="360" stroke="#8b4513" strokeWidth="1" />
        
        <line x1="110" y1="840" x2="130" y2="860" stroke="#8b4513" strokeWidth="1" />
        <line x1="130" y1="840" x2="110" y2="860" stroke="#8b4513" strokeWidth="1" />
        
        <line x1="120" y1="1250" x2="140" y2="1270" stroke="#8b4513" strokeWidth="1" />
        <line x1="140" y1="1250" x2="120" y2="1270" stroke="#8b4513" strokeWidth="1" />
      </g>

      {/* Brújula decorativa */}
      <g transform="translate(150, 50)">
        <circle cx="0" cy="0" r="15" fill="none" stroke="#1a237e" strokeWidth="1" opacity="0.6" />
        <line x1="0" y1="-12" x2="0" y2="-15" stroke="#1a237e" strokeWidth="1.5" opacity="0.6" />
        <text x="-2" y="-18" fontSize="10" fill="#1a237e" opacity="0.6">N</text>
      </g>
    </svg>
  );
};
