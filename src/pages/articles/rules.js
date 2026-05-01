// src/pages/articles/rules.js
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'

export default function Rules() {
  return (
    <div className="min-h-screen bg-almond">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
            Правила СНТ
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-8 text-dark">
            Правила и регламенты
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Здесь собраны актуальные внутренние нормы товарищества. Ознакомьтесь с ними, чтобы избежать недоразумений.
          </p>
          <p className="text-gray-500 text-sm">Страница будет регулярно дополняться правлением.</p>
        </motion.article>
      </div>
    </div>
  )
}
