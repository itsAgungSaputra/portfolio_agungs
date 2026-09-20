import { useState } from "react";
import { 
  AiOutlineGithub, 
  AiOutlineArrowRight, 
  AiOutlineLink,
  AiOutlineEye 
} from "react-icons/ai";
import { DiReact, DiPhp, DiLaravel, DiJavascript1, DiMysql } from "react-icons/di";
import { SiTypescript, SiTailwindcss, SiShadcnui } from "react-icons/si";
import thuImage from "../assets/portfolio/THU Ummul Jannah.png";
import geolocationImage from "../assets/portfolio/Geolocation Gorut.png";
import simikomImage from "../assets/portfolio/SIMIKOM.png";
import kslImage from "../assets/portfolio/KSL UNG.png";
import ProjectModal from "./ProjectModal";
import Skeleton from "./ui/Skeleton";
import Reveal from "./Reveal";
import SpotlightCard from "./ui/SpotlightCard";
import { useLanguage } from "../context/LanguageContext";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const { t } = useLanguage();

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

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
      index: "01",
      category: "Full-Stack Web App",
      year: "2024",
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
      index: "02",
      category: "Geographic Information System",
      year: "2023",
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
      index: "03",
      category: "Information Management System",
      year: "2023",
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
      index: "04",
      category: "Organization Platform",
      year: "2022",
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
    <section id="portfolio" className="py-16 md:py-24 px-4 border-t border-warm-200/80 dark:border-warm-800/80">
      <div className="container-main">
        {/* Section Header */}
        <Reveal className="mb-14 md:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-warm-200 dark:border-warm-800/80">
            <div>
              <span className="section-label">{t('portfolio.label')}</span>
              <h2 className="section-title">{t('portfolio.title')}</h2>
            </div>
            <p className="section-subtitle max-w-md text-sm md:text-base">
              {t('portfolio.subtitle')}
            </p>
          </div>
        </Reveal>

        {/* =========================================================
            ALTERNATING EDITORIAL SHOWCASE
            High-impact visual canvas + thoughtful project story
            ========================================================= */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <Reveal key={project.id} delay={0.05}>
                <article className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}>
                  
                  {/* Visual Preview Canvas (7 columns) */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:col-start-6" : ""}`}>
                    <SpotlightCard 
                      className="p-2 sm:p-3 overflow-hidden cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`${t('portfolio.viewDetails')}: ${project.title}`}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-warm-100 dark:bg-warm-800/60">
                        {!loadedImages[project.id] && (
                          <div className="absolute inset-0 z-10">
                            <Skeleton className="w-full h-full" rounded="rounded-xl" />
                          </div>
                        )}
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
                            loadedImages[project.id] ? "opacity-100" : "opacity-0"
                          }`}
                          onLoad={() => handleImageLoad(project.id)}
                        />
                        
                        {/* Soft Dark Vignette on Hover */}
                        <div className="absolute inset-0 bg-warm-950/20 group-hover:bg-warm-950/40 transition-colors duration-300" />
                        
                        {/* Hover "Inspect Case" Badge */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100">
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-warm-900/90 dark:bg-warm-50/95 text-warm-50 dark:text-warm-900 rounded-xl text-xs font-medium backdrop-blur-md shadow-lg">
                            <AiOutlineEye className="w-4 h-4" />
                            <span>{t('portfolio.viewDetails')}</span>
                          </span>
                        </div>

                        {/* Top corner technical index */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-warm-900/80 dark:bg-warm-900/80 backdrop-blur-sm text-warm-100 text-xs font-semibold tracking-wide border border-white/10">
                          {project.index} // {project.year}
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>

                  {/* Project Context & Narrative (5 columns) */}
                  <div className={`lg:col-span-5 space-y-5 ${isEven ? "lg:col-start-1" : ""}`}>
                    
                    {/* Category Eyebrow */}
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                      <span>{project.category}</span>
                    </div>

                    {/* Headline */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="block text-left font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-warm-900 dark:text-warm-50 hover:text-amber-700 dark:hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 dark:focus-visible:ring-amber-400 focus-visible:ring-offset-4 rounded-lg"
                    >
                      {project.title}
                    </button>

                    {/* Narrative Description */}
                    <p className="text-sm sm:text-base text-warm-600 dark:text-warm-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-warm-100 dark:bg-warm-850 text-warm-700 dark:text-warm-300 rounded-md border border-warm-200/60 dark:border-warm-800/60"
                        >
                          {techIcons[tag] && <span className="text-sm">{techIcons[tag]}</span>}
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions Group */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      {/* Live Demo Link */}
                      {project.demo && project.demo !== "#" && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-primary text-xs !py-2 !px-4"
                        >
                            <span>{t('portfolio.viewDemo')}</span>
                          <AiOutlineLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {/* GitHub Link */}
                      {project.github && project.github !== "#" && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-secondary text-xs !py-2 !px-4"
                        >
                          <AiOutlineGithub className="w-3.5 h-3.5" />
                          <span>{t('portfolio.viewCode')}</span>
                        </a>
                      )}

                      {/* Detail Modal Trigger */}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-warm-700 dark:text-warm-300 hover:text-amber-700 dark:hover:text-amber-400 py-2 px-2 transition-colors ml-auto sm:ml-0"
                      >
                        <span>{t('portfolio.viewDetails')}</span>
                        <AiOutlineArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>

                </article>
              </Reveal>
            );
          })}
        </div>

        {/* View More on GitHub CTA Strip */}
        <div className="text-center mt-20 pt-12 border-t border-warm-200/80 dark:border-warm-800/80">
          <p className="text-xs font-semibold text-warm-600 dark:text-warm-400 uppercase tracking-wider mb-4">
            MORE EXPERIMENTS & OPEN SOURCE REPOSITORIES
          </p>
          <a 
            href="https://github.com/itsAgungSaputra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <AiOutlineGithub className="text-lg" />
            <span>{t('portfolio.viewMore')}</span>
            <AiOutlineArrowRight className="text-xs" />
          </a>
        </div>
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
