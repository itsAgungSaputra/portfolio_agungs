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

// Component for Project Card with image loading state
const ProjectCard = ({ project, index, techIcons, onClick }) => {
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
            Click to view details
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
      fullDescription: "THU Ummul Jannah App is a comprehensive web application designed for managing Hajj and Umrah savings programs. Built with modern technologies, this system streamlines the entire process from member registration to payment tracking. The application integrates seamlessly with online payment gateways and provides automated WhatsApp notifications for payment reminders and confirmations, ensuring a smooth experience for both administrators and members.",
      image: thuImage,
      tags: ["React", "TypeScript", "Laravel", "Tailwind CSS", "ShadcnUI", "MySQL"],
      features: [
        "Member registration and profile management system",
        "Automated savings calculation with flexible payment schedules",
        "Integration with multiple online payment gateways (Midtrans)",
        "Real-time WhatsApp notifications for payment reminders and confirmations",
        "Admin dashboard with comprehensive reporting and analytics",
        "Export data to Excel/PDF for financial documentation",
        "Responsive design optimized for mobile and desktop"
      ],
      github: "https://github.com/itsAgungSaputra/ummuljannahapp",
      demo: "https://thesisagung.matlhy.my.id/"
    },
    {
      id: 2,
      title: "Geolocation Gorut",
      description: "An interactive geolocation-based information system for North Gorontalo Regency.",
      fullDescription: "Geolocation Gorut is a web-based Geographic Information System (GIS) that provides detailed location data and information about North Gorontalo Regency. The application features an interactive map interface that allows users to explore various points of interest, government facilities, tourism spots, and administrative boundaries. Built with Laravel and integrated with Leaflet.js for map visualization.",
      image: geolocationImage,
      tags: ["Laravel", "Tailwind CSS", "PHP"],
      features: [
        "Interactive map with multiple layer support",
        "Search functionality for locations and facilities",
        "Detailed information panels for each point of interest",
        "Admin panel for managing location data and categories",
        "Responsive map controls optimized for touch devices",
        "Export and share location coordinates"
      ],
      github: "https://github.com/itsAgungSaputra/geolocation_gorut",
      demo: "#"
    },
    {
      id: 3,
      title: "SIMIKOM (Sistem Informasi Manajemen Iuran Komite) SD Lab UNG",
      description: "A committee fee management information system for SD Laboratorium UNG.",
      fullDescription: "SIMIKOM is a comprehensive committee fee management system developed specifically for SD Laboratorium UNG. This application digitizes the entire process of collecting and managing school committee fees, replacing traditional manual methods with an efficient digital solution. The system provides transparency in financial management and simplifies the payment process for parents while giving administrators powerful tools for tracking and reporting.",
      image: simikomImage,
      tags: ["Laravel", "Tailwind CSS", "PHP", "MySQL"],
      features: [
        "Student and parent data management with family linking",
        "Flexible fee structure configuration per academic year",
        "Multiple payment methods including installment options",
        "Automated receipt generation with unique transaction codes",
        "Real-time payment status tracking for parents",
        "Comprehensive financial reports with filtering options",
        "SMS/Email notifications for payment reminders"
      ],
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "KSL UNG",
      description: "Official website for Kelompok Studi Linux (Linux Study Group) UNG.",
      fullDescription: "KSL UNG Website is the official online platform for Kelompok Studi Linux at Gorontalo State University. The website serves as a hub for the Linux community at UNG, featuring news updates, event information, learning resources, and member portfolios. Built with Laravel and modern frontend technologies, the site showcases the organization's activities and provides a platform for knowledge sharing among members.",
      image: kslImage,
      tags: ["Laravel", "Tailwind CSS", "JavaScript", "PHP"],
      features: [
        "Dynamic content management system for articles and news",
        "Event calendar with registration functionality",
        "Member portfolio showcase with project galleries",
        "Learning resources library with categorized tutorials",
        "Blog system with markdown support and comments",
        "Admin dashboard for content and member management",
        "SEO optimized pages for better discoverability"
      ],
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
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              techIcons={techIcons}
              onClick={() => setSelectedProject(project)}
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
            View More on GitHub
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
