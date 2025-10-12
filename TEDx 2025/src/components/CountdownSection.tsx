import bg from "../assets/images/countdown-bg.png";
import CountdownTimer from "./CountdownTimer";

export default function CountdownSection() {
  // set target date (adjust timezone/ISO string as needed)
  const targetDate = new Date("2025-11-28T00:00:00"); // YYYY-MM-DDTHH:mm:ss (local)

  return (
    <>
      <div
        className="relative bg-left bg-no-repeat bg-cover w-full h-[100vh]"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* Two-column flex layout: left text (top), right countdown (bottom-right) */}
          <div className="flex flex-col md:flex-row w-full h-full pt-32 pl-6 md:pl-32 pr-6 md:pr-24 pb-8">
            {/* Left column: keeps text at the top */}
            <div className="flex-1 flex flex-col justify-start">
              <p className="text-white leading-relaxed max-w-2xl fade-element">
                At the heart of every meaningful change lies an idea—one that
                sparks curiosity, challenges the norm, and dares us to dream
                differently. But inspiration alone isn’t enough. Real impact
                happens when ideas move people—when vision becomes action, courage
                meets responsibility, and conversations lead to change. This
                year’s theme is a call to think deeper, act bolder, and imagine
                brighter. Because tomorrow isn’t distant—it’s shaped by the impact
                we choose to make today.
              </p>
            </div>

            {/* Right column: fixed width, align content bottom-right */}
            <div className="w-full md:w-80 flex flex-col justify-end items-center md:items-end md:justify-end">
              <CountdownTimer targetDate={targetDate} className="bg-white p-6 rounded-lg gap-4 flex flex-col"/>
            </div>
          </div>
        </div>
      </>
    );
  }

