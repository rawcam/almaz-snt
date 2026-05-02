// src/pages/articles/rules.js
import Navbar from '../../components/Navbar'
import AnimatedBackground from '../../components/AnimatedBackground'
import { motion } from 'framer-motion'
import Link from 'next/link'

const articles = [
  {
    title: 'Режим въезда транспорта и парковки',
    link: '/articles/rules/transport',
    description: 'Правила проезда, пропускной режим, допустимая скорость и штрафные санкции.',
  },
  {
    title: 'Уход за ливневой канализацией',
    link: '/articles/rules/drainage',
    description: 'Обязанности садоводов, нормы содержания канав и труб, ответственность за подтопление.',
  },
  {
    title: 'Строительные нормы: заборы, хозпостройки',
    link: '/articles/rules/buildings',
    description: 'Требования к материалам, высоте, расположению построек и согласованию строительства.',
  },
  {
    title: 'Порядок проведения собраний',
    link: '/articles/rules/meetings',
    description: 'Уведомление, кворум, регламент, голосование и оформление протоколов.',
  },
]

export default function Rules() {
  return (
    <div className="min-h-screen bg-almond">
      <AnimatedBackground opacity={0.2} />
      <Navbar />
      <div className="container mx-auto px-4 py-20 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
            Правила СНТ
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-12 text-dark">
            Правила и регламенты
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-sm border border-white/50 hover:shadow-md transition-all"
            >
              <Link href={article.link} className="block">
                <h3 className="text-xl font-semibold text-dark mb-2 hover:text-green-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm">{article.description}</p>
                <span className="inline-block mt-4 text-green-deep font-medium text-sm">
                  Читать статью →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      <footer className="bg-[#0f1a15] text-gray-400 py-12 mt-20 relative z-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white text-lg font-semibold">СНТ «Алмаз»</h4>
            <p className="mt-2">Московская обл., Ступинский р-н, д. Леньково.</p>
          </div>
          <div>
            <h5 className="text-white font-semibold">Навигация</h5>
            <ul className="mt-2 space-y-1">
              <li><a href="/news" className="hover:text-gold">Новости</a></li>
              <li><a href="/docs" className="hover:text-gold">Документы</a></li>
              <li><a href="/payments" className="hover:text-gold">Ведомости</a></li>
              <li><a href="/contacts" className="hover:text-gold">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold">Контакты</h5>
            <p className="mt-2">cnt-almaz@yandex.ru<br />+7 (496) 123-45-67</p>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          © 2026 СНТ «Алмаз». Все права защищены.
        </div>
      </footer>
    </div>
  )
}
