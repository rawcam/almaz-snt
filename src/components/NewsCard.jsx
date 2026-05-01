import { motion } from 'framer-motion'

export default function NewsCard({ image, tag, title, description, link = '#' }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
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
