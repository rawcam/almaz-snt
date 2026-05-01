// src/pages/articles/target-fees.js
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'

export default function TargetFees() {
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
            Целевые взносы
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-8 text-dark">
            Ремонт дороги и забора — лето 2026
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Сбор целевых взносов — 2 000 ₽ с участка. План работ: замена
            асфальтового покрытия на центральной аллее (июнь), восстановление
            металлического забора по периметру (июль). Подрядчик — ООО «СтройСад».
            Срок завершения — 15 августа 2026.
          </p>
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">
            Контроль
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Фотоотчёты будут публиковаться в новостях. Остаток средств вернётся
            пропорционально или пойдёт на следующий проект по решению собрания.
          </p>
        </motion.article>
      </div>
    </div>
  )
}
