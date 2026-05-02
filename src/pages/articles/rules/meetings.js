// src/pages/articles/rules/meetings.js
import Navbar from '../../../components/Navbar'
import AnimatedBackground from '../../../components/AnimatedBackground'
import { motion } from 'framer-motion'

export default function MeetingRules() {
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
            Порядок проведения общих собраний
          </h1>
          
          <img
            src="/almaz-snt/assets/articles/meeting.jpg"
            alt="Общее собрание"
            className="rounded-2xl w-full object-cover h-64 md:h-96 mb-8 shadow-md"
          />
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Общее собрание — высший орган управления СНТ «Алмаз». Его решения обязательны для всех садоводов. 
            Процедура проведения собраний строго регламентирована уставом и Федеральным законом № 217-ФЗ.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Уведомление о собрании</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            О проведении общего собрания члены СНТ уведомляются не позднее чем за 14 дней до даты проведения. 
            Уведомление публикуется на этом сайте, на информационном стенде у въездных ворот и рассылается 
            по электронной почте (при её наличии). В уведомлении указываются: дата, время, место, форма проведения 
            (очная, очно-заочная) и повестка дня. Вопросы, не включённые в повестку, 
            не могут быть вынесены на голосование в тот же день.
          </p>
          
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Кворум и право голоса</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Собрание правомочно, если на нём присутствуют более 50% членов СНТ лично или через представителей 
            (по доверенности). Каждый член товарищества имеет один голос. Доверенность должна быть нотариально заверена 
            или удостоверена председателем правления при личном присутствии доверителя. 
            При отсутствии кворума назначается повторное собрание через 14 дней, о чём вывешивается новое объявление.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Регламент и голосование</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Собрание открывает председатель правления или лицо, его замещающее. Избирается секретарь собрания 
            и счётная комиссия (3 человека). Голосование по каждому вопросу повестки открытое (поднятием рук), 
            если иное не установлено собранием. Решения принимаются простым большинством голосов, 
            за исключением вопросов, требующих квалифицированного большинства (2/3): 
            изменение устава, реорганизация или ликвидация СНТ, утверждение приходно-расходной сметы.
            По требованию не менее 10% присутствующих может быть проведено тайное голосование.
          </p>
          
          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Протокол и его доступность</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Результаты собрания оформляются протоколом, который подписывают председатель собрания, 
            секретарь и члены счётной комиссии. Протокол размещается на сайте СНТ и на информационном стенде 
            в течение 10 дней после собрания. Садовод, не согласный с решением, вправе обжаловать его 
            в судебном порядке в течение 6 месяцев. Копию протокола можно получить, обратившись в правление 
            в часы приёма.
          </p>
          
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 mt-8 shadow-sm border border-white/50">
            <h3 className="text-lg font-semibold text-dark mb-2">Ближайшее собрание</h3>
            <p className="text-gray-600">
              Очередное общее собрание состоится 15 мая 2026 года в 12:00 на площадке у центральных ворот. 
              Повестка и проект сметы доступны в разделе «Документы». Приходите — ваш голос важен.
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
