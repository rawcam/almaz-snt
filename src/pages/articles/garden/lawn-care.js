// src/pages/articles/garden/lawn-care.js
import Navbar from '../../../components/Navbar'
import AnimatedBackground from '../../../components/AnimatedBackground'
import { motion } from 'framer-motion'

export default function LawnCare() {
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
            Уход за газоном: стрижка, полив, подкормка
          </h1>
          
          <img
            src="/almaz-snt/assets/articles/lawn.jpg"
            alt="Ухоженный газон"
            className="rounded-2xl w-full object-cover h-64 md:h-96 mb-8 shadow-md"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Красивый газон — это регулярный уход. Три главные составляющие: правильная стрижка, 
            своевременный полив и сбалансированные подкормки. Придерживаясь этих правил, 
            вы получите изумрудный ковёр, который будет радовать глаз весь сезон.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Стрижка</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Первую стрижку проводят, когда трава достигнет высоты 10-12 см. 
            Оптимальная высота скашивания — 4-5 см (для тенистых мест — 6-7 см). 
            Стригут газон каждые 7-10 дней, срезая не более трети высоты за один раз. 
            Перед стрижкой траву прочёсывают веерными граблями, убирают мусор и ветки. 
            Скошенную траву можно оставлять как мульчу, но только тонким слоем.
          </p>
          
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Полив</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Газон поливают рано утром или вечером, когда солнце неактивно. 
            Частота — 2-3 раза в неделю, в жару — ежедневно. Норма — 10-15 л на м², 
            чтобы вода проникла на глубину 15-20 см. Лучше использовать дождевальные установки, 
            которые равномерно распределяют влагу. После полива проверьте, 
            не осталось ли сухих участков.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Подкормка</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            За сезон газон подкармливают 3-4 раза. Весной (апрель) вносят азотные удобрения 
            (аммиачная селитра, 20 г/м²) для активного роста. Летом (июнь) — комплексные NPK 
            (нитроаммофоска, 30 г/м²). Осенью (сентябрь) — фосфорно-калийные (суперфосфат, 40 г/м² 
            + сернокислый калий, 20 г/м²) для укрепления корней перед зимой. 
            Удобрения разбрасывают по сухой траве и сразу поливают.
          </p>
          
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 mt-8 shadow-sm border border-white/50">
            <h3 className="text-lg font-semibold text-dark mb-2">Совет от правления</h3>
            <p className="text-gray-600">
              Для нашего климата отлично подходят травосмеси на основе мятлика лугового 
              и овсяницы красной. Избегайте хождения по мокрому газону — это уплотняет почву 
              и вредит корням. Раз в 2-3 года проводите аэрацию (прокалывание дернины вилами).
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
