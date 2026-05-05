// src/pages/index.js
import Navbar from '../components/Navbar'
import AnimatedBackground from '../components/AnimatedBackground'
import GardenerHub from '../components/GardenerHub'
import FinancialOverview from '../components/FinancialOverview'
import WeatherWidgets from '../components/WeatherWidgets'
import NewsCard from '../components/NewsCard'
import ButterflySVG from '../components/ButterflySVG'
import DaisySVG from '../components/DaisySVG'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-almond">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        <div className="container mx-auto px-4 relative z-10 py-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative max-w-xl bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center mx-auto"
          >
            {/* Бабочка в левом верхнем углу */}
            <motion.div
              className="absolute -top-6 -left-6"
              animate={{ y: [0, -8, 0], x: [0, 4, -2, 0], rotate: [0, 8, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ButterflySVG />
            </motion.div>

            {/* Ромашка в правом нижнем углу */}
            <motion.div
              className="absolute -bottom-4 -right-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <DaisySVG />
            </motion.div>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
              Ступинский район, деревня Леньково
            </span>
            <h1 className="text-5xl md:text-6xl font-medium mt-4 leading-tight text-dark">
              СНТ «АЛМАЗ»
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-md mx-auto">
              Добро пожаловать!
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <a href="/docs" className="inline-block px-6 py-2.5 rounded-full font-medium transition-all bg-green-deep text-white hover:bg-[#1b5e20] shadow-sm text-sm">
                Документы
              </a>
              <a href="/contacts" className="inline-block px-6 py-2.5 rounded-full font-medium transition-all border border-gold text-green-deep hover:bg-gold hover:text-white text-sm">
                Контакты
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <FinancialOverview />
      <WeatherWidgets />
      <GardenerHub />

      <section className="py-20 container mx-auto px-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
          Будьте в курсе
        </span>
        <h2 className="text-4xl font-medium mt-2 mb-12">Новости товарищества</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NewsCard
            image="/almaz-snt/assets/news1.jpg"
            tag="Событие"
            title="Открытие летнего сезона 2026"
            description="С 5 мая включаем водопровод. Проверьте краны на участках."
          />
          <NewsCard
            image="/almaz-snt/assets/news2.jpg"
            tag="Важно"
            title="Общее собрание 15 мая"
            description="Утверждение сметы на 2026 год и выборы правления. Явка обязательна."
          />
          <NewsCard
            image="/almaz-snt/assets/news3.jpg"
            tag="Инфраструктура"
            title="График вывоза мусора"
            description="С 20 апреля машина приезжает по вторникам и пятницам."
          />
        </div>
      </section>

      <footer className="bg-[#0f1a15] text-gray-400 py-12 mt-20">
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
