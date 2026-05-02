// src/pages/articles/garden/seedlings.js
import Navbar from '../../../components/Navbar'
import AnimatedBackground from '../../../components/AnimatedBackground'
import { motion } from 'framer-motion'

export default function Seedlings() {
  return (
    <div className="min-h-screen bg-almond">
      <AnimatedBackground opacity={0.2} />
      <Navbar />
      <div className="container mx-auto px-4 py-20 relative z-10 max-w-4xl">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
            Сад и огород
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-8 text-dark">
            Сезон высадки рассады томатов и перцев
          </h1>
          
          <img
            src="/almaz-snt/assets/articles/seedlings.jpg"
            alt="Рассада томатов"
            className="rounded-2xl w-full object-cover h-64 md:h-96 mb-8 shadow-md"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Томаты и перцы — теплолюбивые культуры, которые в средней полосе выращивают 
            через рассаду. Сроки посева и высадки критически важны для получения хорошего урожая. 
            Ошибка даже на неделю может оставить вас без плодов.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Сроки посева</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Семена томатов для открытого грунта сеют в конце марта — начале апреля, 
            для теплиц — в середине марта. Перцы сеют на 2-3 недели раньше, 
            так как они развиваются медленнее: для открытого грунта — в начале марта, 
            для теплиц — в конце февраля. Оптимальная температура прорастания — +23…+25°C.
          </p>
          
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Закаливание рассады</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            За 10-14 дней до высадки рассаду начинают закаливать: выносят на балкон или веранду 
            сначала на 1-2 часа, затем постепенно увеличивают время. В последние дни 
            перед высадкой рассада может находиться на улице круглосуточно, 
            если температура не опускается ниже +10°C. Закалённые растения легче переносят 
            пересадку и быстрее приживаются.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Высадка в грунт</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Томаты и перцы высаживают в открытый грунт, когда минует угроза заморозков: 
            в Подмосковье это обычно конец мая — начало июня. Почва должна прогреться 
            до +15°C на глубине 10 см. Схема посадки: для томатов — 50×50 см, 
            для перцев — 40×40 см. В каждую лунку добавляют горсть перегноя и ложку золы.
            После высадки обильно поливают и мульчируют.
          </p>
          
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 mt-8 shadow-sm border border-white/50">
            <h3 className="text-lg font-semibold text-dark mb-2">Совет от правления</h3>
            <p className="text-gray-600">
              Для нашего климата выбирайте раннеспелые сорта: томаты — Сибирский скороспелый, 
              Белый налив; перцы — Винни-Пух, Здоровье. В холодное лето используйте 
              плёночные укрытия или спанбонд до середины июня.
            </p>
          </div>
        </motion.article>
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
