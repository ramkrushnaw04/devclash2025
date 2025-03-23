import React from "react";
import logo from "../src/assets/DevClash.logo_1.jpg";
import Timer from "./Timer";

const Hero = () => {
    return (
        <main className="w-full flex flex-col items-center justify-start pt-32 h-[calc(100vh-102px)] px-4 sm:px-6">

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
                className="h-[120px] sm:h-[160px] md:h-[200px] w-auto mb-4 object-contain"
            />

            {/* Tagline */}
            <p
                className="text-white text-[14px] sm:text-[16px] md:text-[18px] mb-2"
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
                className="text-white text-[18px] sm:text-[22px] px-[30px] py-[12px] sm:px-[40px] sm:py-[15px] border-2 border-white rounded-[50px] cursor-pointer bg-transparent hover:bg-white hover:text-black transition-all mt-4"
                style={{ fontFamily: "Samarkan" }}
            >
                Participate Now
            </button>
        </main>
    );
};

export default Hero;