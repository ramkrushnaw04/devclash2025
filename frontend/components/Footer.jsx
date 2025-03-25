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
        <div id='contact' className="w-full min-h-screen relative bg-black flex flex-col items-center justify-center ">

            <img className='w-full h-full absolute top-0 left-0  object-cover brightness-[10%]' src="/images/footer-background.webp" alt="" />
            <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
            <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>

            {/* Logo Section */}
            <div className='w-3/4 z-10 sm:w-2/4 md:w-1/3 lg:w-1/4 max-w-[300px] mb-8 hover:scale-105 transition-transform'>
                <img src={devclashlogo} className='h-full w-full object-contain' alt="DevKraft Logo"/>
            </div>

            {/* Contact Section */}
            <div className='flex z-10 flex-col gap-4 w-full max-w-lg'>
                <h1 className="text-[#F16043] text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                    CONTACT
                </h1>
                <div className='flex gap-5 sm:gap-8 md:gap-12 items-center justify-center my-2'>
                    <a href='tel:+1234567890' aria-label="Phone">
                        <FaPhoneAlt className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                    <a href='mailto:contact@devkraft.com' aria-label="Email">
                        <TfiEmail className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                    <a href='#map' aria-label="Location">
                        <FaLocationDot className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                </div>
            </div>

            {/* Social Media Section */}
            <div className='mt-8 z-10 sm:mt-10 flex flex-col gap-4 w-full max-w-lg'>
                <h1 className="text-[#F16043] text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                    SOCIALS
                </h1>
                <div className='flex gap-5 sm:gap-6 md:gap-8 items-center justify-center my-2 flex-wrap'>
                    <a href='https://wa.me/+1234567890' aria-label="WhatsApp">
                        <FaWhatsappSquare className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                    <a href='https://linkedin.com/company/devkraft' aria-label="LinkedIn">
                        <FaLinkedin className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                    <a href='https://x.com/devkraft' aria-label="Twitter">
                        <FaSquareXTwitter className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                    <a href='https://instagram.com/devkraft' aria-label="Instagram">
                        <FaInstagramSquare className='text-white text-3xl sm:text-4xl hover:text-[#F16043] transition-colors' />
                    </a>
                </div>
            </div>

            {/* Copyright Footer */}
            <div className='absolute bottom-0 z-10 pb-6'>
                <h3 className='text-sm text-white text-center'>
                    Design and Developed by Team Devkraft © {new Date().getFullYear()}
                </h3>
            </div>
        </div>
    );
};

export default Footer;