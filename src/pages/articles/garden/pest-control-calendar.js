// src/pages/articles/garden/pest-control-calendar.js
import Navbar from '../../../components/Navbar'
import AnimatedBackground from '../../../components/AnimatedBackground'
import { motion } from 'framer-motion'

export default function PestControlCalendar() {
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
            Сад и огород
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-8 text-dark">
            Календарь обработок от вредителей
          </h1>
          
          <img
            src="/almaz-snt/assets/articles/pest-control.jpg"
            alt="Обработка сада"
            className="rounded-2xl w-full object-cover h-64 md:h-96 mb-8 shadow-md"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Своевременная защита сада от вредителей и болезней — залог хорошего урожая. 
            Предлагаем проверенный календарь обработок, адаптированный для средней полосы России.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Апрель — до распускания почек</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Проводят искореняющую обработку: 3% бордоская жидкость (300 г медного купороса 
            + 300 г извести на 10 л) или препарат «Профилактин» (0.5 л на 10 л). 
            Это уничтожает зимующие стадии щитовок, тлей, плодожорок, парши и ржавчины. 
            Обработку проводят при температуре не ниже +5°C в безветренную погоду.
          </p>
          
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Май — фаза «зелёный конус»</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Когда почки лопнули и показались зелёные кончики, опрыскивают 1% бордоской жидкостью 
            или «Хорусом» (2 г на 10 л). Это защищает от парши, монилиоза, коккомикоза. 
            От вредителей (долгоносик, тля) — «Актара» (1.4 г на 10 л).
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Июнь — после цветения</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Против плодожорки и листовёртки — «Битоксибациллин» (40 г на 10 л) 
            или «Лепидоцид» (30 г на 10 л). От мучнистой росы — «Топаз» (2 мл на 10 л). 
            В этот период стараются использовать биопрепараты, чтобы не навредить пчёлам. 
            Обработки проводят вечером.
          </p>
          
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Июль — рост плодов</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Контроль плодожорки и тли — «Фитоверм» (20 мл на 10 л). От фитофтороза 
            томатов и картофеля — «Ордан» (25 г на 5 л) или «Ридомил Голд» (25 г на 5 л). 
            Важно чередовать препараты для предотвращения привыкания.
          </p>
          
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Сентябрь — после сбора урожая</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Искореняющее опрыскивание 5% мочевиной (500 г на 10 л) или 3% бордоской жидкостью. 
            Это уничтожит споры грибковых болезней, зимующих на опавших листьях и коре. 
            Обработать также приствольные круги. Листья можно оставить под деревьями, 
            только если они не поражены болезнями — в противном случае их убирают и сжигают.
          </p>
          
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 mt-8 shadow-sm border border-white/50">
            <h3 className="text-lg font-semibold text-dark mb-2">Совет от правления</h3>
            <p className="text-gray-600">
              Всегда используйте средства защиты (перчатки, очки, респиратор) и строго 
              соблюдайте дозировки. Препараты храните в недоступном для детей месте. 
              Помните: опрыскивание плодовых деревьев разрешено не позднее чем за 20-30 дней 
              до сбора урожая.
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
