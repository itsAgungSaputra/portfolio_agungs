import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSun, AiOutlineMoon } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import logoLight from '../assets/logo(lightmode).png'
import logoDark from '../assets/logo(darkmode).png'

const Navbar = ({ isDarkMode, toggleTheme }) => {
    const [nav, setNav] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.4,
                ease: "easeIn"
            }
        }
    }

    const navItems = [
        { title: "About", to: "skills" },
        { title: "Portfolio", to: "portfolio" },
        { title: "Contact", to: "contact" }
    ]

    return (
        <motion.div 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled 
                    ? isDarkMode 
                        ? 'bg-gray-900/80 backdrop-blur-md' 
                        : 'bg-white/80 backdrop-blur-md' 
                    : 'bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='max-w-[1300px] mx-auto flex justify-between items-center px-6 md:px-12 h-20'>
                <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                >
                    <img 
                        src={isDarkMode ? logoDark : logoLight} 
                        alt="Logo" 
                        className="h-24 w-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]" 
                    />
                    <span className={`text-xl font-semibold ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                        agungs
                    </span>
                </motion.div>

                {/* Desktop Menu */}
                <ul className='hidden md:flex items-center gap-8 z-10'>
                    {navItems.map((item, index) => (
                        <motion.li 
                            key={index}
                            className='relative group'
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link 
                                to={item.to} 
                                smooth={true} 
                                offset={50} 
                                duration={500} 
                                className={`font-medium transition duration-300 ${
                                    isDarkMode 
                                        ? 'text-gray-300 hover:text-purple-400' 
                                        : 'text-gray-700 hover:text-purple-600'
                                }`}
                            >
                                {item.title}
                                <span className='absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full'></span>
                            </Link>
                        </motion.li>
                    ))}

                    <motion.li 
                        className='flex items-center ml-4'
                        whileHover={{ scale: 1.1 }}
                    >
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-all duration-300 ${
                                isDarkMode 
                                    ? 'bg-gray-800 text-purple-400 hover:bg-gray-700' 
                                    : 'bg-gray-100 text-purple-600 hover:bg-gray-200'
                            }`}
                        >
                            {isDarkMode ? (
                                <AiOutlineMoon size={20} />
                            ) : (
                                <AiOutlineSun size={20} />
                            )}
                        </button>
                    </motion.li>
                </ul>

                {/* Mobile Menu Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleNav}
                    className={`md:hidden z-50 p-2 rounded-lg ${
                        isDarkMode 
                            ? 'text-gray-200 hover:bg-gray-800' 
                            : 'text-gray-800 hover:bg-gray-100'
                    }`}
                >
                    {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </motion.button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {nav && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className={`fixed inset-0 ${
                                isDarkMode ? 'bg-gray-900' : 'bg-white'
                            } z-40`}
                        >
                            <div className="flex flex-col items-center justify-center h-full">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="mb-8"
                                    >
                                        <Link
                                            to={item.to}
                                            onClick={closeNav}
                                            smooth={true}
                                            offset={50}
                                            duration={500}
                                            className={`text-2xl font-semibold ${
                                                isDarkMode 
                                                    ? 'text-gray-200 hover:text-purple-400' 
                                                    : 'text-gray-800 hover:text-purple-600'
                                            } transition duration-300`}
                                        >
                                            {item.title}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    onClick={toggleTheme}
                                    className={`mt-4 p-3 rounded-full ${
                                        isDarkMode 
                                            ? 'bg-gray-800 text-purple-400' 
                                            : 'bg-gray-100 text-purple-600'
                                    }`}
                                >
                                    {isDarkMode ? (
                                        <AiOutlineMoon size={24} />
                                    ) : (
                                        <AiOutlineSun size={24} />
                                    )}
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default Navbar
