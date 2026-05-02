// src/pages/articles/emergency/ambulance.js
import Navbar from '../../../components/Navbar'
import AnimatedBackground from '../../../components/AnimatedBackground'
import { motion } from 'framer-motion'

export default function Ambulance() {
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
            Скорая помощь: вызов и первая помощь
          </h1>
          
          <img
            src="/almaz-snt/assets/articles/ambulance.jpg"
            alt="Скорая помощь"
            className="rounded-2xl w-full object-cover h-64 md:h-96 mb-8 shadow-md"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Быстрые и правильные действия до приезда скорой могут спасти жизнь. 
            В этом руководстве собраны проверенные алгоритмы, одобренные МЧС и Минздравом.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Как вызвать скорую помощь</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Единый номер для вызова — <strong>112</strong> (работает даже без сети и при нулевом балансе). 
            Также можно звонить по номеру <strong>03</strong> со стационарного телефона. 
            При звонке чётко сообщите: <br/>
            • точный адрес (Московская обл., Ступинский район, д. Леньково, СНТ «Алмаз», номер участка);<br/>
            • что произошло (потеря сознания, травма, ожог, боль в сердце);<br/>
            • пол и возраст пострадавшего;<br/>
            • ваше имя и контактный телефон.
            Оставайтесь на связи до указаний диспетчера. По возможности встретьте бригаду у въездных ворот СНТ.
          </p>
          
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Первая помощь до приезда врача</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>При отсутствии сознания и дыхания:</strong> немедленно начинайте сердечно-лёгочную реанимацию 
            (30 нажатий на грудину на глубину 5-6 см, затем 2 вдоха). Продолжайте до прибытия скорой.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>При кровотечении:</strong> наложите давящую повязку или жгут выше раны (не более 1 часа летом, 30 минут зимой). 
            Запишите время наложения жгута и сообщите врачу. Рану предварительно закройте стерильной салфеткой.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>При ожоге:</strong> охлаждайте место ожога проточной водой (10-15 минут). Не смазывайте маслом, 
            не прокалывайте пузыри. Наложите стерильную повязку.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>При подозрении на перелом:</strong> зафиксируйте конечность с помощью подручных средств 
            (доски, лыжные палки), захватывая суставы выше и ниже места перелома. Не пытайтесь вправлять кости.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Аптечка первой помощи</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Рекомендуем иметь на каждом участке минимальный набор: стерильные бинты, салфетки, 
            жгут кровоостанавливающий, перчатки медицинские, антисептик (хлоргексидин), 
            анальгетик (парацетамол), антигистаминное (супрастин), активированный уголь.
            Раз в год проверяйте сроки годности препаратов.
          </p>
          
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 mt-8 shadow-sm border border-white/50">
            <h3 className="text-lg font-semibold text-dark mb-2">Телефоны экстренных служб</h3>
            <p className="text-gray-600">
              112 — единый номер спасения<br/>
              03 (103 с мобильного) — скорая помощь<br/>
              01 (101) — пожарная охрана<br/>
              04 (104) — аварийная газовая служба<br/>
              +7 (496) 123‑45‑67 — охрана СНТ (круглосуточно)
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
