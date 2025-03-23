import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import devclashlogo from "/logos/devkraft1.png"

const Footer = () => {
    return (
        <div id='contact' className="w-full bg-black flex flex-col items-center pt-28 px-4 sm:pt-16 md:pt-8">
            {/* Logo Section */}
            <div className='w-3/4 sm:w-2/4 md:w-1/3 lg:w-1/4 max-w-[300px] mb-8'>
                <img src={devclashlogo} className='h-full w-full object-contain' alt="DevKraft Logo"/>
            </div>
``
            {/* Contact Section */}
            <div className='flex flex-col gap-4 w-full max-w-lg'>
                <h1 className="text-[#F16043] text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                    CONTACT
                </h1>
                <div className='flex gap-5 sm:gap-8 md:gap-12 items-center justify-center my-2'>
                    <a href='#' aria-label="Phone">
                        <FaPhoneAlt className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                    <a href='#' aria-label="Email">
                        <TfiEmail className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                    <a href='#' aria-label="Location">
                        <FaLocationDot className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                </div>
            </div>

            {/* Social Media Section */}
            <div className='mt-8 sm:mt-10 flex flex-col gap-4 w-full max-w-lg'>
                <h1 className="text-[#F16043] text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                    SOCIALS
                </h1>
                <div className='flex gap-5 sm:gap-6 md:gap-8 items-center justify-center my-2 flex-wrap'>
                    <a href='#' aria-label="WhatsApp">
                        <FaWhatsappSquare className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                    <a href='#' aria-label="LinkedIn">
                        <FaLinkedin className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                    <a href='#' aria-label="Twitter">
                        <FaSquareXTwitter className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                    <a href='#' aria-label="Instagram">
                        <FaInstagramSquare className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                </div>
            </div>

            {/* Copyright Footer */}
            <div className='mt-12 sm:mt-16 md:mt-20 pb-6'>
                <h3 className='text-sm  text-white text-center'>
                    Design and Developed by Team Devkraft ©
                </h3>
            </div>
        </div>
    );
};

export default Footer;