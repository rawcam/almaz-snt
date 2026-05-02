// src/components/Navbar.jsx
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 bg-almond/80 backdrop-blur-xl border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-green-deep">
          АЛМАЗ
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/news" className="text-gray-600 hover:text-green-deep transition">Новости</Link>
          <Link href="/docs" className="text-gray-600 hover:text-green-deep transition">Документы</Link>
          <Link href="/payments" className="text-gray-600 hover:text-green-deep transition">Ведомости</Link>
          <Link href="/contacts" className="text-gray-600 hover:text-green-deep transition">Контакты</Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-almond/95 backdrop-blur-xl">
          <Link href="/news" className="block py-2 text-gray-600">Новости</Link>
          <Link href="/docs" className="block py-2 text-gray-600">Документы</Link>
          <Link href="/payments" className="block py-2 text-gray-600">Ведомости</Link>
          <Link href="/contacts" className="block py-2 text-gray-600">Контакты</Link>
        </div>
      )}
    </nav>
  )
}
