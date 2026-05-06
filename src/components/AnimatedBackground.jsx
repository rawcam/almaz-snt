// src/components/AnimatedBackground.jsx
export default function AnimatedBackground() {
  return (
    <div className="parallax-scene">
      <div className="sky"></div>
      <div className="sun-icon"><i className="fa-solid fa-sun"></i></div>
      <div className="clouds">
        <i className="fa-solid fa-cloud cloud cloud1"></i>
        <i className="fa-solid fa-cloud cloud cloud2"></i>
        <i className="fa-solid fa-cloud cloud cloud3"></i>
      </div>
      <div className="birds">
        <i className="fa-solid fa-dove bird bird1"></i>
        <i className="fa-solid fa-crow bird bird2" style={{ color: '#555' }}></i>
        <i className="fa-solid fa-dove bird bird3"></i>
        <i className="fa-solid fa-crow bird bird4" style={{ color: '#444' }}></i>
      </div>
      <div className="foreground">
        <div className="grass"></div>
        <div className="horizon"></div>
        <div className="smoke"><span></span><span></span><span></span><span></span></div>
        <i className="fa-solid fa-house icon house" style={{ left: '4%', color: '#ef4444' }}></i>
        <i className="fa-solid fa-tree icon tree" style={{ left: '13.2%', color: '#81c784' }}></i>
        <i className="fa-solid fa-mosquito icon mosquito"></i>
        <i className="fa-solid fa-dog icon dog"></i>
        <i className="fa-solid fa-frog icon frog"></i>
        <i className="fa-solid fa-house icon house" style={{ left: '50%', color: '#eab308' }}></i>
        <i className="fa-solid fa-fire icon fire"></i>
        <i className="fa-solid fa-cat icon cat"></i>
        <i className="fa-solid fa-horse icon horse"></i>
        <i className="fa-solid fa-tree icon tree" style={{ left: '86.8%', color: '#4caf50' }}></i>
        <i className="fa-solid fa-house icon house" style={{ left: '96%', color: '#3b82f6' }}></i>
      </div>

      <style jsx>{`
        .parallax-scene {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }
        .sky {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(180deg, #a3c6e7 0%, #dce9f4 50%, #eef3f0 100%);
        }
        .sun-icon {
          position: absolute;
          top: 12%; left: 10%;
          font-size: 5rem; color: #fbbf24;
          text-shadow: 0 0 20px #fde047;
          animation: sunSpin 20s linear infinite;
          transform-origin: center;
        }
        @keyframes sunSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .clouds {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
        }
        .cloud {
          position: absolute;
          font-size: 3rem; color: white; opacity: 0.9;
          text-shadow: 0 2px 8px rgba(0,0,0,0.05);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .cloud1 { top: 18%; left: -10%; animation: cloudDrift1 40s linear infinite; }
        .cloud2 { top: 30%; left: -15%; animation: cloudDrift2 50s linear infinite; }
        .cloud3 { top: 14%; left: -20%; animation: cloudDrift3 45s linear infinite; }
        @keyframes cloudDrift1 { from { transform: translateX(0); } to { transform: translateX(120vw); } }
        @keyframes cloudDrift2 { from { transform: translateX(0); } to { transform: translateX(130vw); } }
        @keyframes cloudDrift3 { from { transform: translateX(0); } to { transform: translateX(125vw); } }
        .birds {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
        }
        .bird {
          position: absolute;
          font-size: 1.8rem; opacity: 0.8;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .bird1 { top: 22%; left: -5%; animation: birdFly1 18s infinite; animation-delay: 0s; }
        .bird2 { top: 32%; left: -15%; animation: birdFly2 22s infinite; animation-delay: 5s; }
        .bird3 { top: 26%; left: -25%; animation: birdFly3 20s infinite; animation-delay: 10s; }
        .bird4 { top: 36%; left: -20%; animation: birdFly4 24s infinite; animation-delay: 2s; }
        @keyframes birdFly1 { from { transform: translate(0, 0); } to { transform: translate(120vw, -30px); } }
        @keyframes birdFly2 { from { transform: translate(0, 0); } to { transform: translate(130vw, -20px); } }
        @keyframes birdFly3 { from { transform: translate(0, 0); } to { transform: translate(125vw, -25px); } }
        @keyframes birdFly4 { from { transform: translate(0, 0); } to { transform: translate(135vw, -15px); } }
        .foreground {
          position: absolute;
          bottom: 0; left: 0; width: 100%; height: 100%;
        }
        .grass {
          position: absolute;
          bottom: 0; left: 0; width: 100%; height: 28%;
          background: linear-gradient(to bottom, #81a86e 0%, #4a6b3a 60%);
        }
        .horizon {
          position: absolute;
          bottom: 28%; left: 0; width: 100%; height: 2px;
          background: rgba(0,0,0,0.1);
        }
        .icon {
          position: absolute;
          bottom: 28%;
          transform: translateX(-50%);
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        .house { font-size: 8rem; }
        .tree { font-size: 4rem; }
        .mosquito {
          font-size: 3.5rem; color: #4a4a4a; left: 22.4%;
          animation: buzz 0.5s infinite alternate;
        }
        @keyframes buzz {
          0% { transform: translateX(-50%) translateY(0); }
          100% { transform: translateX(-50%) translateY(-3px); }
        }
        .dog { font-size: 3.5rem; color: #8b5a2b; left: 31.6%; animation: sway 2.5s ease-in-out infinite; }
        .frog { font-size: 3rem; color: #4caf50; left: 40.8%; animation: bounce 1.5s ease-in-out infinite; }
        .fire { font-size: 3rem; color: #f97316; left: 59.2%; animation: fireFlicker 1.5s ease-in-out infinite; }
        .cat { font-size: 3.5rem; color: #f97316; left: 68.4%; animation: sway 2.8s ease-in-out infinite; }
        .horse { font-size: 6rem; color: #78350f; left: 77.6%; animation: sway 3.2s ease-in-out infinite; }
        @keyframes fireFlicker {
          0%,100% { transform: translateX(-50%) scale(1); opacity: 0.9; }
          50% { transform: translateX(-50%) scale(1.1); opacity: 1; }
        }
        @keyframes sway {
          0%,100% { transform: translateX(-50%) rotate(0deg); }
          25% { transform: translateX(-50%) rotate(2deg); }
          75% { transform: translateX(-50%) rotate(-2deg); }
        }
        @keyframes bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-6px); }
        }
        .smoke {
          position: absolute;
          bottom: calc(28% + 9rem);
          left: calc(4% + 4rem);
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center;
        }
        .smoke span {
          display: block; width: 10px; height: 10px;
          background: #ccc; border-radius: 50%; margin: 2px 0; opacity: 0.7;
          animation: rise 3s infinite;
        }
        .smoke span:nth-child(1) { animation-delay: 0s; }
        .smoke span:nth-child(2) { animation-delay: 0.5s; }
        .smoke span:nth-child(3) { animation-delay: 1s; }
        .smoke span:nth-child(4) { animation-delay: 1.5s; }
        @keyframes rise {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          100% { transform: translateY(-40px) scale(2); opacity: 0; }
        }

        /* ---------- Мобильная адаптация ---------- */
        @media (max-width: 768px) {
          .sun-icon { top: 10%; left: 8%; font-size: 3.5rem; }
          .cloud { font-size: 2rem; }
          .bird { font-size: 1.2rem; }
          .house { font-size: 5rem; }
          .tree { font-size: 2.5rem; }
          .mosquito { font-size: 2.2rem; left: 22%; }
          .dog { font-size: 2.2rem; left: 31%; }
          .frog { font-size: 2rem; left: 40%; }
          .fire { font-size: 2.2rem; left: 59%; }
          .cat { font-size: 2.2rem; left: 68%; }
          .horse { font-size: 4rem; left: 77%; }
          .icon { bottom: 28%; transform: translateX(-50%); } /* ← ВАЖНО: возвращаем translateX */
          .smoke {
            bottom: calc(28% + 5rem);
            left: calc(4% + 2rem);
          }
          .smoke span { width: 7px; height: 7px; }
          .grass { height: 30%; }
          .horizon { bottom: 30%; }
          .icon { bottom: 30%; }
        }

        @media (max-width: 480px) {
          .house { font-size: 4rem; }
          .tree { font-size: 2rem; }
          .mosquito { font-size: 1.8rem; left: 21%; }
          .dog { font-size: 1.8rem; left: 30%; }
          .frog { font-size: 1.6rem; left: 39%; }
          .fire { font-size: 1.8rem; left: 58%; }
          .cat { font-size: 1.8rem; left: 67%; }
          .horse { font-size: 3.2rem; left: 76%; }
          .icon { bottom: 30%; transform: translateX(-50%); } /* ← ВАЖНО */
        }
      `}</style>
    </div>
  );
}
