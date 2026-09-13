import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import profpic from "../assets/profilepic.jpg";
import Skeleton from "./ui/Skeleton";
import SpotlightCard from "./ui/SpotlightCard";
import { useLanguage } from "../context/LanguageContext";
import { 
  AiOutlineGithub, 
  AiOutlineLinkedin, 
  AiOutlineInstagram, 
  AiOutlineBehance,
  AiOutlineDownload,
  AiOutlineEnvironment,
  AiOutlineEye,
  AiOutlineClose,
  AiOutlineArrowRight
} from "react-icons/ai";
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
      downloadName: "CV_Mohamad Agung Saputra_EngVer.pdf"
    },
    {
      lang: "Indonesia",
      code: "ID",
      Flag: ID,
      file: "/CV_Mohamad Agung Saputra_Indo_Ver.pdf",
      downloadName: "CV_Mohamad Agung Saputra_IndoVer.pdf"
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="fixed top-1/2 left-0 right-0 -translate-y-1/2 z-50 mx-4 sm:mx-auto max-w-md sm:left-1/2 sm:-translate-x-1/2"
          >
            <div className="bg-white dark:bg-warm-900 rounded-2xl shadow-2xl border border-warm-200 dark:border-warm-800 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-warm-200 dark:border-warm-800">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">RESUME / CURRICULUM VITAE</span>
                  <h3 className="font-heading text-lg font-bold text-warm-900 dark:text-white">
                    {t('hero.selectCV')}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="w-11 h-11 rounded-lg bg-warm-100 dark:bg-warm-800 flex items-center justify-center text-warm-500 hover:text-warm-700 dark:hover:text-warm-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 dark:focus-visible:ring-amber-400 focus-visible:ring-offset-2"
                  aria-label="Close"
                >
                  <AiOutlineClose className="w-4 h-4" />
                </button>
              </div>

              {/* CV Options */}
              <div className="p-4 sm:p-5 space-y-3">
                {cvVersions.map((cv) => (
                  <div
                    key={cv.lang}
                    className="p-4 bg-warm-50 dark:bg-warm-850 rounded-xl border border-warm-200 dark:border-warm-800 hover:border-amber-400 dark:hover:border-amber-600 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-6 rounded overflow-hidden shadow-xs border border-warm-200 dark:border-warm-700 flex-shrink-0">
                          <cv.Flag title={cv.lang} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-medium text-warm-900 dark:text-white text-sm">
                             CV ({cv.lang})
                          </p>
                          <p className="text-xs text-warm-500 dark:text-warm-400">
                            {cv.lang === "English" ? "English Version (PDF)" : "Versi Indonesia (PDF)"}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleView(cv.file)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-warm-200 dark:bg-warm-800 text-warm-700 dark:text-warm-300 rounded-lg hover:bg-warm-300 dark:hover:bg-warm-700 transition-colors text-xs font-medium"
                        >
                          <AiOutlineEye className="w-3.5 h-3.5" />
                          <span>{t('hero.view')}</span>
                        </button>
                        <button
                          onClick={() => handleDownload(cv.file, cv.downloadName)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-amber-700 dark:bg-amber-500 text-white dark:text-warm-900 rounded-lg hover:bg-amber-800 dark:hover:bg-amber-400 transition-colors text-xs font-medium"
                        >
                          <AiOutlineDownload className="w-3.5 h-3.5" />
                          <span>{t('hero.download')}</span>
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
    { icon: <DiReact />, name: "React", color: "#61DAFB" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
    { icon: <DiJavascript1 />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
    { icon: <DiLaravel />, name: "Laravel", color: "#FF2D20" },
    { icon: <DiPhp />, name: "PHP", color: "#777BB4" },
    { icon: <DiHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <DiCss3 />, name: "CSS3", color: "#1572B6" },
  ];

  return (
    <section id="home" className="pt-2 sm:pt-4 md:pt-6 pb-16 px-4">
      {/* CV Modal */}
      <CVModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
        t={t}
      />

      <div className="container-main space-y-12 md:space-y-16">
        
        {/* =========================================================
            PART 1: OPEN EDITORIAL TYPOGRAPHIC HERO STATEMENT
            Replaces rigid "over-carded" hero with dramatic typography
            ========================================================= */}
        <div className="space-y-8 md:space-y-10">
          {/* Main Statement Canvas: Headline + Portrait Integration */}
          <div className="flex flex-col-reverse lg:flex-row lg:items-end justify-between gap-8 md:gap-12">
            
            {/* Left Headline & Narrative */}
            <div className="max-w-3xl space-y-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm">
                  <span className="font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400">
                    {t('hero.role')}
                  </span>
                  <span className="text-warm-300 dark:text-warm-700">•</span>
                  <span className="flex items-center gap-1.5 font-medium text-warm-600 dark:text-warm-400">
                    <AiOutlineEnvironment className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                    <span>{t('hero.locationValue')}</span>
                  </span>
                </div>
                <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-warm-900 dark:text-warm-50 leading-[0.98]">
                  Agung <br className="hidden sm:block" />
                  Saputra<span className="text-amber-700 dark:text-amber-400">.</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-warm-800 dark:text-warm-200 leading-relaxed max-w-2xl font-normal">
                {t('hero.bio')}
              </p>

              {/* Action Buttons & Quick Socials */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setIsCVModalOpen(true)}
                  className="btn-primary"
                >
                  <span>{t('hero.viewResume')}</span>
                  <AiOutlineArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#contact"
                  className="btn-secondary"
                >
                  <span>{t('navbar.contact')}</span>
                </a>

                {/* Inline Social Icons */}
                <div className="flex items-center gap-1 sm:gap-2 ml-0 sm:ml-2 border-l border-warm-200 dark:border-warm-800 pl-3 sm:pl-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="social-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 dark:focus-visible:ring-amber-400 focus-visible:ring-offset-2"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Portrait Image with Natural Editorial Border */}
            <div className="flex-shrink-0 self-center lg:self-end">
              <div className="relative group w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                {!profileLoaded && (
                  <div className="absolute inset-0 z-10">
                    <Skeleton className="w-full h-full" rounded="rounded-3xl" />
                  </div>
                )}
                <img 
                  src={profpic} 
                  alt="Mohamad Agung Saputra" 
                  className={`w-full h-full object-cover rounded-3xl border border-warm-200 dark:border-warm-800 shadow-xl transition-all duration-500 group-hover:scale-[1.02] ${profileLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setProfileLoaded(true)}
                />
              </div>
            </div>
            
          </div>

        </div>

        {/* =========================================================
            PART 2: HERO CARDS (Spotify Now Playing & Tech Stack)
            Clean, authentic, zero AI filler text
            ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Card 1: Spotify Live Now Playing */}
          <SpotlightCard className="flex flex-col justify-between">
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs shadow-emerald-500/50" />
                <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-warm-900 dark:text-warm-50">
                  {t('hero.nowPlaying')}
                </h3>
              </div>
              <SiSpotify className="text-emerald-500 text-2xl hover:scale-110 transition-transform duration-200" />
            </div>

            <a 
              href="https://spotify-github-profile.kittinanx.com/api/view?uid=agung_saputra14&redirect=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl"
            >
              <img 
                src={`https://spotify-github-profile.kittinanx.com/api/view?uid=agung_saputra14&cover_image=true&theme=spotify-embed&show_offline=false&background_color=121212&interchange=false&profanity=false&bar_color=53b14f&bar_color_cover=false&mode=${isDark ? 'dark' : 'light'}`}
                alt="Spotify Now Playing"
                className="w-full rounded-xl hover:scale-[1.01] transition-transform duration-200"
              />
            </a>
          </SpotlightCard>

          {/* Card 2: Tech Stack */}
          <SpotlightCard className="flex flex-col justify-between">
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-xs shadow-amber-500/50" />
                <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-warm-900 dark:text-warm-50">
                  {t('hero.techStack')}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="tech-badge"
                >
                  <span style={{ color: tech.color }} className="text-lg">
                    {tech.icon}
                  </span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </SpotlightCard>

        </div>

      </div>
    </section>
  );
};

export default Hero;
