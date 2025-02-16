import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSun, AiOutlineMoon } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import logoLight from '../assets/logo(lightmode).png'
import logoDark from '../assets/logo(darkmode).png'

const Navbar = ({ isDarkMode, toggleTheme }) => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
            stiffness: 20,
            damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
            stiffness: 20,
            damping: 15
            }
        }
    }

  return (
    <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50'>
        <div className='max-w-[1300px] mx-auto  flex justify-between text-gray-200
        text-xl items-center px-12 h-20'>
            <div className="flex items-center gap-2">
              <img src={isDarkMode ? logoDark : logoLight} alt="Logo" className="h-24 w-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]" />
              <a href="#">agungs</a>
            </div>
            <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
                <li className='hover:text-purple-600 transition duration-300'><Link to="skills" smooth={true} offset={50} duration={500}>About</Link></li>
                <li className='hover:text-purple-600 transition duration-300'><Link to="portfolio" smooth={true} offset={50} duration={500}>Portfolio</Link></li>
                <li className='hover:text-purple-600 transition duration-300'><Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link></li>

                <li className='flex items-center'>
                <label className='theme-toggle'>
                  <input 
                    type="checkbox" 
                    checked={isDarkMode}
                    onChange={toggleTheme}
                    className="hidden"
                  />
                  <div className="theme-slider">
                    {isDarkMode ? (
                      <AiOutlineMoon className="absolute left-1 top-1/2 transform -translate-y-1/2" size={20} />
                    ) : (
                      <AiOutlineSun className="absolute right-1 top-1/2 transform -translate-y-1/2" size={20} />
                    )}
                  </div>

                </label>
              </li>
            </ul>

            <div onClick={toggleNav} className='md:hidden z-50 text-gray-200'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <motion.div
            initial={false}
            animate={nav ? 'open' : 'closed'}
            variants={menuVariants}
            className='fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40'
            >
                <ul className='font-semibold text-4xl space-y-8 mt-24 text-center'>
                    <li className='hover:text-purple-600 transition duration-300'><Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500}>About</Link></li>
                    <li className='hover:text-purple-600 transition duration-300'><Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
                    <li className='hover:text-purple-600 transition duration-300'><Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500}>Contact</Link></li>
                </ul>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar
