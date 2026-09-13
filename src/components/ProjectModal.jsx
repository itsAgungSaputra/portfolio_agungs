import { motion, AnimatePresence } from "framer-motion";
import { 
  AiOutlineGithub, 
  AiOutlineLink, 
  AiOutlineClose, 
  AiOutlineCheck
} from "react-icons/ai";
import { useLanguage } from "../context/LanguageContext";

const ProjectModal = ({ project, isOpen, onClose, techIcons }) => {
  const { t } = useLanguage();

  if (!project) return null;

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  const hasDemo = project.demo && project.demo !== "#";
  const hasGithub = project.github && project.github !== "#";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-warm-950/75 dark:bg-black/85 backdrop-blur-md overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white dark:bg-warm-900 rounded-3xl shadow-2xl border border-warm-200/90 dark:border-warm-800 overflow-hidden"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating Sticky Close Button (Always visible during scroll) */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-30 w-11 h-11 flex items-center justify-center rounded-full bg-warm-900/80 hover:bg-warm-900 text-warm-100 hover:text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-105 shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
              aria-label="Close modal"
            >
              <AiOutlineClose className="text-lg" />
            </button>

            {/* Scrollable Container for Entire Modal Content */}
            <div className="overflow-y-auto flex-1 overscroll-contain">
              
              {/* =========================================================
                  HEADER PREVIEW (Balanced Height, Never squishes text)
                  ========================================================= */}
              <div className="relative h-52 sm:h-64 md:h-72 w-full bg-warm-900 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-950/95 via-warm-950/40 to-black/30" />

                {/* Top-Left Category Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3.5 py-1.5 rounded-full bg-warm-900/80 text-warm-100 backdrop-blur-md text-xs font-semibold border border-white/15 shadow-sm">
                    {project.category || "Selected Work"} {project.year ? `• ${project.year}` : ""}
                  </div>
                </div>

                {/* Bottom Title on Cover */}
                <div className="absolute bottom-5 left-5 right-16 sm:left-7 sm:bottom-6 z-10">
                  <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-sm leading-tight">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* =========================================================
                  EXPANDED BODY CONTENT (Ample breathing room for explanation)
                  ========================================================= */}
              <div className="p-6 sm:p-8 md:p-10 space-y-8">
                
                {/* Tech Stack Chips */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shadow-xs shadow-amber-500/50" />
                    <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-warm-700 dark:text-warm-300">
                      {t('portfolio.technologies')}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-warm-100 dark:bg-warm-800 text-warm-800 dark:text-warm-200 rounded-lg border border-warm-200/80 dark:border-warm-700/80"
                      >
                        {techIcons[tag] && <span className="text-base">{techIcons[tag]}</span>}
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Overview (Large, comfortable, clearly visible) */}
                <div className="rounded-2xl p-5 sm:p-6 bg-warm-50/80 dark:bg-warm-850/60 border border-warm-200/70 dark:border-warm-800/80">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shadow-xs shadow-amber-500/50" />
                    <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-warm-700 dark:text-warm-300">
                      Project Overview
                    </h3>
                  </div>
                  
                  <p className="text-base sm:text-lg text-warm-800 dark:text-warm-100 leading-relaxed font-normal">
                    {project.fullDescription || project.description}
                  </p>
                </div>

                {/* Key Features (2-Column Feature Cards) */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shadow-xs shadow-amber-500/50" />
                      <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-warm-700 dark:text-warm-300">
                        {t('portfolio.features')}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {project.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 rounded-xl bg-warm-50/80 dark:bg-warm-850/80 border border-warm-200/80 dark:border-warm-800"
                        >
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 flex items-center justify-center mt-0.5">
                            <AiOutlineCheck className="w-3 h-3 stroke-[2]" />
                          </span>
                          <span className="text-sm font-medium text-warm-800 dark:text-warm-200 leading-snug">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>

            {/* =========================================================
                STICKY BOTTOM ACTION FOOTER (Always visible & accessible)
                ========================================================= */}
            <div className="p-4 sm:p-5 border-t border-warm-200/80 dark:border-warm-800 bg-white/95 dark:bg-warm-900/95 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 z-20 flex-shrink-0">
              <div className="text-xs text-warm-500 dark:text-warm-400 font-medium hidden sm:block">
                Press <kbd className="px-1.5 py-0.5 rounded bg-warm-100 dark:bg-warm-800 text-[10px] font-mono border border-warm-200 dark:border-warm-700">ESC</kbd> to close
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto ml-auto">
                {/* GitHub Code Link */}
                {hasGithub && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1 sm:flex-initial text-xs sm:text-sm !py-2.5 !px-4"
                  >
                    <AiOutlineGithub className="text-lg" />
                    <span>{t('portfolio.viewCode')}</span>
                  </a>
                )}

                {/* Live Demo Link */}
                {hasDemo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 sm:flex-initial text-xs sm:text-sm !py-2.5 !px-5"
                  >
                    <span>{t('portfolio.viewDemo')}</span>
                    <AiOutlineLink className="text-lg" />
                  </a>
                )}

                {/* Close Button on mobile */}
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-warm-600 dark:text-warm-400 hover:bg-warm-100 dark:hover:bg-warm-800 transition-colors sm:hidden border border-warm-200 dark:border-warm-700"
                >
                  {t('portfolio.close') || "Close"}
                </button>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
