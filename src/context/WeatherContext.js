// src/context/TimeContext.js → теперь WeatherContext
import { createContext, useContext, useState, useEffect } from 'react'

const WeatherContext = createContext({
  isDay: true,
  twilightProgress: 0,
  weatherCode: 0,
  temp: 20,
})

export function WeatherProvider({ children }) {
  const [data, setData] = useState({
    isDay: true,
    twilightProgress: 0,
    weatherCode: 0,
    temp: 20,
  })

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const lat = 55.1874
        const lon = 37.9858
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,is_day&daily=sunrise,sunset&timezone=Europe%2FMoscow&forecast_days=1`
        )
        const json = await res.json()
        const current = json.current
        const daily = json.daily

        let twilightProgress = 0
        let isDay = current.is_day === 1

        if (daily?.sunrise?.[0] && daily?.sunset?.[0]) {
          const sunriseStr = daily.sunrise[0].split('T')[1].slice(0, 5)
          const sunsetStr = daily.sunset[0].split('T')[1].slice(0, 5)
          const [srH, srM] = sunriseStr.split(':').map(Number)
          const [ssH, ssM] = sunsetStr.split(':').map(Number)
          const sunriseMin = srH * 60 + srM
          const sunsetMin = ssH * 60 + ssM
          const twilightDuration = 60

          const now = new Date()
          const moscowNow = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Moscow' }))
          const currentMin = moscowNow.getHours() * 60 + moscowNow.getMinutes()

          if (isDay) {
            if (currentMin >= sunsetMin && currentMin < sunsetMin + twilightDuration) {
              twilightProgress = (currentMin - sunsetMin) / twilightDuration
            }
          } else {
            if (currentMin >= sunriseMin - twilightDuration && currentMin < sunriseMin) {
              twilightProgress = 1 - (currentMin - (sunriseMin - twilightDuration)) / twilightDuration
            } else {
              twilightProgress = 1
            }
          }
        }

        setData({
          isDay,
          twilightProgress,
          weatherCode: current.weather_code,
          temp: Math.round(current.temperature_2m),
        })
      } catch (err) {
        console.error('WeatherContext fetch error:', err)
      }
    }

    fetchAll()
    const timer = setInterval(fetchAll, 60 * 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <WeatherContext.Provider value={data}>
      {children}
    </WeatherContext.Provider>
  )
}

export function useWeather() {
  return useContext(WeatherContext)
}

// для обратной совместимости (если где-то ещё используется useTime)
export { useWeather as useTime }
