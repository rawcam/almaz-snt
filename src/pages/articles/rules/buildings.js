// src/pages/articles/rules/buildings.js
import Navbar from '../../../components/Navbar'
import AnimatedBackground from '../../../components/AnimatedBackground'
import { motion } from 'framer-motion'

export default function BuildingRules() {
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
            Правила СНТ
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-8 text-dark">
            Строительные нормы: заборы, хозпостройки
          </h1>
          
          <img
            src="/almaz-snt/assets/articles/buildings.jpg"
            alt="Строительство в СНТ"
            className="rounded-2xl w-full object-cover h-64 md:h-96 mb-8 shadow-md"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Все постройки на территории СНТ «Алмаз» должны соответствовать утверждённым нормам, 
            которые обеспечивают эстетическую гармонию, безопасность и комфортное соседство. 
            Нарушение строительных правил является основанием для предписания о сносе или переделке объекта.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Заборы: высота, материал, расположение</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ограждения между соседними участками должны быть сетчатыми или решётчатыми, высотой не более 1,5 м. 
            Глухие заборы между участками запрещены — они затеняют посадки и препятствуют естественной циркуляции воздуха. 
            Внешний забор (со стороны дороги) может быть глухим, высотой до 2 м, выполненным из профнастила, 
            металлического штакетника или деревянных панелей. Цветовое решение — оттенки зелёного, коричневого, 
            бежевого или серого. Яркие цвета (красный, синий, жёлтый) не допускаются. 
            Перед установкой забора необходимо согласовать его расположение с соседями и правлением. 
            Обязательно предусмотреть зазор 5–7 см от земли для стока воды (см. раздел о ливневой канализации).
          </p>
          
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Хозяйственные постройки: размеры и размещение</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Сарай, теплица, дровяник, баня, туалет и компостная яма относятся к хозяйственным постройкам. 
            Их суммарная площадь не должна превышать 30% площади участка. Минимальные отступы от границ: 
            для сарая и теплицы — 1 м, для бани — 2 м, для туалета и компостной ямы — 3 м. 
            Высота сарая — до 3 м в коньке, теплицы — до 2,5 м. Строения не должны затенять соседние участки 
            в период с 10:00 до 16:00. Запрещено размещать хозблок на переднем плане участка (со стороны дороги) — 
            только в глубине территории. Жилой дом может быть блокированным (на 2 семьи), но не более чем двухэтажным 
            (высота до 8 м от уровня земли до конька).
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Процедура согласования строительства</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Перед началом любого строительства (кроме косметического ремонта) садовод подаёт в правление 
            заявление с приложением эскиза или плана строения с указанием размеров и материалов. 
            Правление рассматривает заявку в течение 14 дней и выдаёт письменное разрешение либо мотивированный отказ. 
            Без разрешения запрещено возводить любые капитальные строения. Нарушитель получает предписание 
            остановить стройку до получения согласования. В случае грубого несоответствия нормам 
            (например, строительство глухого забора высотой 2,5 м) объект подлежит демонтажу 
            за счёт владельца в 30‑дневный срок.
          </p>
          
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Пожарная безопасность при строительстве</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Расстояние между деревянными строениями на соседних участках должно быть не менее 15 м, 
            между каменными — 6 м. Это требование пожарного надзора и устава СНТ. 
            На каждом участке обязательно наличие ёмкости с водой (бочка 200 л) или огнетушителя. 
            Электропроводка в постройках выполняется только сертифицированным кабелем, 
            подключение к сети — силами электрика СНТ. Самостоятельное подключение к общим сетям категорически запрещено.
          </p>
          
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 mt-8 shadow-sm border border-white/50">
            <h3 className="text-lg font-semibold text-dark mb-2">Консультация и помощь</h3>
            <p className="text-gray-600">
              Типовые проекты хозяйственных построек, разрешённые к строительству без дополнительного 
              согласования, можно скачать в разделе «Документы». По вопросам согласования обращайтесь 
              к председателю в часы приёма (суббота, 11:00–14:00) или отправляйте запрос на cnt-almaz@yandex.ru.
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
