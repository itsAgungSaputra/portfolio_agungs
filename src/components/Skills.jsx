import React from 'react';
import { motion } from 'framer-motion';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiGit } from 'react-icons/di';
import { SiLaravel, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import Reveal from './Reveal';

const Skills = ({ isDarkMode }) => {
  const skills = [
    {
      name: "HTML5",
      icon: <DiHtml5 className="w-12 h-12" />,
      color: "text-orange-500",
      level: 90,
    },
    {
      name: "CSS3",
      icon: <DiCss3 className="w-12 h-12" />,
      color: "text-blue-500",
      level: 90,
    },
    {
      name: "JavaScript",
      icon: <DiJavascript1 className="w-12 h-12" />,
      color: "text-yellow-400",
      level: 80,
    },
    {
      name: "React",
      icon: <DiReact className="w-12 h-12" />,
      color: "text-cyan-400",
      level: 85,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-12 h-12" />,
      color: "text-black",
      level: 75,
    },
    {
      name: "Laravel",
      icon: <SiLaravel className="w-12 h-12" />,
      color: "text-red-500",
      level: 90,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="w-12 h-12" />,
      color: "text-cyan-400",
      level: 90,
    },
    {
      name: "Git",
      icon: <DiGit className="w-12 h-12" />,
      color: "text-orange-600",
      level: 85,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className={`${isDarkMode ? 'text-gray-200' : 'text-white'}`}>Technical </span>
            <span className="text-purple-500">Skills</span>
          </h2>
        </Reveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400 }
              }}
              className={`relative p-6 rounded-xl ${
                isDarkMode 
                  ? 'bg-gray-800/90 hover:bg-gray-700/90 border-gray-700' 
                  : 'bg-gray-100 hover:bg-gray-50 border-gray-100'
              } backdrop-blur-lg shadow-lg border`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                } ${skill.color}`}>
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    {skill.name}
                  </h3>
                  <div className={`relative w-full h-2 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                  } rounded-full overflow-hidden`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`absolute top-0 left-0 h-full ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                          : 'bg-gradient-to-r from-purple-600 to-pink-600'
                      } rounded-full`}
                    />
                  </div>
                  <p className={`mt-1 text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {skill.level}% Proficiency
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className={`absolute -bottom-2 -right-2 w-20 h-20 rounded-full ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-purple-500/5 to-pink-500/5' 
                  : 'bg-gradient-to-br from-purple-500/10 to-pink-500/10'
              }`} />
              <div className={`absolute -top-2 -left-2 w-16 h-16 rounded-full ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-blue-500/5 to-cyan-500/5' 
                  : 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10'
              }`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
