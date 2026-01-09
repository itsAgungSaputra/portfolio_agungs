import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import profpic from "../assets/profilepic.jpg";
import Skeleton from "./ui/Skeleton";
import { useLanguage } from "../context/LanguageContext";
import { 
  AiOutlineGithub, 
  AiOutlineLinkedin, 
  AiOutlineInstagram,
  AiOutlineBehance,
  AiOutlineDownload,
  AiOutlineEnvironment,
  AiOutlineEye,
  AiOutlineClose
} from "react-icons/ai";
import { HiGlobeAlt } from "react-icons/hi";
import { 
  DiHtml5, 
  DiCss3, 
  DiJavascript1, 
  DiReact, 
  DiPhp,
  DiLaravel 
} from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiSpotify, SiTypescript } from "react-icons/si";
import GB from 'country-flag-icons/react/3x2/GB';
import ID from 'country-flag-icons/react/3x2/ID';

// CV Modal Component
const CVModal = ({ isOpen, onClose, t }) => {
  const cvVersions = [
    {
      lang: "English",
      code: "EN",
      Flag: GB,
      file: "/CV_Mohamad Agung Saputra_English_Ver.pdf",
      downloadName: "CV_Mohamad Agung Saputra_English.pdf"
    },
    {
      lang: "Indonesia",
      code: "ID",
      Flag: ID,
      file: "/CV_Mohamad Agung Saputra_Indo_Ver.pdf",
      downloadName: "CV_Mohamad Agung Saputra_Indonesia.pdf"
    }
  ];

  const handleView = (file) => {
    window.open(file, "_blank");
    onClose();
  };

  const handleDownload = (file, downloadName) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
          >
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-neutral-800 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-neutral-800">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {t('hero.selectCV')}
                </h3>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                >
                  <AiOutlineClose className="w-4 h-4" />
                </button>
              </div>

              {/* CV Options */}
              <div className="p-4 space-y-3">
                {cvVersions.map((cv) => (
                  <div
                    key={cv.lang}
                    className="p-4 bg-gray-50 dark:bg-neutral-800/50 rounded-xl border border-gray-200 dark:border-neutral-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Country Flag Icon */}
                        <div className="w-10 h-7 rounded overflow-hidden shadow-sm border border-gray-200 dark:border-neutral-600">
                          <cv.Flag title={cv.lang} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-900 dark:text-white">
                            CV - {cv.lang}
                          </p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            {cv.lang === "English" ? "English Version" : "Versi Indonesia"}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleView(cv.file)}
                          className="flex items-center gap-1.5 px-3 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors text-sm font-medium"
                        >
                          <AiOutlineEye className="w-4 h-4" />
                          <span className="hidden sm:inline">{t('hero.view')}</span>
                        </button>
                        <button
                          onClick={() => handleDownload(cv.file, cv.downloadName)}
                          className="flex items-center gap-1.5 px-3 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors text-sm font-medium"
                        >
                          <AiOutlineDownload className="w-4 h-4" />
                          <span className="hidden sm:inline">{t('hero.download')}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Hero = () => {
  const [isDark, setIsDark] = useState(false);
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { icon: <AiOutlineGithub />, href: "https://github.com/itsAgungSaputra", label: "GitHub" },
    { icon: <AiOutlineLinkedin />, href: "https://www.linkedin.com/in/agungsaputra14/", label: "LinkedIn" },
    { icon: <AiOutlineInstagram />, href: "https://www.instagram.com/agung_saputra____", label: "Instagram" },
    { icon: <AiOutlineBehance />, href: "https://www.behance.net/itsagungsaputra", label: "Behance" },
  ];

  const techStack = [
    { icon: <DiHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <DiCss3 />, name: "CSS3", color: "#1572B6" },
    { icon: <DiJavascript1 />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <DiPhp />, name: "PHP", color: "#777BB4" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <DiReact />, name: "React", color: "#61DAFB" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
    { icon: <DiLaravel />, name: "Laravel", color: "#FF2D20" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
  ];

  const openCVModal = () => {
    setIsCVModalOpen(true);
  };

  return (
    <section id="home" className="min-h-screen pt-24 pb-12 px-4">
      {/* CV Modal */}
      <CVModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
        t={t}
      />
      <motion.div 
        className="container-main"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
          
          {/* Card 1: Profile Card - Large (spans 2 cols on md+) */}
          <motion.div 
            variants={fadeInUp}
            className="bento-card md:col-span-2 md:row-span-2 flex flex-col items-center md:items-start text-center md:text-left pb-10 md:pb-6"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-6 w-full">
              <div className="relative">
                {/* Skeleton loader */}
                {!profileLoaded && (
                  <Skeleton 
                    className="w-32 h-32 md:w-40 md:h-40" 
                    rounded="rounded-3xl"
                  />
                )}
                <img 
                  src={profpic} 
                  alt="Agung Saputra" 
                  className={`w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover shadow-lg transition-opacity duration-300 ${profileLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
                  onLoad={() => setProfileLoaded(true)}
                />
                {/* Status Indicator - Green dot */}
                <div className="absolute -bottom-1 -right-1 flex items-center">
                  <div className="relative">
                    <div className="w-5 h-5 bg-green-500 rounded-full border-3 border-white dark:border-neutral-900" />
                    <div className="absolute inset-0 w-5 h-5 bg-green-500 rounded-full animate-ping opacity-75" />
                  </div>
                </div>
                {/* Open for Work Badge */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full border border-green-200 dark:border-green-800 shadow-sm">
                    <div className="relative">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" />
                    </div>
                    <span className="text-xs font-medium text-green-700 dark:text-green-400 whitespace-nowrap">{t('hero.openForWork')}</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 mt-6 md:mt-0">
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-1">
                  {t('hero.role')}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
                  Agung Saputra
                </h1>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
                  {t('hero.bio')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Location Card - Small */}
          <motion.div 
            variants={fadeInUp}
            className="bento-card flex items-center gap-3 md:gap-4"
          >
            <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <AiOutlineEnvironment className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-neutral-500 dark:text-neutral-500 uppercase tracking-wider">{t('hero.location')}</p>
              <p className="font-semibold text-neutral-900 dark:text-white text-sm md:text-base">{t('hero.locationValue')}</p>
            </div>
          </motion.div>

          {/* Card 3: CV Card - View & Download */}
          <motion.div 
            variants={fadeInUp}
            onClick={openCVModal}
            className="bento-card bento-card-hover bg-indigo-600 dark:bg-indigo-500 border-indigo-600 dark:border-indigo-500 group cursor-pointer"
          >
            <div className="flex items-center justify-between h-full">
              <div>
                <p className="text-indigo-200 text-sm mb-1">{t('hero.checkProfile')}</p>
                <div className="flex items-center gap-2">
                  <AiOutlineEye className="w-5 h-5 text-white/70" />
                  <p className="text-white font-semibold text-lg">{t('hero.viewResume')}</p>
                </div>
              </div>
              
              <div className="w-12 h-12 rounded-2xl bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-colors">
                <AiOutlineDownload className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Card 4: Social Links - Small */}
          <motion.div 
            variants={fadeInUp}
            className="bento-card"
          >
            <p className="text-xs text-neutral-500 dark:text-neutral-500 uppercase tracking-wider mb-4">{t('hero.connect')}</p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="social-btn text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Card 5: Spotify Now Playing */}
          <motion.div 
            variants={fadeInUp}
            className="bento-card md:col-span-2 overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4">
              <SiSpotify className="text-green-500 text-base" />
              <p className="text-xs text-neutral-500 dark:text-neutral-500 uppercase tracking-wider">{t('hero.nowPlaying')}</p>
            </div>
            <a 
              href="https://spotify-github-profile.kittinanx.com/api/view?uid=agung_saputra14&redirect=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <img 
                src={`https://spotify-github-profile.kittinanx.com/api/view?uid=agung_saputra14&cover_image=true&theme=spotify-embed&show_offline=false&background_color=121212&interchange=false&profanity=false&bar_color=53b14f&bar_color_cover=false&mode=${isDark ? 'dark' : 'light'}`}
                alt="Spotify Now Playing"
                className="w-full rounded-2xl hover:scale-[1.02] transition-transform duration-300"
              />
            </a>
          </motion.div>

          {/* Card 6: Tech Stack - Medium (spans 2 cols on md+) */}
          <motion.div 
            variants={fadeInUp}
            className="bento-card md:col-span-2"
          >
            <p className="text-xs text-neutral-500 dark:text-neutral-500 uppercase tracking-wider mb-4">{t('hero.techStack')}</p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="tech-badge"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span style={{ color: tech.color }} className="text-xl">
                    {tech.icon}
                  </span>
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
