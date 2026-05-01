// src/components/GardenerHub.jsx
import { motion } from 'framer-motion'
import Link from 'next/link'

const sections = [
  {
    icon: 'fa-solid fa-book-open',
    title: 'Сад и огород',
    link: '/almaz-snt/articles/apple-trees',
    items: [
      'Когда и как сажать яблони, груши, вишню',
      'Уход за газоном: стрижка, полив, подкормка',
      'Сезон высадки рассады томатов и перцев',
      'Календарь обработок от вредителей',
    ],
  },
  {
    icon: 'fa-solid fa-file-contract',
    title: 'Правила СНТ',
    link: '/almaz-snt/articles/rules',
    items: [
      'Режим въезда транспорта и парковки',
      'Уход за ливнёвой канализацией на участке',
      'Строительные нормы: заборы, хозпостройки',
      'Порядок проведения собраний',
    ],
  },
  {
    icon: 'fa-solid fa-phone-volume',
    title: 'Экстренные службы',
    link: '/almaz-snt/articles/emergency',
    items: [
      'Скорая помощь: 112 или 03',
      'Пожарная часть: +7 (496) 123-45-68',
      'Газовая служба: 04',
      'Что делать при укусе клеща: алгоритм',
    ],
  },
  {
    icon: 'fa-solid fa-shop',
    title: 'Инфраструктура района',
    link: '/almaz-snt/articles/infrastructure',
    items: [
      'Поставщики песка, щебня, навоза',
      'Магазины садовых товаров рядом',
      'Интересные места: Серпухов, Коломна',
      'Куда поехать за грибами в сезон',
    ],
  },
  {
    icon: 'fa-solid fa-house-chimney',
    title: 'Уход за участком',
    link: '/almaz-snt/articles/maintenance',
    items: [
      'Уход за бассейном: чистка, химия',
      'Как подготовить водопровод к зиме',
      'Советы по компостированию',
      'Борьба с борщевиком на участке',
    ],
  },
  {
    icon: 'fa-solid fa-address-book',
    title: 'Контакты правления',
    link: '/almaz-snt/articles/contacts-board',
    items: [
      'Председатель: +7 (496) 123-45-67',
      'Бухгалтер: +7 (496) 123-45-78',
      'Электрик: +7 (496) 123-45-89',
      'Приём по субботам с 11:00 до 14:00',
    ],
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
            className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <i className={`${section.icon} text-2xl text-green-deep`}></i>
              <Link
                href={section.link}
                className="text-xl font-semibold text-dark transition-colors duration-200 hover:text-green-deep cursor-pointer"
              >
                {section.title}
              </Link>
            </div>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-600 transition-colors duration-200 hover:text-green-deep cursor-default"
                >
                  <span className="text-gold mt-1 shrink-0">•</span>
                  {item}
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
