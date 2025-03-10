import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import Reveal from './Reveal'
import { FaBriefcase, FaCode, FaPaintBrush } from 'react-icons/fa'

const experiences = [
    {
        company: 'Smart Data Integrasi ~ Gorontalo, Indonesia',
        period: 'Jan 2020 - Mar 2020',
        description: 'as Front-End Developer',
        icon: <FaCode className="w-8 h-8" />,
        color: 'from-purple-600 to-indigo-600'
      },
      {
        company: 'Freelance ~ Gorontalo, Indonesia',
        period: 'Apr 2020 - Present',
        description: 'as Front-End Developer',
        icon: <FaCode className="w-8 h-8" />,
        color: 'from-blue-600 to-cyan-600'
      },
      {
        company: 'SAShop ~ Gorontalo, Indonesia',
        period: 'May 2024 - June 2024',
        description: 'as Graphic Designer',
        icon: <FaPaintBrush className="w-8 h-8" />,
        color: 'from-pink-600 to-rose-600'
      },
      {
        company: 'Social Economic Accelerator Lab at Cluster Coding Factory (Sekawan Media) ~ Malang, Indonesia',
        period: 'Sep 2024 - Dec 2024',
        description: 'as Front-End Developer, Quality Control',
        icon: <FaBriefcase className="w-8 h-8" />,
        color: 'from-green-600 to-teal-600'
      },
]


const Experience = () => {
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
    <section className="py-16 bg-gradient-to-b">
      <div className="container mx-auto px-4">
        <Reveal>
          <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Professional Journey
          </h1>
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
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                }}
                className={`w-full p-8 rounded-2xl backdrop-blur-lg bg-gradient-to-br ${experience.color} bg-opacity-10 border border-white/20 shadow-2xl`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${experience.color} shadow-lg transform hover:rotate-12 transition-transform duration-300`}>
                    {experience.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h2 className="text-2xl font-bold text-white">{experience.company}</h2>
                      <span className="px-4 py-1 rounded-full bg-white/10 text-sm font-medium text-white">
                        {experience.period}
                      </span>
                    </div>
                    
                    <p className="mt-4 text-lg text-white/90 font-medium">
                      {experience.description}
                    </p>
                  </div>
                </div>

                <motion.div 
                  className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-gradient-to-br from-white/5 to-white/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  )
}

export default Experience
