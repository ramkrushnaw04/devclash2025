import React from 'react';
import ScrollFloat from './ScrollFloat';

const AboutUsCard = () => {
  return (
    <div id='about' className="flex relative min-h-screen bg-black items-center justify-center p-4 pt-36 pb-8">
        <img className='w-full h-full absolute top-0 left-0  object-cover brightness-[10%]' src="/images/about-us-background.webp" alt="" />
        <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
        <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>

      <div className="bg-stone z-10 flex flex-col  gap-16 text-white rounded-2xl border-3 border-[rgb(165,129,74)] bg-[#372511] p-8 max-w-4xl text-center ">
        {/* <h2 className="text-7xl font-bold text-[#F16043]" style={{ fontFamily: 'Samarkan' }}>ABOUT US</h2> */}
        <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=10%'
                    scrollEnd='bottom bottom-=50%'
                    stagger={0.03}
                >
                    ABOUT US
                </ScrollFloat>
        
        <p className="text-lg">
          DevKraft is a student-founded club on a mission to transform the engineering experience. We're
          dedicated to fostering a vibrant coding culture, making learning enjoyable, promoting holistic
          student development and help forge lasting connections with seniors and industry mentors who can
          help guide you through your journey. We also help students gain valuable industry insights in our
          expert panel events, where technical experts host interactive Q&A sessions. Furthermore, we
          provide a platform for the students to showcase their tech prowess in our technical challenge-
          based events.
        </p>
      </div>
    </div>
  );
};

export default AboutUsCard;