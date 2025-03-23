import React from 'react';

const Tracks = () => {
    const trackData = [
        {
            title: "FINTECH",
            description: "Empowering financial growth with secure, innovative solutions. From digital payments to investment platforms, we revolutionize how you manage your wealth."
        },
        {
            title: "EDUTECH",
            description: "Shaping the future of learning with interactive platforms that inspire curiosity and boost academic success. Learning, reimagined for the digital age."
        },
        {
            title: "HEALTHCARE",
            description: "Delivering smarter healthcare solutions with advanced technology for diagnosis, treatment, and well-being. Ensuring a healthier tomorrow, today."
        },
        {
            title: "AGRICULTURE",
            description: "The backbone of civilization, providing food, raw materials, and economic stability. With evolving techniques and technology, agriculture continues to sustain global populations and support livelihoods."
        }
    ];

    return (
        <section className="w-full bg-black flex items-center flex-col justify-center gap-16 py-16 overflow-hidden" >
            {/* Main Title */}
            <div className="text-center">
                <h1 className="text-7xl font-bold text-[#F16043]" style={{ fontFamily: 'Samarkan' }}>TRACKS</h1>
            </div>

            <div className="max-w-full mx-auto pb-5 px-6">
                <div className="flex gap-9 justify-center flow-row px-2 w-full flex-wrap">
                    {trackData.map((track, index) => (
                        <div
                            key={index}
                            className="rounded-3xl border-3 border-[rgb(165,129,74)] bg-opacity-20 bg-[#372511] p-6 w-72 flex-shrink-0"
                        >
                            <h2 className="text-xl md:text-2xl font-bold text-center text-[#F16043] mb-4 font-samarkan">
                                {track.title}
                            </h2>
                            <p className="text-gray-100 text-center text-sm md:text-base">
                                {track.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default Tracks;