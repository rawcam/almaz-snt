// src/pages/articles/services.js
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <div className="min-h-screen bg-almond">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-deep">
            Услуги подрядчиков
          </span>
          <h1 className="text-5xl md:text-6xl font-medium mt-4 mb-8 text-dark">
            Проверенные специалисты
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            СНТ сотрудничает с рядом подрядчиков, предоставляющих услуги по
            специальным ценам для членов товарищества.
          </p>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-tree text-green-deep mt-1"></i>
              <span><strong>Вырубка деревьев</strong> — от 500 ₽/дерево. ИП Петров А.В., тел. +7 (926) 111-22-33</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-dumpster text-green-deep mt-1"></i>
              <span><strong>Вывоз мусора</strong> — от 300 ₽/рейс. ООО «Чистый двор»</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-house-lock text-green-deep mt-1"></i>
              <span><strong>Ремонт домов и заборов</strong> — смета по запросу. Бригада Сергея, тел. +7 (916) 987-65-43</span>
            </li>
          </ul>
          <p className="text-gray-500 text-sm mt-8">
            Для заказа свяжитесь с подрядчиком напрямую или через правление.
            Цены ориентировочные.
          </p>
        </motion.article>
      </div>
    </div>
  )
}
