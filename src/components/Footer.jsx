import React from 'react'
import { FaBehanceSquare, FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logoLight from '../assets/logo(lightmode).png'
import logoDark from '../assets/logo(darkmode).png'

const Footer = ({ isDarkMode }) => {

  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
        <div className='space-y-4'>
            <img 
              src={isDarkMode ? logoDark : logoLight} 
              alt="Agung Saputra Logo" 
              className="h-20 w-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
            />
            {/* <h3 className='text-2xl text-gray-200 font-semibold'>Agung Saputra</h3> */}
            <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a href="https://github.com/itsAgungSaputra" className="hover:text-[#4078c0] transition-all duration-300 hover:scale-110"><FaGithubSquare /></a>
                <a href="https://www.linkedin.com/in/agungsaputra14/" className="hover:text-[#0a66c2] transition-all duration-300 hover:scale-110"><FaLinkedin /></a>
                <a href="https://www.instagram.com/agung_saputra____" className="hover:text-[#e1306c] transition-all duration-300 hover:scale-110"><FaInstagram /></a>
                <a href="https://www.behance.net/itsagungsaputra" className="hover:text-[#1769ff] transition-all duration-300 hover:scale-110"><FaBehanceSquare /></a>
            </div>

        </div>
        <p className='text-gray-400'>Copyright &copy; 2025. agungs.</p>
    </div>
  )
}

export default Footer
