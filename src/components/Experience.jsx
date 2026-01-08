import { motion } from "framer-motion";
import { HiBriefcase } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { t, language } = useLanguage();

  const experiences = [
    {
      id: 1,
      role: t('experience.roles.codingMentor'),
      type: t('experience.types.partTime'),
      company: t('experience.companies.timedoor'),
      location: "Gorontalo, Indonesia",
      period: `Apr 2025 - ${t('experience.present')}`,
      description: t('experience.descriptions.timedoor'),
      highlights: [t('experience.achievements.bestTeacher')],
      skills: [t('experience.skillTags.teaching'), t('experience.skillTags.programming'), t('experience.skillTags.webDev')]
    },
    {
      id: 2,
      role: t('experience.roles.frontendDev'),
      type: t('experience.types.internship'),
      company: t('experience.companies.sekawan'),
      location: "Malang, Indonesia",
      period: "Sep 2024 - Dec 2024",
      description: t('experience.descriptions.sekawan'),
      highlights: [
        t('experience.highlights.etiams'),
        t('experience.highlights.twintech'),
        t('experience.highlights.timahSso'),
        t('experience.highlights.teams')
      ],
      skills: [t('experience.skillTags.webDev')]
    },
    {
      id: 3,
      role: t('experience.roles.graphicDesigner'),
      type: t('experience.types.partTime'),
      company: t('experience.companies.sashop'),
      location: "Gorontalo, Indonesia",
      period: "May 2024 - Jun 2024",
      description: t('experience.descriptions.sashop'),
      highlights: [
        t('experience.highlights.sashopContent')
      ],
      skills: [t('experience.skillTags.graphicDesign'), t('experience.skillTags.socialMedia'), t('experience.skillTags.contentCreation')]
    },
    {
      id: 4,
      role: t('experience.roles.frontendDev'),
      type: t('experience.types.freelance'),
      company: t('experience.companies.selfEmployed'),
      location: "Gorontalo, Indonesia",
      period: `Apr 2020 - ${t('experience.present')}`,
      description: t('experience.descriptions.selfEmployed'),
      highlights: [
        t('experience.highlights.smkWebsite'),
        t('experience.highlights.simikom'),
        t('experience.highlights.pkkmb'),
        t('experience.highlights.thesis')
      ],
      skills: [t('experience.skillTags.webDev')]
    },
    {
      id: 5,
      role: t('experience.roles.frontendDev'),
      type: t('experience.types.internship'),
      company: t('experience.companies.smartData'),
      location: "Gorontalo, Indonesia",
      period: "Jan 2020 - Mar 2020",
      description: t('experience.descriptions.smartData'),
      highlights: [
        t('experience.highlights.gorutWebsite')
      ],
      skills: [t('experience.skillTags.webDev')]
    },
  ];

  return (
    <section id="experience" className="py-12 md:py-20 px-4">
      <div className="container-main">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title mb-4">{t('experience.title')}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        {/* Timeline Card */}
        <motion.div
          className="bento-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Card Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <HiBriefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
              {t('experience.timeline')}
            </h3>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-neutral-700" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="relative pl-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-neutral-900 shadow-sm" />

                  {/* Content */}
                  <div className="bg-gray-50 dark:bg-neutral-800/50 rounded-2xl p-5 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                            {exp.role}
                          </h4>
                          <span className="px-2 py-0.5 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <span className="text-sm text-gray-400 dark:text-neutral-500 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 space-y-1">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-indigo-500 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 text-xs font-medium bg-white dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-lg border border-gray-200 dark:border-neutral-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
