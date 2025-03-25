import React from 'react';
import ScrollFloat from './ScrollFloat';

import { motion } from 'framer-motion';

const Card = ({ src, title }) => {
  return (
    <motion.div 
      className="w-64 sm:w-64 bg-[#372511] rounded-3xl border-4 border-[#A37E48] p-6 flex flex-col items-center text-center h-auto min-h-[250px] sm:min-h-[320px]"
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 100 
      }}
    >
      <div className='w-full h-40 sm:h-48 flex items-center justify-center mb-4'>
        <motion.img 
          src={src} 
          className='object-contain rounded-xl max-h-full max-w-full'
          whileHover={{ 
            scale: 1.1,
            rotate: 2,
            transition: { duration: 0.3 }
          }}
        />
      </div>
      <h1 className="text-[#F16043] text-base sm:text-lg font-medium mt-auto">
        {title}
      </h1>
    </motion.div>
  );
};




const EventDetails = () => {
    return (
        <div id='prizes' className="w-full  bg-black flex flex-col items-center py-20 px-4 sm:px-0">
            {/* <h1 className="text-[#F16043] text-4xl sm:text-7xl font-bold text-center mb-8" style={{ fontFamily: 'Samarkan' }}>
                PRIZES
            </h1> */}
            <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=10%'
                    scrollEnd='bottom bottom-=50%'
                    stagger={0.03}
                >
                    PRIZES
                </ScrollFloat>

            <div className="flex flex-col flex-wrap sm:flex-row gap-4 sm:gap-12 justify-center items-center mt-12 w-full px-6">



                <Card src='/images/gold-sack.png' title={'UPTO 1 LAKHS'} />
                <Card src='/images/trophy.png' title={'TROPHY'} />
                <Card src='/images/treasure.png' title={'GOODIES'} />
                <Card src='/images/internship.png' title={'INTERNSHIP OPPORTUNITIES'} />

            </div>
        </div>
    );
};

export default EventDetails;
