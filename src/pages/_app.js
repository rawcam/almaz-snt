// src/pages/_app.js
import '../styles/globals.css'
import { useRouter } from 'next/router'
import AnimatedBackgroundLight from '../components/AnimatedBackgroundLight'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  return (
    <div className="relative min-h-screen">
      {!isHomePage && <AnimatedBackgroundLight opacity={0.5} />}
      <Component {...pageProps} />
    </div>
  )
}
