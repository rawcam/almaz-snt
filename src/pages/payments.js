// src/pages/payments.js
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'

export default function Payments() {
  const [activeTable, setActiveTable] = useState('electricity')
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('plot')
  const [order, setOrder] = useState('asc')
  const [electricityData, setElectricityData] = useState([])
  const [contributionsDetailData, setContributionsDetailData] = useState([])

  useEffect(() => {
    fetch('/almaz-snt/data/payments/electricity-2026-04-27.json')
      .then(res => res.json())
      .then(json => setElectricityData(json))
    fetch('/almaz-snt/data/payments/contributions-detail-2026-04-27.json')
      .then(res => res.json())
      .then(json => setContributionsDetailData(json))
  }, [])

  const currentData = activeTable === 'electricity' ? electricityData : contributionsDetailData

  const filtered = useMemo(() => {
    let result = [...currentData]
    if (search) {
      result = result.filter(item =>
        item.plot.toString().includes(search)
      )
    }
    if (sortBy) {
      result.sort((a, b) => {
        const valA = a[sortBy] ?? 0
        const valB = b[sortBy] ?? 0
        if (typeof valA === 'string') return order === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA)
        return order === 'asc' ? valA - valB : valB - valA
      })
    }
    return result
  }, [currentData, search, sortBy, order])

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
            Ведомости
          </h1>
          <p className="text-gray-500 mt-2">по состоянию на 27 апреля 2026 г.</p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTable('electricity')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTable === 'electricity'
                  ? 'bg-green-deep text-white shadow-sm'
                  : 'bg-white/70 text-gray-600 hover:bg-white/90'
              }`}
            >
              Электроэнергия
            </button>
            <button
              onClick={() => setActiveTable('contributions')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTable === 'contributions'
                  ? 'bg-green-deep text-white shadow-sm'
                  : 'bg-white/70 text-gray-600 hover:bg-white/90'
              }`}
            >
              Взносы
            </button>
          </div>
          <div className="flex gap-2">
            {activeTable === 'electricity' ? (
              <a
                href="/almaz-snt/uploads/payments/electricity-2026-04-27.xls"
                className="inline-flex items-center gap-1 px-4 py-2 bg-white/70 rounded-full text-sm font-medium text-green-deep hover:bg-white/90 transition-colors shadow-sm"
                download
              >
                <i className="fa-solid fa-file-excel"></i> Скачать Excel
              </a>
            ) : (
              <a
                href="/almaz-snt/uploads/payments/contributions-2026-04-27.xls"
                className="inline-flex items-center gap-1 px-4 py-2 bg-white/70 rounded-full text-sm font-medium text-green-deep hover:bg-white/90 transition-colors shadow-sm"
                download
              >
                <i className="fa-solid fa-file-excel"></i> Скачать Excel
              </a>
            )}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-4">
          <input
            type="text"
            placeholder="Поиск по номеру участка..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-green-deep font-sans"
          />
        </div>

        <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl p-4 md:p-6 shadow-lg border border-white/30 overflow-x-auto">
          {activeTable === 'electricity' ? (
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="py-3 px-3 font-semibold text-dark cursor-pointer" onClick={() => handleSort('plot')}>
                    Уч. {sortBy === 'plot' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('readingStart')}>
                    Показания на начало {sortBy === 'readingStart' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('readingEnd')}>
                    На конец {sortBy === 'readingEnd' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('consumption')}>
                    Расход {sortBy === 'consumption' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('debtStart')}>
                    Долг на начало {sortBy === 'debtStart' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('overpaymentStart')}>
                    Переплата на начало {sortBy === 'overpaymentStart' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('charged')}>
                    Начислено {sortBy === 'charged' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('paid')}>
                    Оплачено {sortBy === 'paid' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('debtEnd')}>
                    Долг на конец {sortBy === 'debtEnd' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('overpaymentEnd')}>
                    Переплата на конец {sortBy === 'overpaymentEnd' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item, idx) => (
                  <tr key={item.plot} className={`border-b border-gray-200 hover:bg-white/60 transition-colors ${idx % 2 === 0 ? 'bg-white/30' : ''}`}>
                    <td className="py-2 px-3 font-medium border-r border-gray-200 text-left">{item.plot}</td>
                    <td className="py-2 px-3 border-r border-gray-200 text-right">{formatNumber(item.readingStart)}</td>
                    <td className="py-2 px-3 border-r border-gray-200 text-right">{formatNumber(item.readingEnd)}</td>
                    <td className="py-2 px-3 border-r border-gray-200 text-right">{formatNumber(item.consumption)}</td>
                    <td className="py-2 px-3 border-r border-gray-200 text-right">{formatMoney(item.debtStart)}</td>
                    <td className="py-2 px-3 border-r border-gray-200 text-right">{formatMoney(item.overpaymentStart)}</td>
                    <td className="py-2 px-3 border-r border-gray-200 text-right">{formatMoney(item.charged)}</td>
                    <td className="py-2 px-3 border-r border-gray-200 text-right">{formatMoney(item.paid)}</td>
                    <td className={`py-2 px-3 border-r border-gray-200 text-right ${item.debtEnd > 0 ? 'text-red-500 font-medium' : 'text-gray-500'}`}>
                      {formatMoney(item.debtEnd)}
                    </td>
                    <td className={`py-2 px-3 text-right ${item.overpaymentEnd > 0 ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                      {formatMoney(item.overpaymentEnd)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="py-3 px-3 font-semibold text-dark cursor-pointer" onClick={() => handleSort('plot')}>
                    Уч. {sortBy === 'plot' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('debtMembership')}>
                    Долг по членским взносам {sortBy === 'debtMembership' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('overMembership')}>
                    Переплата по членским {sortBy === 'overMembership' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('debtTarget')}>
                    Долг по целевым взносам {sortBy === 'debtTarget' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('overTarget')}>
                    Переплата по целевым {sortBy === 'overTarget' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('debtElectricity')}>
                    Долг за электроэнергию {sortBy === 'debtElectricity' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('overElectricity')}>
                    Переплата за электроэнергию {sortBy === 'overElectricity' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('totalDebt')}>
                    Общий долг {sortBy === 'totalDebt' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="py-3 px-3 cursor-pointer" onClick={() => handleSort('totalOverpayment')}>
                    Общая переплата {sortBy === 'totalOverpayment' && (order === 'asc' ? '↑' : '↓')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item, idx) => (
                  <tr key={item.plot} className={`border-b border-gray-200 hover:bg-white/60 transition-colors ${idx % 2 === 0 ? 'bg-white/30' : ''}`}>
                    <td className="py-2 px-3 font-medium border-r border-gray-200 text-left">{item.plot}</td>
                    <td className={`py-2 px-3 border-r border-gray-200 text-right ${item.debtMembership > 0 ? 'text-red-500 font-medium' : 'text-gray-500'}`}>
                      {formatMoney(item.debtMembership)}
                    </td>
                    <td className={`py-2 px-3 border-r border-gray-200 text-right ${item.overMembership > 0 ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                      {formatMoney(item.overMembership)}
                    </td>
                    <td className={`py-2 px-3 border-r border-gray-200 text-right ${item.debtTarget > 0 ? 'text-red-500 font-medium' : 'text-gray-500'}`}>
                      {formatMoney(item.debtTarget)}
                    </td>
                    <td className={`py-2 px-3 border-r border-gray-200 text-right ${item.overTarget > 0 ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                      {formatMoney(item.overTarget)}
                    </td>
                    <td className={`py-2 px-3 border-r border-gray-200 text-right ${item.debtElectricity > 0 ? 'text-red-500 font-medium' : 'text-gray-500'}`}>
                      {formatMoney(item.debtElectricity)}
                    </td>
                    <td className={`py-2 px-3 border-r border-gray-200 text-right ${item.overElectricity > 0 ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                      {formatMoney(item.overElectricity)}
                    </td>
                    <td className={`py-2 px-3 border-r border-gray-200 text-right ${item.totalDebt > 0 ? 'text-red-500 font-medium' : 'text-gray-500'}`}>
                      {formatMoney(item.totalDebt)}
                    </td>
                    <td className={`py-2 px-3 text-right ${item.totalOverpayment > 0 ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                      {formatMoney(item.totalOverpayment)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-10"
        >
          Данные обновляются ежемесячно. Для загрузки новых ведомостей воспользуйтесь файловым менеджером в админ-панели.
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
