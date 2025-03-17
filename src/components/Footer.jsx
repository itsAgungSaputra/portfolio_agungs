import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineBehance, AiOutlineMail, AiOutlineHeart } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import logoLight from '../assets/logo(lightmode).png'
import logoDark from '../assets/logo(darkmode).png'

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} pt-16 pb-8`}>
      <div className="container mx-auto px-4">
        

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © {currentYear} agungs. Made with 
            <AiOutlineHeart className="inline-block mx-1 text-red-500" />
            using React, Tailwind, & Framer Motion
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <div className="relative h-10">
            <div className={`absolute bottom-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 ${isDarkMode ? 'opacity-30' : 'opacity-20'}`} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
