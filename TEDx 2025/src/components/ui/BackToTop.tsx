import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const onScroll = () => setShow(window.scrollY > 320)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = () => {
    if (typeof window === "undefined") return
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleClick}
          aria-label="Back to top"
          className="fixed right-6 bottom-6 z-50 flex items-center justify-center h-12 w-12 rounded-full bg-red-500 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" style={{ transform: "rotate(0deg)" }} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
