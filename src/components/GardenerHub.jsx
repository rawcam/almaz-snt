import { motion } from 'framer-motion'

const sections = [
  {
    title: '📚 Сад и огород',
    items: [
      'Когда и как сажать яблони, груши, вишню',
      'Уход за газоном: стрижка, полив, подкормка',
      'Сезон высадки рассады томатов и перцев',
      'Календарь обработок от вредителей',
    ],
  },
  {
    title: '📋 Правила СНТ',
    items: [
      'Режим въезда транспорта и парковки',
      'Уход за ливнёвой канализацией на участке',
      'Строительные нормы: заборы, хозпостройки',
      'Порядок проведения собраний',
    ],
  },
  {
    title: '🆘 Экстренные службы',
    items: [
      'Скорая помощь: 112 или 03',
      'Пожарная часть: +7 (496) 123-45-68',
      'Газовая служба: 04',
      'Что делать при укусе клеща: алгоритм',
    ],
  },
  {
    title: '🏘️ Инфраструктура района',
    items: [
      'Поставщики песка, щебня, навоза',
      'Магазины садовых товаров рядом',
      'Интересные места: Серпухов, Коломна',
      'Куда поехать за грибами в сезон',
    ],
  },
  {
    title: '🏡 Уход за участком',
    items: [
      'Уход за бассейном: чистка, химия',
      'Как подготовить водопровод к зиме',
      'Советы по компостированию',
      'Борьба с борщевиком на участке',
    ],
  },
  {
    title: '📞 Контакты правления',
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
            className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-semibold text-dark mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-600"
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
