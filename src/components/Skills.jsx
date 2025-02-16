import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiPhotoshop,
  DiPhp,
  DiLaravel,
} from "react-icons/di"
import Reveal from "./Reveal"
import { SiFigma, SiNextdotjs, SiTailwindcss } from "react-icons/si"

const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
        { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
        { name: 'Tailwind', icon: <SiTailwindcss className='text-blue-400' /> },
        { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
        { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
        { name: 'React', icon: <DiReact className='text-blue-500' /> },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'PHP', icon: <DiPhp className='text-purple-500' /> },
        { name: 'Laravel', icon: <DiLaravel className='text-red-500' /> },
        { name: 'Next Js', icon: <SiNextdotjs className='text-black' /> },
      ],
    },
    {
      category: 'Graphic Design',
      technologies: [
        { name: 'Figma', icon: <SiFigma className='text-blue-400' /> },
        { name: 'Photoshop', icon: <DiPhotoshop className='text-blue-600' /> },
      ],
    },
  ]

const Skills = () => {
  return (
    <div className="max-w-[1000px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
            I worked on various frontend and graphic design projects. Check them <a href="#" className="underline">there</a>.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8  md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills
