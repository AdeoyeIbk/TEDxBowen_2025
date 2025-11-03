import { lazy, Suspense } from 'react'
import { motion } from 'motion/react'

// Lazy load individual sections for better performance
const Hero = lazy(() => import('../components/Hero'))
const BowenSection = lazy(() => import('../components/About'))
const Quote = lazy(() => import('../components/Quote'))
const CountdownSection = lazy(() => import('../components/CountdownSection'))
const TicketSection = lazy(() => import('../components/TicketSection'))
const VolunteerSection = lazy(() => import('../components/VolunteerSection'))
const Footer = lazy(() => import('../components/Footer'))

// Section loading component
const SectionLoader = ({ name }: { name: string }) => (
  <motion.div 
    className="flex items-center justify-center py-20 bg-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
    />
    <motion.p 
      className="ml-3 text-white text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      Loading {name}...
    </motion.p>
  </motion.div>
)

export default function Home() {
  return (
    <motion.div 
      className="flex flex-col items-center justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Suspense fallback={<SectionLoader name="Hero" />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<SectionLoader name="About" />}>
        <BowenSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader name="Quote" />}>
        <Quote />
      </Suspense>
      
      <Suspense fallback={<SectionLoader name="Countdown" />}>
        <CountdownSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader name="Tickets" />}>
        <TicketSection />
      </Suspense>

        <Suspense fallback={<SectionLoader name="Volunteer" />}>
        <VolunteerSection />
      </Suspense>

      <Suspense fallback={<SectionLoader name="Footer" />}>
        <Footer />
      </Suspense>
    </motion.div>
  )
}