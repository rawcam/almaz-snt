// src/components/ButterflySVG.jsx
export default function ButterflySVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="60"
      height="60"
      style={{ display: 'block' }}
    >
      <defs>
        <style>
          {`
            @keyframes flapLeft {
              0%, 100% { transform: scaleY(1); }
              50% { transform: scaleY(0.5); }
            }
            @keyframes flapRight {
              0%, 100% { transform: scaleY(1); }
              50% { transform: scaleY(0.5); }
            }
            .wing-left {
              transform-origin: 30px 40px;
              animation: flapLeft 0.4s ease-in-out infinite;
            }
            .wing-right {
              transform-origin: 70px 40px;
              animation: flapRight 0.4s ease-in-out infinite;
            }
            .body {
              fill: #3e2c1b;
            }
            .wing {
              fill: #f59e0b;
              stroke: #b45309;
              stroke-width: 1.5;
            }
            .wing-inner {
              fill: #fbbf24;
              opacity: 0.6;
            }
            .antenna {
              stroke: #3e2c1b;
              stroke-width: 1.2;
              fill: none;
            }
          `}
        </style>
      </defs>
      {/* Левое крыло */}
      <ellipse className="wing wing-left" cx="25" cy="35" rx="18" ry="25" transform="rotate(-15 25 35)" />
      <ellipse className="wing-inner wing-left" cx="25" cy="35" rx="10" ry="18" transform="rotate(-15 25 35)" />
      {/* Правое крыло */}
      <ellipse className="wing wing-right" cx="75" cy="35" rx="18" ry="25" transform="rotate(15 75 35)" />
      <ellipse className="wing-inner wing-right" cx="75" cy="35" rx="10" ry="18" transform="rotate(15 75 35)" />
      {/* Тело */}
      <rect x="45" y="15" width="10" height="50" rx="4" className="body" />
      {/* Усики */}
      <path className="antenna" d="M50 15 Q40 5 35 10" />
      <path className="antenna" d="M50 15 Q60 5 65 10" />
      {/* Глаза */}
      <circle cx="48" cy="20" r="2" fill="white" />
      <circle cx="52" cy="20" r="2" fill="white" />
    </svg>
  )
}
