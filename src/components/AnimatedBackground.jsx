// src/components/AnimatedBackground.jsx
import { useTime } from '../context/TimeContext'

// Функция интерполяции между двумя цветами
function lerpColor(a, b, t) {
  const ar = parseInt(a.slice(1, 3), 16)
  const ag = parseInt(a.slice(3, 5), 16)
  const ab = parseInt(a.slice(5, 7), 16)
  const br = parseInt(b.slice(1, 3), 16)
  const bg = parseInt(b.slice(3, 5), 16)
  const bb = parseInt(b.slice(5, 7), 16)
  const rr = Math.round(ar + (br - ar) * t)
  const rg = Math.round(ag + (bg - ag) * t)
  const rb = Math.round(ab + (bb - ab) * t)
  return `#${rr.toString(16).padStart(2, '0')}${rg.toString(16).padStart(2, '0')}${rb.toString(16).padStart(2, '0')}`
}

export default function AnimatedBackground() {
  const { isDay, twilightProgress } = useTime()
  const nightFactor = isDay ? twilightProgress : 1

  // Интерполяция цветов неба
  const skyTop = lerpColor('#a3c6e7', '#0f172a', nightFactor)
  const skyMid = lerpColor('#dce9f4', '#1e293b', nightFactor)
  const skyBot = lerpColor('#eef3f0', '#334155', nightFactor)

  // Стили для звёзд (ночью видимы, днём скрыты)
  const starsOpacity = nightFactor
  // Стили для птиц (днём видимы, ночью скрыты)
  const birdsOpacity = 1 - nightFactor
  // Стили для солнца/луны
  const celestialColor = lerpColor('#fbbf24', '#e2e8f0', nightFactor)

  // Трава
  const grassTop = lerpColor('#81a86e', '#2d3a2a', nightFactor)
  const grassBot = lerpColor('#4a6b3a', '#1a2415', nightFactor)

  return (
    <div className="parallax-scene" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
      {/* Небо */}
      <div className="sky" style={{
        background: `linear-gradient(180deg, ${skyTop} 0%, ${skyMid} 50%, ${skyBot} 100%)`,
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
      }}></div>

      {/* Солнце / Луна */}
      <div className="celestial-body" style={{
        position: 'absolute', top: '12%', left: '10%', fontSize: '5rem', color: celestialColor,
        textShadow: nightFactor > 0.5 ? '0 0 20px #ffffff80' : '0 0 30px #fde047',
        animation: 'sunSpin 20s linear infinite', transformOrigin: 'center',
      }}>
        <i className={`fa-solid ${nightFactor > 0.5 ? 'fa-moon' : 'fa-sun'}`}></i>
      </div>

      {/* Птицы (дневные) */}
      <div className="birds" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: birdsOpacity, transition: 'opacity 0.8s' }}>
        <i className="fa-solid fa-dove" style={{ position: 'absolute', top: '22%', left: '-5%', fontSize: '1.8rem', color: '#555', animation: 'birdFly1 18s linear infinite' }}></i>
        <i className="fa-solid fa-crow" style={{ position: 'absolute', top: '32%', left: '-15%', fontSize: '1.8rem', color: '#333', animation: 'birdFly2 22s linear infinite', animationDelay: '5s' }}></i>
        <i className="fa-solid fa-dove" style={{ position: 'absolute', top: '26%', left: '-25%', fontSize: '1.8rem', color: '#666', animation: 'birdFly3 20s linear infinite', animationDelay: '10s' }}></i>
        <i className="fa-solid fa-crow" style={{ position: 'absolute', top: '36%', left: '-20%', fontSize: '1.8rem', color: '#444', animation: 'birdFly4 24s linear infinite', animationDelay: '2s' }}></i>
      </div>

      {/* Звёзды (ночные) */}
      <div className="stars" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: starsOpacity, transition: 'opacity 0.8s' }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <i key={i} className="fa-solid fa-star" style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 70}%`,
            fontSize: `${0.8 + Math.random() * 1.2}rem`,
            color: '#fff',
            textShadow: '0 0 6px #fff',
            animation: `twinkle ${2 + Math.random() * 3}s infinite alternate`,
          }}></i>
        ))}
      </div>

      {/* Передний план (трава, дома, животные, деревья) */}
      <div className="foreground" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '28%', background: `linear-gradient(to bottom, ${grassTop} 0%, ${grassBot} 60%)`, transition: 'background 0.8s' }}>
        <div style={{ position: 'absolute', bottom: '28%', left: 0, width: '100%', height: '2px', background: 'rgba(0,0,0,0.1)' }}></div>
        <div className="smoke" style={{ position: 'absolute', bottom: 'calc(28% + 9rem)', left: 'calc(4% + 4rem)', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ display: 'block', width: '10px', height: '10px', background: '#ccc', borderRadius: '50%', margin: '2px 0', opacity: 0.7, animation: 'rise 3s infinite' }}></span>
          <span style={{ display: 'block', width: '10px', height: '10px', background: '#ccc', borderRadius: '50%', margin: '2px 0', opacity: 0.7, animation: 'rise 3s infinite', animationDelay: '0.5s' }}></span>
          <span style={{ display: 'block', width: '10px', height: '10px', background: '#ccc', borderRadius: '50%', margin: '2px 0', opacity: 0.7, animation: 'rise 3s infinite', animationDelay: '1s' }}></span>
          <span style={{ display: 'block', width: '10px', height: '10px', background: '#ccc', borderRadius: '50%', margin: '2px 0', opacity: 0.7, animation: 'rise 3s infinite', animationDelay: '1.5s' }}></span>
        </div>
        {/* Дома и животные */}
        <i className="fa-solid fa-house" style={{ position: 'absolute', bottom: '28%', left: '4%', fontSize: '8rem', color: '#ef4444', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)' }}></i>
        <i className="fa-solid fa-tree" style={{ position: 'absolute', bottom: '28%', left: '13.2%', fontSize: '4rem', color: '#81c784', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)' }}></i>
        <i className="fa-solid fa-mosquito" style={{ position: 'absolute', bottom: '28%', left: '22.4%', fontSize: '3.5rem', color: '#4a4a4a', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)', animation: 'buzz 0.5s infinite alternate' }}></i>
        <i className="fa-solid fa-dog" style={{ position: 'absolute', bottom: '28%', left: '31.6%', fontSize: '3.5rem', color: '#8b5a2b', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)', animation: 'sway 2.5s ease-in-out infinite' }}></i>
        <i className="fa-solid fa-frog" style={{ position: 'absolute', bottom: '28%', left: '40.8%', fontSize: '3rem', color: '#4caf50', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)', animation: 'bounce 1.5s ease-in-out infinite' }}></i>
        <i className="fa-solid fa-house" style={{ position: 'absolute', bottom: '28%', left: '50%', fontSize: '8rem', color: '#eab308', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)' }}></i>
        <i className="fa-solid fa-fire" style={{ position: 'absolute', bottom: '28%', left: '59.2%', fontSize: '3rem', color: '#f97316', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)', animation: 'fireFlicker 1.5s ease-in-out infinite' }}></i>
        <i className="fa-solid fa-cat" style={{ position: 'absolute', bottom: '28%', left: '68.4%', fontSize: '3.5rem', color: '#f97316', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)', animation: 'sway 2.8s ease-in-out infinite' }}></i>
        <i className="fa-solid fa-horse" style={{ position: 'absolute', bottom: '28%', left: '77.6%', fontSize: '6rem', color: '#78350f', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)', animation: 'sway 3.2s ease-in-out infinite' }}></i>
        <i className="fa-solid fa-tree" style={{ position: 'absolute', bottom: '28%', left: '86.8%', fontSize: '4rem', color: '#4caf50', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)' }}></i>
        <i className="fa-solid fa-house" style={{ position: 'absolute', bottom: '28%', left: '96%', fontSize: '8rem', color: '#3b82f6', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)' }}></i>
      </div>

      {/* Облака */}
      <div className="clouds" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <i className="fa-solid fa-cloud cloud1" style={{ position: 'absolute', top: '18%', left: '-10%', fontSize: '3rem', color: 'white', opacity: 0.9, textShadow: '0 2px 8px rgba(0,0,0,0.05)', animation: 'cloudDrift1 40s linear infinite' }}></i>
        <i className="fa-solid fa-cloud cloud2" style={{ position: 'absolute', top: '30%', left: '-15%', fontSize: '3rem', color: 'white', opacity: 0.9, textShadow: '0 2px 8px rgba(0,0,0,0.05)', animation: 'cloudDrift2 50s linear infinite' }}></i>
        <i className="fa-solid fa-cloud cloud3" style={{ position: 'absolute', top: '14%', left: '-20%', fontSize: '3rem', color: 'white', opacity: 0.9, textShadow: '0 2px 8px rgba(0,0,0,0.05)', animation: 'cloudDrift3 45s linear infinite' }}></i>
      </div>

      <style jsx>{`
        @keyframes sunSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes cloudDrift1 { from { transform: translateX(0); } to { transform: translateX(120vw); } }
        @keyframes cloudDrift2 { from { transform: translateX(0); } to { transform: translateX(130vw); } }
        @keyframes cloudDrift3 { from { transform: translateX(0); } to { transform: translateX(125vw); } }
        @keyframes birdFly1 { from { transform: translate(0, 0); } to { transform: translate(120vw, -30px); } }
        @keyframes birdFly2 { from { transform: translate(0, 0); } to { transform: translate(130vw, -20px); } }
        @keyframes birdFly3 { from { transform: translate(0, 0); } to { transform: translate(125vw, -25px); } }
        @keyframes birdFly4 { from { transform: translate(0, 0); } to { transform: translate(135vw, -15px); } }
        @keyframes twinkle { 0% { opacity: 0.4; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1.1); } }
        @keyframes buzz { 0% { transform: translate(-50%, 0); } 100% { transform: translate(-50%, -3px); } }
        @keyframes sway { 0%,100% { transform: translateX(-50%) rotate(0deg); } 25% { transform: translateX(-50%) rotate(2deg); } 75% { transform: translateX(-50%) rotate(-2deg); } }
        @keyframes bounce { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-6px); } }
        @keyframes fireFlicker { 0%,100% { transform: translateX(-50%) scale(1); opacity: 0.9; } 50% { transform: translateX(-50%) scale(1.1); opacity: 1; } }
        @keyframes rise { 0% { transform: translateY(0) scale(1); opacity: 0.7; } 100% { transform: translateY(-40px) scale(2); opacity: 0; } }
      `}</style>
    </div>
  )
}
