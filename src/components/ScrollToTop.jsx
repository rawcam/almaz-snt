// src/components/ScrollToTop.jsx
import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-green-deep text-white shadow-lg hover:bg-green-900 transition-colors flex items-center justify-center"
      aria-label="Наверх"
    >
      <i className="fa-solid fa-arrow-up" />
    </button>
  )
}
