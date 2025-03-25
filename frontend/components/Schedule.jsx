import React, { useState, useEffect } from 'react'
import ScrollFloat from './ScrollFloat';
import { motion } from 'framer-motion';

const Card = ({ title, date, info }) => {
    return (
        <motion.div 
            className='w-72'
            whileHover={{ 
                scale: 1.05,
                // boxShadow: '0 10px 20px rgba(241, 96, 67, 0.2)',
                transition: { 
                    duration: 0.3,
                    ease: "easeInOut"
                }
            }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="flex items-center justify-center w-64 m-auto">
                <div className="bg-[#372511] text-white rounded-xl border-2 border-amber-700 p-4 text-center shadow-lg">
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <h3 className="text-2xl font-bold text-[#F16043] mb-6">{date}</h3>
                    <p className="text-sm h-[140px]"> {info} </p>
                </div>
            </div>
        </motion.div>
    );
};





const Lines = ({ color, isInitial = false, isFinal = false }) => {
    return (
        <div className='relative w-[150px] h-[150px] ' >

            <div className={`VERTICAL absolute  h-[130px] w-[6px] `} style={{ backgroundColor: color }}></div>
            <div className={`HORIZONTAL absolute h-[6px] w-[110px] left-[20px] bottom-0 `} style={{ backgroundColor: color }}></div>

            <div class={`LEFT-CURVE absolute bottom-[-21px] left-[-21px] w-[42px] h-[42px] border-[6px] border-b-transparent border-l-transparent border-t-transparent rotate-[-45deg] rounded-full ${color == '#fff' ? 'border-white' : 'border-[#F16043]'} `} ></div>
            <div class={`RIGHT-CURVE absolute bottom-[-21px] right-[-21px] w-[42px] h-[42px] border-[6px] border-b-transparent border-r-transparent border-t-transparent rotate-[45deg] rounded-full ${color == '#fff' ? 'border-white' : 'border-[#F16043]'} `} ></div>

            <div className='TOP-BLOB absolute h-[18px] w-[18px] top-[-1px] left-[-6px]  rounded-full' style={{ backgroundColor: color }}> </div>

            <div className='BOTTOM-BLOB absolute h-[18px] w-[18px] bottom-[-9px] left-[-9px]  rounded-full' style={{ backgroundColor: color }}> </div>

            {isInitial && <>
                <div className={`HORIZONTAL absolute h-[6px] w-[110px] left-[-125px] bottom-0 bg-[#F16043]`} ></div>
                <div className='BOTTOM-LEFT-BLOB absolute h-[18px] w-[18px] bottom-[-8px] left-[-132px] bg-[#F16043] rounded-full' > </div>
                <div class={`FIRST-CURVE absolute bottom-[-21px] left-[-21px] w-[42px] h-[42px] border-[6px] border-b-transparent border-r-transparent border-t-transparent rotate-[-45deg] rounded-full border-[#F16043] `} ></div>
            </>}
            {isFinal && <div className='BOTTOM-RIGHT-BLOB absolute h-[18px] w-[18px] bottom-[-9px] right-[-8px]  rounded-full' style={{ backgroundColor: color }}> </div>}
        </div>
    )
}


const Line = ({ color }) => {
    return (
        <div className='w-[100px] h-[80px] '>
            <div className={`VERTICAL absolute  h-[80px] w-[6px] `} style={{ backgroundColor: color }}></div>
            <div className='TOP-BLOB absolute h-[18px] w-[18px] top-[-1px] left-[-6px]  rounded-full' style={{ backgroundColor: color }}> </div>
            <div className='BOTTOM-BLOB absolute h-[18px] w-[18px] bottom-[-1px] left-[-6px]  rounded-full' style={{ backgroundColor: color }}> </div>
        </div>
    )
}







const Schedule = () => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()

        window.addEventListener('resize', () => {
            handleResize()
        })

        return () => {
            window.removeEventListener('resize', () => {
                handleResize()
            })
        }
    }, [])







    return (
        <section id='schedule' className="w-full max-w-screen overflow-hidden relative bg-black flex items-center flex-col justify-center py-8" >
            {/* <img className='w-full h-full absolute top-0 left-0 z-0 opacity-50' src="imagelink" alt="" /> */}


            <div className="text-center absolute top-[80px] ">
                {/* <h1 className="text-7xl font-bold text-[#F16043]" style={{ fontFamily: 'Samarkan' }}>SCHEDULE</h1> */}
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=10%'
                    scrollEnd='bottom bottom-=50%'
                    stagger={0.03}
                >
                    SCHEDULE
                </ScrollFloat>
            </div>

            {!isMobile && <div className='flex flex-col gap-[178px] scale-[85%] pt-10'>
                <div className='top-cards  w-[1164px] h-[500px] flex items-center justify-center gap-[12px]'>
                    <div className='relative '>
                        <Card
                            title={'Registrations Open'}
                            date={'23 March'}
                            info={'On this day, the registration portal will open for team leaders to enroll themselves and their respective teams. Teams should ensure timely registration to secure their spot in the hackathon.'}
                        />
                        <div className='absolute left-36'>
                            <Lines color={'#fff'} isInitial={true} />

                        </div>
                    </div>

                    <div className='relative '>
                        <Card
                            title={'Hackathon Kickoff'}
                            date={'6 April'}
                            info={'The official commencement of the hackathon! Participants can start working on their projects. Resources, guidelines, and support will be provided to ensure a smooth start to the coding journey.'}
                        />
                        <div className='absolute left-36'>
                            <Lines color={'#fff'} />

                        </div>
                    </div>

                    <div className='relative '>
                        <Card
                            title={'Results Out'}
                            date={'7 April'}
                            info={"The moment of truth! Winners will be announced. It’s important to note that this date is subject to change based on project complexity. Stay tuned for updates and mark your calendars!"}
                        />
                        <div className='absolute left-36'>
                            <Lines color={'#fff'} isFinal={true} />

                        </div>
                    </div>

                </div>

                <div className='bottom-cards w-[1164px]  h-[270px] flex items-center justify-center gap-[12px] '>

                    <div className='relative '>
                        <div className='absolute left-36 top-[-9rem] rotate-180 scale-x-[-1]'>
                            <Lines color={'#F16043'} />
                        </div>
                        <Card
                            title={'Last date to register'}
                            date={'3 April'}
                            info={'This marks the deadline for all teams and individual participants to complete their registration process. Late registrations will not be considered, so make sure to register before this date.'}
                        />
                    </div>

                    <div className='relative '>
                        <div className='absolute left-36 top-[-9rem] rotate-180 scale-x-[-1]'>
                            <Lines color={'#F16043'} />
                        </div>
                        <Card
                            title={'Hackathon Concludes'}
                            date={'7 April'}
                            info={'Participants need to wrap up their projects as the hackathon concludes. Submission guidelines will be provided, and teams must adhere to the deadlines for project submission.'}
                        />
                    </div>

                </div>
            </div>}



            {isMobile && <div className='bottom-cards w-full mt-28 py-[100px] flex flex-col items-center justify-center gap-20 '>

                <div className='relative '>
                    <Card
                        title={'Registrations Open'}
                        date={'23 March'}
                        info={'On this day, the registration portal will open for team leaders to enroll themselves and their respective teams. Teams should ensure timely registration to secure their spot in the hackathon.'}
                    />
                    <div className='absolute left-36'>
                        <Line color={'#fff'} />
                    </div>
                </div>

                <div className='relative '>
                    <Card
                        title={'Last date to register'}
                        date={'3 April'}
                        info={'This marks the deadline for all teams and individual participants to complete their registration process. Late registrations will not be considered, so make sure to register before this date.'}
                    />
                    <div className='absolute left-36 '>
                        <Line color={'#F16043'} />
                    </div>
                </div>

                <div className='relative '>
                    <Card
                        title={'Hackathon Kickoff'}
                        date={'6 April'}
                        info={'The official commencement of the hackathon! Participants can start working on their projects. Resources, guidelines, and support will be provided to ensure a smooth start to the coding journey.'}
                    />
                    <div className='absolute left-36'>
                        <Line color={'#fff'} />
                    </div>
                </div>

                <div className='relative '>
                    <Card
                        title={'Hackathon Concludes'}
                        date={'7 April'}
                        info={'Participants need to wrap up their projects as the hackathon concludes. Submission guidelines will be provided, and teams must adhere to the deadlines for project submission.'}
                    />
                    <div className='absolute left-36 '>
                        <Line color={'#F16043'} />
                    </div>
                </div>



                <div className='relative '>
                    <Card
                        title={'Results Out'}
                        date={'7 April'}
                        info={"The moment of truth! Winners will be announced. It’s important to note that this date is subject to change based on project complexity. Stay tuned for updates and mark your calendars!"}
                    />
                    <div className='absolute left-36'>
                        <Line color={'#fff'} />
                    </div>
                </div>

            </div>}



        </section>
    )
}

export default Schedule
