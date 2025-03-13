import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { FaSpotify } from 'react-icons/fa';

const AboutMeModal = ({ isOpen, onClose, isDarkMode }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className={`relative w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-2xl ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } p-6 sm:p-8 shadow-2xl`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-full ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                : "bg-gray-100 hover:bg-gray-200 text-gray-600"
            } transition-colors duration-300`}
          >
            <IoMdClose size={24} />
          </button>

          {/* Header */}
          <h2
            className={`text-3xl font-bold mb-6 ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            About Me
          </h2>

          {/* About Text */}
          <div className="mb-8">
            <h3
              className={`text-xl font-semibold mb-3 ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Bio
            </h3>
            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } leading-relaxed`}
            >
              I am a final-year Information Systems student at Gorontalo State
              University, deeply interested in web development—particularly
              front-end—and adept at problem-solving.
            </p>
          </div>

          {/* Interests */}
          <div className="mb-8">
            <h3
              className={`text-xl font-semibold mb-3 ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Frontend Web Development",
                "UI/UX Design",
                "Graphic Design",
                "Music",
              ].map((interest, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDarkMode
                      ? "bg-gray-700 text-gray-300"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Spotify Now Playing */}
          <div className="mb-4">
            <h3
              className={`text-xl font-semibold mb-3 flex items-center gap-2 ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              <FaSpotify className="text-[#1DB954]" />
              Now Playing
            </h3>
            <div className="flex justify-center">
              <img 
                src="https://spotify-github-profile.kittinanx.com/api/view?uid=agung_saputra14&cover_image=true&theme=default&show_offline=true&background_color=130e0e&interchange=true&bar_color=53b14f&bar_color_cover=true" 
                alt="Spotify Now Playing"
                className="w-full max-w-[600px] rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutMeModal; 