import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DevKraftNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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


    // Animation variants
    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.4,
                when: "beforeChildren",
                staggerChildren: 0.1,
                staggerDirection: 1
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, y: -10 },
        open: { opacity: 1, y: 0 }
    };

    return (
        <div className="w-full bg-stone-800 text-black px-6 py-4">
            <div className="flex items-center justify-between">
                {/* Logo section */}
                <div className="flex items-center">
                    <img className="w-[150px]" src="/logos/devkraft1.png" alt="DevKraft Logo" />
                </div>

                {/* Hamburger Menu Icon */}
                <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
                    <motion.div
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                    >
                        <div className="w-8 h-1 bg-orange-600 mb-1.5 rounded-full" style={{ transformOrigin: "center" }}></div>
                        <div className="w-8 h-1 bg-orange-600 mb-1.5 rounded-full" style={{ transformOrigin: "center" }}></div>
                        <div className="w-8 h-1 bg-orange-600 rounded-full" style={{ transformOrigin: "center" }}></div>
                    </motion.div>
                </div>

                {/* Desktop Navigation */}
                {!isMobile && <nav className="flex h-[70px] items-center space-x-8 text-orange-600 text-xl">
                    {/* <a href="#" className="hover:text-white transition-colors">Home</a> */}
                    <a href="#" className="hover:text-white transition-colors">About</a>
                    <a href="#" className="hover:text-white transition-colors">Domain</a>
                    <a href="#" className="hover:text-white transition-colors">Schedule</a>
                    <a href="#" className="hover:text-white transition-colors">Prizes</a>
                    {/* <a href="#" className="hover:text-white transition-colors">Team</a> */}
                    {/* <a href="#" className="hover:text-white transition-colors">FAQ</a> */}
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </nav>}
            </div>

            {/* Mobile Navigation - Dropdown from top */}
            <motion.div
                className="md:hidden w-full bg-stone-900 absolute left-0 right-0 mt-4 overflow-hidden z-40"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                <div className="flex flex-col items-center py-4">
                    {/* <motion.a variants={itemVariants} href="#" className="text-orange-600 hover:text-white py-3 transition-colors text-xl">Home</motion.a> */}
                    <motion.a variants={itemVariants} href="#" className="text-orange-600 hover:text-white py-3 transition-colors text-xl">About</motion.a>
                    <motion.a variants={itemVariants} href="#" className="text-orange-600 hover:text-white py-3 transition-colors text-xl">Domain</motion.a>
                    <motion.a variants={itemVariants} href="#" className="text-orange-600 hover:text-white py-3 transition-colors text-xl">Schedule</motion.a>
                    <motion.a variants={itemVariants} href="#" className="text-orange-600 hover:text-white py-3 transition-colors text-xl">Prizes</motion.a>
                    {/* <motion.a variants={itemVariants} href="#" className="text-orange-600 hover:text-white py-3 transition-colors text-xl">Team</motion.a> */}
                    {/* <motion.a variants={itemVariants} href="#" className="text-orange-600 hover:text-white py-3 transition-colors text-xl">FAQ</motion.a> */}
                    <motion.a variants={itemVariants} href="#" className="text-orange-600 hover:text-white py-3 transition-colors text-xl">Contact</motion.a>
                </div>
            </motion.div>
        </div>
    );
};

export default DevKraftNav;