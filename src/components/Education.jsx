import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { FaGraduationCap, FaLaptopCode, FaSchool } from 'react-icons/fa';

const educations = [
  {
    institution: 'Univeristas Negeri Gorontalo',
    period: '2021 - Present',
    degree: 'Information System',
    description: 'Specialized in web development and software engineering.',
    icon: <FaGraduationCap className="w-8 h-8" />,
    color: 'from-purple-600 to-indigo-600'
  },
  {
    institution: 'Univeritas Brawijaya',
    period: 'Aug 2023 - Dec 2023',
    degree: 'Information System',
    description: 'Student Exchange MBKM Program Batch 3',
    icon: <FaGraduationCap className="w-8 h-8" />,
    color: 'from-purple-600 to-indigo-600'
  },
];


const Education = ({ isDarkMode }) => {
  return (
    <section className={`py-12`}>
      <div className="max-w-4xl mx-auto px-4">

        <Reveal>
          <h1 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>

            My Education Journey
          </h1>
        </Reveal>
        
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-1/2 w-1 h-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
          
          {educations.map((education, index) => (
            <Reveal key={index}>
              <motion.div
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-16`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Icon with gradient background */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${education.color} shadow-lg z-10`}>

                  {education.icon}
                </div>
                
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex-1 mx-6 p-6 rounded-xl shadow-lg transform transition-all duration-300 ${

                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {education.institution}
                  </h2>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {education.period}
                  </p>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                    {education.degree}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {education.description}
                  </p>
                </motion.div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Education;
