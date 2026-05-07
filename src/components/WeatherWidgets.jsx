// src/components/WeatherWidgets.jsx
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useWeather } from '../context/TimeContext'

function getWeatherIcon(code, isDay, size = 'text-2xl') {
  if (isDay) {
    if (code === 0) return <i className={`fa-solid fa-sun ${size} text-yellow-400`} />
    if (code <= 2) return <i className={`fa-solid fa-cloud-sun ${size} text-yellow-400`} />
    if (code <= 3) return <i className={`fa-solid fa-cloud ${size} text-white opacity-90`} />
    if (code <= 48) return <i className={`fa-solid fa-smog ${size} text-gray-300`} />
    if (code <= 57) return <i className={`fa-solid fa-cloud-rain ${size} text-blue-400`} />
    if (code <= 67) return <i className={`fa-solid fa-cloud-rain ${size} text-blue-500`} />
    if (code <= 77) return <i className={`fa-solid fa-snowflake ${size} text-blue-200`} />
    if (code <= 82) return <i className={`fa-solid fa-cloud-showers-heavy ${size} text-blue-600`} />
    if (code <= 86) return <i className={`fa-solid fa-snowflake ${size} text-blue-300`} />
    return <i className={`fa-solid fa-cloud-bolt ${size} text-gray-300`} />
  } else {
    if (code === 0) return <i className={`fa-solid fa-moon ${size} text-gray-200`} />
    if (code <= 2) return <i className={`fa-solid fa-cloud-moon ${size} text-gray-300`} />
    return <i className={`fa-solid fa-cloud ${size} text-gray-400`} />
  }
}

function getWeatherDescription(code) {
  if (code === 0) return 'Ясно'
  if (code === 1) return 'Преимущественно ясно'
  if (code === 2) return 'Переменная облачность'
  if (code === 3) return 'Пасмурно'
  if (code <= 48) return 'Туман'
  if (code <= 57) return 'Морось'
  if (code <= 67) return 'Дождь'
  if (code <= 77) return 'Снег'
  if (code <= 82) return 'Ливень'
  if (code <= 86) return 'Снегопад'
  return 'Гроза'
}

export default function WeatherWidgets() {
  const [weather, setWeather] = useState(null)
  const [pollen, setPollen] = useState(null)
  const [hourly, setHourly] = useState([])
  const [loading, setLoading] = useState(true)
  const { isDay } = useWeather()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lat = 55.1874
        const lon = 37.9858

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,is_day,wind_speed_10m,uv_index&daily=temperature_2m_max,temperature_2m_min,weather_code,wind_speed_10m_max,relative_humidity_2m_max&hourly=temperature_2m,weather_code&timezone=Europe%2FMoscow&forecast_days=3&forecast_hours=24`
        )
        const weatherData = await weatherRes.json()

        const pollenRes = await fetch(
          `https://api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=european_aqi,us_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,aerosol_optical_depth,dust,uv_index,alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen`
        )
        const pollenData = await pollenRes.json()

        setWeather({
          current: {
            temp: Math.round(weatherData.current.temperature_2m),
            feelsLike: Math.round(weatherData.current.apparent_temperature),
            humidity: weatherData.current.relative_humidity_2m,
            windSpeed: weatherData.current.wind_speed_10m,
            weatherCode: weatherData.current.weather_code,
            isDay: weatherData.current.is_day === 1,
            uvIndex: weatherData.current.uv_index || 0,
          },
          daily: weatherData.daily.time.map((date, i) => ({
            date,
            maxTemp: Math.round(weatherData.daily.temperature_2m_max[i]),
            minTemp: Math.round(weatherData.daily.temperature_2m_min[i]),
            weatherCode: weatherData.daily.weather_code[i],
            windSpeed: weatherData.daily.wind_speed_10m_max[i],
            humidity: weatherData.daily.relative_humidity_2m_max[i],
          })),
        })

        if (weatherData.hourly) {
          const times = weatherData.hourly.time.map(t => t.split('T')[1]?.slice(0, 5))
          const temps = weatherData.hourly.temperature_2m
          const codes = weatherData.hourly.weather_code

          const now = new Date()
          const moscowNow = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Moscow' }))
          const currentHour = moscowNow.getHours()

          let startIndex = 0
          for (let i = 0; i < times.length; i++) {
            const h = parseInt(times[i].split(':')[0], 10)
            if (h >= currentHour) {
              startIndex = i
              break
            }
          }

          const hourlyData = times.slice(startIndex, startIndex + 24).map((time, i) => ({
            time,
            temp: Math.round(temps[startIndex + i]),
            code: codes[startIndex + i],
            isDay: parseInt(time.split(':')[0], 10) >= 6 && parseInt(time.split(':')[0], 10) < 22,
          }))
          setHourly(hourlyData)
        }

        if (pollenData.current) {
          setPollen({
            birch: pollenData.current.birch_pollen || 0,
            grass: pollenData.current.grass_pollen || 0,
            ragweed: pollenData.current.ragweed_pollen || 0,
          })
        }
      } catch (error) {
        console.error('Ошибка получения данных:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 10 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <section className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-xl rounded-3xl p-5 border border-gray-100 shadow-sm animate-pulse h-48" />
          ))}
        </div>
        <div className="max-w-5xl mx-auto h-20 bg-white/70 backdrop-blur-xl rounded-3xl animate-pulse" />
      </section>
    )
  }

  if (!weather) return null

  const { current, daily } = weather
  const tomorrowCode = daily && daily.length > 1 ? daily[1].weatherCode : 0
  const pollenInfo = pollen || { birch: 0, grass: 0, ragweed: 0 }

  const glassBg = isDay
    ? 'bg-white/60 backdrop-blur-xl border border-white/50'
    : 'bg-slate-800/60 backdrop-blur-xl border border-slate-700 text-white'

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {/* Погода сейчас */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(56, 189, 248, 0.3)', borderColor: 'rgba(56, 189, 248, 0.8)' }}
          className={`rounded-3xl p-5 shadow-sm transition-all ${glassBg}`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium opacity-80">
              <i className="fa-solid fa-location-dot mr-1 text-green-deep" /> СНТ Алмаз
            </span>
            <span className="text-xs opacity-70">Сейчас</span>
          </div>
          <div className="flex items-end gap-3 mb-2">
            <span className="text-5xl font-light">{current.temp}°</span>
            {getWeatherIcon(current.weatherCode, current.isDay, 'text-3xl')}
          </div>
          <div className="text-sm opacity-80 mb-4">
            Ощущается {current.feelsLike}° · Ветер {current.windSpeed} м/с
          </div>
          <div className="flex justify-between text-sm opacity-70">
            <span><i className="fa-solid fa-droplet mr-1" />{current.humidity}%</span>
            <span>{current.isDay ? 'День' : 'Ночь'}</span>
          </div>
        </motion.div>

        {/* Пыльца и УФ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(2, 132, 199, 0.3)', borderColor: 'rgba(2, 132, 199, 0.8)' }}
          className={`rounded-3xl p-5 shadow-sm transition-all ${glassBg}`}
        >
          <h3 className="text-sm font-medium opacity-80 mb-3">
            <i className="fa-solid fa-seedling mr-1 text-green-deep" /> Пыльца и УФ
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs">Берёза</span>
              <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: `${Math.min(pollenInfo.birch * 10, 100)}%` }} />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs">Злаки</span>
              <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: `${Math.min(pollenInfo.grass * 10, 100)}%` }} />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs">Амброзия</span>
              <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: `${Math.min(pollenInfo.ragweed * 10, 100)}%` }} />
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <i className="fa-solid fa-sun text-yellow-500" />
            <span className="text-sm font-medium">УФ-индекс: <strong>{current.uvIndex}</strong></span>
          </div>
          <p className="text-xs opacity-60 mt-2">* данные Open-Meteo</p>
        </motion.div>

        {/* Прогноз на завтра */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(250, 204, 21, 0.3)', borderColor: 'rgba(250, 204, 21, 0.8)' }}
          className={`rounded-3xl p-5 shadow-sm transition-all ${glassBg}`}
        >
          <h3 className="text-sm font-medium opacity-80 mb-3">
            <i className="fa-solid fa-calendar-alt mr-1 text-green-deep" /> Завтра
          </h3>
          {daily && daily.length > 1 && (
            <>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-2xl font-light">{daily[1].maxTemp}°</div>
                  <div className="text-sm opacity-70">{daily[1].minTemp}°</div>
                </div>
                {getWeatherIcon(tomorrowCode, true, 'text-3xl')}
              </div>
              <div className="text-sm opacity-80 mb-1">
                {getWeatherDescription(tomorrowCode)}
              </div>
              <div className="flex justify-between text-xs opacity-70">
                <span><i className="fa-solid fa-wind" /> {daily[1].windSpeed} м/с</span>
                <span><i className="fa-solid fa-droplet" /> {daily[1].humidity}%</span>
              </div>
            </>
          )}
        </motion.div>
      </div>

      {/* Почасовой прогноз */}
      {hourly.length > 0 && (
        <div className="mt-4 max-w-5xl mx-auto">
          <div className={`rounded-3xl p-4 shadow-sm overflow-x-auto ${glassBg}`}>
            <div className="flex gap-4 min-w-max">
              {hourly.map((hour, i) => (
                <div key={i} className="flex flex-col items-center gap-1 px-2 py-1">
                  <span className="text-xs font-medium opacity-70">{hour.time}</span>
                  {getWeatherIcon(hour.code, hour.isDay, 'text-xl')}
                  <span className="text-sm font-semibold">{hour.temp}°</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
