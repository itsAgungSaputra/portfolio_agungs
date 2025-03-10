import React from "react";
import profilepic from "../assets/profpicv2.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
    AiOutlineBehance,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";

import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";


const Hero = ({ isDarkMode }) => {

  return (
    <div className="max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
            >
                <TypeAnimation
                    sequence={[
                        "Frontend Developer",
                        1000,
                        "Graphic Designer",
                        1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className={`font-bold text-xl md:text-2xl mb-4 ${
                        isDarkMode ? 'text-purple-400' : 'text-purple-600'
                    }`}
                />

                <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className={`text-5xl md:text-7xl font-bold tracking-tight mb-4 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}
                >
                    HEY, I AM <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                        AGUNG SAPUTRA
                    </span>
                </motion.h1>

                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className={`text-lg md:text-xl mb-8 max-w-[500px] ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
                >
                    Seorang Frontend Developer yang berfokus pada pembuatan website yang modern, responsif, dan user-friendly.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-col sm:flex-row items-center gap-4 md:gap-6"
                >
                    <motion.button 
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0px 0px 20px rgba(147, 51, 234, 0.3)"
                        }}
                        className={`z-10 cursor-pointer font-bold px-8 py-4 rounded-xl flex items-center gap-2 ${
                            isDarkMode ? 'bg-purple-500 hover:bg-purple-600 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white'
                        } transition-all duration-300`}
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/Agung_Saputra_CV.pdf';
                            link.download = 'Agung_Saputra_CV.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}     
                    >
                        <AiOutlineDownload className="text-xl" />
                        Download CV
                    </motion.button>

                    <div className="flex gap-4 text-3xl md:text-4xl">
                        {[
                            { icon: <AiOutlineGithub/>, link: "https://github.com/itsAgungSaputra", color: "hover:text-[#333]" },
                            { icon: <AiOutlineLinkedin/>, link: "https://www.linkedin.com/in/agungsaputra14/", color: "hover:text-[#0A66C2]" },
                            { icon: <AiOutlineInstagram/>, link: "https://www.instagram.com/agung_saputra____", color: "hover:text-[#E4405F]" },
                            { icon: <AiOutlineBehance/>, link: "https://www.behance.net/itsagungsaputra", color: "hover:text-[#053EFF]" }
                        ].map((social, index) => (
                            <motion.a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} ${social.color} transition-colors duration-300`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            <div className="relative">
                <div className="relative z-10">
                    <img 
                        src={profilepic}
                        alt="Agung Saputra"
                        className={`mt-24 w-[250px] md:w-[350px] rounded-2xl ${
                            !isDarkMode ? 'drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]' : ''
                        }`}
                    />
                </div>

                {/* Background Elements */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full ${
                    isDarkMode ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10' : 'bg-gradient-to-r from-purple-500/20 to-pink-500/20'
                } blur-3xl -z-10`}
                />
            </div>
        </div>

        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="mt-20 md:mt-32 text-center"
        >
            <motion.p 
            className={`text-2xl md:text-3xl font-semibold mb-8 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
            }`}
            >
                Tech Stack
            </motion.p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {[
                    { icon: <DiHtml5 className="text-[#E34F26]" />, name: "HTML5" },
                    { icon: <DiCss3 className="text-[#1572B6]" />, name: "CSS3" },
                    { icon: <DiJavascript1 className="text-[#F7DF1E]" />, name: "JavaScript" },
                    { icon: <DiReact className="text-[#61DAFB]" />, name: "React" },
                    { icon: <SiNextdotjs className={isDarkMode ? "text-white" : "text-black"} />, name: "Next.js" }
                ].map((tech, index) => (
                    <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2 + (index * 0.1) }}
                    className={`p-4 rounded-xl ${
                        isDarkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-gray-50/50'
                    } backdrop-blur-sm border border-purple-500/20 shadow-lg`}
                    >
                        <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="text-4xl md:text-5xl"
                        >
                            {tech.icon}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1200} />
        </div>
    </div>
  )
}

export default Hero
