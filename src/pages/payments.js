// src/pages/payments.js
import Navbar from '../components/Navbar'
import AnimatedBackgroundLight from '../components/AnimatedBackgroundLight'
import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'

// Список доступных периодов
const availablePeriods = [
  { value: '2026-03', label: 'Март 2026' },
  { value: '2026-04', label: 'Апрель 2026' },
  { value: '2026-05', label: 'Май 2026' },
]

export default function Payments() {
  const [activeTable, setActiveTable] = useState('electricity')
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('plot')
  const [order, setOrder] = useState('asc')
  const [electricityData, setElectricityData] = useState([])
  const [contributionsDetailData, setContributionsDetailData] = useState([])
  const [selectedPeriod, setSelectedPeriod] = useState('2026-04')
  const [onlyDebtors, setOnlyDebtors] = useState(false)

  useEffect(() => {
    fetch(`/almaz-snt/data/payments/electricity-${selectedPeriod}.json`)
      .then(res => res.json())
      .then(json => setElectricityData(json || []))
      .catch(() => setElectricityData([]))
    fetch(`/almaz-snt/data/payments/contributions-detail-${selectedPeriod}.json`)
      .then(res => res.json())
      .then(json => setContributionsDetailData(json || []))
      .catch(() => setContributionsDetailData([]))
  }, [selectedPeriod])

  const currentData = activeTable === 'electricity' ? electricityData : contributionsDetailData

  const filtered = useMemo(() => {
    let result = currentData ? [...currentData] : []
    // Фильтр "только должники"
    if (onlyDebtors) {
      result = result.filter(item => {
        if (activeTable === 'electricity') {
          return item.debtEnd > 0 || item.debtStart > 0
        } else {
          return item.totalDebt > 0 || item.debtMembership > 0 || item.debtTarget > 0 || item.debtElectricity > 0
        }
      })
    }
    // Поиск
    if (search) {
      result = result.filter(item =>
        item.plot.toString().includes(search)
      )
    }
    // Сортировка
    if (sortBy) {
      result.sort((a, b) => {
        const valA = a[sortBy] ?? 0
        const valB = b[sortBy] ?? 0
        if (typeof valA === 'string') return order === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA)
        return order === 'asc' ? valA - valB : valB - valA
      })
    }
    return result
  }, [currentData, search, sortBy, order, onlyDebtors, activeTable])

  const handleSort = (field) => {
    if (sortBy === field) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(field)
      setOrder('asc')
    }
  }

  const formatMoney = (value) => {
    if (value === null || value === undefined) return '—'
    return Number(value).toLocaleString() + ' ₽'
  }
  const formatNumber = (value) => {
    if (value === null || value === undefined) return '—'
    return Number(value).toLocaleString()
  }

  return (
    <div className="min-h-screen relative">
      <AnimatedBackgroundLight opacity={0.5} />
      <Navbar />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
            Прозрачность
          </span>
          <h1 className="text-5xl md:text-6xl font-semibold mt-4 text-dark">
            Ведомости
          </h1>
        </motion.div>

        {/* Выбор периода + фильтры */}
        <div className="max-w-6xl mx-auto mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-gray-600">Период:</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 rounded-full border border-gray-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-green-deep text-sm"
            >
              {availablePeriods.map(p => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyDebtors}
                onChange={(e) => setOnlyDebtors(e.target.checked)}
                className="rounded border-gray-300 text-green-deep focus:ring-green-deep"
              />
              Только должники
            </label>
          </div>
        </div>

        {/* Остальное без изменений */}
        <div className="max-w-6xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex gap-2">
            <button ... >Электроэнергия</button>
            <button ... >Взносы</button>
          </div>
          <div className="flex gap-2">
            {activeTable === 'electricity' ? (
              <a href={`/almaz-snt/uploads/payments/electricity-${selectedPeriod}.xls`} ...>Скачать Excel</a>
            ) : (
              <a href={`/almaz-snt/uploads/payments/contributions-${selectedPeriod}.xls`} ...>Скачать Excel</a>
            )}
          </div>
        </div>
        {/* Поиск */}
        <div className="max-w-6xl mx-auto mb-4">
          <input ... />
        </div>
        {/* Таблица */}
        <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl p-4 md:p-6 shadow-lg border border-white/30 overflow-x-auto">
          {/* таблица как раньше, но с данными filtered */}
        </div>
      </div>
      <footer ... />
    </div>
  )
}
