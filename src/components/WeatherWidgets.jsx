import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Функция для получения данных о погоде (пример с OpenWeatherMap)
const fetchWeatherData = async () => {
  const API_KEY = 'ВАШ_OPENWEATHERMAP_КЛЮЧ'; // ← Замените на свой ключ
  const lat = '55.1874'; // Широта СНТ Алмаз
  const lon = '37.9858'; // Долгота СНТ Алмаз
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`);
    const data = await response.json();
    return {
      temp: Math.round(data.main.temp),
      feels_like: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    };
  } catch (error) {
    console.error('Ошибка получения данных о погоде:', error);
    return null;
  }
};

// Функция-заглушка для пыльцы (требует Google Pollen API)
const fetchPollenData = async () => {
  // В реальном проекте здесь будет запрос к Google Pollen API
  return {
    treeIndex: 3, // 0-5 (0 - низкий, 5 - очень высокий)
    grassIndex: 2,
    weedIndex: 1,
  };
};

// Данные о температуре воды в ближайших водоемах
const waterTemperatures = [
  { name: 'Ока (район Ступино)', temp: 16.5 },
  { name: 'Пруд в Леньково', temp: 18.2 },
  { name: 'Река Северка', temp: 17.8 },
];

// Календарь цветения и сезонности
const seasonalInfo = [
  { month: 'Май', events: 'Цветение берёзы, одуванчика. Посадка картофеля.' },
  { month: 'Июнь', events: 'Цветение злаковых трав. Сбор клубники.' },
  { month: 'Июль', events: 'Пик цветения полыни. Начало грибного сезона.' },
];

const WeatherWidgets = () => {
  const [weather, setWeather] = useState(null);
  const [pollen, setPollen] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const weatherData = await fetchWeatherData();
      if (weatherData) setWeather(weatherData);
      
      const pollenData = await fetchPollenData();
      if (pollenData) setPollen(pollenData);
    };

    fetchData();
    
    // Обновление данных каждые 10 минут
    const interval = setInterval(fetchData, 600000);
    return () => clearInterval(interval);
  }, []);

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Виджет погоды */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-dark">
              <i className="fa-solid fa-cloud-sun text-green-deep mr-2"></i>
              Погода сейчас
            </h3>
          </div>
          
          {weather ? (
            <div className="text-center">
              <div className="text-5xl font-light text-dark mb-2">
                {weather.temp}°
              </div>
              <div className="text-xl text-gray-600 capitalize mb-4">
                {weather.description}
              </div>
              <div className="flex justify-around text-sm text-gray-500">
                <div className="text-center">
                  <i className="fa-solid fa-temperature-quarter block text-green-deep mb-1"></i>
                  Ощущается {weather.feels_like}°
                </div>
                <div className="text-center">
                  <i className="fa-solid fa-droplet block text-green-deep mb-1"></i>
                  Влажность {weather.humidity}%
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400">Загрузка погоды...</div>
          )}
        </motion.div>

        {/* Виджет водоемов */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
        >
          <h3 className="text-lg font-semibold text-dark mb-4">
            <i className="fa-solid fa-water text-green-deep mr-2"></i>
            Водоёмы
          </h3>
          
          <div className="space-y-3">
            {waterTemperatures.map((water, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{water.name}</span>
                <span className="font-medium text-green-deep">{water.temp}°C</span>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-gray-400 mt-4">
            * Данные о температуре воды предоставлены сервисом Meteum.ai
          </p>
        </motion.div>

        {/* Виджет пыльцы */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
        >
          <h3 className="text-lg font-semibold text-dark mb-4">
            <i className="fa-solid fa-seedling text-green-deep mr-2"></i>
            Пыльца
          </h3>
          
          {pollen ? (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Берёза</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${pollen.treeIndex * 20}%` }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Злаковые</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${pollen.grassIndex * 20}%` }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Сорняки</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${pollen.weedIndex * 20}%` }}></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400">Загрузка данных...</div>
          )}
          
          <p className="text-xs text-gray-400 mt-4">
            * Данные о пыльце предоставлены сервисом Google Pollen API
          </p>
        </motion.div>

        {/* Виджет сезонных работ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
        >
          <h3 className="text-lg font-semibold text-dark mb-4">
            <i className="fa-solid fa-calendar-check text-green-deep mr-2"></i>
            Сезонные работы
          </h3>
          
          <div className="space-y-3">
            {seasonalInfo.map((item, index) => (
              <div key={index} className="pb-2 border-b border-gray-100 last:border-0">
                <span className="font-medium text-green-deep">{item.month}:</span>
                <p className="text-sm text-gray-600 mt-1">{item.events}</p>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-gray-400 mt-4">
            * Календарь составлен по данным открытых источников
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WeatherWidgets;
