// src/components/GardenerHub.jsx
import { motion } from 'framer-motion'
import Link from 'next/link'

const sections = [
  {
    icon: 'fa-solid fa-book-open',
    title: 'Сад и огород',
    link: '/articles/garden',
    items: [
      { text: 'Когда и как сажать яблони, груши, вишню', link: '/articles/garden/apple-trees' },
      { text: 'Уход за газоном: стрижка, полив, подкормка', link: '/articles/garden/lawn-care' },
      { text: 'Сезон высадки рассады томатов и перцев', link: '/articles/garden/seedlings' },
      { text: 'Календарь обработок от вредителей', link: '/articles/garden/pest-control-calendar' },
    ],
    shadowColor: 'rgba(76, 175, 80, 0.3)',
    borderColor: 'rgba(76, 175, 80, 0.8)'
  },
  {
    icon: 'fa-solid fa-file-contract',
    title: 'Правила СНТ',
    link: '/articles/rules',
    items: [
      { text: 'Режим въезда транспорта и парковки', link: '/articles/rules/transport' },
      { text: 'Уход за ливнёвой канализацией на участке', link: '/articles/rules/drainage' },
      { text: 'Строительные нормы: заборы, хозпостройки', link: '/articles/rules/buildings' },
      { text: 'Порядок проведения собраний', link: '/articles/rules/meetings' },
    ],
    shadowColor: 'rgba(59, 130, 246, 0.3)',
    borderColor: 'rgba(59, 130, 246, 0.8)'
  },
  {
    icon: 'fa-solid fa-phone-volume',
    title: 'Экстренные службы',
    link: '/emergency',
    items: [
      { text: 'Скорая помощь: вызов и первая помощь', link: '/emergency/ambulance' },
      { text: 'Пожарная безопасность', link: '/emergency/fire' },
      { text: 'Утечка газа: экстренные меры', link: '/emergency/gas' },
      { text: 'Укус клеща: алгоритм действий', link: '/emergency/tick' },
    ],
    shadowColor: 'rgba(239, 68, 68, 0.3)',
    borderColor: 'rgba(239, 68, 68, 0.8)'
  },
  {
    icon: 'fa-solid fa-shop',
    title: 'Инфраструктура района',
    link: '/articles/infrastructure',
    items: [
      { text: 'Поставщики песка, щебня, навоза', link: '/articles/infrastructure' },
      { text: 'Магазины садовых товаров рядом', link: '/articles/infrastructure' },
      { text: 'Интересные места: Серпухов, Коломна', link: '/articles/infrastructure' },
      { text: 'Куда поехать за грибами в сезон', link: '/articles/infrastructure' },
    ],
    shadowColor: 'rgba(168, 85, 247, 0.3)',
    borderColor: 'rgba(168, 85, 247, 0.8)'
  },
  {
    icon: 'fa-solid fa-house-chimney',
    title: 'Уход за участком',
    link: '/articles/maintenance',
    items: [
      { text: 'Уход за бассейном: чистка, химия', link: '/articles/maintenance' },
      { text: 'Как подготовить водопровод к зиме', link: '/articles/maintenance' },
      { text: 'Советы по компостированию', link: '/articles/maintenance' },
      { text: 'Борьба с борщевиком на участке', link: '/articles/maintenance' },
    ],
    shadowColor: 'rgba(34, 197, 94, 0.3)',
    borderColor: 'rgba(34, 197, 94, 0.8)'
  },
  {
    icon: 'fa-solid fa-address-book',
    title: 'Контакты правления',
    link: '/articles/contacts-board',
    items: [
      { text: 'Председатель: +7 (496) 123-45-67', link: '/articles/contacts-board' },
      { text: 'Бухгалтер: +7 (496) 123-45-78', link: '/articles/contacts-board' },
      { text: 'Электрик: +7 (496) 123-45-89', link: '/articles/contacts-board' },
      { text: 'Приём по субботам с 11:00 до 14:00', link: '/articles/contacts-board' },
    ],
    shadowColor: 'rgba(107, 114, 128, 0.3)',
    borderColor: 'rgba(107, 114, 128, 0.8)'
  },
]

export default function GardenerHub() {
  return (
    <section className="py-16 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
          Полезная информация
        </span>
        <h2 className="text-4xl md:text-5xl font-medium mt-4 text-dark">
          Справочник садовода
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -5,
              boxShadow: `0 15px 30px ${section.shadowColor}`,
              borderColor: section.borderColor
            }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-sm border border-white/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <i className={`${section.icon} text-2xl text-green-deep`}></i>
              <Link
                href={section.link}
                className="text-xl font-semibold text-dark transition-colors duration-200 hover:text-green-600 hover:underline"
              >
                {section.title}
              </Link>
            </div>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-gold mt-1 shrink-0">•</span>
                  <Link
                    href={item.link}
                    className="text-gray-600 transition-colors duration-200 hover:text-green-600 hover:underline"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 text-sm mt-10 max-w-2xl mx-auto"
      >
        Информация регулярно обновляется правлением.
        Предложить тему или задать вопрос можно на форуме.
      </motion.p>
    </section>
  )
}
