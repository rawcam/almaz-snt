// src/pages/articles/membership-fees.js
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'

export default function MembershipFees() {
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
            Членские взносы
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-8 text-dark">
            Куда идут членские взносы
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Размер ежегодного членского взноса — 3 500 ₽ с участка. Эти средства
            направляются на общие нужды: вывоз мусора, круглосуточную охрану,
            электроснабжение мест общего пользования, обслуживание дороги и
            благоустройство.
          </p>
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">
            Отчётность
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Полная смета расходов доступна в разделе «Документы». Задолженности
            отображаются в Личном кабинете.
          </p>
        </motion.article>
      </div>
    </div>
  )
}
