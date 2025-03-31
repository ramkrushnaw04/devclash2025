import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareWhatsapp, faLinkedin, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import ScrollFloat from "./ScrollFloat";



import { motion } from 'framer-motion';


const Card = ({ profile }) => {
    return (
        <motion.div
            className="relative h-[440px] w-[300px] sm:h-[320px] sm:w-[220px] md:h-[350px] md:w-[240px] lg:h-[400px] lg:w-[260px] bg-black flex flex-col items-center justify-between rounded-2xl border-2 border-orange-300 p-3 shadow-lg"
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
                src={profile.img || "/icons/placeholderProfile.png"}
                className="h-[70%] object-cover w-full rounded-xl"
                alt="profile"
                whileHover={{ 
                    scale: 1.02,
                    rotate: 2,
                    transition: { duration: 0.3 }
                }}
            />
            {/* Data Section */}
            <div className="w-full text-center">
                <motion.h2 
                    className="text-white text-[16px] md:text-[18px] lg:text-[20px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {profile.Name}
                </motion.h2>
                <motion.h2 
                    className="font-bold text-[#F16043] text-[14px] md:text-[16px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {profile.Post}
                </motion.h2>
            </div>

            <div>
                <motion.div 
                    className="flex gap-3 mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {profile.linkedIn && (
                        <motion.a
                            href={profile.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ 
                                scale: 1.2,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="text-[#F16043] text-[30px] hover:text-white transition-all duration-300"
                            />
                        </motion.a>
                    )}
                    {profile.whatsApp && (
                        <motion.a
                            href={profile.whatsApp}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ 
                                scale: 1.2,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FontAwesomeIcon
                                icon={faSquareWhatsapp}
                                className="text-[#F16043] text-[30px] hover:text-white transition-all duration-300"
                            />
                        </motion.a>
                    )}
                    {profile.instagram && (
                        <motion.a
                            href={profile.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ 
                                scale: 1.2,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FontAwesomeIcon
                                icon={faSquareInstagram}
                                className="text-[#F16043] text-[30px] hover:text-white transition-all duration-300"
                            />
                        </motion.a>
                    )}
                </motion.div>
            </div>
        </motion.div>
    )
}







const Team = () => {
    const leads = [
        {
            Name: "Vedant Patil",
            Post: "President",
            img: "/people/VedantPatil.jpg",
            linkedIn: "https://www.linkedin.com/in/vedant-patil-34b098235/",
            whatsApp: "https://bit.ly/3vS4RvN"
        },
        {
            Name: "Kanksha Pharate",
            Post: "Secretary",
            img: "/people/KankshaPharate.jpeg",
            linkedIn: "https://www.linkedin.com/in/kanksha-pharate-1b387528b/",
            whatsApp: "https://bit.ly/48U3hrV"
        },
        {
            Name: "Suyash Dashputre",
            Post: "Tech Lead",
            img: "/people/SuyashDashputre.jpg",
            linkedIn: "https://www.linkedin.com/in/codersuyash/",
            whatsApp: "https://bit.ly/3OkX93B"
        },
        {
            Name: "Kunal Malviya",
            Post: "Production Lead",
            img: "/people/KunalMalviya.jpg",
            linkedIn: "https://www.linkedin.com/in/kunal-malviya-656528257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            whatsApp: "https://wa.me/qr/TE7U5MMEAREZC1",
            instagram: "https://www.instagram.com/kunal_malviya_02?utm_source=qr&igsh=bjR3Z2xzNzl4ZG1p"
        },
        {
            Name: "Faiz Shaikh",
            Post: "Marketing Lead",
            img: "",
            linkedIn: "",
            whatsApp: "https://bit.ly/3OgcWRp"
        },
        {
            Name: "Snehal Bairagi",
            Post: "Event Management Lead",
            img: "/people/SnehalBairagi.png",
            linkedIn: "https://www.linkedin.com/in/snehal-bairagi-80a7b2246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            whatsApp: "",
            instagram: "https://www.instagram.com/snehal_bairagi_14?igsh=NnBlc245cDd3cnlq"
        },
        {
            Name: "Prajwal Kulkarni",
            Post: "Public Relation Lead",
            img: "/people/PrajwalKulkarni.jpg",
            linkedIn: "https://www.linkedin.com/in/prajwal-kulkarni-398359153/",
            whatsApp: "https://bit.ly/3vNNbkZ"
        },
    ];

    const coLeads = [
        {
            Name: "Shraddha Patil",
            Post: "Deputy Secretary",
            img: "/people/Shraddha.jpg",
            linkedIn: "https://www.linkedin.com/in/shraddha-patil-90b5b631b",
            whatsApp: "",
            instagram: "https://www.instagram.com/ft.shrxdhha?igsh=MXV2cWJ6YTB2Y3lzZg=="
        },
        {
            Name: "Ramkrushna Waghchaure",
            Post: "Tech Co-Lead",
            img: "",
            linkedIn: "https://www.linkedin.com/in/ramkrushnaw04/",
            whatsApp: ""
        },
        {
            Name: "Kartik Soma",
            Post: "Production Co-Lead",
            img: "/people/Kartik.jpg",
            linkedIn: "",
            whatsApp: "",
            instagram: "https://www.instagram.com/kartiksoma_?igsh=MXBxeWdiaGh4MjFydQ=="
        },
        {
            Name: "Madhav Sain",
            Post: "Marketing Co-Lead",
            img: "/people/Madhav.png",
            linkedIn: "https://www.linkedin.com/in/madhav-sain-0a580b290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            whatsApp: "",
            instagram: "https://www.instagram.com/madhavsain_?utm_source=qr&igsh=MTUyb21vOW9tbmtrbA=="
        },
        {
            Name: "Anmol Kadam",
            Post: "Event Management Co-Lead",
            img: "",
            linkedIn: "",
            whatsApp: "",
            instagram: "https://www.instagram.com/justt.anmol._?igsh=MWFpeXpocHdhZDF6dg=="
            
        },
        {
            Name: "Harsh Khillari",
            Post: "Public Relation Co-Lead",
            img: "/people/Harsh.jpg",
            linkedIn: "https://www.linkedin.com/in/harsh-khilari-26b97a22b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            whatsApp: "https://wa.me/919106609329",
            instagram: 'https://www.instagram.com/khilari17'
        },
        {
            Name: "Omkar Chindarkar",
            Post: "Content Lead",
            img: "/people/Omkar.jpg",
            linkedIn: "https://www.linkedin.com/in/omkar-chindarkar-5590a719b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            whatsApp: "",
            instagram: "https://www.instagram.com/_omckar?igsh=cHdlemo3eHNoOXF6"
        },
        {
            Name: "Yash Arote",
            Post: "Data Manager",
            img: "/people/Yash.jpg",
            linkedIn: "https://www.linkedin.com/in/yash-arote-4a7713258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            whatsApp: "",
            instagram: "https://www.instagram.com/yashhhhh_29?utm_source=qr&igsh=YTV2OTRpMzNkOG9l"
        },
    ]

    return (
        <div className="w-full   bg-black flex flex-col items-center ">

            <div className="flex relative flex-col pt-10 w-full">
                <div className="flex relative flex-col justify-center items-center p-20 ">
                    <img className="absolute top-0 left-0 object-cover h-full w-full brightness-[10%] " src="/backgrounds/leadsBackground.png" alt="" />
                    <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
                    <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=10%'
                        scrollEnd='bottom bottom-=50%'
                        stagger={0.03}
                    >
                        LEADS
                    </ScrollFloat>
                    <div className="w-full flex flex-wrap justify-center gap-7">
                        {leads.map((profile, index) => (
                            <Card profile={profile} key={index} />
                        ))}
                    </div>
                </div>

                <div className="flex relative flex-col justify-center items-center p-10 ">
                    <img className="absolute top-0 left-0 object-cover h-full w-full brightness-[10%] " src="/backgrounds/coLeadsBackground.png" alt="" />
                    <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
                    <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=10%'
                        scrollEnd='bottom bottom-=50%'
                        stagger={0.03}
                    >
                        CO-LEADS
                    </ScrollFloat>
                    <div className="w-full flex flex-wrap justify-center gap-7">
                        {coLeads.map((profile, index) => (
                            <Card profile={profile} key={index} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Team;
