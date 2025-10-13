import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { motion } from 'motion/react'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))

// Loading component with animation
const LoadingSpinner = () => (
  <motion.div 
    className="flex items-center justify-center min-h-screen bg-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
    <motion.p 
      className="ml-4 text-white text-lg"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      Loading TEDx Bowen...
    </motion.p>
  </motion.div>
)

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as needed */}
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
