// src/components/DaisySVG.jsx
export default function DaisySVG() {
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
            @keyframes petalSwing {
              0%, 100% { transform: rotate(0deg); }
              25% { transform: rotate(2deg); }
              75% { transform: rotate(-2deg); }
            }
            @keyframes centerGlow {
              0%, 100% { fill: #fbbf24; }
              50% { fill: #fde047; }
            }
            .petals {
              transform-origin: 50px 50px;
              animation: petalSwing 3s ease-in-out infinite;
            }
            .center {
              animation: centerGlow 2s ease-in-out infinite;
            }
            .petal {
              fill: #fef9c3;
              stroke: #f59e0b;
              stroke-width: 0.8;
            }
            .stem {
              stroke: #4ade80;
              stroke-width: 3;
              fill: none;
            }
            .leaf {
              fill: #86efac;
              stroke: #22c55e;
              stroke-width: 1;
            }
          `}
        </style>
      </defs>
      {/* Стебель */}
      <path className="stem" d="M50 55 Q48 75 40 95" />
      {/* Лист */}
      <path className="leaf" d="M47 70 Q35 60 30 65 Q32 75 47 78 Z" />
      {/* Лепестки */}
      <g className="petals">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <ellipse
            key={i}
            className="petal"
            cx="50"
            cy="50"
            rx="8"
            ry="22"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
      </g>
      {/* Сердцевина */}
      <circle className="center" cx="50" cy="50" r="10" />
      <circle cx="50" cy="50" r="6" fill="#b45309" />
    </svg>
  )
}
