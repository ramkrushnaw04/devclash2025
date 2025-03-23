import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2025-04-03T10:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-[500px] flex flex-wrap justify-evenly">
      <div className="flex flex-col items-center">
        <h1 className="text-orange-500 text-[70px]">
          {timeLeft.days.toString().padStart(2, "0")}
        </h1>
        <p className="text-white">DAYS</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-orange-500 text-[70px]">
          {timeLeft.hours.toString().padStart(2, "0")}
        </h1>
        <p className="text-white">HOURS</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-orange-500 text-[70px]">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </h1>
        <p className="text-white">MINUTES</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-orange-500 text-[70px]">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </h1>
        <p className="text-white">SECONDS</p>
      </div>
    </div>
  );
};

export default Timer;
