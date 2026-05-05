// src/pages/index.js (фрагмент героя)
import ButterflySVG from '../components/ButterflySVG'
import DaisySVG from '../components/DaisySVG'

// в секции героя:
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <AnimatedBackground />
  <div className="container mx-auto px-4 relative z-10 py-20 flex justify-center">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative max-w-xl bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center mx-auto"
    >
      {/* Бабочка в левом верхнем углу с порханием */}
      <motion.div
        className="absolute -top-6 -left-6"
        animate={{ y: [0, -8, 0], x: [0, 4, -2, 0], rotate: [0, 8, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ButterflySVG />
      </motion.div>

      {/* Ромашка в правом нижнем углу с покачиванием */}
      <motion.div
        className="absolute -bottom-4 -right-4"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <DaisySVG />
      </motion.div>

      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
        Ступинский район, деревня Леньково
      </span>
      <h1 className="text-5xl md:text-6xl font-medium mt-4 leading-tight text-dark">
        СНТ «АЛМАЗ»
      </h1>
      <p className="text-lg text-gray-600 mt-4 max-w-md mx-auto">
        Добро пожаловать!
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <a href="/docs" className="inline-block px-6 py-2.5 rounded-full font-medium transition-all bg-green-deep text-white hover:bg-[#1b5e20] shadow-sm text-sm">
          Документы
        </a>
        <a href="/contacts" className="inline-block px-6 py-2.5 rounded-full font-medium transition-all border border-gold text-green-deep hover:bg-gold hover:text-white text-sm">
          Контакты
        </a>
      </div>
    </motion.div>
  </div>
</section>
