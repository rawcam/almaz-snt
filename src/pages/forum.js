import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

const topics = [
  {
    category: 'Общие вопросы',
    title: 'График включения воды',
    replies: 12,
    lastPost: '2 часа назад',
  },
  {
    category: 'Предложения',
    title: 'Обустройство детской площадки',
    replies: 8,
    lastPost: 'вчера',
  },
  {
    category: 'Объявления',
    title: 'Продам саженцы яблонь',
    replies: 3,
    lastPost: '3 дня назад',
  },
]

export default function Forum() {
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
            Общение
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-4 text-dark">
            Форум садоводов
          </h1>
          <p className="text-gray-500 mb-12 max-w-xl">
            Задавайте вопросы, делитесь опытом и предлагайте идеи.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-deep text-white rounded-full hover:bg-[#12392e] transition-colors shadow-lg"
          >
            <span>+</span> Новая тема
          </a>
        </motion.div>

        <div className="mt-10 space-y-3 max-w-3xl">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex-1">
                <span className="text-xs font-semibold text-gold uppercase">
                  {topic.category}
                </span>
                <h3 className="font-semibold text-dark mt-1">{topic.title}</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Последнее сообщение: {topic.lastPost}
                </p>
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium">{topic.replies}</span> ответов
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
