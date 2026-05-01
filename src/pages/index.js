import Navbar from '../components/Navbar'
import AnimatedBackground from '../components/AnimatedBackground'
import GardenerHub from '../components/GardenerHub'
import NewsCard from '../components/NewsCard'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-almond">
      <Navbar />

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <AnimatedBackground />
        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/30"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
              Ступинский район, деревня Леньково
            </span>
            <h1 className="text-6xl md:text-7xl font-medium mt-4 leading-tight text-dark">
              АЛМАЗ <br />в тишине садов
            </h1>
            <p className="text-xl text-gray-600 mt-6 max-w-lg">
              Частное садовое товарищество с 2001 года. Комфорт, безопасность и
              прозрачность — как драгоценность.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="/almaz-snt/forum"
                className="inline-block px-8 py-3 rounded-full font-medium transition-all border border-gold text-green-deep hover:bg-gold hover:text-white"
              >
                Сообщество
              </a>
              <a
                href="/almaz-snt/docs"
                className="inline-block px-8 py-3 rounded-full font-medium transition-all bg-green-deep text-white hover:bg-[#12392e] shadow-lg"
              >
                Документы
              </a>
            </div>
          </motion.div>
        </div>
      </section>

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
            <p className="mt-2">
              Московская обл., Ступинский р-н, д. Леньково.
            </p>
          </div>
          <div>
            <h5 className="text-white font-semibold">Навигация</h5>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="/almaz-snt/news" className="hover:text-gold">
                  Новости
                </a>
              </li>
              <li>
                <a href="/almaz-snt/docs" className="hover:text-gold">
                  Документы
                </a>
              </li>
              <li>
                <a href="/almaz-snt/forum" className="hover:text-gold">
                  Сообщество
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold">Контакты</h5>
            <p className="mt-2">
              cnt-almaz@yandex.ru
              <br />
              +7 (496) 123-45-67
            </p>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          © 2026 СНТ «Алмаз». Все права защищены.
        </div>
      </footer>
    </div>
  )
}
