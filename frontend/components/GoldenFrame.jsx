import React from 'react';

const GoldenFrame = ({ number }) => {
    return (
        <div className="relative w-full">
            {/* The outer container with golden gradient border */}
            <div className="relative p-1  rounded-md">
                {/* The inner black background with inner golden line */}
                <div className="bg-transparent w-full h-full relative border rounded-md border-yellow-500 p-px">
                    {/* Additional inner golden line */}
                    <div className="border rounded-md border-amber-600 w-full h-full flex items-center justify-center">
                        {/* Number centered */}
                        <div className="text-[120px] text-[#F16043] font-bold  bg-clip-text bg-gradient-to-br from-yellow-300 via-yellow-500 to-amber-700">
                            <h1
                                className="text-orange-500 text-[60px] sm:text-[120px] font-bold px-4"
                                // style={{ WebkitTextStroke: "1px white" }}
                                style={{ fontFamily: "Kruti" }}
                            >
                                {number}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoldenFrame;