import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import { DiReact, DiPhp, DiLaravel, DiJavascript1, DiMysql } from "react-icons/di";
import { SiTypescript, SiTailwindcss, SiShadcnui } from "react-icons/si";
import thuImage from "../assets/portfolio/THU Ummul Jannah.png";
import geolocationImage from "../assets/portfolio/Geolocation Gorut.png";
import simikomImage from "../assets/portfolio/SIMIKOM.png";
import kslImage from "../assets/portfolio/KSL UNG.png";
import ProjectModal from "./ProjectModal";
import Skeleton from "./ui/Skeleton";
import { useLanguage } from "../context/LanguageContext";

// Component for Project Card with image loading state
const ProjectCard = ({ project, index, techIcons, onClick, viewDetailsText }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.article
      className="bento-card bento-card-hover p-0 overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        {/* Skeleton loader */}
        {!imageLoaded && (
          <Skeleton className="absolute inset-0 w-full h-full" rounded="rounded-none" />
        )}
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Click to View Hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="px-4 py-2 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-xl text-sm font-medium text-neutral-900 dark:text-white">
            {viewDetailsText}
          </span>
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
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();

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
      title: t('portfolio.projects.thu.title'),
      description: t('portfolio.projects.thu.description'),
      fullDescription: t('portfolio.projects.thu.fullDescription'),
      image: thuImage,
      tags: ["React", "TypeScript", "Laravel", "Tailwind CSS", "ShadcnUI", "MySQL"],
      features: t('portfolio.projects.thu.features'),
      github: "https://github.com/itsAgungSaputra/ummuljannahapp",
      demo: "https://thesisagung.matlhy.my.id/"
    },
    {
      id: 2,
      title: t('portfolio.projects.geolocation.title'),
      description: t('portfolio.projects.geolocation.description'),
      fullDescription: t('portfolio.projects.geolocation.fullDescription'),
      image: geolocationImage,
      tags: ["Laravel", "Tailwind CSS", "PHP"],
      features: t('portfolio.projects.geolocation.features'),
      github: "https://github.com/itsAgungSaputra/geolocation_gorut",
      demo: "#"
    },
    {
      id: 3,
      title: t('portfolio.projects.simikom.title'),
      description: t('portfolio.projects.simikom.description'),
      fullDescription: t('portfolio.projects.simikom.fullDescription'),
      image: simikomImage,
      tags: ["Laravel", "Tailwind CSS", "PHP", "MySQL"],
      features: t('portfolio.projects.simikom.features'),
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: t('portfolio.projects.ksl.title'),
      description: t('portfolio.projects.ksl.description'),
      fullDescription: t('portfolio.projects.ksl.fullDescription'),
      image: kslImage,
      tags: ["Laravel", "Tailwind CSS", "JavaScript", "PHP"],
      features: t('portfolio.projects.ksl.features'),
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
          <h2 className="section-title mb-4">{t('portfolio.title')}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              techIcons={techIcons}
              onClick={() => setSelectedProject(project)}
              viewDetailsText={t('portfolio.viewDetails')}
            />
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
            {t('portfolio.viewMore')}
          </a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        techIcons={techIcons}
      />
    </section>
  );
};

export default Portfolio;
