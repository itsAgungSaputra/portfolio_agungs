import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineGithub, AiOutlineLink, AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { DiReact, DiPhp, DiLaravel, DiJavascript1, DiMysql } from "react-icons/di";
import { SiTypescript, SiTailwindcss, SiShadcnui } from "react-icons/si";

const ProjectModal = ({ project, isOpen, onClose, techIcons }) => {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <motion.div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm text-neutral-600 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white transition-all shadow-lg"
              aria-label="Close modal"
            >
              <AiOutlineClose className="text-xl" />
            </button>

            {/* Header Image */}
            <div className="relative h-56 md:h-72 overflow-hidden rounded-t-3xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Title & Tags */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl border border-indigo-100 dark:border-indigo-800"
                    >
                      {techIcons[tag] && <span className="text-base">{techIcons[tag]}</span>}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Overview Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  Overview
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Key Features Section */}
              {project.features && project.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400"
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                          <AiOutlineCheck className="text-green-600 dark:text-green-400 text-xs" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-2xl font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  <AiOutlineGithub className="text-xl" />
                  View Source Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-medium hover:bg-indigo-700 transition-colors"
                >
                  <AiOutlineLink className="text-xl" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
