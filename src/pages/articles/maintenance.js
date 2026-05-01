// src/pages/articles/maintenance.js
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'

export default function Maintenance() {
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
            Уход за участком
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-8 text-dark">
            Сезонные работы и благоустройство
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Рекомендации по уходу за бассейном, водопроводом, компостом и борьбе с сорняками.
          </p>
          <p className="text-gray-500 text-sm">Советы от опытных дачников и правления.</p>
        </motion.article>
      </div>
    </div>
  )
}
