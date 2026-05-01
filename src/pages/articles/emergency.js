import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'

export default function Emergency() {
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
            Экстренные службы
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-8 text-dark">
            Что делать при укусе клеща
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Если вы обнаружили присосавшегося клеща, не паникуйте. Аккуратно удалите его с помощью
            пинцета или нитки, стараясь не оторвать хоботок. Место укуса обработайте антисептиком.
            Поместите клеща в герметичную ёмкость и отвезите в лабораторию для анализа.
          </p>
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Куда обращаться</h2>
          <p className="text-gray-600 leading-relaxed">
            Ближайший травмпункт: г. Ступино, ул. Чайковского, 15. Телефон: +7 (496) 123‑45‑69.
            При повышении температуры срочно вызывайте скорую (112).
          </p>
        </motion.article>
      </div>
    </div>
  )
}
