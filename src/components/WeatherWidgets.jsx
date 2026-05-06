// src/components/WeatherWidgets.jsx
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Иконки погоды (Font Awesome классы)
const weatherIcons = {
  clear: 'fa-solid fa-sun',
  partly_cloudy: 'fa-solid fa-cloud-sun',
  cloudy: 'fa-solid fa-cloud',
  rain: 'fa-solid fa-cloud-rain',
  snow: 'fa-solid fa-snowflake',
  storm: 'fa-solid fa-cloud-bolt',
  fog: 'fa-solid fa-smog',
  night_clear: 'fa-solid fa-moon',
  night_cloudy: 'fa-solid fa-cloud-moon',
}

// Текстовые описания погоды
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

function getWeatherIcon(code, isDay) {
  if (isDay) {
    if (code === 0) return weatherIcons.clear
    if (code <= 2) return weatherIcons.partly_cloudy
    if (code <= 3) return weatherIcons.cloudy
    if (code <= 48) return weatherIcons.fog
    if (code <= 57) return weatherIcons.fog
    if (code <= 67) return weatherIcons.rain
    if (code <= 77) return weatherIcons.snow
    if (code <= 82) return weatherIcons.rain
    if (code <= 86) return weatherIcons.snow
    return weatherIcons.storm
  } else {
    if (code === 0) return weatherIcons.night_clear
    if (code <= 2) return weatherIcons.night_cloudy
    if (code <= 3) return weatherIcons.cloudy
    if (code <= 48) return weatherIcons.fog
    return weatherIcons.cloudy
  }
}

function getWeatherBackground(code, isDay) {
  if (isDay) {
    if (code === 0) return 'bg-gradient-to-br from-yellow-100 to-amber-200'
    if (code <= 3) return 'bg-gradient-to-br from-gray-100 to-slate-300'
    return 'bg-gradient-to-br from-slate-200 to-gray-400'
  } else {
    if (code === 0) return 'bg-gradient-to-br from-indigo-900 to-slate-800 text-white'
    return 'bg-gradient-to-br from-slate-800 to-gray-900 text-white'
  }
}

export default function WeatherWidgets() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const lat = 55.1874
        const lon = 37.9858
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,is_day,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code,wind_speed_10m_max,relative_humidity_2m_max&timezone=Europe%2FMoscow&forecast_days=3`
        )
        const data = await response.json()
        setWeather({
          current: {
            temp: Math.round(data.current.temperature_2m),
            feelsLike: Math.round(data.current.apparent_temperature),
            humidity: data.current.relative_humidity_2m,
            windSpeed: data.current.wind_speed_10m,
            weatherCode: data.current.weather_code,
            isDay: data.current.is_day === 1,
          },
          daily: data.daily.time.map((date, i) => ({
            date,
            maxTemp: Math.round(data.daily.temperature_2m_max[i]),
            minTemp: Math.round(data.daily.temperature_2m_min[i]),
            weatherCode: data.daily.weather_code[i],
            windSpeed: data.daily.wind_speed_10m_max[i],
            humidity: data.daily.relative_humidity_2m_max[i],
          })),
        })
      } catch (error) {
        console.error('Ошибка получения погоды:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchWeather()
    const interval = setInterval(fetchWeather, 10 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <section className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-xl rounded-3xl p-5 border border-gray-100 shadow-sm animate-pulse h-48" />
          ))}
        </div>
      </section>
    )
  }

  if (!weather) return null

  const { current, daily } = weather
  const todayCode = daily && daily.length > 0 ? daily[0].weatherCode : current.weatherCode
  const tomorrowCode = daily && daily.length > 1 ? daily[1].weatherCode : todayCode

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
          className={`${getWeatherBackground(current.weatherCode, current.isDay)} rounded-3xl p-5 border border-gray-100 shadow-sm transition-all`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium opacity-80">
              <i className="fa-solid fa-location-dot mr-1 text-green-deep"></i>СНТ Алмаз
            </span>
            <span className="text-xs opacity-70">Сейчас</span>
          </div>
          <div className="flex items-end gap-3 mb-2">
            <span className="text-5xl font-light">{current.temp}°</span>
            <i className={`${getWeatherIcon(current.weatherCode, current.isDay)} text-3xl text-yellow-400 mb-1`}></i>
          </div>
          <div className="text-sm opacity-80 mb-4">
            Ощущается {current.feelsLike}° · Ветер {current.windSpeed} м/с
          </div>
          <div className="flex justify-between text-sm opacity-70">
            <span><i className="fa-solid fa-droplet mr-1"></i>{current.humidity}%</span>
            <span>{current.isDay ? 'День' : 'Ночь'}</span>
          </div>
        </motion.div>

        {/* Прогноз на сегодня */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(2, 132, 199, 0.3)', borderColor: 'rgba(2, 132, 199, 0.8)' }}
          className={`${getWeatherBackground(todayCode, true)} rounded-3xl p-5 border border-gray-100 shadow-sm transition-all`}
        >
          <h3 className="text-sm font-medium opacity-80 mb-3">
            <i className="fa-solid fa-calendar-day mr-1 text-green-deep"></i>Сегодня
          </h3>
          {daily && daily.length > 0 && (
            <>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-2xl font-light">{daily[0].maxTemp}°</div>
                  <div className="text-sm opacity-70">{daily[0].minTemp}°</div>
                </div>
                <i className={`${getWeatherIcon(todayCode, true)} text-3xl text-yellow-400`}></i>
              </div>
              <div className="text-sm opacity-80 mb-1">
                {getWeatherDescription(todayCode)}
              </div>
              <div className="flex justify-between text-xs opacity-70">
                <span><i className="fa-solid fa-wind"></i> {daily[0].windSpeed} м/с</span>
                <span><i className="fa-solid fa-droplet"></i> {daily[0].humidity}%</span>
              </div>
            </>
          )}
        </motion.div>

        {/* Прогноз на завтра */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(250, 204, 21, 0.3)', borderColor: 'rgba(250, 204, 21, 0.8)' }}
          className={`${getWeatherBackground(tomorrowCode, true)} rounded-3xl p-5 border border-gray-100 shadow-sm transition-all`}
        >
          <h3 className="text-sm font-medium opacity-80 mb-3">
            <i className="fa-solid fa-calendar-alt mr-1 text-green-deep"></i>Завтра
          </h3>
          {daily && daily.length > 1 && (
            <>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-2xl font-light">{daily[1].maxTemp}°</div>
                  <div className="text-sm opacity-70">{daily[1].minTemp}°</div>
                </div>
                <i className={`${getWeatherIcon(tomorrowCode, true)} text-3xl text-yellow-400`}></i>
              </div>
              <div className="text-sm opacity-80 mb-1">
                {getWeatherDescription(tomorrowCode)}
              </div>
              <div className="flex justify-between text-xs opacity-70">
                <span><i className="fa-solid fa-wind"></i> {daily[1].windSpeed} м/с</span>
                <span><i className="fa-solid fa-droplet"></i> {daily[1].humidity}%</span>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
