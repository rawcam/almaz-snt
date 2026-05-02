// src/pages/articles/rules/drainage.js
import Navbar from '../../../components/Navbar'
import AnimatedBackground from '../../../components/AnimatedBackground'
import { motion } from 'framer-motion'

export default function DrainageRules() {
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
            Уход за ливневой канализацией на участке
          </h1>
          
          <img
            src="/almaz-snt/assets/articles/drainage.jpg"
            alt="Ливневая канализация"
            className="rounded-2xl w-full object-cover h-64 md:h-96 mb-8 shadow-md"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Система ливневой канализации СНТ «Алмаз» предназначена для отвода дождевых и талых вод 
            с дорог общего пользования и прилегающих участков. Каждый садовод обязан содержать свою часть 
            водоотводной системы в исправности, чтобы не допускать подтоплений соседей и разрушения дорожного полотна.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Что входит в зону ответственности садовода</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Собственник участка отвечает за дренажные канавы и водопропускные трубы, расположенные 
            в границах его участка или непосредственно примыкающие к нему со стороны дороги. 
            Канавы должны быть глубиной не менее 40 см и шириной по дну 30 см. Весной (апрель) 
            и осенью (октябрь) их необходимо очищать от листвы, веток и ила. Водопропускные трубы 
            под заездами на участок должны быть диаметром минимум 110 мм и укладываться с уклоном 
            не менее 2 см на метр в сторону общей канавы. Запрещено использовать гибкие гофрированные 
            шланги — только жёсткие ПВХ-трубы.
          </p>
          
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Запреты и ограничения</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Категорически нельзя перекрывать общую водоотводную канаву заборами, строительным мусором, 
            грунтом или дровами. Сброс бытовых стоков (из бани, кухни, стиральных машин) в ливневую 
            канализацию запрещён — для этого существует септик или выгребная яма на участке. 
            Не допускается изменение естественного уклона рельефа, приводящее к направлению воды 
            на соседний участок. При строительстве забора между участками необходимо предусмотреть 
            зазор 5–7 см от земли для свободного стока воды.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Плановые работы и ремонт</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Каждую весну (до 1 мая) члены СНТ обязаны осмотреть состояние канав и труб на своём участке. 
            При обнаружении разрушений, просадок или засоров необходимо в течение 14 дней устранить 
            неполадки. Если ремонт требует применения спецтехники (экскаватор, подъёмник), его можно 
            заказать через правление — в СНТ есть договорённость с подрядчиком, обслуживающим наши дороги. 
            Стоимость работ распределяется пропорционально между теми, чьи канавы ремонтируются. 
            Правление проводит ежегодный плановый осмотр ливневой системы в первых числах мая.
          </p>
          
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Ответственность и штрафы</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Захламление канавы, сброс в неё мусора или фекальных вод влечёт предписание с требованием 
            устранить нарушение в 7‑дневный срок. При повторном нарушении правление вправе наложить 
            штраф в размере 1000 рублей (согласно решению общего собрания от 15.03.2026). 
            Если бездействие садовода привело к подтоплению соседнего участка или размыву дороги, 
            виновник возмещает причинённый ущерб в полном объёме на основании акта комиссии.
          </p>
          
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 mt-8 shadow-sm border border-white/50">
            <h3 className="text-lg font-semibold text-dark mb-2">Полезный совет</h3>
            <p className="text-gray-600">
              Для долговечности канав их стенки можно укрепить плоским шифером или георешёткой. 
              Примеры правильного устройства водоотвода приведены в разделе «Документы» — 
              скачайте типовую схему, согласованную правлением.
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
