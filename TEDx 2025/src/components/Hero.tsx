import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Header from "./Header";
import Button from "./ui/Button";
import heroBg from "../assets/images/hero_bg.webp";
import underline from "../assets/images/underline.png";
import themeImg from "../assets/images/theme.png";
import smallHeroBg from "../assets/images/smaller_hero-bg.png";

export default function Hero() {
  const headingLines = ["Inspire minds.", "Propel action.", "Create tomorrow."];

  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const length = headingLines.length;
    const interval = setInterval(() => {
      // fade out, change, fade in
      setVisible(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile, headingLines.length]);

  return (
    <motion.div 
      className="w-full flex items-center pt-8 md:pt-30 px-4 md:px-24 h-lvh"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.picture 
        className="absolute inset-0 -z-10 block h-full w-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Desktop (md+) uses heroBg, mobile/tablet uses smallHeroBg */}
        <source media="(min-width: 768px)" srcSet={heroBg} />
        <img
          src={smallHeroBg}
          alt="hero background"
          className="h-full w-full object-cover object-right md:object-top"
        />
      </motion.picture>
      <Header />

      <motion.div 
        className="flex flex-col md:flex-row w-full text-white sm:items-start md:items-center items-center justify-between gap-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div 
          className="flex flex-col gap-4 h-full md:max-w-xl items-center sm:items-start sm:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="w-fit mb-4 sm:mb-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="font-thin">This November</p>
            <motion.img 
              src={underline} 
              alt="" 
              className="w-32 md:w-48 h-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            />
          </motion.div>

          {/* Desktop / md+: show stacked headings */}
          <motion.h1 
            className="hidden md:block text-3xl font-bold text-left"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {headingLines.map((line, idx) => (
              <motion.span 
                key={idx} 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + (idx * 0.2) }}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          {/* Mobile: single-line carousel with fade */}
          <motion.h1
            className={`block md:hidden text-3xl font-bold text-center transition-opacity duration-400 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            aria-live="polite"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {headingLines[current]}
          </motion.h1>

          <motion.div 
            className="hidden md:block"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button>Get your Tickets</Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-8 md:gap-12 h-full items-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.img 
            src={themeImg} 
            alt="" 
            className="max-h-72 md:max-h-[21rem]"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 1.4, 
              type: "spring",
              stiffness: 100 
            }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          />

          <motion.div
            className="flex items-center gap-2 sm:gap-8 pb-2 sm:pb-6 text-lg sm:text-2xl"
            style={{ fontFamily: "Stretch Pro, sans-serif" }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <motion.p 
              className="text-right leading-4 sm:leading-7"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              29th NOV <br /> 2025
            </motion.p>

            {/* divider: horizontal on small screens, vertical on md+ */}
            <motion.div
              aria-hidden="true"
              className="w-px h-12 bg-white/20 mx-2 my-0 md:mx-0 md:my-2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: 2 }}
            />

            <motion.p 
              className="text-left leading-4 sm:leading-7"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              Library <br /> Conference <br /> Room
            </motion.p>
          </motion.div>

          {/* Mobile-only CTA placed below date/location */}
          <motion.div 
            className="md:hidden pb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button>Get your Tickets</Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
