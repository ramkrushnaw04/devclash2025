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
    <div className="w-full sm:w-[700px] flex justify-center items-center gap-2 sm:gap-4">
      {/* Days */}
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <h1
            className="text-orange-500 text-[60px] sm:text-[80px] font-bold"
            style={{ WebkitTextStroke: "1px white" }}
          >
            {timeLeft.days.toString().padStart(2, "0")}
          </h1>
          <span className="text-orange-500 text-[60px] sm:text-[80px] font-bold ml-2">
            :
          </span>
        </div>
        <p
          className="text-white text-[12px] sm:text-[16px]"
          style={{ fontFamily: "Samarkan" }}
        >
          DAYS
        </p>
      </div>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <h1
            className="text-orange-500 text-[60px] sm:text-[80px] font-bold"
            style={{ WebkitTextStroke: "1px white" }}
          >
            {timeLeft.hours.toString().padStart(2, "0")}
          </h1>
          <span className="text-orange-500 text-[60px] sm:text-[80px] font-bold ml-2">
            :
          </span>
        </div>
        <p
          className="text-white text-[12px] sm:text-[16px]"
          style={{ fontFamily: "Samarkan" }}
        >
          HOURS
        </p>
      </div>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <h1
            className="text-orange-500 text-[60px] sm:text-[80px] font-bold"
            style={{ WebkitTextStroke: "1px white" }}
          >
            {timeLeft.minutes.toString().padStart(2, "0")}
          </h1>
          <span className="text-orange-500 text-[60px] sm:text-[80px] font-bold ml-2">
            :
          </span>
        </div>
        <p
          className="text-white text-[12px] sm:text-[16px]"
          style={{ fontFamily: "Samarkan" }}
        >
          MINUTES
        </p>
      </div>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <h1
          className="text-orange-500 text-[60px] sm:text-[80px] font-bold"
          style={{ WebkitTextStroke: "1px white" }}
        >
          {timeLeft.seconds.toString().padStart(2, "0")}
        </h1>
        <p
          className="text-white text-[12px] sm:text-[16px]"
          style={{ fontFamily: "Samarkan" }}
        >
          SECONDS
        </p>
      </div>
    </div>
  );
};

export default Timer;
