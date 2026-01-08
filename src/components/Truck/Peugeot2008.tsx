import React from 'react';

interface TruckProps {
  className?: string;
}

export const Peugeot2008: React.FC<TruckProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <path
        d="M 40 60 L 50 40 L 140 40 L 150 55 L 150 75 L 40 75 Z"
        fill="#8B8B8B"
        stroke="#5A5A5A"
        strokeWidth="1"
      />

      {/* Windshield */}
      <polygon points="52,42 62,42 65,60 50,60" fill="#B0E0E6" opacity="0.6" />

      {/* Side window */}
      <polygon points="75,42 120,42 125,60 75,60" fill="#B0E0E6" opacity="0.5" />

      {/* Rear window */}
      <polygon points="130,45 145,55 145,75 130,70" fill="#B0E0E6" opacity="0.4" />

      {/* Door line */}
      <line x1="70" y1="42" x2="65" y2="75" stroke="#5A5A5A" strokeWidth="0.5" opacity="0.5" />

      {/* Front wheel */}
      <circle cx="60" cy="80" r="8" fill="#333" />
      <circle cx="60" cy="80" r="6" fill="#555" />
      <circle cx="60" cy="80" r="3" fill="#222" />

      {/* Back wheel */}
      <circle cx="135" cy="80" r="8" fill="#333" />
      <circle cx="135" cy="80" r="6" fill="#555" />
      <circle cx="135" cy="80" r="3" fill="#222" />

      {/* Front lights */}
      <rect x="148" y="58" width="3" height="4" fill="#FFD700" />
      <rect x="148" y="65" width="3" height="4" fill="#FF6B6B" />

      {/* Bumper */}
      <rect x="40" y="74" width="110" height="2" fill="#5A5A5A" />

      {/* Antenna */}
      <line x1="145" y1="40" x2="145" y2="30" stroke="#333" strokeWidth="0.5" />
    </svg>
  );
};
