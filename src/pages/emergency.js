// src/pages/emergency.js
import Navbar from '../components/Navbar'
import AnimatedBackgroundLight from '../components/AnimatedBackgroundLight'
import { motion } from 'framer-motion'
import Link from 'next/link'

const criticalContacts = [
  {
    name: 'Пожарная часть № 269 (п. Михнево)',
    address: 'п. Михнево, ул. Московская, 21',
    phone: '+7 (496) 646-62-65',
    hours: 'Круглосуточно',
    time: '~ 10-15 мин (8 км)',
    icon: 'fa-solid fa-fire-extinguisher',
    color: 'text-red-500',
  },
  {
    name: 'Михневское отделение полиции',
    address: 'п. Михнево, ул. Советская, 10',
    phone: '+7 (496) 646-62-02',
    hours: 'Круглосуточно (дежурная часть)',
    time: '~ 10-15 мин (8 км)',
    icon: 'fa-solid fa-shield-haltered',
    color: 'text-blue-500',
  },
]

const medicalContacts = [
  {
    name: 'Травмпункт СЦРКБ (г. Ступино)',
    address: 'г. Ступино, ул. Чайковского, вл. 7, корп. 1',
    phone: '+7 (496) 642-57-70',
    hours: 'Круглосуточно',
    time: '~ 30-40 мин (18 км)',
    icon: 'fa-solid fa-briefcase-medical',
    color: 'text-red-500',
  },
  {
    name: 'Травмпункт Домодедовской ЦГБ',
    address: 'г. Домодедово, мкр. Центральный, ул. Пирогова, д. 9',
    phone: '8 (496) 793-21-51',
    hours: 'Круглосуточно',
    time: '~ 40-50 мин (35 км)',
    icon: 'fa-solid fa-briefcase-medical',
    color: 'text-red-500',
  },
  {
    name: 'Взрослая поликлиника (г. Ступино)',
    address: 'г. Ступино, ул. Чайковского, вл. 7, корп. 2',
    phone: '+7 (496) 642-64-64 (регистратура)',
    hours: 'Пн-Пт 08:00-20:00, Сб 08:00-14:00',
    time: '~ 30-40 мин (18 км)',
    icon: 'fa-solid fa-stethoscope',
    color: 'text-blue-500',
  },
  {
    name: 'Детская поликлиника (г. Ступино)',
    address: 'г. Ступино, ул. Чайковского, д. 20/23',
    phone: '+7 (496) 642-66-52',
    hours: 'Пн-Пт 08:00-20:00, Сб 09:00-14:00',
    time: '~ 30-40 мин (18 км)',
    icon: 'fa-solid fa-child',
    color: 'text-cyan-500',
  },
]

const generalContacts = [
  {
    name: 'Россети Московский регион',
    address: 'г. Ступино, ул. Андропова, д. 54',
    phone: '8 (800) 220-02-20 (Светлая линия)',
    hours: 'Пн-Чт 08:00-17:00, Пт 08:00-16:00',
    time: '~ 30-40 мин (18 км)',
    icon: 'fa-solid fa-bolt',
    color: 'text-yellow-500',
  },
  {
    name: 'МЧС Ступинский отдел',
    address: 'г. Ступино, ул. Пристанционная, д. 27',
    phone: '+7 (496) 644-32-83',
    hours: 'Пн-Чт 09:00-18:00, Пт 09:00-16:45',
    time: '~ 30-40 мин (18 км)',
    icon: 'fa-solid fa-building-shield',
    color: 'text-green-500',
  },
  {
    name: 'Мособлэнерго (Ступино)',
    address: 'г. Ступино, ул. Андропова, д. 54',
    phone: '8 (495) 99-500-99 (горячая линия)',
    hours: 'Пн-Чт 08:00-17:00, Пт 08:00-16:00',
    time: '~ 30-40 мин (18 км)',
    icon: 'fa-solid fa-house-signal',
    color: 'text-cyan-500',
  },
]

const vetContacts = [
  {
    name: 'Михневский Ветеринарный Участок',
    address: 'пос. Михнево, ул. Московская, 17',
    phone: '+7 (496) 646-68-39',
    hours: 'Пн, Ср, Пт 08:00-17:00',
    time: '~ 10-15 мин (8 км)',
    icon: 'fa-solid fa-paw',
    color: 'text-green-500',
  },
  {
    name: 'Ветеринарный кабинет «Доктор Авдеев»',
    address: 'пгт Михнево, ул. Ленина, 15, цокольный этаж',
    phone: '+7 916 006-47-41',
    hours: 'Пн-Вс 09:00-21:00',
    time: '~ 10-15 мин (8 км)',
    icon: 'fa-solid fa-paw',
    color: 'text-green-500',
  },
  {
    name: 'Гос-вет (м. Домодедовская)',
    address: 'г. Москва, ул. Генерала Белова, д. 28',
    phone: '+7 (495) 943-35-59',
    hours: 'Круглосуточно',
    time: '~ 40-50 мин (35 км)',
    icon: 'fa-solid fa-paw',
    color: 'text-green-500',
  },
  {
    name: 'Ветеринарный центр «РасВет»',
    address: 'г. Домодедово, Каширское шоссе, 112/22',
    phone: '+7 (495) 120-48-84',
    hours: 'Круглосуточно',
    time: '~ 40-50 мин (35 км)',
    icon: 'fa-solid fa-paw',
    color: 'text-green-500',
  },
]

const safetyArticles = [
  {
    title: 'Скорая помощь: вызов и первая помощь',
    link: '/emergency/ambulance',
    description: 'Алгоритм вызова, что делать до приезда врачей.',
  },
  {
    title: 'Пожарная безопасность и действия при пожаре',
    link: '/emergency/fire',
    description: 'Профилактика, эвакуация, использование огнетушителя.',
  },
  {
    title: 'Утечка газа: экстренные меры',
    link: '/emergency/gas',
    description: 'Как распознать и что делать при запахе газа.',
  },
  {
    title: 'Укус клеща: алгоритм действий и профилактика',
    link: '/emergency/tick',
    description: 'Правильное удаление, куда везти на анализ.',
  },
]

export default function EmergencyPage() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackgroundLight opacity={0.5} />
      <Navbar />
      <div className="container mx-auto px-4 py-20 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
            Экстренные службы
          </span>
          <h1 className="text-5xl md:text-6xl font-semibold mt-4 text-dark">
            Помощь рядом
          </h1>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Адреса, телефоны и примерное время в пути от СНТ «Алмаз» (д. Леньково)
          </p>
        </motion.div>

        {[{ title: '🚨 В радиусе 10 км (экстренные службы)', contacts: criticalContacts, border: 'border-red-200' },
          { title: '🏥 В радиусе 20 км (медицинская помощь)', contacts: medicalContacts, border: 'border-blue-200' },
          { title: '🏛️ В радиусе 50 км (общие вопросы)', contacts: generalContacts, border: 'border-green-200' },
          { title: '🐾 Ветеринарные клиники', contacts: vetContacts, border: 'border-amber-200' }
        ].map((section, idx) => (
          <section key={idx} className="mb-10">
            <h2 className="text-2xl font-semibold text-dark mb-6">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.contacts.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`bg-white/70 backdrop-blur-xl rounded-2xl p-5 border ${section.border} shadow-sm hover:shadow-md transition-all`}
                >
                  <div className="flex items-start gap-3">
                    <i className={`${item.icon} ${item.color} text-2xl mt-1`}></i>
                    <div>
                      <h3 className="font-semibold text-dark text-lg">{item.name}</h3>
                      <p className="text-gray-500 text-sm">{item.address}</p>
                      <p className="text-green-deep font-medium mt-1">{item.phone}</p>
                      <p className="text-gray-400 text-xs">{item.hours}</p>
                      <span className="inline-block mt-2 bg-green-deep/10 text-green-deep text-xs font-medium px-3 py-1 rounded-full">
                        {item.time}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-dark mb-6">📘 Инструкции по безопасности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {safetyArticles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-sm border border-white/50 hover:shadow-md transition-all"
              >
                <Link href={article.link} className="block">
                  <h3 className="font-semibold text-dark text-lg mb-1 hover:text-green-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{article.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <p className="text-center text-gray-400 text-sm mt-10">
          * Время в пути указано приблизительно для легкового автомобиля. Данные на май 2026 г.
        </p>
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
