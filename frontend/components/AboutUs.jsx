import React from 'react';

const AboutUsCard = () => {
  return (
    <div id='about' className="flex bg-black items-center justify-center p-4 py-36">
      <div className="bg-stone flex flex-col  gap-16 text-white rounded-2xl border-3 border-[rgb(165,129,74)] bg-[#372511] p-8 max-w-4xl text-center ">
        <h2 className="text-7xl font-bold text-[#F16043]" style={{ fontFamily: 'Samarkan' }}>ABOUT US</h2>
        
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