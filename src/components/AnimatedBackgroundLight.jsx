// src/components/AnimatedBackgroundLight.jsx
import { motion } from 'framer-motion'

export default function AnimatedBackgroundLight({ opacity = 0.5 }) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-br from-[#e0e6d0] via-[#f5f0e6] to-[#d4c9a8]" style={{ opacity }}>
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 7,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.i className="fa-solid fa-sun absolute text-6xl text-yellow-300/70" style={{ left: '10%', top: '80%' }}
          animate={{ y: [0, -25, 0], rotate: [0, 12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.i className="fa-solid fa-cloud absolute text-5xl text-white/80" style={{ right: '5%', top: '10%' }}
          animate={{ x: [0, 30, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.i className="fa-solid fa-cloud absolute text-4xl text-white/70" style={{ left: '40%', top: '5%' }}
          animate={{ x: [0, -20, 0] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
        <motion.i className="fa-solid fa-strawberry absolute text-4xl text-red-400/70" style={{ left: '70%', top: '85%' }}
          animate={{ y: [0, -18, 0], scale: [1, 1.1, 1] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} />
        <motion.i className="fa-solid fa-seedling absolute text-4xl text-green-500/60" style={{ left: '80%', top: '20%' }}
          animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} />
        <motion.i className="fa-solid fa-leaf absolute text-3xl text-green-300/70" style={{ left: '40%', top: '90%' }}
          animate={{ x: [0, 25, 0], rotate: [0, 18, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }} />
        <motion.i className="fa-solid fa-bug absolute text-3xl text-pink-300/60" style={{ right: '15%', top: '60%' }}
          animate={{ x: [0, 15, -10, 0], y: [0, -12, 6, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
        <motion.i className="fa-solid fa-fan absolute text-5xl text-green-400/50" style={{ left: '15%', top: '15%' }}
          animate={{ rotate: [0, 360] }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} />

        <motion.i className="fa-solid fa-house absolute text-4xl text-amber-700/60" style={{ left: '5%', top: '40%' }}
          animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }} />
        <motion.i className="fa-solid fa-fire absolute text-4xl text-orange-500/70" style={{ right: '25%', top: '75%' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }} />
        <motion.i className="fa-solid fa-bicycle absolute text-4xl text-blue-400/60" style={{ left: '60%', top: '10%' }}
          animate={{ x: [0, 40, 0], rotate: [0, 5, -5, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }} />
        <motion.i className="fa-solid fa-tree absolute text-5xl text-green-700/60" style={{ right: '10%', top: '30%' }}
          animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} />
        <motion.i className="fa-solid fa-caravan absolute text-4xl text-yellow-600/50" style={{ left: '30%', top: '25%' }}
          animate={{ x: [0, -25, 0] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 3 }} />
        <motion.i className="fa-solid fa-fish absolute text-3xl text-cyan-500/60" style={{ right: '5%', top: '50%' }}
          animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }} />
        <motion.i className="fa-solid fa-drumstick-bite absolute text-3xl text-red-600/60" style={{ left: '50%', top: '70%' }}
          animate={{ rotate: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }} />
        <motion.i className="fa-solid fa-tractor absolute text-4xl text-lime-800/50" style={{ left: '20%', top: '80%' }}
          animate={{ x: [0, 15, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }} />
      </div>
    </div>
  )
}
