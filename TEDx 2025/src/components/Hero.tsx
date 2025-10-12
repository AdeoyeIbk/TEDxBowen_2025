import { useEffect, useState } from "react";
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
    <div className="w-full flex items-center justify-center pt-8 md:pt-30 px-4 md:px-24 h-lvh">
      <picture className="absolute inset-0 -z-10 block h-full w-full">
        {/* Desktop (md+) uses heroBg, mobile/tablet uses smallHeroBg */}
        <source media="(min-width: 768px)" srcSet={heroBg}/>
        <img
          src={smallHeroBg}
          alt="hero background"
          className="h-full w-full object-cover object-right md:object-top"
        />
      </picture>
      <Header />

      <div className="flex flex-col md:flex-row w-full text-white sm:items-start md:items-center items-center justify-between gap-8">
        <div className="flex flex-col gap-4 h-full md:max-w-xl items-center sm:items-start sm:text-left">
          <div className="w-fit mb-4 sm:mb-0">
            <p className="font-thin">This November</p>
            <img src={underline} alt="" className="w-32 md:w-48 h-auto" />
          </div>

          {/* Desktop / md+: show stacked headings */}
          <h1 className="hidden md:block text-3xl font-bold text-left ">
            {headingLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Mobile: single-line carousel with fade */}
          <h1
            className={`block md:hidden text-3xl font-bold text-center transition-opacity duration-400 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            aria-live="polite"
          >
            {headingLines[current]}
          </h1>

          <div className="hidden md:block">
            <Button>Get your Tickets</Button>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-12 h-full items-center">
          <img src={themeImg} alt="" className="max-h-72 md:max-h-[21rem]" />

          <div
            className="flex items-center gap-2 sm:gap-8 pb-2 sm:pb-6 text-lg sm:text-2xl"
            style={{ fontFamily: "Stretch Pro, sans-serif" }}
          >
            <p className="text-right leading-4 sm:leading-7">
              29th NOV <br /> 2025
            </p>

            {/* divider: horizontal on small screens, vertical on md+ */}
            <div
              aria-hidden="true"
              className="w-px h-12 bg-white/20 mx-2 my-0 md:mx-0 md:my-2"
            />

            <p className="text-left leading-4 sm:leading-7">
              Library <br /> Conference <br /> Room
            </p>
          </div>

          {/* Mobile-only CTA placed below date/location */}
          <div className="md:hidden pb-12">
            <Button>Get your Tickets</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
