"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

type Volunteer = {
  group: string;
  image: string;
  description: string;
  link: string;
};

type VolunteerCardProps = {
  volunteer: Volunteer;
};

// simple responsive hook
function useIsDesktop(breakpoint = 640) {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= breakpoint : true
  );

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isDesktop;
}

export default function VolunteerCard({ volunteer }: VolunteerCardProps) {
  const isDesktop = useIsDesktop(640); // sm breakpoint

  return (
    <motion.div
      layout
      // only animate expansion on desktop (keeps previous behavior)
      whileHover={isDesktop ? { width: "30rem", scale: 1.01 } : {}}
      whileTap={isDesktop ? "" : {scale: 1.01}}
      transition={isDesktop ? { type: "tween", duration: 0.35, ease: "easeOut" } : { duration: 0 }}
      // subtle entrance if not already animated by parent wrapper
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative text-white p-4 rounded-lg shadow-md flex gap-4 mx-4 bg-white/10 overflow-hidden cursor-pointer"
    >
      {/* Left side (text + arrow) */}
      <div className="flex flex-col gap-4 w-48 justify-around z-10">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold capitalize text-left">
            {volunteer.group}
          </h3>
          <p className="text-left text-sm">{volunteer.description}</p>
        </div>

        <motion.a
          href={volunteer.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 transition-all duration-300 transform sm:group-hover:opacity-0 sm:group-hover:scale-75 sm:group-hover:pointer-events-none"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          aria-label={`Open ${volunteer.group} signup`}
        >
          <ArrowUp className="text-white" style={{ transform: "rotate(45deg)", transformOrigin: "center" }} />
        </motion.a>
      </div>

      {/* Image panel */}
      <div
        className={`absolute top-0 right-0 h-full w-48 sm:w-64 rounded-md overflow-hidden transform ${
          isDesktop
            ? "translate-x-full sm:group-hover:translate-x-0 transition-transform duration-500 ease-out"
            : "hidden"
        } z-10`}
      >
        <img
          className="w-full h-full object-cover"
          src={volunteer.image}
          alt={volunteer.group}
        />

        <motion.a
          href={volunteer.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 transition-all duration-300"
          whileHover={{ scale: 1.08, rotate: 5 }}
          whileTap={{ scale: 0.96 }}
          aria-label={`Open ${volunteer.group} signup`}
        >
          <ArrowUp className="text-white" style={{ transform: "rotate(35deg)", transformOrigin: "center" }} />
        </motion.a>
      </div>
    </motion.div>
  );
}
