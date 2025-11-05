"use client";

import { motion } from "motion/react";
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

export default function VolunteerCard({ volunteer }: VolunteerCardProps) {
  return (
    <motion.div
      layout
      whileHover={{ width: '30rem' }} transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }} 
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

        <a
          href={volunteer.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 transition-all duration-300 transform group-hover:opacity-0 group-hover:scale-75 group-hover:pointer-events-none"
        >
          <ArrowUp
            className="text-white"
            style={{ transform: "rotate(45deg)", transformOrigin: "center" }}
          />
        </a>
      </div>

      {/* Image panel: hidden off-canvas to the right, slides in on parent hover */}
      <div className="absolute top-0 right-0 h-full w-48 sm:w-64 rounded-md overflow-hidden transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-10">
        <img
          className="w-full h-full object-cover"
          src={volunteer.image}
          alt={volunteer.group}
        />

        <a
          href={volunteer.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 transition-all duration-300"
        >
          <ArrowUp
            className="text-white"
            style={{ transform: "rotate(35deg)", transformOrigin: "center" }}
          />
        </a>
      </div>
    </motion.div>
  );
}
