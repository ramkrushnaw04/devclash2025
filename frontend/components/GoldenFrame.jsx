import React, { useEffect, useState } from 'react';

const GoldenFrame = ({ number, text }) => {


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
        <div className="relative w-full">
            {/* The outer container with golden gradient border */}
            <div className="relative p-1  rounded-md">
                {/* The inner black background with inner golden line */}
                <div className="bg-transparent w-full h-full relative border rounded-md border-yellow-500 p-px">
                    {/* Additional inner golden line */}
                    <div className="border rounded-md border-amber-600 w-full h-full  flex items-center justify-center">
                        {/* Number centered */}
                        <div className="text-[120px]  text-[#F16043] font-bold  bg-clip-text bg-gradient-to-br from-yellow-300 via-yellow-500 to-amber-700">
                            <h1
                                className="text-[#F16043] text-[60px] sm:text-[120px] font-bold px-4"
                                // style={{ WebkitTextStroke: "1px white", fontFamily: "Kruti" }}
                                style={{ fontFamily: "Kruti", fontSize: '120px' }}
                            >
                                {number}
                            </h1>
                            {true && <p className='text-sm text-white text-center py-2' style={{ fontFamily: "Samarkan" }} >{text}</p>}
                            {/* {isMobile && <p className='text-sm text-white text-center py-2 rotate-90' style={{ fontFamily: "Samarkan" }} >{text}</p>} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoldenFrame;