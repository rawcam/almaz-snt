import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

export default function Contacts() {
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
            Связь с правлением
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-12 text-dark">
            Контакты
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-dark flex items-center gap-3">
                <i className="fa-solid fa-location-dot text-green-deep"></i>
                Адрес
              </h3>
              <p className="text-gray-500 mt-2">
                Московская обл., Ступинский район, д. Леньково, СНТ «Алмаз»
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-dark flex items-center gap-3">
                <i className="fa-solid fa-phone text-green-deep"></i>
                Телефон
              </h3>
              <p className="text-gray-500 mt-2">
                +7 (496) 123-45-67<br />
                <span className="text-xs">Сб, Вс с 10:00 до 16:00</span>
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-dark flex items-center gap-3">
                <i className="fa-solid fa-envelope text-green-deep"></i>
                Электронная почта
              </h3>
              <p className="text-gray-500 mt-2">cnt-almaz@yandex.ru</p>
            </div>
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-dark flex items-center gap-3">
                <i className="fa-solid fa-building-columns text-green-deep"></i>
                Реквизиты
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                ИНН: 5045028020<br />
                Р/с: 40703810000000000000<br />
                БИК: 044525225
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-sm h-[450px]"
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.9858%2C55.1874&z=15&pt=37.9858,55.1874,pm2rdl&l=map"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
              title="Карта СНТ Алмаз"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
