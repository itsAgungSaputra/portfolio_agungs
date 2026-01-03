import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { DiReact, DiPhp, DiLaravel, DiJavascript1, DiMysql } from "react-icons/di";
import { SiTypescript, SiTailwindcss, SiShadcnui } from "react-icons/si";
import thuImage from "../assets/portfolio/THU Ummul Jannah.png";
import geolocationImage from "../assets/portfolio/Geolocation Gorut.png";
import simikomImage from "../assets/portfolio/SIMIKOM.png";
import kslImage from "../assets/portfolio/KSL UNG.png";

const Portfolio = () => {
  // Technology icon mapping
  const techIcons = {
    "React": <DiReact />,
    "TypeScript": <SiTypescript />,
    "Laravel": <DiLaravel />,
    "Tailwind CSS": <SiTailwindcss />,
    "ShadcnUI": <SiShadcnui />,
    "MySQL": <DiMysql />,
    "PHP": <DiPhp />,
    "JavaScript": <DiJavascript1 />
  };

  const projects = [
    {
      id: 1,
      title: "THU Ummul Jannah App",
      description: "A web apps for Hajj and Umrah savings management integrated with online payment system and WhatsApp notifications.",
      image: thuImage,
      tags: ["React", "TypeScript", "Laravel", "Tailwind CSS", "ShadcnUI", "MySQL"],
      github: "https://github.com/itsAgungSaputra/ummuljannahapp",
      demo: "#"
    },
    {
      id: 2,
      title: "Geolocation Gorut",
      description: "Personal portfolio website showcasing projects and skills with modern Bento Grid design system.",
      image: geolocationImage,
      tags: ["Laravel", "Tailwind CSS", "PHP"],
      github: "https://github.com/itsAgungSaputra/geolocation_gorut",
      demo: "#"
    },
    {
      id: 3,
      title: "SIMIKOM (Sistem Informasi Manajemen Iuran Komite) SD Lab UNG",
      description: "A productivity app for managing tasks and projects with drag-and-drop functionality and team collaboration.",
      image: simikomImage,
      tags: ["Laravel", "Tailwind CSS", "PHP", "MySQL"],
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "KSL UNG",
      description: "A content management system for creating and publishing blog posts with markdown support.",
      image: kslImage,
      tags: ["Laravel", "Tailwind CSS", "JavaScript", "PHP"],
      github: "https://github.com/ksl-ung/website-ksl",
      demo: "#"
    },
  ];

  return (
    <section id="portfolio" className="py-12 md:py-20 px-4">
      <div className="container-main">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for web development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="bento-card bento-card-hover p-0 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Actions */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-xl text-sm font-medium text-neutral-900 dark:text-white hover:bg-white dark:hover:bg-neutral-700 transition-colors"
                  >
                    <AiOutlineGithub className="text-lg" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors"
                  >
                    <AiOutlineLink className="text-lg" />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-lg"
                    >
                      {techIcons[tag] && <span className="text-sm">{techIcons[tag]}</span>}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="https://github.com/itsAgungSaputra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <AiOutlineGithub className="text-xl" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
