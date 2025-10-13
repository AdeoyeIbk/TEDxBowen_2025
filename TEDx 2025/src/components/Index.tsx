// import { motion } from "motion/react"



import Hero from "./Hero"
import BowenSection from "./About"
import Quote from "./Quote"
import CountdownSection from "./CountdownSection"
import TicketSection from "./TicketSection"
import Footer from "./Footer"

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-between">
      <Hero />
      <BowenSection />
      <Quote />
      <CountdownSection />
    {/* <Countdown /> */}
    {/* <motion.button className="px-6 py-2 bg-blue-600 text-white rounded-xs shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>Click Me</motion.button>  */}
      <TicketSection />
  <Footer />
    </div>)
}