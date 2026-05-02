// src/pages/articles/emergency/tick.js
import Navbar from '../../../components/Navbar'
import AnimatedBackground from '../../../components/AnimatedBackground'
import { motion } from 'framer-motion'

export default function Tick() {
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
            Укус клеща: алгоритм действий и профилактика
          </h1>
          
          <img
            src="/almaz-snt/assets/articles/tick.jpg"
            alt="Клещ"
            className="rounded-2xl w-full object-cover h-64 md:h-96 mb-8 shadow-md"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            В Подмосковье сезон клещей длится с апреля по октябрь. Эти паукообразные могут быть переносчиками 
            болезни Лайма (боррелиоз), клещевого энцефалита и других инфекций. 
            Правильное удаление и своевременная профилактика — залог здоровья.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Как удалить клеща правильно</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>1. Не паникуйте и не пытайтесь раздавить клеща пальцами.</strong> Наденьте перчатки или используйте салфетку.<br/>
            <strong>2. Захватите клеща</strong> пинцетом или специальной ручкой-присоской как можно ближе к коже.<br/>
            <strong>3. Выкручивающим движением</strong> (против часовой стрелки) извлеките его целиком. 
            Не дёргайте резко — хоботок может остаться в ранке.<br/>
            <strong>4. Место укуса обработайте</strong> хлоргексидином, йодом или спиртом. Тщательно вымойте руки.<br/>
            <strong>5. Клеща поместите</strong> в герметичный контейнер (баночку) с влажной ваткой. 
            Его нужно отвезти на анализ в лабораторию.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Куда отвезти клеща на анализ</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            В г. Ступино ближайшая лаборатория — филиал Центра гигиены и эпидемиологии: 
            ул. Чайковского, д. 15. Режим работы: пн–пт 9:00–16:00. 
            Также можно обратиться в любую коммерческую лабораторию («Гемотест», «Инвитро»). 
            Клеща исследуют на боррелиоз и энцефалит. Результат обычно готов через 1-2 дня.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Когда нужна экстренная профилактика</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Если район признан эндемичным по клещевому энцефалиту (Ступинский район таковым не является, 
            но выезды в соседние области возможны), вводится иммуноглобулин не позднее 72 часов после укуса. 
            В любом случае в течение 30 дней наблюдайте за местом укуса: появление красного кольца (эритемы), 
            повышение температуры, головная боль — повод для немедленного обращения к врачу. 
            Для профилактики болезни Лайма врач может назначить антибиотик (доксициклин).
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Профилактика укусов</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            • Перед выходом на участок обрабатывайте одежду репеллентами (ДЭТА, перметрин).<br/>
            • Носите длинные брюки, заправленные в носки, и рубашки с манжетами.<br/>
            • После садовых работ осматривайте себя и домашних животных.<br/>
            • Регулярно косите траву и убирайте валежник — это снижает популяцию клещей.
          </p>
          
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 mt-8 shadow-sm border border-white/50">
            <h3 className="text-lg font-semibold text-dark mb-2">Полезные телефоны</h3>
            <p className="text-gray-600">
              112 — единый номер спасения<br/>
              +7 (496) 123‑45‑69 — травмпункт г. Ступино<br/>
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
