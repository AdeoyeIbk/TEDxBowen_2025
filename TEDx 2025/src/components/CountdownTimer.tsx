import { useEffect, useState } from "react";
import { motion } from "motion/react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

function getTimeLeft(target: Date): TimeLeft {
  const now = Date.now();
  const diff = target.getTime() - now;
  if (diff <= 0)
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };

  const secondsTotal = Math.floor(diff / 1000);
  const days = Math.floor(secondsTotal / (24 * 3600));
  const hours = Math.floor((secondsTotal % (24 * 3600)) / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = secondsTotal % 60;

  return { days, hours, minutes, seconds, expired: false };
}

interface Props {
  targetDate: Date | string;
  className?: string;
  onExpire?: () => void;
}

export default function CountdownTimer({
  targetDate,
  className = "",
  onExpire,
}: Props) {
  const target =
    typeof targetDate === "string" ? new Date(targetDate) : targetDate;
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target));

  useEffect(() => {
    if (timeLeft.expired) {
      onExpire?.();
      return;
    }

    const id = setInterval(() => {
      const tl = getTimeLeft(target);
      setTimeLeft(tl);
      if (tl.expired) {
        clearInterval(id);
        onExpire?.();
      }
    }, 1000);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  const fmt = (n: number) => String(n).padStart(2, "0");

  return (
    <motion.div 
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="self-end"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-black text-sm">Countdown to TEDx 2025</p>
      </motion.div>

      <motion.div 
        className="flex gap-6 sm:gap-10 md:gap-12 lg:gap-8 items-center text-red-500"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h4 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl font-semibold"
            key={timeLeft.days}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {timeLeft.days}
          </motion.h4>
          <p className="text-sm md:text-base">Days</p>
        </motion.div>

        <motion.span 
          className="font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          viewport={{ once: true }}
          animate={{ scale: [1, 1.1, 1] }}
        >
          :
        </motion.span>

        <motion.div 
          className="text-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h4 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl font-semibold"
            key={timeLeft.hours}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {fmt(timeLeft.hours)}
          </motion.h4>
          <p className="text-sm md:text-base">Hours</p>
        </motion.div>

        <motion.span 
          className="font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          viewport={{ once: true }}
          animate={{ scale: [1, 1.1, 1] }}
        >
          :
        </motion.span>

        <motion.div 
          className="text-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h4 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl font-semibold"
            key={timeLeft.minutes}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {fmt(timeLeft.minutes)}
          </motion.h4>
          <p className="text-sm md:text-base">Minutes</p>
        </motion.div>

        <motion.span 
          className="font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          viewport={{ once: true }}
          animate={{ scale: [1, 1.1, 1] }}
        >
          :
        </motion.span>

        <motion.div 
          className="text-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h4 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-5xl font-semibold"
            key={timeLeft.seconds}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {fmt(timeLeft.seconds)}
          </motion.h4>
          <p className="text-sm md:text-base">Seconds</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
