// src/pages/payments.js
import Navbar from '../components/Navbar'
import AnimatedBackground from '../components/AnimatedBackground'
import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'

const mockData = [
  { id: 1, owner: 'Иванов И.И.', plot: '12', membership: 3500, target: 2000, electricity: 0, debt: 0 },
  { id: 2, owner: 'Петров П.П.', plot: '25', membership: 3500, target: 2000, electricity: 1500, debt: 1500 },
  { id: 3, owner: 'Сидорова А.В.', plot: '7', membership: 0, target: 0, electricity: 800, debt: 4300 },
  // добавьте остальные
]

export default function Payments() {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [order, setOrder] = useState('asc')

  const filtered = useMemo(() => {
    let data = [...mockData]
    if (search) {
      const lower = search.toLowerCase()
      data = data.filter(item =>
        item.owner.toLowerCase().includes(lower) ||
        item.plot.includes(lower)
      )
    }
    if (sortBy) {
      data.sort((a, b) => {
        const valA = a[sortBy], valB = b[sortBy]
        if (typeof valA === 'string') return order === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA)
        return order === 'asc' ? valA - valB : valB - valA
      })
    }
    return data
  }, [search, sortBy, order])

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
        </motion.div>

        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/30">
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Поиск по владельцу или участку..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-green-deep"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 font-semibold text-dark cursor-pointer" onClick={() => handleSort('owner')}>
                    Владелец {sortBy === 'owner' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-4 cursor-pointer" onClick={() => handleSort('plot')}>
                    Участок {sortBy === 'plot' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-4 cursor-pointer" onClick={() => handleSort('membership')}>
                    Членские взн. {sortBy === 'membership' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-4 cursor-pointer" onClick={() => handleSort('target')}>
                    Целевые {sortBy === 'target' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-4 cursor-pointer" onClick={() => handleSort('electricity')}>
                    Эл-во {sortBy === 'electricity' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-4 cursor-pointer" onClick={() => handleSort('debt')}>
                    Долг {sortBy === 'debt' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(item => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-white/50 transition-colors">
                    <td className="py-3 px-4">{item.owner}</td>
                    <td className="py-3 px-4">{item.plot}</td>
                    <td className="py-3 px-4">{item.membership} ₽</td>
                    <td className="py-3 px-4">{item.target} ₽</td>
                    <td className="py-3 px-4">{item.electricity} ₽</td>
                    <td className={`py-3 px-4 ${item.debt > 0 ? 'text-red-500 font-medium' : 'text-green-600'}`}>
                      {item.debt} ₽
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
