import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

const documents = [
  {
    title: 'Устав СНТ «Алмаз»',
    description: 'Актуальная редакция устава товарищества.',
    icon: '📄',
    file: '#',
  },
  {
    title: 'Приходно-расходная смета на 2026 год',
    description: 'Утверждена общим собранием.',
    icon: '📊',
    file: '#',
  },
  {
    title: 'Протокол собрания от 15.03.2026',
    description: 'Итоги весеннего собрания.',
    icon: '📝',
    file: '#',
  },
  {
    title: 'Квитанция на оплату взносов',
    description: 'Бланк для оплаты членских взносов.',
    icon: '🧾',
    file: '#',
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

        <div className="max-w-3xl space-y-4">
          {documents.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-3xl">{doc.icon}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-dark">{doc.title}</h3>
                <p className="text-sm text-gray-500">{doc.description}</p>
              </div>
              <a
                href={doc.file}
                className="px-4 py-2 rounded-full bg-green-deep text-white text-sm font-medium hover:bg-[#12392e] transition-colors"
                download
              >
                Скачать
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
