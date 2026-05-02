// src/components/FinancialOverview.jsx
import { motion } from 'framer-motion'
import Link from 'next/link'

const financials = [
  {
    icon: 'fa-solid fa-coins',
    title: 'Членские взносы',
    amount: '3 500 ₽',
    link: '/docs',
    description: 'На общие нужды: вывоз мусора, охрана, электричество',
  },
  {
    icon: 'fa-solid fa-hammer',
    title: 'Целевые взносы',
    amount: '2 000 ₽',
    link: '/docs',
    description: 'Ремонт дороги и забора — лето 2026',
  },
  {
    icon: 'fa-solid fa-exclamation-triangle',
    title: 'Задолженность',
    amount: '85 000 ₽',
    link: '/payments',
    description: 'По оплате электроэнергии и взносов',
  },
  {
    icon: 'fa-solid fa-tools',
    title: 'Услуги подрядчиков',
    amount: 'от 500 ₽',
    link: '/articles/services',
    description: 'Вырубка деревьев, вывоз мусора, ремонт',
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {financials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.08)' }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 transition-shadow"
          >
            <Link href={item.link} className="block h-full">
              <div className="flex items-center gap-2 mb-3">
                <i className={`${item.icon} text-2xl text-green-deep`}></i>
                <h3 className="text-lg font-semibold text-dark">{item.title}</h3>
              </div>
              <div className="text-2xl font-semibold text-green-deep mb-2">{item.amount}</div>
              <p className="text-sm text-gray-500 mb-4">{item.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-green-deep hover:text-green-700 transition-colors">
                Подробнее <i className="fa-solid fa-arrow-right text-xs"></i>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
