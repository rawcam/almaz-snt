import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-br from-[#e0e6d0] via-[#f5f0e6] to-[#d4c9a8]">
      <div className="absolute inset-0">
        {/* Плавающие частицы */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Ромашки, клубника, бабочки */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.i
          className="fa-solid fa-sun absolute text-6xl text-yellow-300/80"
          style={{ left: '10%', top: '80%' }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.i
          className="fa-solid fa-cloud absolute text-5xl text-white/90"
          style={{ right: '5%', top: '10%' }}
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.i
          className="fa-solid fa-strawberry absolute text-4xl text-red-400/80"
          style={{ left: '70%', top: '85%' }}
          animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.i
          className="fa-solid fa-fan absolute text-5xl text-green-400/60"
          style={{ left: '15%', top: '15%' }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.i
          className="fa-solid fa-bug absolute text-3xl text-pink-300/70"
          style={{ right: '20%', top: '60%' }}
          animate={{ x: [0, 15, -10, 0], y: [0, -10, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.i
          className="fa-solid fa-seedling absolute text-4xl text-green-500/70"
          style={{ left: '80%', top: '20%' }}
          animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.i
          className="fa-solid fa-leaf absolute text-3xl text-green-300/80"
          style={{ left: '40%', top: '90%' }}
          animate={{ x: [0, 20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </div>
    </div>
  )
}
