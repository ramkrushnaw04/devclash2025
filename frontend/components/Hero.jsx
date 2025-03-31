import React from "react";
import logo from "/logos/devclash.svg";
import Timer from "./Timer";


const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;
  
    return (
      <div
        className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
        style={{
          backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          animationDuration: animationDuration,
        }}
      >
        {text}
      </div>
    );
  };

  

const Hero = () => {
    return (
        <main className="w-full flex flex-col items-center justify-start min-h-[850px] h-screen pt-[82px] sm:pt-[102px] pb-4  px-4 sm:px-6">
            

            {/* Background image with object-cover to prevent squeezing */}
            <div className="absolute top-0  left-0 w-full min-h-[850px] h-screen z-[-10] overflow-hidden">
                <img 
                    className="w-full h-full object-cover brightness-[30%]" 
                    src="/backgrounds/background.png" 
                    alt="Background" 
                />
                 <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
                 <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
            </div>

            {/* Logo */}
            <img
                src={logo}
                alt="DevClash Logo"
                className="h-[320px] sm:h-[160px] md:h-[400px] mt-[-70px]  mb-4 object-contain"
            />

            {/* Tagline */}
            <p
                className="text-white text-[14px] sm:text-[16px] md:text-[23px] mb-[30px] mt-[-80px] "
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
                className="text-white  bg-transparent text-[18px] sm:text-[22px] mt-2 sm:mt-10 px-[30px] py-[12px] sm:px-[40px] sm:py-[15px] border-2 border-white rounded-[50px] cursor-pointer hover:bg-white hover:text-black transition-all "
                style={{ fontFamily: "Samarkan" }}
                onClick={() => window.location.href = "https://forms.gle/Mw4EhUBZWadVYDXJ7"}
            >
                Participate Now
            </button>
        </main>
    );
};

export default Hero;