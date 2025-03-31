import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import ScrollFloat from './ScrollFloat';
import { motion } from 'framer-motion';

const Card = ({ title, children }) => {
    return (
        <motion.div
            className="sm:w-[350px] w-64 bg-[#372511] rounded-3xl border-3 border-[#A37E48] p-6 flex flex-col flex-shrink-0 min-h-[320px] items-center text-center"
            whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 20px rgba(241, 96, 67, 0.2)',
                transition: {
                    duration: 0.3,
                    ease: "easeInOut"
                }
            }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.h1
                className="text-[#F16043] text-2xl sm:text-3xl font-bold"
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        delay: 0.2
                    }
                }}>{title}</motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        delay: 0.3
                    }
                }}
            >

                {children}
            </motion.div>
        </motion.div>
    );
};



const EventDetails = () => {
    return (
        <div className="w-full relative bg-black flex flex-col items-center py-20 sm:py-80 px-4 sm:px-0">
            {/* <h1 className="text-[#F16043] text-4xl sm:text-6xl font-bold text-center" style={{ fontFamily: 'Samarkan' }}>
        EVENT DETAILS
      </h1> */}

            <img className='w-full h-full absolute top-0 left-0  object-cover brightness-[10%]' src="/images/event-details-background.webp" alt="" />
            <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
            <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>


            <div className='flex flex-col sm:flex-row items-center justify-center sm:gap-7'>

                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=10%'
                    scrollEnd='bottom bottom-=50%'
                    stagger={0.03}
                >
                    EVENT
                </ScrollFloat>

                <div className='mt-[-70px] sm:mt-0' >
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=10%'
                        scrollEnd='bottom bottom-=50%'
                        stagger={0.03}
                    >
                        DETAILS
                    </ScrollFloat>

                </div>
            </div>

            <div className="flex flex-col z-10 sm:flex-row flex-wrap gap-6 sm:gap-12 justify-center items-center mt-12 w-full px-4 sm:px-20">

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
                    <div className="eventSection withLocation">
                        <a
                            className="eventLocationAnchor"
                            href="https://maps.app.goo.gl/hAtE8qGvbsAwTjtF7"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="eventLocationImage rounded-2xl mt-5"
                                src={"/icons/map.png"}
                                alt="Google Map showing event location"
                            />
                        </a>
                    </div>
                </Card>

            </div>
        </div>
    );
};

export default EventDetails;