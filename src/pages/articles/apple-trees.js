import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'

export default function AppleTrees() {
  return (
    <div className="min-h-screen bg-almond">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
            Сад и огород
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-8 text-dark">
            Посадка яблонь, груш и вишни
          </h1>
          <img
            src="/almaz-snt/assets/articles/apple-orchard.jpg"
            alt="Яблоневый сад"
            className="rounded-2xl w-full object-cover h-64 md:h-96 mb-8 shadow-md"
          />
          <p className="text-gray-600 leading-relaxed mb-6">
            Весна — оптимальное время для посадки плодовых деревьев в средней полосе.
            Выбирайте солнечное место, подготовьте яму 60×60 см, внесите перегной и комплексные удобрения.
            Сажайте так, чтобы корневая шейка оставалась на уровне почвы.
            После посадки обильно полейте и замульчируйте приствольный круг.
          </p>
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Уход в первый год</h2>
          <p className="text-gray-600 leading-relaxed">
            Регулярный полив (раз в неделю), защита от вредителей и своевременная обрезка — залог будущего урожая.
            Подробную инструкцию можно найти в группе СНТ в Яндекс.Дзен (ссылка будет позже).
          </p>
        </motion.article>
      </div>
    </div>
  )
}
