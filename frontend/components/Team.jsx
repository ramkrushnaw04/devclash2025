import React from "react";
import profilePic from "../src/assets/react.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareWhatsapp,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ScrollFloat from "./ScrollFloat";

const Team = () => {
  const profiles = [
    {
      Name: "Vedant Patil",
      Post: "President",
      Branch: "Computer Science",
      Work: "webdev",
      Whatsapp: "",
      Instagram: "",
      LinkedIn: "",
    },
    {
      Name: "Vedant Patil",
      Post: "President",
      Branch: "Computer Science",
      Work: "webdev",
      Whatsapp: "",
      Instagram: "",
      LinkedIn: "",
    },
    {
      Name: "Vedant Patil",
      Post: "President",
      Branch: "Computer Science",
      Work: "webdev",
      Whatsapp: "",
      Instagram: "",
      LinkedIn: "",
    },
  ];

  return (
    <div className="w-full py-20 bg-black flex flex-col items-center px-10">
      {/* <h1
        className="text-[#F16043] font-bold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[72px] mt-8 mb-6"
        style={{ fontFamily: "Samarkan" }}
      >
        EVENT TEAM
      </h1> */}
      <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=10%'
                    scrollEnd='bottom bottom-=50%'
                    stagger={0.03}
                >
                    EVENT TEAM
                </ScrollFloat>

      <div className="w-full flex flex-wrap justify-center gap-6">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="relative h-[300px] w-[200px] sm:h-[320px] sm:w-[220px] md:h-[350px] md:w-[240px] lg:h-[400px] lg:w-[260px] bg-black flex flex-col items-center justify-between rounded-2xl border-2 border-orange-300 p-3 shadow-lg transition-all duration-300 hover:scale-105"
          >
            <img
              src={profilePic}
              className="h-[60%] w-full rounded-2xl transition-all duration-300"
              alt="profile"
            />
            {/* Data Section */}
            <div className="w-full text-center">
              <h2 className="text-white text-[16px] md:text-[18px] lg:text-[20px]">
                {profile.Name}
              </h2>
              <h2 className="font-bold text-[#F16043] text-[14px] md:text-[16px]">
                {profile.Post}
              </h2>
            </div>
            {/* Links Section */}
            <div className="w-full flex flex-row justify-evenly mt-2">
              <a href={profile.Whatsapp} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faSquareWhatsapp}
                  className="text-[#F16043] hover:text-green-400"
                  style={{ height: "30px" }}
                />
              </a>
              <a href={profile.Instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  className="text-[#F16043] hover:text-pink-500"
                  style={{ height: "30px" }}
                />
              </a>
              <a href={profile.LinkedIn} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-[#F16043] hover:text-blue-500"
                  style={{ height: "30px" }}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
