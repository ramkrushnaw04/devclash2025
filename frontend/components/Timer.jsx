import React, { useState, useEffect } from "react";
import GoldenFrame from "./GoldenFrame";


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


    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()

        window.addEventListener('resize', () => {
            handleResize()
        })

        return () => {
            window.removeEventListener('resize', () => {
                handleResize()
            })
        }
    }, [])


    return (
        <>
            {!isMobile && <div className="w-full sm:w-[700px] flex justify-center items-center gap-2 sm:gap-4" >
                {/* <Ring /> */}
                {/* Days */}

                <div className="flex flex-col items-center">
                    <div className="flex items-center">
                        <GoldenFrame number={timeLeft.days.toString().padStart(2, "0")} />
                        <span className="text-white text-[60px] sm:text-[80px] font-bold ml-2" style={{ fontFamily: "Samarkan" }}>
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
                        <GoldenFrame number={timeLeft.hours.toString().padStart(2, "0")} />
                        <span className="text-white text-[60px] sm:text-[80px] font-bold ml-2" style={{ fontFamily: "Samarkan" }}>
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
                        <GoldenFrame number={timeLeft.minutes.toString().padStart(2, "0")} />
                        <span className="text-white text-[60px] sm:text-[80px] font-bold ml-2" style={{ fontFamily: "Samarkan" }}>
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
                    <GoldenFrame number={timeLeft.seconds.toString().padStart(2, "0")} />
                    <p
                        className="text-white text-[12px] sm:text-[16px]"
                        style={{ fontFamily: "Samarkan" }}
                    >
                        SECONDS
                    </p>
                </div>
            </div>}


            {isMobile && <div className="w-full sm:w-[700px] flex justify-center items-center gap-2 sm:gap-4">
                {/* Mobile: Vertical stack, Desktop: Horizontal with labels */}
                <div className="flex flex-col  items-center justify-center ">
                    {/* Mobile view - stacked vertically without labels or colons */}
                    <h1
                        className="text-orange-500 text-[70px] font-bold"
                        style={{ fontFamily: "Kruti" }}
                    >
                        <GoldenFrame number={timeLeft.days.toString().padStart(2, "0")} />
                    </h1>

                    <h1
                        className="text-orange-500 text-[70px] font-bold"
                        style={{ fontFamily: "Kruti" }}
                    >
                        <GoldenFrame number={timeLeft.hours.toString().padStart(2, "0")} />
                    </h1>

                    <h1
                        className="text-orange-500 text-[70px] font-bold"
                        style={{ fontFamily: "Kruti" }}
                    >
                        <GoldenFrame number={timeLeft.minutes.toString().padStart(2, "0")} />
                    </h1>

                    <h1
                        className="text-orange-500 text-[70px] font-bold"
                        style={{ fontFamily: "Kruti" }}
                    >
                         <GoldenFrame number={timeLeft.seconds.toString().padStart(2, "0")} />
                    </h1>
                </div>


            </div>}
        </>
    );
};

export default Timer;
