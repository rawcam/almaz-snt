// src/pages/payments.js
import Navbar from '../components/Navbar'
import AnimatedBackground from '../components/AnimatedBackground'
import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'

export default function Payments() {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('plot')
  const [order, setOrder] = useState('asc')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/almaz-snt/data/payments/2026-04-27.json')
      .then(res => res.json())
      .then(json => setData(json))
  }, [])

  const filtered = useMemo(() => {
    let result = [...data]
    if (search) {
      result = result.filter(item =>
        item.plot.toString().includes(search)
      )
    }
    if (sortBy) {
      result.sort((a, b) => {
        const valA = a[sortBy], valB = b[sortBy]
        if (typeof valA === 'string') return order === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA)
        return order === 'asc' ? valA - valB : valB - valA
      })
    }
    return result
  }, [data, search, sortBy, order])

  const handleSort = (field) => {
    if (sortBy === field) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setOrder('asc')
    }
  }

  return (
    <div className="min-h-screen bg-almond">
      <AnimatedBackground opacity={0.2} />
      <Navbar />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
            Прозрачность
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 text-dark">
            Ведомости по оплате
          </h1>
          <p className="text-gray-500 mt-2">на 27 апреля 2026 г.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/30">
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Введите номер участка..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-green-deep"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 font-semibold text-dark cursor-pointer" onClick={() => handleSort('plot')}>
                    Участок {sortBy === 'plot' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-4 cursor-pointer" onClick={() => handleSort('debt')}>
                    Долг, ₽ {sortBy === 'debt' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-4 cursor-pointer" onClick={() => handleSort('overpayment')}>
                    Переплата, ₽ {sortBy === 'overpayment' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(item => (
                  <tr key={item.plot} className="border-b border-gray-100 hover:bg-white/50 transition-colors">
                    <td className="py-3 px-4 font-medium">{item.plot}</td>
                    <td className={`py-3 px-4 ${item.debt > 0 ? 'text-red-500 font-medium' : 'text-gray-500'}`}>
                      {item.debt.toLocaleString()}
                    </td>
                    <td className={`py-3 px-4 ${item.overpayment > 0 ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                      {item.overpayment.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Архивная справка */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-10"
        >
          Архив ведомостей за предыдущие периоды будет доступен в ближайшее время.
        </motion.p>
      </div>

      <footer className="bg-[#0f1a15] text-gray-400 py-12 mt-20 relative z-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white text-lg font-semibold">СНТ «Алмаз»</h4>
            <p className="mt-2">Московская обл., Ступинский р-н, д. Леньково.</p>
          </div>
          <div>
            <h5 className="text-white font-semibold">Навигация</h5>
            <ul className="mt-2 space-y-1">
              <li><a href="/news" className="hover:text-gold">Новости</a></li>
              <li><a href="/docs" className="hover:text-gold">Документы</a></li>
              <li><a href="/payments" className="hover:text-gold">Ведомости</a></li>
              <li><a href="/contacts" className="hover:text-gold">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold">Контакты</h5>
            <p className="mt-2">cnt-almaz@yandex.ru<br />+7 (496) 123-45-67</p>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          © 2026 СНТ «Алмаз». Все права защищены.
        </div>
      </footer>
    </div>
  )
}
