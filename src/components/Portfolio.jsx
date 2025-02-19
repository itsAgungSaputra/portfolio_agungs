import React from 'react';
import { motion } from 'framer-motion';

import project1 from "../assets/1.png"
import project2 from "../assets/2.png"
import project4 from "../assets/4.png"
import project5 from "../assets/5.png"
import project6 from "../assets/6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Project #1",
      description: "lorem ipsum dolor sit amet",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project2,
      title: "Project #2",
      description: "lorem ipsum dolor sit amet",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project4,
      title: "Project #3",
      description: "lorem ipsum dolor sit amet",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project5,
      title: "Project #4",
      description: "lorem ipsum dolor sit amet",
      links: {
        site: "#",
        github: "#",
      },
    },
    {
      img: project6,
      title: "Project #5",
      description: "lorem ipsum dolor sit amet",
      links: {
        site: "#",
        github: "#",
      },
    },
  ]

const Portfolio = ({ isDarkMode }) => {
  return (
    <div className='max-w-[1200px] mx-auto p-4 md:p-6 my-10 md:my-20' id="portfolio">
      <h2 className={`text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'} mb-8 md:mb-12 text-center`}>Featured Projects</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>


        {projects.map((project, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='relative group overflow-hidden rounded-lg md:rounded-xl shadow-md hover:shadow-lg dark:shadow-xl dark:hover:shadow-purple-500/50 transition-all duration-300'
          >
            <div className='relative h-48 sm:h-56 md:h-64'>
              <img
                src={project.img}
                alt={project.title}
                className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300'
              />
              <div className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 md:p-6 flex flex-col justify-end'>
                <h3 className='text-xl md:text-2xl font-bold text-white mb-1 md:mb-2'>{project.title}</h3>
                <p className='text-gray-200 text-sm md:text-base mb-3 md:mb-4'>{project.description}</p>
                <div className='flex space-x-2 md:space-x-4'>
                  <a href={project.links.site}
                    className='px-3 py-1.5 md:px-4 md:py-2 bg-purple-600 text-white rounded-md md:rounded-lg hover:bg-purple-700 transition duration-300 text-sm md:text-base'>
                    View Site
                  </a>
                  <a href={project.links.github}
                    className='px-3 py-1.5 md:px-4 md:py-2 bg-purple-600 text-white rounded-md md:rounded-lg hover:bg-purple-700 transition duration-300 text-sm md:text-base'>
                    <AiFillGithub className='w-5 h-5 md:w-6 md:h-6'/>
                  </a>

                </div>
              </div>
            </div>
          </motion.div>

        ))}
        </div>
    </div>

  )
}

export default Portfolio
