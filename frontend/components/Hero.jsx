import React from "react";
import bg from "../src/assets/DevClash.logo_1.jpg";
import Timer from "./Timer";

const Hero = () => {
  return (
    <div className="bg-black flex flex-col items-center h-[400px] w-full">
      <img src={bg} alt="" className="h-[100px] w-[400px]" />
      <p className="text-white text-[15px]">Pune's Biggest Tech Clash</p>
      <Timer />
      <br />
      <h1 className="text-white">Countdown Begins</h1>
      <br />
      <button className="text-white px-[40px] py-[15px] border-2 border-white rounded-[60px] cursor-pointer bg-transparent hover:bg-white hover:text-black transition-all">
        Participate Now
      </button>
    </div>
  );
};

export default Hero;
