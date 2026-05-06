// src/pages/news/meeting-15-may.js
import Navbar from '../../components/Navbar'
import AnimatedBackgroundLight from '../../components/AnimatedBackgroundLight'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Meeting15May() {
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
            Важно
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2 mb-2 text-dark">
            Общее собрание 15 мая
          </h1>
          <p className="text-gray-500 text-sm mb-6">25 апреля 2026</p>

          <img
            src="/almaz-snt/assets/news/meeting-15-may.jpg"
            alt="Общее собрание СНТ Алмаз"
            className="rounded-xl w-full mb-6 shadow-md"
          />

          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              Уважаемые члены товарищества! 15 мая 2026 года в 12:00 на площадке
              у центральных ворот состоится ежегодное общее собрание СНТ «Алмаз».
              Явка всех собственников участков строго обязательна.
            </p>

            <h2 className="text-xl font-semibold text-dark mt-6">
              Повестка дня
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Отчёт председателя о проделанной работе за 2025 год.</li>
              <li>Утверждение приходно-расходной сметы на 2026 год.</li>
              <li>Выборы правления и ревизионной комиссии на новый срок.</li>
              <li>Обсуждение целевых программ: ремонт дорог, ограждение территории.</li>
              <li>Разное (вопросы садоводов, предложения по благоустройству).</li>
            </ul>

            <h2 className="text-xl font-semibold text-dark mt-6">
              Как подготовиться
            </h2>
            <p>
              Проекты документов (смета, отчёт, список кандидатов в правление) уже
              размещены в разделе «Документы» на нашем сайте. Ознакомьтесь с ними
              заранее — это существенно сэкономит время на собрании.
            </p>
            <p>
              Если у вас есть вопросы, которые вы хотите включить в повестку,
              отправьте их на электронную почту <a href="mailto:cnt-almaz@yandex.ru" className="text-gold underline">cnt-almaz@yandex.ru</a> не
              позднее 10 мая.
            </p>

            <h2 className="text-xl font-semibold text-dark mt-6">
              Регламент и голосование
            </h2>
            <p>
              Собрание считается правомочным при явке более 50% членов СНТ. При
              отсутствии кворума будет назначена повторная дата. Голосование по
              всем вопросам — открытое, поднятием рук. Для голосования
              необходимо иметь при себе документ, удостоверяющий личность.
            </p>
            <p>
              Если вы не можете присутствовать лично, вы вправе оформить
              доверенность на другого члена СНТ. Бланк доверенности можно
              скачать в разделе «Документы».
            </p>

            <div className="bg-gold/5 border border-gold/20 rounded-xl p-4 mt-6">
              <p className="font-medium text-dark">
                Важно:
              </p>
              <p className="text-sm text-gray-500">
                Решения, принятые на общем собрании, обязательны для всех
                садоводов. Не оставайтесь в стороне — ваш голос важен для
                будущего нашего товарищества!
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
