// src/pages/news.js
import Navbar from '../components/Navbar'
import AnimatedBackground from '../components/AnimatedBackground'
import { motion } from 'framer-motion'

const newsItems = [ /* ... без изменений */ ]

export default function News() {
  return (
    <div className="min-h-screen bg-almond">
      <AnimatedBackground opacity={0.2} />
      <Navbar />
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* контент */}
      </div>
    </div>
  )
}
