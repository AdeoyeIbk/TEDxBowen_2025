import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))

// Loading component with animation
const PulseAnimation = ({ visible = true }: { visible?: boolean }) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black h-screen p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.45 } }}
    transition={{ duration: 0.45 }}
    aria-hidden={!visible}
  >
    <motion.div className="flex flex-col items-center justify-center gap-4 max-w-full" initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: [0, 1, 1], scale: [0.85, 1.12, 0.88, 1.6] }}
        transition={{ duration: 4.5, times: [0, 0.45, 1], ease: "easeInOut" }}>
      <motion.h1
        className="text-white font-bold tracking-tight text-2xl md:text-4xl"
       
      >
        <span className="text-red-600  text-5xl md:text-8xl">TED<sup>x</sup></span> <br />
        <span className="ml-3 ">Bowen University</span>
      </motion.h1>

      {/* subtle pulse ring to emphasize the intro */}
      <motion.span
        className="block w-20 h-0.5 bg-red-600 rounded"
        initial={{ scaleX: 0.2, opacity: 0.6 }}
        animate={{ scaleX: [0.2, 1.1, 0.9, 2], width: "full", opacity: [0.6, 1, 0.9] }}
        transition={{ duration: 5.0, times: [0, 0.5, 1], ease: "easeInOut" }}
      />
    </motion.div>
  </motion.div>
)

function App() {
  // keep intro visible for at least this many ms so animation can play
  const INTRO_MIN_MS = 5000
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), INTRO_MIN_MS)
    return () => clearTimeout(t)
  }, [])

  return (
    <Router>
      <div className="App">
        {/* Suspense fallback is null so we control the intro overlay separately.
            The overlay will remain for at least INTRO_MIN_MS even if routes load fast. */}
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as needed */}
          </Routes>
        </Suspense>
  {/* intro overlay — shown while showIntro is true; AnimatePresence enables exit animation */}
  <AnimatePresence>{showIntro && <PulseAnimation key="intro" visible={showIntro} />}</AnimatePresence>
      </div>
    </Router>
  )
}

export default App
