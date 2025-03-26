import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

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
        <div className="w-full absolute top-0 text-black px-6 py-4 z-10">
            <div className="flex items-center justify-between">
                {/* Logo section */}
                <div className="flex items-center">
                    <img className="w-[150px]" src="/logos/devkraft1.png" alt="DevKraft Logo" />
                </div>

                {/* Hamburger Menu Icon */}
                {isMobile && <div className=" cursor-pointer z-50" onClick={toggleMenu}>
                    <motion.div
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                    >
                        <div className="w-8 h-1 bg-orange-600 mb-1.5 rounded-full" style={{ transformOrigin: "center" }}></div>
                        <div className="w-8 h-1 bg-orange-600 mb-1.5 rounded-full" style={{ transformOrigin: "center" }}></div>
                        <div className="w-8 h-1 bg-orange-600 rounded-full" style={{ transformOrigin: "center" }}></div>
                    </motion.div>
                </div>}

                {/* Desktop Navigation */}
                {!isMobile && <nav className="flex h-[70px] items-center space-x-8 text-orange-600 text-xl">
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#domain" className="hover:text-white transition-colors">Domain</a>
                    <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>
                    <a href="#prizes" className="hover:text-white transition-colors">Prizes</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    <a href="/team" className="hover:text-white transition-colors">Team</a>
                </nav>}
            </div>

            {/* Mobile Navigation - Dropdown from top */}
            {isMobile && <motion.div
                className="w-full bg-black/90 absolute left-0 right-0 mt-4 overflow-hidden z-40 border-t-2 border-b-2 border-orange-500"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
            >
                <div className="flex flex-col items-center py-6">
                    <motion.a
                        variants={itemVariants}
                        href="#about"
                        className="text-orange-500 hover:text-white py-4 transition-colors text-2xl font-bold tracking-wider uppercase"
                    >
                        About
                    </motion.a>
                    <motion.a
                        variants={itemVariants}
                        href="#domain"
                        className="text-orange-500 hover:text-white py-4 transition-colors text-2xl font-bold tracking-wider uppercase"
                    >
                        Domain
                    </motion.a>
                    <motion.a
                        variants={itemVariants}
                        href="#schedule"
                        className="text-orange-500 hover:text-white py-4 transition-colors text-2xl font-bold tracking-wider uppercase"
                    >
                        Schedule
                    </motion.a>
                    <motion.a
                        variants={itemVariants}
                        href="#prizes"
                        className="text-orange-500 hover:text-white py-4 transition-colors text-2xl font-bold tracking-wider uppercase"
                    >
                        Prizes
                    </motion.a>
                    <motion.a
                        variants={itemVariants}
                        href="#contact"
                        className="text-orange-500 hover:text-white py-4 transition-colors text-2xl font-bold tracking-wider uppercase"
                    >
                        Contact
                    </motion.a>
                </div>
            </motion.div>}
        </div>
    );
};

export default DevKraftNav;