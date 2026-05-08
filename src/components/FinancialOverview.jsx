// src/components/FinancialOverview.jsx
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const financials = [
  {
    icon: 'fa-solid fa-coins',
    title: 'Членские взносы',
    amount: '1 200 – 1 800 ₽',
    link: '/docs',
    items: [
      '6 соток — 1 200 ₽',
      '8 соток — 1 500 ₽',
      '12 соток — 1 800 ₽',
    ],
    shadowColor: 'rgba(184, 155, 94, 0.3)',
    borderColor: 'rgba(184, 155, 94, 0.8)',
  },
  {
    icon: 'fa-solid fa-hammer',
    title: 'Целевые взносы',
    amount: '3 200 ₽ / участок',
    link: '/news',
    items: [
      '2 000 ₽ — ограждение',
      '1 200 ₽ — ремонт дорог',
      'Сбор 2026 года',
    ],
    shadowColor: 'rgba(76, 175, 80, 0.3)',
    borderColor: 'rgba(76, 175, 80, 0.8)',
  },
  {
    icon: 'fa-solid fa-exclamation-triangle',
    title: 'Задолженность',
    amount: 'Загрузка...',
    link: '/payments',
    items: [
      'Загрузка данных...',
    ],
    shadowColor: 'rgba(220, 38, 38, 0.3)',
    borderColor: 'rgba(220, 38, 38, 0.8)',
  },
]

export default function FinancialOverview() {
  const [debtData, setDebtData] = useState(null)

  useEffect(() => {
    fetch('/almaz-snt/data/payments/contributions-detail-2026-04-27.json')
      .then(res => res.json())
      .then(json => {
        let totalDebt = 0
        let electricityDebt = 0
        let membershipDebt = 0
        let targetDebt = 0
        json.forEach(item => {
          // Суммируем отдельные поля для расшифровки
          electricityDebt += item.debtElectricity || 0
          membershipDebt += item.debtMembership || 0
          targetDebt += item.debtTarget || 0
          // Главное: общий долг считаем как сумму поля totalDebt (как и в ведомости)
          totalDebt += item.totalDebt || 0
        })
        setDebtData({
          total: totalDebt,
          electricity: electricityDebt,
          membership: membershipDebt,
          target: targetDebt,
        })
      })
      .catch(() => setDebtData(null))
  }, [])

  const debtAmount = debtData
    ? `Всего: ${debtData.total.toLocaleString()} ₽`
    : 'Загрузка...'
  const debtItems = debtData
    ? [
        `Электроэнергия: ${debtData.electricity.toLocaleString()} ₽`,
        `Членские взносы: ${debtData.membership.toLocaleString()} ₽`,
        `Целевые взносы: ${debtData.target.toLocaleString()} ₽`,
      ]
    : ['Загрузка данных...']

  const dynamicFinancials = financials.map(item => {
    if (item.title === 'Задолженность') {
      return { ...item, amount: debtAmount, items: debtItems }
    }
    return item
  })

  return (
    <section className="py-12 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {dynamicFinancials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{
              y: -5,
              boxShadow: `0 15px 30px ${item.shadowColor}`,
              borderColor: item.borderColor,
            }}
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm transition-all cursor-pointer"
          >
            <Link href={item.link} className="block h-full">
              <div className="flex items-center gap-2 mb-4">
                <i className={`${item.icon} text-2xl text-green-deep`}></i>
                <h3 className="text-lg font-semibold text-dark">{item.title}</h3>
              </div>
              <div className="text-2xl font-light text-green-deep mb-4">
                {item.amount}
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                {item.items.map((line, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gold mt-1 shrink-0">•</span>
                    {line}
                  </li>
                ))}
              </ul>
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
