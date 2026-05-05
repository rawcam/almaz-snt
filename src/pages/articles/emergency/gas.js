// src/pages/articles/emergency/gas.js
import Navbar from '../../../components/Navbar'
import AnimatedBackground from '../../../components/AnimatedBackground'
import { motion } from 'framer-motion'

export default function Gas() {
  return (
    <div className="min-h-screen bg-almond">
      <AnimatedBackground opacity={0.2} />
      <Navbar />
      <div className="container mx-auto px-4 py-20 relative z-10 max-w-4xl">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
            Экстренные службы
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-8 text-dark">
            Утечка газа: экстренные меры безопасности
          </h1>
          
          <img
            src="/almaz-snt/assets/articles/gas.jpg"
            alt="Газовая безопасность"
            className="rounded-2xl w-full object-cover h-64 md:h-96 mb-8 shadow-md"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Природный газ не имеет запаха, поэтому в него добавляют одорант (меркаптан) 
            с характерным «запахом тухлых яиц». Почувствовав этот запах, действуйте немедленно.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Признаки утечки</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            • Запах газа в помещении или возле газового оборудования.<br/>
            • Шипящий звук из трубы или соединения.<br/>
            • Пузыри на мыльном растворе, нанесённом на стыки.<br/>
            • Пожелтение пламени горелки (вместо голубого) — признак неполного сгорания.
          </p>
          
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Алгоритм действий при запахе газа</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>1. Не включайте и не выключайте электроприборы!</strong> Даже звонок телефона или щелчок выключателя 
            может вызвать искру и взрыв.<br/>
            <strong>2. Перекройте вентиль</strong> на газовой трубе (обычно жёлтого цвета).<br/>
            <strong>3. Откройте все окна и двери</strong> для сквозного проветривания.<br/>
            <strong>4. Покиньте загазованное помещение,</strong> помогая детям и пожилым.<br/>
            <strong>5. С улицы или от соседей позвоните</strong> в аварийную газовую службу по номеру <strong>104</strong> (с мобильного) 
            или <strong>04</strong> (стационарный).<br/>
            <strong>6. Оповестите соседей,</strong> особенно если запах чувствуется на улице.<br/>
            <strong>7. Не возвращайтесь в дом</strong> до разрешения специалистов.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Что категорически ЗАПРЕЩЕНО</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            • Зажигать огонь, курить.<br/>
            • Пользоваться лифтом (если есть).<br/>
            • Включать/выключать свет, бытовую технику.<br/>
            • Звонить по мобильному телефону внутри помещения.<br/>
            • Самостоятельно ремонтировать газовое оборудование.
          </p>
          
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 mt-8 shadow-sm border border-white/50">
            <h3 className="text-lg font-semibold text-dark mb-2">Телефоны</h3>
            <p className="text-gray-600">
              104 (04) — аварийная газовая служба<br/>
              112 — единый номер спасения
            </p>
          </div>
        </motion.article>
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
