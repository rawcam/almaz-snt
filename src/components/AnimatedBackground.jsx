// src/components/AnimatedBackground.jsx
export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#a3c6e7] via-[#dce9f4] to-[#eef3f0]"></div>
      <div className="absolute top-[12%] left-[10%] text-7xl text-yellow-400 animate-spin-slow" style={{ textShadow: '0 0 30px #fde047' }}>
        <i className="fa-solid fa-sun"></i>
      </div>
      <div className="absolute top-[18%] left-[-10%] text-5xl text-white/90 animate-cloud1"><i className="fa-solid fa-cloud"></i></div>
      <div className="absolute top-[30%] left-[-15%] text-4xl text-white/80 animate-cloud2"><i className="fa-solid fa-cloud"></i></div>
      <div className="absolute top-[14%] left-[-20%] text-4xl text-white/70 animate-cloud3"><i className="fa-solid fa-cloud"></i></div>
      <div className="absolute top-[22%] left-[-5%] text-2xl text-gray-800 animate-bird1"><i className="fa-solid fa-dove"></i></div>
      <div className="absolute top-[32%] left-[-15%] text-2xl text-gray-600 animate-bird2"><i className="fa-solid fa-crow"></i></div>
      <div className="absolute top-[26%] left-[-25%] text-2xl text-gray-800 animate-bird3"><i className="fa-solid fa-dove"></i></div>
      <div className="absolute top-[36%] left-[-20%] text-2xl text-gray-700 animate-bird4"><i className="fa-solid fa-crow"></i></div>
      <div className="absolute bottom-0 left-0 w-full h-[28%] bg-gradient-to-b from-[#81a86e] to-[#4a6b3a]"></div>
      <div className="absolute bottom-[28%] left-0 w-full h-[2px] bg-black/10"></div>
      <div className="absolute bottom-[calc(28%+9rem)] left-[calc(4%+4rem)] flex flex-col items-center">
        <span className="block w-3 h-3 bg-gray-300 rounded-full opacity-70 animate-rise"></span>
        <span className="block w-3 h-3 bg-gray-300 rounded-full opacity-70 animate-rise" style={{ animationDelay: '0.5s' }}></span>
        <span className="block w-3 h-3 bg-gray-300 rounded-full opacity-70 animate-rise" style={{ animationDelay: '1s' }}></span>
        <span className="block w-3 h-3 bg-gray-300 rounded-full opacity-70 animate-rise" style={{ animationDelay: '1.5s' }}></span>
      </div>
      <i className="fa-solid fa-house absolute bottom-[28%] left-[4%] text-[8rem] text-red-500 drop-shadow-lg" style={{ transform: 'translateX(-50%)' }}></i>
      <i className="fa-solid fa-tree absolute bottom-[28%] left-[13.2%] text-[4rem] text-green-300 drop-shadow-lg" style={{ transform: 'translateX(-50%)' }}></i>
      <i className="fa-solid fa-mosquito absolute bottom-[28%] left-[22.4%] text-[3.5rem] text-gray-700 drop-shadow-lg animate-buzz" style={{ transform: 'translateX(-50%)' }}></i>
      <i className="fa-solid fa-dog absolute bottom-[28%] left-[31.6%] text-[3.5rem] text-amber-800 drop-shadow-lg animate-sway" style={{ transform: 'translateX(-50%)' }}></i>
      <i className="fa-solid fa-frog absolute bottom-[28%] left-[40.8%] text-[3rem] text-green-600 drop-shadow-lg animate-bounce" style={{ transform: 'translateX(-50%)' }}></i>
      <i className="fa-solid fa-house absolute bottom-[28%] left-[50%] text-[8rem] text-yellow-500 drop-shadow-lg" style={{ transform: 'translateX(-50%)' }}></i>
      <i className="fa-solid fa-fire absolute bottom-[28%] left-[59.2%] text-[3rem] text-orange-500 drop-shadow-lg animate-flicker" style={{ transform: 'translateX(-50%)' }}></i>
      <i className="fa-solid fa-cat absolute bottom-[28%] left-[68.4%] text-[3.5rem] text-orange-400 drop-shadow-lg animate-sway" style={{ transform: 'translateX(-50%)' }}></i>
      <i className="fa-solid fa-horse absolute bottom-[28%] left-[77.6%] text-[6rem] text-amber-900 drop-shadow-lg animate-sway" style={{ transform: 'translateX(-50%)' }}></i>
      <i className="fa-solid fa-tree absolute bottom-[28%] left-[86.8%] text-[4rem] text-green-500 drop-shadow-lg" style={{ transform: 'translateX(-50%)' }}></i>
      <i className="fa-solid fa-house absolute bottom-[28%] left-[96%] text-[8rem] text-blue-500 drop-shadow-lg" style={{ transform: 'translateX(-50%)' }}></i>
      <style jsx>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes cloud1 { from { transform: translateX(0); } to { transform: translateX(130vw); } }
        @keyframes cloud2 { from { transform: translateX(0); } to { transform: translateX(140vw); } }
        @keyframes cloud3 { from { transform: translateX(0); } to { transform: translateX(135vw); } }
        @keyframes bird1 { from { transform: translate(0,0); } to { transform: translate(120vw, -30px); } }
        @keyframes bird2 { from { transform: translate(0,0); } to { transform: translate(130vw, -20px); } }
        @keyframes bird3 { from { transform: translate(0,0); } to { transform: translate(125vw, -25px); } }
        @keyframes bird4 { from { transform: translate(0,0); } to { transform: translate(135vw, -15px); } }
        @keyframes rise { 0% { transform: translateY(0) scale(1); opacity: 0.7; } 100% { transform: translateY(-40px) scale(2); opacity: 0; } }
        @keyframes buzz { 0% { transform: translate(-50%, 0px); } 100% { transform: translate(-50%, -3px); } }
        @keyframes sway { 0%,100% { transform: translateX(-50%) rotate(0deg); } 25% { transform: translateX(-50%) rotate(2deg); } 75% { transform: translateX(-50%) rotate(-2deg); } }
        @keyframes bounce { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-6px); } }
        @keyframes flicker { 0%,100% { transform: translateX(-50%) scale(1); opacity: 0.9; } 50% { transform: translateX(-50%) scale(1.1); opacity: 1; } }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        .animate-cloud1 { animation: cloud1 40s linear infinite; }
        .animate-cloud2 { animation: cloud2 50s linear infinite; }
        .animate-cloud3 { animation: cloud3 45s linear infinite; }
        .animate-bird1 { animation: bird1 18s linear infinite; }
        .animate-bird2 { animation: bird2 22s linear infinite; animation-delay: 5s; }
        .animate-bird3 { animation: bird3 20s linear infinite; animation-delay: 10s; }
        .animate-bird4 { animation: bird4 24s linear infinite; animation-delay: 2s; }
        .animate-rise { animation: rise 3s infinite; }
        .animate-buzz { animation: buzz 0.5s infinite alternate; }
        .animate-sway { animation: sway 2.5s ease-in-out infinite; }
        .animate-bounce { animation: bounce 1.5s ease-in-out infinite; }
        .animate-flicker { animation: flicker 1.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
