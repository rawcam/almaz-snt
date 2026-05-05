// src/components/FinancialOverview.jsx
import { motion } from 'framer-motion'
import Link from 'next/link'

const financials = [
  {
    icon: 'fa-solid fa-coins',
    title: 'Членские взносы',
    amount: '1 200 – 1 800 ₽ / участок',
    link: '/docs',
    description: '6 соток — 1 200 ₽, 8 соток — 1 500 ₽, 12 соток — 1 800 ₽',
    shadowColor: 'rgba(184, 155, 94, 0.3)',
    borderColor: 'rgba(184, 155, 94, 0.8)'
  },
  {
    icon: 'fa-solid fa-hammer',
    title: 'Целевые взносы',
    amount: '3 200 ₽ / участок',
    link: '/news',
    description: '2 000 ₽ – ограждение, 1 200 ₽ – ремонт дорог (2026 г.)',
    shadowColor: 'rgba(76, 175, 80, 0.3)',
    borderColor: 'rgba(76, 175, 80, 0.8)'
  },
  {
    icon: 'fa-solid fa-exclamation-triangle',
    title: 'Задолженность',
    amount: 'Всего: 178 971,12 ₽',
    link: '/payments',
    description: 'По электроэнергии, членским и целевым взносам',
    shadowColor: 'rgba(220, 38, 38, 0.3)',
    borderColor: 'rgba(220, 38, 38, 0.8)'
  },
]

export default function FinancialOverview() {
  return (
    <section className="py-12 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
          Финансы и услуги
        </span>
        <h2 className="text-4xl md:text-5xl font-medium mt-4 text-dark">
          Прозрачность и помощь
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {financials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{
              y: -5,
              boxShadow: `0 15px 30px ${item.shadowColor}`,
              borderColor: item.borderColor
            }}
            className="backdrop-blur-xl bg-white/40 rounded-3xl p-5 border border-white/50 shadow-sm transition-all cursor-pointer"
          >
            <Link href={item.link} className="block h-full">
              <div className="flex items-center gap-2 mb-3">
                <i className={`${item.icon} text-2xl text-green-deep`}></i>
                <h3 className="text-lg font-semibold text-dark">
                  {item.title}
                </h3>
              </div>
              <div className="text-2xl font-light text-green-deep mb-2">
                {item.amount}
              </div>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-green-deep hover:text-green-900 transition-colors">
                Подробнее
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
