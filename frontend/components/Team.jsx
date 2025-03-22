import React from 'react'
import profilePic from "../src/assets/react.svg"

const Team = () => {
  const profiles = [
    {
      Name: "Vedant Patil",
      Post: "President",
      Branch: "Computer Science",
      Work: "webdev",
      LinkedIn: "",
      Github: "",
      Gmail: ""
    },
    {
      Name: "Vedant Patil",
      Post: "President",
      Branch: "Computer Science",
      Work: "webdev",
      LinkedIn: "",
      Github: "",
      Gmail: ""
    },
    {
      Name: "Vedant Patil",
      Post: "President",
      Branch: "Computer Science",
      Work: "webdev",
      LinkedIn: "",
      Github: "",
      Gmail: ""
    }
  ]

  return (
      <div className="h-[100%] bg-black flex flex-wrap justify-center">
      <h1 className="text-orange-400 font-bold text-[40px]">EVENT TEAM</h1>
      <div className="h-[400px] w-full flex flex-wrap justify-evenly items-center">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="relative h-[350px] w-[200px] bg-black flex flex-wrap justify-center rounded-2xl border-3 border-orange-300"
          >
            <img src={profilePic} className="h-[60%] w-full rounded-2xl transition-all duration-300"/>

            {/* Data Section */}
            <div className="h-[15%] flex flex-wrap flex-col justify-between text-center">
                <h2 className="text-white">{profile.Name}</h2>
                <h2 className="font-bold text-orange-400">{profile.Post}</h2>
            </div>

            {/* Links Section */}
            <div className="h-[%] flex flex-row">
                <a
                  href={profile.LinkedIn}
                  className="font-bold text-orange-400 hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.Github}
                  className="font-bold text-orange-400 hover:underline"
                >
                  Github
                </a>
                <a
                  href={profile.Gmail}
                  className="font-bold text-orange-400 hover:underline"
                >
                  Gmail
                </a>
            </div>
          </div>
        ))}
      </div>
      </div>
  )
}

export default Team
