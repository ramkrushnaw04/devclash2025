import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const Card = ({ title, children }) => {
  return (
    <div className="w-[350px] bg-[#372511] rounded-3xl border-3 border-[#A37E48] p-6 flex flex-col flex-shrink-0 min-h-[320px] items-center text-center">
      <h1 className="text-[#F16043] text-2xl sm:text-3xl font-bold">{title}</h1>
      {children}
    </div>
  );
};

const EventDetails = () => {
  return (
    <div className="w-full bg-black flex flex-col items-center py-80 px-4 sm:px-0">
      <h1 className="text-[#F16043] text-4xl sm:text-6xl font-bold text-center" style={{ fontFamily: 'Samarkan' }}>
        EVENT DETAILS
      </h1>

      <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-12 justify-center items-center mt-12 w-full px-4 sm:px-20">
        
        {/* ABOUT EVENT */}
        <Card title="ABOUT EVENT">
          <p className="mt-3 sm:mt-6 text-white text-sm sm:text-md sm:w-[90%]">
            Get ready for an exhilarating hackathon experience at DEVCLASH. Our event is a celebration of creativity, coding prowess and teamwork.
            Join us from <b>5 Apr to 6 Apr</b> for an unforgettable journey. Explore the world of technology, showcase your skills and vie for incredible prizes. Let's innovate, collaborate and create something extraordinary!
          </p>
        </Card>

        {/* EVENT TIMING */}
        <Card title="EVENT TIMING">
          <div className="mt-12 flex flex-col gap-4 mt-4">
            <div className="flex gap-3 items-center">
              <FaRegCalendarAlt className="text-xl sm:text-2xl text-white" />
              <h3 className="text-white text-sm sm:text-lg">From 5 Apr to 6 Apr 2025</h3>
            </div>
            <div className="flex gap-3 items-center">
              <FaClock className="text-xl sm:text-2xl text-white" />
              <h3 className="text-white text-sm sm:text-lg">10:00 AM onwards</h3>
            </div>
          </div>
        </Card>

        {/* EVENT LOCATION */}
        <Card title="EVENT LOCATION">
          <p className="text-white text-sm sm:text-md mt-3 sm:mt-6">
            Venue details will be announced soon! Stay tuned.
          </p>
        </Card>

      </div>
    </div>
  );
};

export default EventDetails;