// src/pages/news.js
import Navbar from '../components/Navbar'
import AnimatedBackgroundLight from '../components/AnimatedBackgroundLight'
import NewsCard from '../components/NewsCard'
import { motion } from 'framer-motion'
import { useState } from 'react'

const newsItems = [
  {
    tag: 'Событие',
    date: '01 мая 2026',
    title: 'Открытие летнего сезона 2026',
    excerpt: 'Дорогие садоводы! Поздравляем с началом дачного сезона. Пусть он будет тёплым и урожайным. Правление подготовило подарки…',
    link: '/news/season-opening',
  },
  {
    tag: 'Важно',
    date: '25 апреля 2026',
    title: 'Общее собрание 15 мая',
    excerpt: 'Утверждение сметы на 2026 год и выборы правления. Явка обязательна. Повестка и проекты документов доступны в разделе «Документы».',
    link: '/news/meeting-15-may',
  },
  {
    tag: 'Инфраструктура',
    date: '10 апреля 2026',
    title: 'График вывоза мусора',
    excerpt: 'С 20 апреля машина будет приезжать по вторникам и пятницам. Контейнеры установлены у центральных ворот — просьба соблюдать чистоту.',
    link: '/news/garbage-schedule',
  },
]

export default function News() {
  const [view, setView] = useState('list')

  return (
    <div className="min-h-screen relative">
      <AnimatedBackgroundLight opacity={0.5} />
      <Navbar />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
            Будьте в курсе
          </span>
          {/* Уменьшен размер, убран засечный шрифт */}
          <h1 className="text-3xl md:text-4xl font-semibold mt-4 mb-6 text-dark">
            Новости товарищества
          </h1>
        </motion.div>

        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setView('list')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              view === 'list'
                ? 'bg-green-deep text-white shadow-sm'
                : 'bg-white/70 text-gray-600 hover:bg-white/90'
            }`}
          >
            <i className="fa-solid fa-list mr-1"></i> Список
          </button>
          <button
            onClick={() => setView('grid')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              view === 'grid'
                ? 'bg-green-deep text-white shadow-sm'
                : 'bg-white/70 text-gray-600 hover:bg-white/90'
            }`}
          >
            <i className="fa-solid fa-grid-2 mr-1"></i> Плитка
          </button>
        </div>

        <div className={view === 'grid'
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          : 'flex flex-col gap-4'
        }>
          {newsItems.map((item, i) => (
            <NewsCard key={i} {...item} />
          ))}
        </div>
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
