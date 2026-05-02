// src/pages/articles/emergency/fire.js
import Navbar from '../../../components/Navbar'
import AnimatedBackground from '../../../components/AnimatedBackground'
import { motion } from 'framer-motion'

export default function Fire() {
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
            Пожарная безопасность и действия при пожаре
          </h1>
          
          <img
            src="/almaz-snt/assets/articles/fire.jpg"
            alt="Пожарная безопасность"
            className="rounded-2xl w-full object-cover h-64 md:h-96 mb-8 shadow-md"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Большинство пожаров в СНТ происходит из‑за неисправной электропроводки, печного отопления 
            или неосторожного обращения с огнём. Профилактика и знание алгоритма действий помогут 
            сохранить имущество и жизнь.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Профилактика возгораний</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            • Электропроводку на участке должен обслуживать только электрик СНТ.<br/>
            • Не перегружайте сеть мощными приборами. Установите автоматы защиты.<br/>
            • Газовые баллоны храните в отдельном металлическом шкафу с вентиляцией.<br/>
            • Перед использованием печи проверьте дымоход, удалите сажу.<br/>
            • Не сжигайте мусор и сухую траву в ветреную погоду. Разводите огонь только в бочке с крышкой.<br/>
            • У каждого участка должна быть бочка с водой (200 л) или огнетушитель.
          </p>
          
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">При обнаружении пожара</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>1. Немедленно звоните 101</strong> (с мобильного) или 112. Сообщите адрес СНТ и номер участка.<br/>
            <strong>2. Обесточьте строение</strong> (отключите вводной автомат).<br/>
            <strong>3. Эвакуируйте людей и животных.</strong> При сильном задымлении дышите через мокрую ткань.<br/>
            <strong>4. Попытайтесь потушить огонь</strong> на начальной стадии: используйте огнетушитель, воду, песок, 
            плотную ткань. Не открывайте окна — приток кислорода усилит горение.<br/>
            <strong>5. Встречайте пожарных</strong> у въездных ворот, укажите кратчайший путь.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Использование огнетушителя</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Запомните алгоритм «ПУСК»:<br/>
            <strong>П</strong> — потянуть чеку;<br/>
            <strong>У</strong> — ударить по рычагу;<br/>
            <strong>С</strong> — струю направить на основание пламени;<br/>
            <strong>К</strong> — контролировать, чтобы огонь не разгорелся снова.<br/>
            Огнетушитель держите в доступном месте, ежегодно проверяйте давление.
          </p>
          
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 mt-8 shadow-sm border border-white/50">
            <h3 className="text-lg font-semibold text-dark mb-2">Номера для вызова</h3>
            <p className="text-gray-600">
              101 (01) — пожарная охрана<br/>
              112 — единый номер спасения<br/>
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
