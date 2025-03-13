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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled 
                    ? isDarkMode 
                        ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' 
                        : 'bg-white/80 backdrop-blur-md shadow-lg' 
                    : 'bg-transparent'
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20
            }}
        >
            <div className='max-w-[1300px] mx-auto flex justify-between items-center px-6 md:px-12 h-20'>
            <div className="flex items-center gap-2">
                    <img 
                        src={isDarkMode ? logoDark : logoLight} 
                        alt="Logo" 
                        className="h-24 w-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
                    />
                    <span 
                        className={`text-xl font-semibold ${
                            isDarkMode ? 'text-gray-200' : 'text-gray-800'
                        }`}
                    >
                        agungs
                    </span>
            </div>

                {/* Desktop Menu */}
                <ul className='hidden md:flex items-center gap-8 z-10'>
                    {navItems.map((item, index) => (
                        <motion.li 
                            key={index}
                            className='relative group'
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
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
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    >
                        <motion.button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-all duration-300 ${
                                isDarkMode 
                                    ? 'bg-gray-800 text-purple-400 hover:bg-gray-700' 
                                    : 'bg-gray-100 text-purple-600 hover:bg-gray-200'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                    {isDarkMode ? (
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <AiOutlineMoon size={20} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ rotate: 360 }}
                                    animate={{ rotate: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <AiOutlineSun size={20} />
                                </motion.div>
                            )}
                        </motion.button>
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
            <motion.div
            initial={false}
                        animate={{ rotate: nav ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </motion.div>
                </motion.button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {nav && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className={`fixed inset-0 ${
                                isDarkMode ? 'bg-gray-900' : 'bg-white'
                            } z-40`}
                        >
                            <div className="flex flex-col items-center justify-center h-full">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
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
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3, type: "spring" }}
                                    onClick={toggleTheme}
                                    className={`mt-4 p-3 rounded-full ${
                                        isDarkMode 
                                            ? 'bg-gray-800 text-purple-400' 
                                            : 'bg-gray-100 text-purple-600'
                                    }`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                          {isDarkMode ? (
                                        <motion.div
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <AiOutlineMoon size={24} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ rotate: 360 }}
                                            animate={{ rotate: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <AiOutlineSun size={24} />
                                        </motion.div>
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
