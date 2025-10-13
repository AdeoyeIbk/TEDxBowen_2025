import { motion } from "motion/react";
import bg from "../assets/images/countdown-bg.png";
import CountdownTimer from "./CountdownTimer";

export default function CountdownSection() {
  // set target date 
  const targetDate = new Date("2025-11-28T00:00:00"); // YYYY-MM-DDTHH:mm:ss (local)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-left bg-no-repeat bg-cover w-full h-[100vh]"
      style={{ backgroundImage: `url(${bg})` }}
    >
       
        <div className="flex flex-col lg:flex-row w-full h-full pt-32 pl-6 md:pl-32 pr-6 md:pr-24 pb-8 gap-8 justify-between">
         
          <motion.div 
            className="flex flex-col justify-start lg:flex-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-white leading-relaxed w-full text-base lg:text-lg md:text-2xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              At the heart of every meaningful change lies an idea—one that
              sparks curiosity, challenges the norm, and dares us to dream
              differently. But inspiration alone isn't enough. Real impact
              happens when ideas move people—when vision becomes action, courage
              meets responsibility, and conversations lead to change. This
              year's theme is a call to think deeper, act bolder, and imagine
              brighter. Because tomorrow isn't distant—it's shaped by the impact
              we choose to make today.
            </motion.p>
          </motion.div>

          {/* Countdown section: centered on mobile/tablet, right-aligned on large screens */}
          <motion.div 
            className="w-full flex flex-col justify-center items-center lg:w-80 lg:justify-end lg:items-end"
            initial={{ x: 100, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <CountdownTimer
              targetDate={targetDate}
              className="bg-white p-6 md:p-8 lg:p-6 rounded-lg gap-4 flex flex-col"
            />
          </motion.div>
        </div>
    </motion.section>
  );
}
