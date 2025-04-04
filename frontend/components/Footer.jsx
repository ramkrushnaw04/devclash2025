import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import devclashlogo from "/logos/devkraft1.png"
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <div id='contact' className="w-full min-h-screen relative bg-black flex flex-col items-center justify-center ">

            <img className='w-full h-full absolute top-0 left-0  object-cover brightness-[10%]' src="/images/footer-background.webp" alt="" />
            <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
            <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>

            {/* Logo Section */}
            <motion.div
                className='w-3/4 z-10 sm:w-2/4 md:w-1/3 lg:w-1/4 max-w-[300px] mb-8 hover:scale-105 transition-transform'
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        delay: 0.2
                    }
                }}
            >
                <img src={devclashlogo} className='h-full w-full object-contain' alt="DevKraft Logo" />
            </motion.div>

            {/* Contact Section */}
            <motion.div
                className='flex z-10 flex-col gap-4 w-full max-w-lg'
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        delay: 0.3
                    }
                }}
            >
                <h1 className="text-[#F16043] text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                    CONTACT
                </h1>
                <div className='flex gap-5 sm:gap-8 md:gap-12 items-center justify-center my-2'>
                    <a href='tel:+919922026188' aria-label="Phone">
                        <FaPhoneAlt className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                    <a href='mailto:devkraftclub@gmail.com' aria-label="Email">
                        <TfiEmail className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                    <a href='https://maps.app.goo.gl/Ho8C7FkShwrSrH2R7?g_st=aw' aria-label="Location">
                        <FaLocationDot className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                </div>
            </motion.div>

            {/* Social Media Section */}
            <motion.div
                className='mt-8 z-10 sm:mt-10 flex flex-col gap-4 w-full max-w-lg'
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        delay: 0.4
                    }
                }}
            >
                <h1 className="text-[#F16043] text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                    SOCIALS
                </h1>
                <div className='flex gap-5 sm:gap-6 md:gap-8 items-center justify-center my-2 flex-wrap'>
                    <a href='https://bit.ly/3vNNbkZ' aria-label="WhatsApp">
                        <FaWhatsappSquare className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                    <a href='https://www.linkedin.com/company/dev-kraft/mycompany/' aria-label="LinkedIn">
                        <FaLinkedin className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                    <a href='https://x.com/devkraftdpu' aria-label="Twitter">
                        <FaSquareXTwitter className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                    <a href='https://www.instagram.com/devkraft.dpu?igsh=ZjZ6bjZpeTlrdGo2' aria-label="Instagram">
                        <FaInstagramSquare className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                </div>
            </motion.div>

            {/* Copyright Footer */}
            <motion.div
                className='absolute bottom-0 z-10 pb-6'
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        delay: 0.5
                    }
                }}
            >
                <h3 className='text-sm text-white text-center'>
                    Design and Developed by Team Devkraft © {new Date().getFullYear()}
                </h3>
            </motion.div>
        </div>
    );
};

export default Footer;