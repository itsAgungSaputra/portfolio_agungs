import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'Smart Data Integrasi ~ Gorontalo, Indonesia',
        period: 'Jan 2020 - Mar 2020',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias facilis dolor provident eum aperiam sint deserunt doloribus cumque laudantium necessitatibus architecto deleniti accusantium corporis omnis, impedit asperiores aliquid at nostrum!.',
      },
      {
        company: 'Freelance ~ Gorontalo, Indonesia',
        period: 'Apr 2020 - Present',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias facilis dolor provident eum aperiam sint deserunt doloribus cumque laudantium necessitatibus architecto deleniti accusantium corporis omnis, impedit asperiores aliquid at nostrum!.',
      },
      {
        company: 'SAShop ~ Gorontalo, Indonesia',
        period: 'May 2024 - June 2024',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias facilis dolor provident eum aperiam sint deserunt doloribus cumque laudantium necessitatibus architecto deleniti accusantium corporis omnis, impedit asperiores aliquid at nostrum!.',
      },
      {
        company: 'Social Economic Accelerator Lab at Cluster Coding Factory (Sekawan Media) ~ Malang, Indonesia',
        period: 'Sep 2024 - Dec 2024',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias facilis dolor provident eum aperiam sint deserunt doloribus cumque laudantium necessitatibus architecto deleniti accusantium corporis omnis, impedit asperiores aliquid at nostrum!.',
      },
]

const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-200 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>
                </motion.div>
                </Reveal>
            ))}
        </motion.div>
    </div>
  )
}

export default Experience