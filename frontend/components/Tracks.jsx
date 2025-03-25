
import ScrollFloat from './ScrollFloat';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TrackCard = ({ track }) => {
    return (
      <motion.div 
        className="w-72 rounded-3xl border-3 border-[rgb(165,129,74)] bg-opacity-20 bg-[#372511] p-6 flex-shrink-0"
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
        <motion.img 
                  src={track.imageUrl} 
                  className='object-contain rounded-xl max-h-full max-w-full'
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 2,
                    transition: { duration: 0.3 }
                  }}
                />
        <h2 className="text-xl md:text-2xl font-bold text-center text-[#F16043] font-samarkan  my-4">
          {track.title}
        </h2>
        <p className="text-gray-100 text-center text-sm md:text-base">
          {track.description}
        </p>
      </motion.div>
    );
  };



  


const Tracks = () => {
    const trackData = [
        {
            title: "FINTECH",
            description: "Empowering financial growth with secure, innovative solutions. From digital payments to investment platforms, we revolutionize how you manage your wealth.",
            imageUrl: '/images/fintech.png'
        },
        {
            title: "EDUTECH",
            description: "Shaping the future of learning with interactive platforms that inspire curiosity and boost academic success. Learning, reimagined for the digital age.",
            imageUrl: '/images/edutech.png'
        },
        {
            title: "HEALTHCARE",
            description: "Delivering smarter healthcare solutions with advanced technology for diagnosis, treatment, and well-being. Ensuring a healthier tomorrow, today.",
            imageUrl: '/images/healthcare.png'
        },
        {
            title: "AGRICULTURE",
            description: "The backbone of civilization, providing food, raw materials, and economic stability. With evolving techniques and technology, agriculture continues to sustain global populations and support livelihoods.",
            imageUrl: '/images/agriculture.png'
        }
    ];

    return (
        <section id='domain' className="w-full min-h-screen relative bg-black flex items-center flex-col justify-center gap-16 py-20 sm:py-40 overflow-hidden" >
            <img className='w-full h-full absolute top-0 left-0  object-cover brightness-[10%]' src="/images/tracks-background.webp" alt="" />
            <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
            <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
            {/* Main Title */}
            <div className="text-center">
                {/* <h1 className="text-7xl font-bold text-[#F16043]" style={{ fontFamily: 'Samarkan' }}>TRACKS</h1> */}
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=10%'
                    scrollEnd='bottom bottom-=50%'
                    stagger={0.03}
                >
                    TRACKS
                </ScrollFloat>
            </div>

            <div className="max-w-full mx-auto pb-5 z-10 px-6">
                <div className="flex gap-9 justify-center flow-row px-2 w-full flex-wrap">
                    {trackData.map((track, index) => (
                        <TrackCard key={index} track={track} />
                    ))}
                </div>
            </div>


        </section>
    );
};

export default Tracks;