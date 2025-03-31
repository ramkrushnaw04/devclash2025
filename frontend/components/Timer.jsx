import React, { useState, useEffect } from "react";
import GoldenFrame from "./GoldenFrame";


const Timer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const targetDate = new Date("2025-04-05T08:00:00").getTime();

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

                <div className="flex flex-col items-center">
                    <div className="flex items-center">
                        <GoldenFrame number={timeLeft.days.toString().padStart(2, "0")} text={'DAYS'}/>

                        
                        <span className="text-white text-[60px] sm:text-[80px] font-bold ml-2" style={{ fontFamily: "Samarkan" }}>
                            :
                        </span>
                    </div>
                </div>

                {/* Hours */}
                <div className="flex flex-col items-center">
                    <div className="flex items-center">
                        <GoldenFrame number={timeLeft.hours.toString().padStart(2, "0")} text={'HOURS'} />
                        <span className="text-white text-[60px] sm:text-[80px] font-bold ml-2" style={{ fontFamily: "Samarkan" }}>
                            :
                        </span>
                    </div>
                </div>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                    <div className="flex items-center">
                        <GoldenFrame number={timeLeft.minutes.toString().padStart(2, "0")} text={'MINUTES'}/>
                        <span className="text-white text-[60px] sm:text-[80px] font-bold ml-2" style={{ fontFamily: "Samarkan" }}>
                            :
                        </span>
                    </div>
                </div>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                    <GoldenFrame number={timeLeft.seconds.toString().padStart(2, "0")} text={'SECONDS'} />
                </div>
            </div>}
















            {isMobile && (
    <div className="w-full sm:w-[700px] flex justify-center items-center">
        <div className="grid grid-cols-2 gap-4 place-items-center">
            <h1
                className="text-orange-500 text-[70px] font-bold"
                style={{ fontFamily: "Kruti" }}
            >
                <GoldenFrame number={timeLeft.days.toString().padStart(2, "0")} text={'DAYS'} />
            </h1>

            <h1
                className="text-orange-500 text-[70px] font-bold"
                style={{ fontFamily: "Kruti" }}
            >
                <GoldenFrame number={timeLeft.hours.toString().padStart(2, "0")} text={'HOURS'} />
            </h1>

            <h1
                className="text-orange-500 text-[70px] font-bold"
                style={{ fontFamily: "Kruti" }}
            >
                <GoldenFrame number={timeLeft.minutes.toString().padStart(2, "0")} text={'MINUTES'} />
            </h1>

            <h1
                className="text-orange-500 text-[70px] font-bold"
                style={{ fontFamily: "Kruti" }}
            >
                <GoldenFrame number={timeLeft.seconds.toString().padStart(2, "0")} text={'SECONDS'}  />
            </h1>
        </div>
    </div>
)}









        </>
    );
};

export default Timer;
