// src/components/NewsCard.jsx
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NewsCard({ tag, title, date, excerpt, link = '#' }) {
  return (
    <motion.div
      whileHover={{ y: -2, boxShadow: '0 12px 24px rgba(0,0,0,0.06)', borderColor: 'rgba(201,169,110,0.4)' }}
      className="bg-white border border-gray-100 rounded-2xl shadow-sm transition-all overflow-hidden"
    >
      <Link href={link} className="flex items-center gap-4 p-4 md:p-5 h-full">
        {/* Иконка / аватар */}
        <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-2xl text-gold">
          <i className="fa-solid fa-newspaper"></i>
        </div>

        {/* Текст */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">{tag}</span>
            <span className="text-xs text-gray-400">{date}</span>
          </div>
          <h3 className="font-semibold text-dark text-base md:text-lg truncate">
            {title}
          </h3>
          <div className="relative mt-1 max-h-[2.4rem] overflow-hidden">
            <p className="text-sm text-gray-500 leading-snug">{excerpt}</p>
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Стрелка */}
        <div className="flex-shrink-0 text-gold/60 text-lg">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </Link>
    </motion.div>
  )
}
