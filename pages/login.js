import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь будет запрос к API
    alert('Вход в личный кабинет (демо)')
  }

  return (
    <div className="min-h-screen bg-almond">
      <Navbar />
      <div className="container mx-auto px-4 py-20 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/30"
        >
          <h1 className="text-3xl font-medium text-dark mb-2">
            Личный кабинет
          </h1>
          <p className="text-gray-500 mb-8">
            Войдите для просмотра платежей и передачи показаний.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Номер участка или email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-green-deep transition-all"
                placeholder="Участок 12"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Пароль
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-green-deep transition-all"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-green-deep text-white font-medium hover:bg-[#12392e] transition-colors shadow-lg mt-2"
            >
              Войти
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-6 text-center">
            * Функционал будет расширен после подключения серверной части.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
