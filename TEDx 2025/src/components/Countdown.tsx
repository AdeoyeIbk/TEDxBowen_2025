import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2025-11-25T00:00:00");

function getTimeRemaining(to: Date) {
  const total = Math.max(0, to.getTime() - Date.now());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(TARGET_DATE));

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeRemaining(TARGET_DATE));
    }, 1000);

    return () => clearInterval(id);
  }, [timeLeft]);

  const { days, hours, minutes, seconds, total } = timeLeft;

  return (
    <div className="countdown" aria-live="polite">
      <h2 className="text-xl">Countdown to Event</h2>
      <h5>Event starts on November 15, 2025</h5>
      {total > 0 ? (
        <p>
          <span className="text-6xl font-bold text-red-600">{days}</span> <span className="font-bold">days,</span> {""}
          <span className="text-5xl font-bold text-red-600">{hours.toString().padStart(2, "0")}</span> <span className="font-bold">hours,</span> {""}
          <span className="text-4xl font-bold text-red-600">{minutes.toString().padStart(2, "0")}</span> <span className="font-bold">minutes,</span> {""}
          <span className="text-3xl font-bold text-red-600">{seconds.toString().padStart(2, "0")}</span> <span className="font-bold">seconds</span>
        </p>
      ) : (
        <p>The event has started.</p>
      )}
    </div>
  );
}