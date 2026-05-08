// src/pages/docs.js
import Navbar from '../components/Navbar'
import AnimatedBackgroundLight from '../components/AnimatedBackgroundLight'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const documents = [
  {
    id: 1,
    icon: 'fa-solid fa-file-signature',
    title: 'Устав СНТ «Алмаз»',
    description: 'Актуальная редакция устава товарищества.',
    link: '/docs/ustav',
  },
  {
    id: 2,
    icon: 'fa-solid fa-file-signature',
    title: 'Протокол собрания от 23.08.2025',
    description: 'Итоги отчетно-выборного собрания.',
    link: '/docs/protocol-2025-08-23',
  },
]

export default function Docs() {
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
            Прозрачность
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold mt-4 mb-6 text-dark">
            Документы
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
          ? 'grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'
          : 'flex flex-col gap-4 max-w-4xl mx-auto'
        }>
          {documents && documents.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all"
            >
              <Link href={doc.link} className="flex items-start gap-4 group">
                <div className="text-3xl text-green-deep shrink-0">
                  <i className={doc.icon}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-dark text-lg md:text-xl mb-1 group-hover:text-green-600 transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{doc.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-green-deep group-hover:text-green-900 transition-colors">
                    Читать
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </span>
                </div>
              </Link>
            </motion.div>
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
