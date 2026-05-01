// src/pages/articles/debt.js
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'

export default function Debt() {
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
            Задолженность
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-8 text-dark">
            Общая задолженность по СНТ
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            По состоянию на 1 мая 2026 года общая сумма непогашенных взносов
            и долгов за электроэнергию составляет 85 000 ₽. Детализация по
            участкам доступна в Личном кабинете (после авторизации).
          </p>
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">
            Меры воздействия
          </h2>
          <p className="text-gray-600 leading-relaxed">
            При задолженности более 6 месяцев возможно ограничение доступа к
            инфраструктуре. Просьба погасить долги до 1 июня во избежание санкций.
            Для сверки обращайтесь к бухгалтеру.
          </p>
        </motion.article>
      </div>
    </div>
  )
}
