import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

const documents = [
  {
    id: 1,
    title: 'Устав СНТ «Алмаз»',
    description: 'Актуальная редакция устава товарищества.',
    icon: '📄',
    formats: {
      xlsx: '/almaz-snt/uploads/documents/ustav.xlsx',
      pdf: '/almaz-snt/uploads/documents/ustav.pdf',
    },
  },
  {
    id: 2,
    title: 'Приходно-расходная смета на 2026 год',
    description: 'Утверждена общим собранием.',
    icon: '📊',
    formats: {
      xlsx: '/almaz-snt/uploads/documents/smeta-2026.xlsx',
      pdf: '/almaz-snt/uploads/documents/smeta-2026.pdf',
    },
  },
  {
    id: 3,
    title: 'Протокол собрания от 15.03.2026',
    description: 'Итоги весеннего собрания.',
    icon: '📝',
    formats: {
      xlsx: '/almaz-snt/uploads/documents/protocol-2026-03-15.xlsx',
      pdf: '/almaz-snt/uploads/documents/protocol-2026-03-15.pdf',
    },
  },
  {
    id: 4,
    title: 'Квитанция на оплату взносов',
    description: 'Бланк для оплаты членских взносов.',
    icon: '🧾',
    formats: {
      xlsx: '/almaz-snt/uploads/documents/kvitancia.xlsx',
      pdf: '/almaz-snt/uploads/documents/kvitancia.pdf',
    },
  },
]

export default function Docs() {
  return (
    <div className="min-h-screen bg-almond">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
            Прозрачность
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-12 text-dark">
            Документы
          </h1>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
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
                <div className="text-3xl md:text-4xl shrink-0">{doc.icon}</div>

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
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM8 13h8v2H8v-2zm0 4h8v2H8v-2zm0-8h5v2H8V9z"/>
                      </svg>
                      Excel
                    </a>
                    <a
                      href={doc.formats.pdf}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold text-green-deep text-sm font-medium hover:bg-gold hover:text-white transition-colors"
                      download
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 7h-2v2h-2v-2H9V7h2V5h2v2h2v2zm-8 8h10v2H9v-2z"/>
                      </svg>
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
    </div>
  )
}
