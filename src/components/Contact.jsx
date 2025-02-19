import React from "react"
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"
import Reveal from "./Reveal"
import { motion } from "framer-motion"

const Contact = ({ isDarkMode }) => {
  return (
    <div className="px-4 sm:px-6 max-w-[1200px] mx-auto py-10 sm:py-20" id="contact">
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12">

          {/* Left Column - Contact Info */}
          <div className={`space-y-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <motion.h3 
              className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-12 tracking-wider"
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Get <span>in Touch</span>
            </motion.h3>

            <div className={`flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl transition-all ${
              isDarkMode ? 'bg-gray-800/20 hover:bg-gray-800/40' : 'bg-gray-100 hover:bg-gray-200'
            }`}>
              <div className={`p-2 sm:p-3 rounded-lg ${isDarkMode ? 'bg-primary-color/10' : 'bg-primary-color/20'}`}>
                <AiFillPhone className="text-2xl sm:text-3xl text-primary-color" />
              </div>
              <div>
                <p className="text-lg font-medium">Phone</p>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>+62 852 9883 4626</p>
              </div>
            </div>

            <div className={`flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl transition-all ${
              isDarkMode ? 'bg-gray-800/20 hover:bg-gray-800/40' : 'bg-gray-100 hover:bg-gray-200'
            }`}>
              <div className={`p-2 sm:p-3 rounded-lg ${isDarkMode ? 'bg-primary-color/10' : 'bg-primary-color/20'}`}>
                <AiOutlineMail className="text-2xl sm:text-3xl text-primary-color" />
              </div>
              <div>
                <p className="text-lg font-medium">Email</p>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>agungsaputraofficial@gmail.com</p>
              </div>
            </div>

            <div className={`flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl transition-all ${
              isDarkMode ? 'bg-gray-800/20 hover:bg-gray-800/40' : 'bg-gray-100 hover:bg-gray-200'
            }`}>
              <div className={`p-2 sm:p-3 rounded-lg ${isDarkMode ? 'bg-primary-color/10' : 'bg-primary-color/20'}`}>
                <AiFillEnvironment className="text-2xl sm:text-3xl text-primary-color" />
              </div>
              <div>
                <p className="text-lg font-medium">Address</p>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Perum Asabri Blok C No. 23,<br />
                  Desa Ulapato A, Kec. Telaga Biru,<br />
                  Kab. Gorontalo
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Google Maps */}
          <div className={`h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-xl md:rounded-2xl overflow-hidden shadow-md md:shadow-xl ${
            isDarkMode ? 'border border-gray-700/50' : 'border border-gray-300'
          }`}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27054.38932265909!2d123.00576625014378!3d0.6164908737171245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32792d9893c78119%3A0xe1f13a4b141ce39b!2sUlapato%20A%2C%20Kec.%20Telaga%20Biru%2C  20Kabupaten%20Gorontalo%2C%20Gorontalo!5e1!3m2!1sid!2sid!4v1739775004196!5m2!1sid!2sid" 
              width="100%"
              height="100%"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default Contact
