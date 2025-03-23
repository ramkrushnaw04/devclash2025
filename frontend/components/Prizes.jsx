import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const EventDetails = () => {
    return (
        <div className="w-full  bg-black flex flex-col items-center pt-16 px-4 sm:px-0">
            <h1 className="text-[#F16043] text-4xl sm:text-7xl font-bold text-center" style={{ fontFamily: 'Samarkan' }}>
                PRIZES
            </h1>

            <div className="flex flex-col flex-wrap sm:flex-row gap-4 sm:gap-12 justify-center items-center mt-12 w-full px-6">

                <div className="w-full sm:w-[150px] h-[450px] max-w-sm bg-[#372511] rounded-3xl border-3 border-[#A37E48] p-6 flex flex-col flex-grow min-h-[250px] sm:min-h-[320px] items-center text-center">
                    <div className='h-[40vh] w-full bg-transparent'>
                        <img src='https://t3.ftcdn.net/jpg/04/77/07/64/360_F_477076484_RJY8gSYGCDy5dVKEWwiZumIaJfJYou5H.jpg' className='object-contain h-full w-full' />
                    </div>
                    <h1 className="text-[#F16043] text-md sm:text-lg font-medium mt-5">UPTO 1 LAKHS</h1>
                </div>

                <div className="w-full sm:w-[150px] h-[450px] max-w-sm bg-[#372511] rounded-3xl border-3 border-[#A37E48] p-6 flex flex-col flex-grow min-h-[250px] sm:min-h-[320px] items-center text-center">
                    <div className='h-[40vh] w-full bg-transparent'>
                        <img src='https://img.freepik.com/free-vector/realistic-illustration-gold-cup-with-red-ribbon-winner-leader-champion_1262-13474.jpg?w=360' className='object-contain h-full w-full' />
                    </div>
                    <h1 className="text-[#F16043] text-md sm:text-lg font-medium mt-5">DEVELOPER OF THE YEAR TITLE</h1>
                </div>


                <div className="w-full sm:w-[150px] h-[450px] max-w-sm bg-[#372511] rounded-3xl border-3 border-[#A37E48] p-6 flex flex-col flex-grow min-h-[250px] sm:min-h-[320px] items-center text-center">
                    <div className='h-[40vh] w-full bg-transparent'>
                        <img src='https://m.media-amazon.com/images/I/71Zl18NXaWL.jpg' className='object-contain h-full w-full' />
                    </div>
                    <h1 className="text-[#F16043] text-md sm:text-lg font-medium mt-5">GOODIES</h1>
                </div>


                <div className="w-full sm:w-[150px] h-[450px] max-w-sm bg-[#372511] rounded-3xl border-3 border-[#A37E48] p-6 flex flex-col flex-grow min-h-[250px] sm:min-h-[320px] items-center text-center">
                    <div className='h-[40vh] w-full bg-transparent'>
                        <img src='https://cdn.vectorstock.com/i/500p/59/60/graduation-cap-and-diploma-vector-2175960.jpg' className='object-contain h-full w-full' />
                    </div>
                    <h1 className="text-[#F16043] text-md sm:text-lg font-medium mt-5">INTERNSHIP OPPORTUNITIES</h1>
                </div>

            </div>
        </div>
    );
};

export default EventDetails;
