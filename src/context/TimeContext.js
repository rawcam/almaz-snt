// src/context/TimeContext.js
import { createContext, useContext, useState, useEffect } from 'react'

const TimeContext = createContext({
  isDay: true,
  twilightProgress: 0,
  sunrise: '06:00',
  sunset: '18:00',
})

export function TimeProvider({ children }) {
  const [timeData, setTimeData] = useState({
    isDay: true,
    twilightProgress: 0,
    sunrise: '06:00',
    sunset: '18:00',
  })

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const lat = 55.1874
        const lon = 37.9858
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=is_day&daily=sunrise,sunset&timezone=Europe%2FMoscow&forecast_days=1`
        )
        const data = await response.json()
        const current = data.current
        const daily = data.daily

        if (daily && daily.sunrise && daily.sunset) {
          const sunriseStr = daily.sunrise[0] // "2026-05-07T04:12"
          const sunsetStr = daily.sunset[0]   // "2026-05-07T20:08"

          // Извлекаем часы и минуты
          const sunriseTime = sunriseStr.split('T')[1].slice(0, 5)
          const sunsetTime = sunsetStr.split('T')[1].slice(0, 5)

          const now = new Date()
          const currentMinutes = now.getHours() * 60 + now.getMinutes()

          const [sunriseHour, sunriseMin] = sunriseTime.split(':').map(Number)
          const [sunsetHour, sunsetMin] = sunsetTime.split(':').map(Number)
          const sunriseMinutes = sunriseHour * 60 + sunriseMin
          const sunsetMinutes = sunsetHour * 60 + sunsetMin

          // Период сумерек: 60 минут после заката и 60 минут до рассвета
          const twilightDuration = 60
          let twilightProgress = 0
          let isDay = current.is_day === 1

          if (isDay) {
            // Днём: проверяем, не начался ли закат
            if (currentMinutes >= sunsetMinutes && currentMinutes < sunsetMinutes + twilightDuration) {
              twilightProgress = (currentMinutes - sunsetMinutes) / twilightDuration
            }
          } else {
            // Ночью: проверяем, не начался ли рассвет
            if (currentMinutes >= sunriseMinutes - twilightDuration && currentMinutes < sunriseMinutes) {
              twilightProgress = 1 - (currentMinutes - (sunriseMinutes - twilightDuration)) / twilightDuration
            } else {
              twilightProgress = 1
            }
          }

          setTimeData({
            isDay,
            twilightProgress,
            sunrise: sunriseTime,
            sunset: sunsetTime,
          })
        }
      } catch (error) {
        console.error('Ошибка получения времени:', error)
      }
    }

    fetchTime()
    const interval = setInterval(fetchTime, 60 * 1000) // обновление каждую минуту
    return () => clearInterval(interval)
  }, [])

  return (
    <TimeContext.Provider value={timeData}>
      {children}
    </TimeContext.Provider>
  )
}

export function useTime() {
  return useContext(TimeContext)
}
