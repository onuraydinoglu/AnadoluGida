import { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Her hafta sonu Pazar 23:59:59
  const getEndOfWeek = () => {
    const now = new Date();
    const end = new Date();
    end.setDate(now.getDate() + (7 - now.getDay()));
    end.setHours(23, 59, 59, 999);
    return end;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const end = getEndOfWeek().getTime();
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-flow-col gap-4 text-center auto-cols-max mx-auto">
      <div className="flex flex-col p-2 text-neutral-content">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": timeLeft.days }}></span>
        </span>
        Tage
      </div>
      <div className="flex flex-col p-2 text-neutral-content">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": timeLeft.hours }}></span>
        </span>
        Std
      </div>
      <div className="flex flex-col p-2 text-neutral-content">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": timeLeft.minutes }}></span>
        </span>
        Min
      </div>
      <div className="flex flex-col p-2 text-neutral-content">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": timeLeft.seconds }}></span>
        </span>
        Sek
      </div>
    </div>
  );
};

export default Countdown;
