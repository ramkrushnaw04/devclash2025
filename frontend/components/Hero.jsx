import React from "react";
import logo from "/logos/devclash.svg";
import Timer from "./Timer";

const Hero = () => {
    return (
        <main className="w-full flex flex-col items-center justify-start h-[calc(100vh-82px)] sm:h-[calc(100vh-102px)] px-4 sm:px-6">

            

            {/* Background image with object-cover to prevent squeezing */}
            <div className="absolute top-0 left-0 w-full h-full z-[-10] overflow-hidden">
                <img 
                    className="w-full h-full object-cover brightness-[30%]" 
                    src="/backgrounds/background.png" 
                    alt="Background" 
                />
            </div>

            {/* Logo */}
            <img
                src={logo}
                alt="DevClash Logo"
                className="h-[320px] sm:h-[160px] md:h-[400px] mt-[-70px]  mb-4 object-contain"
            />

            {/* Tagline */}
            <p
                className="text-white text-[14px] sm:text-[16px] md:text-[18px] mb-2 mt-[-80px] sm:mt-[-40px]"
                style={{ fontFamily: "Samarkan" }}
            >
                Pune's Biggest Tech Clash
            </p>

            {/* Timer Section */}
            <div className="w-full flex justify-center mb-4">
                <Timer />
            </div>

            {/* Participate Button */}
            <button
                className="text-white text-[18px] sm:text-[22px] mt-10 px-[30px] py-[12px] sm:px-[40px] sm:py-[15px] border-2 border-white rounded-[50px] cursor-pointer bg-transparent hover:bg-white hover:text-black transition-all "
                style={{ fontFamily: "Samarkan" }}
            >
                Participate Now
            </button>
        </main>
    );
};

export default Hero;