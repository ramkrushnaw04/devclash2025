import React, { useEffect, useState } from 'react';

const GoldenFrame = ({ number, text }) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="relative w-full flex justify-center items-center">
            <div className="relative w-full max-w-md">
                {/* Outer golden border with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F16043] via-[#ec8f32] to-[#be6e19] rounded-2xl shadow-2xl"></div>
                
                {/* Inner black background */}
                <div className="relative bg-[#221612] m-2 rounded-xl">
                    {/* Content area */}
                    <div className="relative p-6 text-center">
                        <h1 
                            className="text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#F16043] via-[#ec8f32] to-[#be6e19]"
                            style={{ fontFamily: "Kruti" }}
                        >
                            {number}
                        </h1>
                        {text && (
                            <p 
                                className="text-sm text-white mt-2"
                                style={{ fontFamily: "Samarkan" }}
                            >
                                {text}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoldenFrame;