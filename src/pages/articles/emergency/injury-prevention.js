// src/pages/articles/emergency/injury-prevention.js
import Navbar from '../../../components/Navbar'
import AnimatedBackground from '../../../components/AnimatedBackground'
import { motion } from 'framer-motion'

export default function InjuryPrevention() {
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
            Предупреждение травматизма на участке
          </h1>

          <img
            src="/almaz-snt/assets/articles/injury-prevention.jpg"
            alt="Предупреждение травматизма"
            className="rounded-2xl w-full object-cover h-64 md:h-96 mb-8 shadow-md"
          />

          <p className="text-gray-600 leading-relaxed mb-6">
            По статистике МЧС, более трети травм на дачных участках связаны с падениями с высоты,
            переноской тяжестей и неосторожным обращением с колюще-режущим инструментом.
            Соблюдение простых правил поможет сохранить здоровье вам и вашим близким.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Работа на лестницах и подмостях</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Выбор и осмотр лестницы.</strong> Используйте только устойчивые алюминиевые или деревянные конструкции
            с противоскользящими накладками на опорах. Перед установкой осмотрите ступени и тетиву на трещины и прогибы.
            Деревянные лестницы не должны быть окрашены — краска скрывает дефекты.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Установка.</strong> Угол наклона лестницы — примерно 75° (соотношение 1:4: на каждый 4 метра высоты
            основание отодвигается на 1 метр от стены). Верхняя часть должна выступать над уровнем опоры минимум на 1 метр.
            Не устанавливайте лестницу на неровный грунт без подкладок, не наращивайте её подручными предметами.
            Для мягкой почвы используйте широкую доску под опоры.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Правила работы на высоте.</strong> При подъёме и спуске всегда держитесь двумя руками, стойте лицом к лестнице.
            Не поднимайтесь выше третьей сверху ступени. Запрещается работать с лестницы электроинструментом с усилием
            (бензопила, перфоратор) — вибрация может опрокинуть опору. Для длительных работ с землёй (обрезка высоких деревьев)
            используйте подмости или пригласите специалиста с автовышкой. Если работаете вдвоём, один страхует лестницу снизу.
            Не оставляйте инструменты на ступенях — при падении они могут травмировать стоящего внизу.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Переноска тяжестей</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Оцените вес.</strong> Предельная норма разового подъёма для мужчины — 50 кг (не чаще 2 раз в час),
            для женщины — 15 кг. Мешки с цементом, удобрениями, бордюрный камень лучше перевозить на тачке или вдвоём.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Техника подъёма.</strong> Поднимайте груз, сгибая ноги в коленях, а не спину. Держите предмет
            как можно ближе к телу. Избегайте поворотов корпуса с грузом — сначала повернитесь всем телом.
            При переноске длинных предметов (доски, трубы) следите, чтобы не задеть окружающих. Вдвоём груз несите
            синхронно, заранее договорившись о команде «подняли — опустили».
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Колюще-режущий инструмент</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Ножи и секаторы.</strong> Режьте всегда от себя, располагая свободную руку выше линии реза.
            Переносите инструмент в чехле или с закрытым лезвием. Не кладите острые предметы в карманы одежды.
            Для заточки используйте специальные приспособления, а не рандомные точильные камни — сорвавшийся нож
            может нанести серьёзную рану.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Стекло и кровельные материалы.</strong> При резке листового металла или шифера надевайте
            перчатки с противоскользящим покрытием и защитные очки. Шифер содержит асбестовую пыль — работайте в респираторе.
            Осколки стекла и обрезки немедленно убирайте в плотный контейнер, не выбрасывайте в общую кучу мусора,
            где они могут травмировать ноги.
          </p>

          <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">Погрузка и разгрузка транспорта</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Организация разгрузки.</strong> Поставьте автомобиль на ручной тормоз на ровной площадке.
            При открытии бортов грузовика стойте сбоку — незакреплённый груз может вывалиться.
            Используйте пандусы или специальные сходни для спуска тяжёлых предметов (мотоблок, бочки с водой).
            Запрещается находиться под стрелой крана-манипулятора и в кузове во время перемещения груза.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Фиксация.</strong> Перевозимые материалы (доски, трубы, листы) должны быть надёжно закреплены
            стяжными ремнями, а не верёвкой. Свес длинномерного груза за габариты автомобиля обозначается красным флажком
            (днём) или световозвращателем (ночью). Сыпучие грузы (песок, щебень) накрывайте тентом.
          </p>

          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 mt-8 shadow-sm border border-white/50">
            <h3 className="text-lg font-semibold text-dark mb-2">Рекомендуемый минимум СИЗ на участке</h3>
            <p className="text-gray-600">
              • Защитные очки (2-3 шт.)<br/>
              • Перчатки хлопчатобумажные и прорезиненные<br/>
              • Респиратор или полумаска со сменными фильтрами<br/>
              • Противошумные наушники<br/>
              • Каска для работы с высоты<br/>
              • Аптечка первой помощи (см. статью «Скорая помощь»)<br/>
              Проверяйте состояние СИЗ каждый сезон и вовремя заменяйте изношенные.
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
