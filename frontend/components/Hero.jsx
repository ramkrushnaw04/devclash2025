import React from "react";
import bg from "../src/assets/DevClash.logo_1.jpg";
import Timer from "./Timer";

const Hero = () => {
  return (
    <main className="bg-black w-full flex flex-col items-center justify-center min-h-screen px-4 sm:px-6">
      {/* Logo */}
      <img
        src={bg}
        alt="DevClash Logo"
        className="h-[120px] sm:h-[160px] md:h-[200px] w-auto mb-4"
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

      {/* Countdown Text */}
      <h1
        className="text-white text-[18px] sm:text-[20px] md:text-[24px] mt-2"
        style={{ fontFamily: "Samarkan" }}
      >
        Countdown Begins
      </h1>

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
