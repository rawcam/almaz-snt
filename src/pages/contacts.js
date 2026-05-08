// src/pages/contacts.js
import Navbar from '../components/Navbar'
import AnimatedBackgroundLight from '../components/AnimatedBackgroundLight'
import { motion } from 'framer-motion'

const responsiblePersons = [
  {
    role: 'Председатель СНТ',
    name: 'Андрей Евгеньевич',
    phone: '+7 (991) 635-10-80',
    icon: 'fa-solid fa-user-tie',
  },
  {
    role: 'Бухгалтер',
    name: 'Елена',
    phone: '+7 (906) 039-79-28',
    icon: 'fa-solid fa-calculator',
  },
  {
    role: 'Электрик',
    name: 'Сергей',
    phone: '+7 (926) 753-26-33',
    icon: 'fa-solid fa-bolt',
  },
  {
    role: 'Освещение СНТ',
    name: 'Алексей Владимирович',
    phone: '+7 (905) 592-56-28',
    icon: 'fa-solid fa-lightbulb',
  },
  {
    role: 'Уборка снега',
    name: 'Сергей Борисович',
    phone: '+7 (903) 718-98-73',
    icon: 'fa-solid fa-snowplow',
  },
  {
    role: 'Внесение номеров, подключение пультов ворот',
    name: 'Дмитрий Петрович',
    phone: '+7 (916) 420-73-22',
    icon: 'fa-solid fa-key',
  },
  {
    role: 'Сторож',
    name: 'Амир',
    phone: '+7 (915) 444-00-19',
    icon: 'fa-solid fa-shield-haltered',
  },
]

export default function Contacts() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackgroundLight opacity={0.5} />
      <Navbar />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
            Связь с правлением
          </span>
          <h1 className="text-5xl md:text-6xl font-semibold mt-4 mb-12 text-dark">
            Контакты
          </h1>
        </motion.div>

        {/* Основная сетка: карта слева, контакты справа */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Левая колонка: карта и реквизиты */}
          <div className="space-y-6">
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
                <i className="fa-solid fa-envelope text-green-deep"></i>
                Электронная почта
              </h3>
              <p className="text-gray-500 mt-2">cntalmaz25@yandex.ru</p>
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

            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-dark flex items-center gap-3">
                <i className="fa-solid fa-clock text-green-deep"></i>
                Часы приёма
              </h3>
              <p className="text-gray-500 mt-2">
                Суббота с 11:00 до 14:00<br />
                <span className="text-xs">Просим обращаться в указанное время</span>
              </p>
            </div>
          </div>

          {/* Правая колонка: ответственные лица в столбик */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-dark mb-2 flex items-center gap-2">
              <i className="fa-solid fa-address-book text-green-deep"></i>
              Ответственные лица
            </h2>
            {responsiblePersons.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 shadow-sm flex items-center gap-4"
              >
                <div className="text-2xl text-green-deep w-10 h-10 flex items-center justify-center">
                  <i className={person.icon}></i>
                </div>
                <div>
                  <p className="font-semibold text-dark">{person.role}</p>
                  <p className="text-sm text-gray-500">
                    {person.name} &mdash;{' '}
                    <a href={`tel:${person.phone.replace(/\D/g, '')}`} className="text-green-deep hover:underline">
                      {person.phone}
                    </a>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
            <p className="mt-2">cnt-almaz@yandex.ru<br />+7 (991) 635-10-80</p>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          © 2026 СНТ «Алмаз». Все права защищены.
        </div>
      </footer>
    </div>
  )
}
