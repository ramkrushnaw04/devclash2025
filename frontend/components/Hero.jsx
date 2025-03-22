import React from "react";
import bg from "../src/icons/devkraft.png";
import Timer from "./Timer";

const Hero = () => {
  return (
    <div className="bg-black flex flex-col items-center h-[400px] w-full">
      <img src={bg} alt="" className="h-[80px] w-[80px]" />
      <p className="text-white text-[18px]">Pune's Biggest Tech Clash</p>
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
