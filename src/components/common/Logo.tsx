export const LogoSVG = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#1976d2', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#1565c0', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect x="10" y="15" width="80" height="70" rx="6" stroke="url(#logoGrad)" strokeWidth="3" fill="none" />
    <circle cx="35" cy="35" r="8" fill="url(#logoGrad)" />
    <path d="M 50 50 L 50 70" stroke="url(#logoGrad)" strokeWidth="2" strokeLinecap="round" />
    <path d="M 35 60 L 65 60" stroke="url(#logoGrad)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
