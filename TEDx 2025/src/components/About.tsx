import { motion } from "motion/react";
import bg from "../assets/images/tedx-bowen-background-image.webp";
import senateBuilding from "../assets/images/senate-building (1).webp";

export default function BowenSection() {
  return (
    <motion.section
      className="relative bg-left bg-no-repeat bg-cover w-full pt-20 md:pt-64"
      style={{ backgroundImage: `url(${bg})` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-full mx-auto relative min-h-[28rem] relative">
        <motion.div 
          className="absolute top-0 right-0 h-full flex flex-col items-end text-right pr-6 p-4 z-20"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl font-bold text-white mb-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            What is TEDx Bowen University?
          </motion.h2>
          <motion.p 
            className="text-white leading-relaxed max-w-xl lg:max-w-xl sm:max-w-sm text-sm"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            TEDxBowen University is an independently organized TEDx event
            officially licensed by TEDx and proudly hosted at Bowen University,
            Iwo, Osun State. It is part of TED's global movement to share "ideas
            worth spreading" — bringing together inspiring speakers, visionaries,
            students, creatives, and changemakers who share ideas that challenge,
            educate, and ignite transformation.
          </motion.p>
        </motion.div>
        <img src={senateBuilding} alt="senate building" className="relative bottom-0 left-0"/>
      </div>
    </motion.section>
  );
}