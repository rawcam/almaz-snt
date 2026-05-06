// src/pages/news/garbage-schedule.js
import Navbar from '../../components/Navbar'
import AnimatedBackgroundLight from '../../components/AnimatedBackgroundLight'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function GarbageSchedule() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackgroundLight opacity={0.5} />
      <Navbar />
      <div className="container mx-auto px-4 py-20 relative z-10 max-w-4xl">
        <Link href="/news" className="text-gold hover:underline text-sm">
          ← Назад к новостям
        </Link>
        <article className="mt-4 bg-white/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-sm border border-white/50">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold">
            Инфраструктура
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2 mb-2 text-dark">
            График вывоза мусора
          </h1>
          <p className="text-gray-500 text-sm mb-6">10 апреля 2026</p>

          <img
            src="/almaz-snt/assets/news/garbage-schedule.jpg"
            alt="Контейнерная площадка СНТ Алмаз"
            className="rounded-xl w-full mb-6 shadow-md"
          />

          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              Уважаемые садоводы! С 20 апреля 2026 года в СНТ «Алмаз»
              вводится новое расписание вывоза твёрдых бытовых отходов.
              Машина будет приезжать два раза в неделю — по вторникам и
              пятницам, с 8:00 до 10:00.
            </p>

            <h2 className="text-xl font-semibold text-dark mt-6">
              Где находятся контейнеры
            </h2>
            <p>
              Контейнерная площадка расположена у центральных ворот. На ней
              установлены три евроконтейнера объёмом по 1,1 м³ каждый. Этого
              достаточно для регулярного вывоза бытового мусора со всего
              товарищества при условии соблюдения правил.
            </p>

            <h2 className="text-xl font-semibold text-dark mt-6">
              Что можно выбрасывать
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Бытовые отходы (остатки пищи, упаковка, бумага).</li>
              <li>Пластиковые бутылки и канистры (желательно в сжатом виде).</li>
              <li>Стеклянные банки и бутылки.</li>
              <li>Мелкий садовый мусор (ветки, листва) — только в пакетах.</li>
            </ul>

            <h2 className="text-xl font-semibold text-dark mt-6">
              Что категорически запрещено
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Строительный мусор (кирпичи, бетон, доски).</li>
              <li>Крупногабаритные предметы (мебель, бытовая техника).</li>
              <li>Опасные отходы (батарейки, лампы, химикаты).</li>
              <li>Горючие и легковоспламеняющиеся жидкости.</li>
            </ul>
            <p>
              Для вывоза строительного мусора и крупногабаритных предметов
              необходимо заказать отдельный контейнер через правление. Заявки
              принимаются по телефону <strong>+7 (496) 123-45-67</strong> или
              по почте <a href="mailto:cnt-almaz@yandex.ru" className="text-gold underline">cnt-almaz@yandex.ru</a>.
            </p>

            <h2 className="text-xl font-semibold text-dark mt-6">
              Ответственность за нарушения
            </h2>
            <p>
              Захламление территории и нарушение правил утилизации влечёт
              предупреждение, а при повторных нарушениях — штраф в размере
              1 000 рублей, согласно решению общего собрания от 15.03.2026.
              Убедительная просьба соблюдать чистоту и порядок — это наш общий
              дом!
            </p>

            <div className="bg-gold/5 border border-gold/20 rounded-xl p-4 mt-6">
              <p className="font-medium text-dark">
                Контактная информация:
              </p>
              <p className="text-sm text-gray-500">
                По вопросам вывоза мусора обращайтесь к председателю в часы
                приёма (суббота, 11:00–14:00) или звоните по телефону
                +7 (496) 123-45-67.
              </p>
            </div>
          </div>
        </article>
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
