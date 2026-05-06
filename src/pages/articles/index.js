// src/pages/articles/index.js
import Navbar from '../../components/Navbar'
import AnimatedBackgroundLight from '../../components/AnimatedBackgroundLight'
import { motion } from 'framer-motion'
import Link from 'next/link'

const sections = [
  {
    icon: 'fa-solid fa-book-open',
    title: 'Сад и огород',
    link: '/articles/garden',
    description: 'Посадка, уход за газоном, рассада, защита от вредителей.',
  },
  {
    icon: 'fa-solid fa-file-contract',
    title: 'Правила СНТ',
    link: '/articles/rules',
    description: 'Режим въезда, строительные нормы, порядок собраний.',
  },
  {
    icon: 'fa-solid fa-phone-volume',
    title: 'Экстренные службы',
    link: '/emergency',
    description: 'Скорая, пожарная, газовая служба, укусы клеща.',
  },
  {
    icon: 'fa-solid fa-shop',
    title: 'Инфраструктура района',
    link: '/articles/infrastructure',
    description: 'Поставщики, магазины, интересные места.',
  },
  {
    icon: 'fa-solid fa-house-chimney',
    title: 'Уход за участком',
    link: '/articles/maintenance',
    description: 'Бассейн, водопровод, компост, борщевик.',
  },
  {
    icon: 'fa-solid fa-address-book',
    title: 'Контакты правления',
    link: '/articles/contacts-board',
    description: 'Телефоны председателя, бухгалтера, электрика.',
  },
]

export default function ArticlesHub() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackgroundLight opacity={0.5} />
      <Navbar />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
            Полезная информация
          </span>
          <h1 className="text-5xl md:text-6xl font-semibold mt-4 text-dark">
            Справочник садовода
          </h1>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Выберите интересующий вас раздел
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.08)', borderColor: 'rgba(201,169,110,0.8)' }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-sm border border-white/50 transition-all"
            >
              <Link href={section.link} className="block">
                <div className="flex items-center gap-3 mb-3">
                  <i className={`${section.icon} text-2xl text-green-deep`}></i>
                  <h3 className="text-xl font-semibold text-dark hover:text-green-600 transition-colors">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm">{section.description}</p>
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
