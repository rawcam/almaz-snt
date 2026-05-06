// src/pages/news.js
import Navbar from '../components/Navbar'
import AnimatedBackgroundLight from '../components/AnimatedBackgroundLight'
import { motion } from 'framer-motion'

const newsItems = [
  {
    date: '01 мая 2026',
    tag: 'Событие',
    title: 'Открытие летнего сезона',
    excerpt: 'С 5 мая включаем водопровод. Проверьте краны на участках.',
    image: '/almaz-snt/assets/news1.jpg',
  },
  {
    date: '25 апреля 2026',
    tag: 'Важно',
    title: 'Общее собрание 15 мая',
    excerpt: 'Утверждение сметы на 2026 год и выборы правления. Явка обязательна.',
    image: '/almaz-snt/assets/news2.jpg',
  },
  {
    date: '10 апреля 2026',
    tag: 'Инфраструктура',
    title: 'График вывоза мусора',
    excerpt: 'С 20 апреля машина приезжает по вторникам и пятницам.',
    image: '/almaz-snt/assets/news3.jpg',
  },
]

export default function News() {
  return (
    <div className="min-h-screen bg-almond relative">
      <AnimatedBackgroundLight opacity={0.5} />
      <Navbar />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
            Будьте в курсе
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-12 text-dark">
            Новости товарищества
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                    {item.tag}
                  </span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.excerpt}</p>
                <a
                  href="#"
                  className="inline-block mt-4 text-gold font-medium hover:underline text-sm"
                >
                  Читать полностью →
                </a>
              </div>
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
