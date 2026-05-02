// src/pages/articles/garden/apple-trees.js
import Navbar from '../../../components/Navbar'
import AnimatedBackground from '../../../components/AnimatedBackground'
import { motion } from 'framer-motion'

export default function AppleTrees() {
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
            Посадка яблонь, груш и вишни
          </h1>
          
          <img
            src="/almaz-snt/assets/articles/apple-orchard.jpg"
            alt="Яблоневый сад"
            className="rounded-2xl w-full object-cover h-64 md:h-96 mb-8 shadow-md"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Весна — оптимальное время для посадки плодовых деревьев в средней полосе. 
            Правильная посадка — залог здоровья и будущего урожая. Выбирайте солнечное место, 
            защищённое от сильных ветров, с уровнем грунтовых вод не выше 2 метров.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Подготовка ямы</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Яму готовят за 2-3 недели до посадки. Для яблони и груши размер — 80×80 см, 
            для вишни — 60×60 см. Верхний плодородный слой откладывают отдельно, 
            затем смешивают с 2-3 вёдрами перегноя, 200 г суперфосфата и 100 г сернокислого калия. 
            На дно ямы укладывают дренаж из щебня или битого кирпича (10-15 см).
          </p>
          
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Техника посадки</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Саженец помещают в яму так, чтобы корневая шейка (место перехода корней в ствол) 
            находилась на 5-7 см выше уровня земли. Корни аккуратно расправляют, засыпают 
            подготовленной смесью, периодически встряхивая деревце для заполнения пустот. 
            Почву утрамбовывают, формируют поливочный круг и обильно поливают (2-3 ведра воды).
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Уход после посадки</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            После полива приствольный круг мульчируют торфом или перегноем слоем 8-10 см. 
            Саженец подвязывают к колышку мягким шпагатом. В первый год полив проводят 
            еженедельно (1-2 ведра), в засушливую погоду — чаще. Осенью стволы белят 
            для защиты от солнечных ожогов и морозобоин.
          </p>
          
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 mt-8 shadow-sm border border-white/50">
            <h3 className="text-lg font-semibold text-dark mb-2">Совет от правления</h3>
            <p className="text-gray-600">
              Приобретайте саженцы только в проверенных питомниках. Для нашего региона 
              хорошо подходят сорта: яблоня — Антоновка, Коричное полосатое; 
              груша — Лада, Чижовская; вишня — Владимирская, Молодёжная.
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
