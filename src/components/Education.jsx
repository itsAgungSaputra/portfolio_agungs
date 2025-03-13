import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';
import Reveal from './Reveal';

const Education = ({ isDarkMode }) => {
  const educations = [
    {
      institution: "SMKN 1 Gorontalo",
      period: "2018 - 2021",
      degree: "Software Engineering",
      icon: <FaSchool className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      institution: "Universitas Brawijaya",
      period: "Aug 2021 - Dec 2021",
      degree: "Bachelor of Computer Science (Student Exchange Program)",
      icon: <FaUniversity className="w-8 h-8 text-white" />,
      color: "from-orange-500 to-red-500",
    },
    {
      institution: "Universitas Negeri Gorontalo",
      period: "2021 - Present",
      degree: "Bachelor of Computer Science",
      icon: <FaUniversity className="w-8 h-8 text-white" />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className={`py-20`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className={isDarkMode ? 'text-gray-200' : 'text-gray-800'}>Educational </span>
            <span className="text-purple-500">Journey</span>
          </h2>
        </Reveal>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          {/* <div className="absolute left-[50%] w-1 h-full transform -translate-x-1/2">
            <div className={`w-full h-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div className="h-full w-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-50"></div>
            </div>
          </div> */}
          
          {educations.map((education, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex ${index % 3 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-16`}
            >
              {/* Timeline dot */}
              {/* <div className="absolute left-[50%] transform -translate-x-1/2 z-10">
                <motion.div 
                  className={`w-6 h-6 rounded-full bg-gradient-to-r ${education.color}`}
                  whileHover={{ scale: 1.2 }}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-4 h-4 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </motion.div>
              </div> */}

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`flex-1 mx-12 p-6 rounded-xl shadow-lg transform transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800/90 hover:bg-gray-700/90' 
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${education.color} shadow-lg`}>
                    {education.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className={`text-xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        {education.institution}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {education.period}
                      </span>
                    </div>
                    
                    <h4 className={`text-lg font-semibold mt-2 ${
                      isDarkMode ? 'text-purple-400' : 'text-purple-600'
                    }`}>
                      {education.degree}
                    </h4>
                    
                    {/* <p className={`mt-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {education.description}
                    </p> */}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-gradient-to-br ${education.color} opacity-5`} />
                <div className={`absolute -top-2 -left-2 w-20 h-20 rounded-full bg-gradient-to-br ${education.color} opacity-5`} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
