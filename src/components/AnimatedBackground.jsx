// src/components/AnimatedBackground.jsx
import { useWeather } from '../context/TimeContext'

function lerpColor(a, b, t) {
  const ar = parseInt(a.slice(1, 3), 16), ag = parseInt(a.slice(3, 5), 16), ab = parseInt(a.slice(5, 7), 16)
  const br = parseInt(b.slice(1, 3), 16), bg = parseInt(b.slice(3, 5), 16), bb = parseInt(b.slice(5, 7), 16)
  return `#${Math.round(ar + (br - ar) * t).toString(16).padStart(2, '0')}${Math.round(ag + (bg - ag) * t).toString(16).padStart(2, '0')}${Math.round(ab + (bb - ab) * t).toString(16).padStart(2, '0')}`
}

export default function AnimatedBackground() {
  const { isDay, twilightProgress, weatherCode } = useWeather()
  const nightFactor = isDay ? twilightProgress : 1

  const skyTop = lerpColor('#a3c6e7', '#0f172a', nightFactor)
  const skyMid = lerpColor('#dce9f4', '#1e293b', nightFactor)
  const skyBot = lerpColor('#eef3f0', '#334155', nightFactor)
  const starsOpacity = nightFactor
  const birdsOpacity = 1 - nightFactor
  const celestialColor = lerpColor('#fbbf24', '#e2e8f0', nightFactor)

  const grassTop = lerpColor('#81a86e', '#2d3a2a', nightFactor)
  const grassBot = lerpColor('#4a6b3a', '#1a2415', nightFactor)

  // Определяем тип погоды для фона
  const isRain = weatherCode >= 51 && weatherCode <= 67
  const isSnow = weatherCode >= 71 && weatherCode <= 77
  const isStorm = weatherCode >= 95 && weatherCode <= 99
  const isCloudy = weatherCode >= 1 && weatherCode <= 3 // облачно/пасмурно

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
      {/* Небо */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: `linear-gradient(180deg, ${skyTop} 0%, ${skyMid} 50%, ${skyBot} 100%)`
      }} />

      {/* Солнце / Луна (скрываем в сильную облачность/дождь/снег/грозу) */}
      {!(isRain || isSnow || isStorm || (isCloudy && weatherCode === 3)) && (
        <div style={{
          position: 'absolute', top: '12%', left: '10%', fontSize: '5rem', color: celestialColor,
          textShadow: nightFactor > 0.5 ? '0 0 20px #ffffff80' : '0 0 30px #fde047',
          animation: 'sunSpin 20s linear infinite', transformOrigin: 'center'
        }}>
          <i className={`fa-solid ${nightFactor > 0.5 ? 'fa-moon' : 'fa-sun'}`} />
        </div>
      )}

      {/* Птицы (днём, в хорошую погоду) */}
      {!isRain && !isSnow && !isStorm && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: birdsOpacity, transition: 'opacity 0.8s', pointerEvents: 'none' }}>
          <i className="fa-solid fa-dove" style={{ position: 'absolute', top: '22%', left: '-5%', fontSize: '1.8rem', color: '#555', animation: 'birdFly1 18s linear infinite' }} />
          <i className="fa-solid fa-crow" style={{ position: 'absolute', top: '32%', left: '-15%', fontSize: '1.8rem', color: '#333', animation: 'birdFly2 22s linear infinite', animationDelay: '5s' }} />
          <i className="fa-solid fa-dove" style={{ position: 'absolute', top: '26%', left: '-25%', fontSize: '1.8rem', color: '#666', animation: 'birdFly3 20s linear infinite', animationDelay: '10s' }} />
          <i className="fa-solid fa-crow" style={{ position: 'absolute', top: '36%', left: '-20%', fontSize: '1.8rem', color: '#444', animation: 'birdFly4 24s linear infinite', animationDelay: '2s' }} />
        </div>
      )}

      {/* Звёзды (ночью, в ясную погоду) */}
      {!isRain && !isSnow && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: starsOpacity, transition: 'opacity 0.8s', pointerEvents: 'none' }}>
          {Array.from({ length: 40 }).map((_, i) => (
            <i key={i} className="fa-solid fa-star" style={{
              position: 'absolute', left: `${Math.random() * 100}%`, top: `${Math.random() * 70}%`,
              fontSize: `${0.8 + Math.random() * 1.2}rem`, color: '#fff', textShadow: '0 0 6px #fff',
              animation: `twinkle ${2 + Math.random() * 3}s infinite alternate`
            }} />
          ))}
        </div>
      )}

      {/* Дождевые капли (если дождь) */}
      {isRain && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          {Array.from({ length: 30 }).map((_, i) => (
            <i key={i} className="fa-solid fa-droplet" style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${-10 + Math.random() * 110}%`,
              fontSize: '0.8rem',
              color: '#60a5fa',
              animation: `fall ${1 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }} />
          ))}
        </div>
      )}

      {/* Снежинки (если снег) */}
      {isSnow && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          {Array.from({ length: 30 }).map((_, i) => (
            <i key={i} className="fa-solid fa-snowflake" style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${-10 + Math.random() * 110}%`,
              fontSize: '0.8rem',
              color: '#e0f2fe',
              animation: `fall ${2 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }} />
          ))}
        </div>
      )}

      {/* Гроза – молнии (появляются редко) */}
      {isStorm && (
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', animation: 'lightning 4s infinite', opacity: 0.8 }}>
          <i className="fa-solid fa-bolt" style={{ fontSize: '4rem', color: '#facc15' }} />
        </div>
      )}

      {/* Трава */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%', height: '28%',
        background: `linear-gradient(to bottom, ${grassTop} 0%, ${grassBot} 60%)`,
        transition: 'background 0.8s'
      }} />

      {/* Горизонт с домами и животными */}
      <div style={{ position: 'absolute', bottom: '28%', left: 0, width: '100%', height: 0, pointerEvents: 'none' }}>
        {/* Дым */}
        <div style={{ position: 'absolute', bottom: 'calc(9rem)', left: 'calc(4% + 4rem)', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ display: 'block', width: '10px', height: '10px', background: '#ccc', borderRadius: '50%', margin: '2px 0', opacity: 0.7, animation: 'rise 3s infinite' }} />
          <span style={{ display: 'block', width: '10px', height: '10px', background: '#ccc', borderRadius: '50%', margin: '2px 0', opacity: 0.7, animation: 'rise 3s infinite', animationDelay: '0.5s' }} />
          <span style={{ display: 'block', width: '10px', height: '10px', background: '#ccc', borderRadius: '50%', margin: '2px 0', opacity: 0.7, animation: 'rise 3s infinite', animationDelay: '1s' }} />
          <span style={{ display: 'block', width: '10px', height: '10px', background: '#ccc', borderRadius: '50%', margin: '2px 0', opacity: 0.7, animation: 'rise 3s infinite', animationDelay: '1.5s' }} />
        </div>

        {/* Дома, деревья, животные */}
        <i className="fa-solid fa-house"   style={{ position: 'absolute', bottom: '28%', left: '4%',    fontSize: '8rem', color: '#ef4444', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)' }} />
        <i className="fa-solid fa-tree"    style={{ position: 'absolute', bottom: '28%', left: '13.2%', fontSize: '4rem', color: '#81c784', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)' }} />
        <i className="fa-solid fa-mosquito" style={{ position: 'absolute', bottom: '28%', left: '22.4%', fontSize: '3.5rem', color: '#4a4a4a', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)', animation: 'buzz 0.5s infinite alternate' }} />
        <i className="fa-solid fa-dog"     style={{ position: 'absolute', bottom: '28%', left: '31.6%', fontSize: '3.5rem', color: '#8b5a2b', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)', animation: 'sway 2.5s ease-in-out infinite' }} />
        <i className="fa-solid fa-frog"    style={{ position: 'absolute', bottom: '28%', left: '40.8%', fontSize: '3rem',   color: '#4caf50', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)', animation: 'bounce 1.5s ease-in-out infinite' }} />
        <i className="fa-solid fa-house"   style={{ position: 'absolute', bottom: '28%', left: '50%',   fontSize: '8rem', color: '#eab308', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)' }} />
        <i className="fa-solid fa-fire"    style={{ position: 'absolute', bottom: '28%', left: '59.2%', fontSize: '3rem',   color: '#f97316', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)', animation: 'fireFlicker 1.5s ease-in-out infinite' }} />
        <i className="fa-solid fa-cat"     style={{ position: 'absolute', bottom: '28%', left: '68.4%', fontSize: '3.5rem', color: '#f97316', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)', animation: 'sway 2.8s ease-in-out infinite' }} />
        <i className="fa-solid fa-horse"   style={{ position: 'absolute', bottom: '28%', left: '77.6%', fontSize: '6rem',   color: '#78350f', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)', animation: 'sway 3.2s ease-in-out infinite' }} />
        <i className="fa-solid fa-tree"    style={{ position: 'absolute', bottom: '28%', left: '86.8%', fontSize: '4rem',   color: '#4caf50', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)' }} />
        <i className="fa-solid fa-house"   style={{ position: 'absolute', bottom: '28%', left: '96%',   fontSize: '8rem', color: '#3b82f6', textShadow: '2px 2px 4px rgba(0,0,0,0.2)', transform: 'translateX(-50%)' }} />
      </div>

      {/* Облака (всегда, но меняются в зависимости от погоды) */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <i className={`fa-solid ${isRain || isStorm ? 'fa-cloud-rain' : isSnow ? 'fa-cloud' : 'fa-cloud'}`} style={{
          position: 'absolute', top: '18%', left: '-10%', fontSize: '3rem', color: isRain || isStorm ? '#94a3b8' : 'white',
          opacity: 0.9, textShadow: '0 2px 8px rgba(0,0,0,0.05)', animation: 'cloudDrift1 40s linear infinite'
        }} />
        <i className={`fa-solid ${isRain || isStorm ? 'fa-cloud-rain' : isSnow ? 'fa-cloud' : 'fa-cloud'}`} style={{
          position: 'absolute', top: '30%', left: '-15%', fontSize: '3rem', color: isRain || isStorm ? '#94a3b8' : 'white',
          opacity: 0.9, textShadow: '0 2px 8px rgba(0,0,0,0.05)', animation: 'cloudDrift2 50s linear infinite'
        }} />
        <i className={`fa-solid ${isRain || isStorm ? 'fa-cloud-rain' : isSnow ? 'fa-cloud' : 'fa-cloud'}`} style={{
          position: 'absolute', top: '14%', left: '-20%', fontSize: '3rem', color: isRain || isStorm ? '#94a3b8' : 'white',
          opacity: 0.9, textShadow: '0 2px 8px rgba(0,0,0,0.05)', animation: 'cloudDrift3 45s linear infinite'
        }} />
      </div>

      <style jsx>{`
        @keyframes sunSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
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
        @keyframes fall { 0% { transform: translateY(0); } 100% { transform: translateY(100vh); } }
        @keyframes lightning { 0%, 90%, 100% { opacity: 0; } 95% { opacity: 1; } }
      `}</style>
    </div>
  )
}
