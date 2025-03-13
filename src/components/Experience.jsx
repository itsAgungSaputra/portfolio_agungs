import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import Reveal from './Reveal'
import { FaBriefcase, FaCode, FaPaintBrush } from 'react-icons/fa'
import sealLogo from '../assets/seal.jpeg'

const experiences = [
  {
    company: "Smart Data Integrasi ~ Gorontalo, Indonesia",
    period: "Jan 2020 - Mar 2020",
    description: "as Front-End Developer (Internship)",
    icon: <FaCode className="w-8 h-8" />,
    color: "from-purple-600 to-indigo-600",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Laravel",
      "Tailwind CSS",
      "Bootstrap",
      "Git",
    ],
  },
  {
    company: "Freelance ~ Gorontalo, Indonesia",
    period: "Apr 2020 - Present",
    description: "as Front-End Developer",
    icon: <FaCode className="w-8 h-8" />,
    color: "from-blue-600 to-cyan-600",
    skills: [
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "Laravel",
      "Git",
    ],
  },
  {
    company:
      "Social Economic Accelerator Lab at Cluster Coding Factory (Sekawan Media) ~ Malang, Indonesia",
    period: "Sep 2024 - Dec 2024",
    description: "as Front-End Developer, Quality Control (Internship)",
    icon: <img src={sealLogo} alt="SEAL Logo" className="w-8 h-8 rounded-full object-cover" />,
    color: "from-green-600 to-teal-600",
    skills: [
      "React.js",
      "Laravel",
      "Next.js",
      "TypeScript",
      "PHP",
      "Tailwind CSS",
      "Bootstrap",
      "Git",
    ],
  },
];


const Experience = ({ isDarkMode }) => {
  const controls = useAnimation()
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 120 
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className={isDarkMode ? "text-gray-200" : "text-white"}>
              Professional{" "}
            </span>
            <span className="text-purple-500">Journey</span>
          </h2>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 gap-8 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
                className={`w-full p-8 rounded-2xl bg-gradient-to-br ${experience.color} bg-opacity-10 border border-white/20 shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div
                    className={`p-4 rounded-full bg-gradient-to-br ${experience.color} shadow-lg`}
                  >
                    {experience.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h2 className="text-2xl font-bold text-white">
                        {experience.company}
                      </h2>
                      <span className="px-4 py-1 rounded-full bg-white/10 text-sm font-medium text-white">
                        {experience.period}
                      </span>
                    </div>

                    <p className="mt-4 text-lg text-white/90 font-medium">
                      {experience.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                            transition: { type: "spring", stiffness: 400 },
                          }}
                          className="px-3 py-1 text-sm font-medium bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-gradient-to-br from-white/10 to-white/5"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience
