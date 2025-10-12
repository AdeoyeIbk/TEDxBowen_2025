import { useEffect, useState } from "react";

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
    <div className={className}>
      <div className="self-end">
        <p className="text-black text-sm">Countdown to TEDx 2025</p>
      </div>

      <div className="flex gap-4 sm:gap-8 items-center text-red-500">
        <div className="text-center">
          <h4 className="text-3xl sm:text-5xl font-semibold">{timeLeft.days}</h4>
          <p className="text-sm">Days</p>
        </div>

        <span className="font-bold">:</span>

        <div className="text-center">
          <h4 className="text-3xl sm:text-5xl font-semibold">{fmt(timeLeft.hours)}</h4>
          <p className="text-sm">Hours</p>
        </div>

        <span className="font-bold">:</span>

        <div className="text-center">
          <h4 className="text-3xl sm:text-5xl font-semibold">{fmt(timeLeft.minutes)}</h4>
          <p className="text-sm">Minutes</p>
        </div>

        <span className="font-bold">:</span>

        <div className="text-center">
          <h4 className="text-3xl sm:text-5xl font-semibold">{fmt(timeLeft.seconds)}</h4>
          <p className="text-sm">Seconds</p>
        </div>
      </div>
    </div>
  );
}
