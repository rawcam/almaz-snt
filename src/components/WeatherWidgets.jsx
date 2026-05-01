// src/components/WeatherWidgets.jsx
import { motion } from 'framer-motion'

// демо-данные (пока нет реального API)
const weatherNow = {
  temp: 22,
  feelsLike: 20,
  humidity: 45,
  description: 'ясно',
  icon: 'fa-solid fa-sun'
}

const waterList = [
  { name: 'Ока (Ступино)', temp: 16.5 },
  { name: 'Пруд Леньково', temp: 18.2 },
  { name: 'Река Северка', temp: 17.8 }
]

const pollenLevels = {
  tree: 3,   // 0-5
  grass: 2,
  weed: 1
}

const seasonWorks = [
  { month: 'Май', event: 'Цветение берёзы. Посадка картофеля.' },
  { month: 'Июнь', event: 'Цветение злаков. Сбор клубники.' },
  { month: 'Июль', event: 'Цветение полыни. Начало грибного сезона.' }
]

export default function WeatherWidgets() {
  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
          Природа и климат
        </span>
        <h2 className="text-4xl md:text-5xl font-medium mt-4 text-dark">
          Погода и сезонность
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Погода сейчас */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="backdrop-blur-xl bg-white/40 rounded-3xl p-5 border border-white/50 shadow-sm"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600"><i className="fa-solid fa-location-dot mr-1 text-green-deep"></i>СНТ Алмаз</span>
            <i className={`${weatherNow.icon} text-2xl text-yellow-500`}></i>
          </div>
          <div className="text-6xl font-light text-dark">{weatherNow.temp}°</div>
          <div className="text-sm text-gray-500 mb-4">Ощущается {weatherNow.feelsLike}°</div>
          <div className="flex justify-between text-sm text-gray-500">
            <span><i className="fa-solid fa-droplet mr-1 text-green-deep"></i>{weatherNow.humidity}%</span>
            <span className="capitalize">{weatherNow.description}</span>
          </div>
        </motion.div>

        {/* Водоёмы */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="backdrop-blur-xl bg-white/40 rounded-3xl p-5 border border-white/50 shadow-sm"
        >
          <h3 className="text-sm font-medium text-gray-600 mb-3">
            <i className="fa-solid fa-water mr-1 text-green-deep"></i>Температура воды
          </h3>
          <ul className="space-y-2">
            {waterList.map((w, i) => (
              <li key={i} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{w.name}</span>
                <span className="text-lg font-medium text-green-deep">{w.temp}°</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-400 mt-3">* данные сервиса Meteum</p>
        </motion.div>

        {/* Пыльца */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="backdrop-blur-xl bg-white/40 rounded-3xl p-5 border border-white/50 shadow-sm"
        >
          <h3 className="text-sm font-medium text-gray-600 mb-3">
            <i className="fa-solid fa-seedling mr-1 text-green-deep"></i>Пыльца
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Берёза</span>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${pollenLevels.tree * 20}%` }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Злаки</span>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${pollenLevels.grass * 20}%` }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Сорняки</span>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${pollenLevels.weed * 20}%` }}></div>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3">* Google Pollen API</p>
        </motion.div>

        {/* Сезонные работы */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="backdrop-blur-xl bg-white/40 rounded-3xl p-5 border border-white/50 shadow-sm"
        >
          <h3 className="text-sm font-medium text-gray-600 mb-3">
            <i className="fa-solid fa-calendar-check mr-1 text-green-deep"></i>Сезон
          </h3>
          <ul className="space-y-2">
            {seasonWorks.map((s, i) => (
              <li key={i} className="text-sm text-gray-600">
                <span className="font-semibold text-green-deep">{s.month}:</span> {s.event}
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-400 mt-3">* обновляется ежемесячно</p>
        </motion.div>
      </div>
    </section>
  )
}
