import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'

export default function Rules() {
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
            Правила СНТ
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-8 text-dark">
            Правила въезда и парковки
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            На территории СНТ действует ограничение скорости 10 км/ч. Парковка разрешена только на
            специально отведённых площадках или на собственном участке. Шлагбаум открывается по
           的个人ным пропускам. Гостевой транспорт допускается только в сопровождении члена СНТ.
          </p>
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Ответственность</h2>
          <p className="text-gray-600 leading-relaxed">
            Нарушение правил может привести к административной ответственности и ограничению доступа.
            Ознакомьтесь с полным сводом в разделе «Документы».
          </p>
        </motion.article>
      </div>
    </div>
  )
}
