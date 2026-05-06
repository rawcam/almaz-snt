// src/pages/news/season-opening.js
import Navbar from '../../components/Navbar'
import AnimatedBackgroundLight from '../../components/AnimatedBackgroundLight'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SeasonOpening() {
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
            Событие
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2 mb-2 text-dark">
            Открытие летнего сезона 2026
          </h1>
          <p className="text-gray-500 text-sm mb-6">01 мая 2026</p>

          {/* Место под фото */}
          <img
            src="/almaz-snt/assets/news/season-opening.jpg"
            alt="Открытие сезона в СНТ Алмаз"
            className="rounded-xl w-full mb-6 shadow-md"
          />

          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              Дорогие садоводы! Поздравляем вас с началом нового дачного сезона
              2026 года! Пусть этот год будет урожайным, тёплым и радостным.
              Правление СНТ «Алмаз» подготовило для вас несколько приятных
              нововведений и напоминает о важных правилах, которые помогут
              сделать наше товарищество ещё более комфортным и безопасным.
            </p>

            <h2 className="text-xl font-semibold text-dark mt-6">
              Организационные моменты
            </h2>
            <p>
              С 1 мая на территории СНТ начинается регулярное обслуживание
              инженерных сетей. Проверьте состояние электрических щитков,
              убедитесь в исправности проводки на участке. Электрик СНТ будет
              доступен по субботам с 11:00 до 14:00 для консультаций и
              подключения новых приборов.
            </p>
            <p>
              Вывоз мусора будет осуществляться по новому графику — машина
              приезжает по вторникам и пятницам. Контейнеры установлены у
              центральных ворот. Убедительная просьба не складировать
              строительный мусор и крупногабаритные отходы в контейнеры — для
              этого необходимо заказывать отдельную машину через правление.
            </p>

            <h2 className="text-xl font-semibold text-dark mt-6">
              Финансовые вопросы
            </h2>
            <p>
              Напоминаем, что срок оплаты членских взносов за 2026 год — до 1
              июля. Сумма зависит от размера участка: 6 соток — 1 200 ₽, 8
              соток — 1 500 ₽, 12 соток — 1 800 ₽. Также продолжается сбор
              целевых взносов на ограждение территории (2 000 ₽) и ремонт дорог
              (1 200 ₽). Квитанции для оплаты доступны в разделе «Документы».
            </p>

            <h2 className="text-xl font-semibold text-dark mt-6">
              Планы на сезон
            </h2>
            <p>
              В этом году правление планирует завершить установку нового забора
              по периметру СНТ, отремонтировать центральную аллею и обустроить
              дополнительную зону отдыха у пруда. Все работы будут проводиться
              за счёт целевых взносов, отчёт о расходовании средств будет
              публиковаться на сайте ежемесячно.
            </p>

            <div className="bg-gold/5 border border-gold/20 rounded-xl p-4 mt-6">
              <p className="font-medium text-dark">
                Совет от правления:
              </p>
              <p className="text-sm text-gray-500">
                Проверьте свои контактные данные у председателя. Это необходимо
                для оперативной связи в экстренных ситуациях и для рассылки
                уведомлений о собраниях.
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
