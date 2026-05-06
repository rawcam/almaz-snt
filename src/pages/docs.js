// src/pages/docs.js
import Navbar from '../components/Navbar'
import AnimatedBackgroundLight from '../components/AnimatedBackgroundLight'
import { motion } from 'framer-motion'
import { useState } from 'react'

const documents = [
  {
    id: 1,
    icon: 'fa-solid fa-file-pdf',
    title: 'Устав СНТ «Алмаз»',
    description: 'Актуальная редакция устава товарищества.',
    formats: {
      xlsx: '/almaz-snt/uploads/documents/ustav.xlsx',
      pdf: '/almaz-snt/uploads/documents/ustav.pdf',
    },
  },
  {
    id: 2,
    icon: 'fa-solid fa-chart-simple',
    title: 'Приходно-расходная смета на 2026 год',
    description: 'Утверждена общим собранием.',
    formats: {
      xlsx: '/almaz-snt/uploads/documents/smeta-2026.xlsx',
      pdf: '/almaz-snt/uploads/documents/smeta-2026.pdf',
    },
  },
  {
    id: 3,
    icon: 'fa-solid fa-file-signature',
    title: 'Протокол собрания от 15.03.2026',
    description: 'Итоги весеннего собрания.',
    formats: {
      xlsx: '/almaz-snt/uploads/documents/protocol-2026-03-15.xlsx',
      pdf: '/almaz-snt/uploads/documents/protocol-2026-03-15.pdf',
    },
  },
  {
    id: 4,
    icon: 'fa-solid fa-receipt',
    title: 'Квитанция на оплату взносов',
    description: 'Бланк для оплаты членских взносов.',
    formats: {
      xlsx: '/almaz-snt/uploads/documents/kvitancia.xlsx',
      pdf: '/almaz-snt/uploads/documents/kvitancia.pdf',
    },
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
          {documents.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl text-green-deep shrink-0">
                  <i className={doc.icon}></i>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-dark text-lg md:text-xl mb-1">
                    {doc.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{doc.description}</p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={doc.formats.xlsx}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-deep text-white text-sm font-medium hover:bg-[#12392e] transition-colors shadow-sm"
                      download
                    >
                      <i className="fa-solid fa-file-excel"></i>
                      Excel
                    </a>
                    <a
                      href={doc.formats.pdf}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold text-green-deep text-sm font-medium hover:bg-gold hover:text-white transition-colors"
                      download
                    >
                      <i className="fa-solid fa-file-pdf"></i>
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-10"
        >
          Все документы доступны в двух форматах. Если у вас возникли трудности с открытием, обратитесь в правление.
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
