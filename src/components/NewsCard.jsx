// src/components/NewsCard.jsx
import { motion } from 'framer-motion'

export default function NewsCard({ image, tag, title, description, link = '#' }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: '0 15px 30px rgba(0,0,0,0.08)',
        borderColor: 'rgba(201, 169, 110, 0.8)'
      }}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-gold">
          {tag}
        </span>
        <h3 className="text-xl font-semibold mt-2 mb-1">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
        <a href={link} className="inline-block mt-4 text-gold font-medium hover:underline">
          Подробнее →
        </a>
      </div>
    </motion.div>
  )
}
