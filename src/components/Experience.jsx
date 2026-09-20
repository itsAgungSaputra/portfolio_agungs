import { HiBriefcase } from "react-icons/hi";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

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
        <Reveal className="mb-12">
          <span className="section-label">{t('experience.label')}</span>
          <h2 className="section-title mb-4">{t('experience.title')}</h2>
          <p className="section-subtitle max-w-xl">
            {t('experience.subtitle')}
          </p>
        </Reveal>

        {/* Timeline Card */}
        <Reveal delay={0.06}>
        <div className="border-y border-warm-200 dark:border-warm-800">
          {/* Card Header */}
          <div className="flex items-center gap-3 py-5 border-b border-warm-200 dark:border-warm-800">
            <HiBriefcase className="w-5 h-5 text-amber-700 dark:text-amber-400" />
            <h3 className="font-heading text-xl font-bold text-warm-900 dark:text-warm-50">
              {t('experience.timeline')}
            </h3>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-warm-200 dark:bg-warm-700" />

            {/* Timeline Items */}
            <div className="space-y-0">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-8"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-amber-700 dark:bg-amber-500 border-4 border-white dark:border-warm-850 shadow-sm" />

                  {/* Content */}
                  <div className="py-7 border-b border-warm-200 dark:border-warm-800 last:border-b-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-heading text-lg font-bold text-warm-900 dark:text-warm-50">
                            {exp.role}
                          </h4>
                          <span className="px-2 py-0.5 text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-amber-700 dark:text-amber-400 text-sm font-medium">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <span className="text-sm text-warm-600 dark:text-warm-500 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-warm-600 dark:text-warm-400 text-sm mb-3">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="text-warm-600 dark:text-warm-400 text-sm mb-4 space-y-1">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-500 mt-1">•</span>
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
                          className="px-3 py-1 text-xs font-medium bg-white dark:bg-warm-700 text-warm-600 dark:text-warm-300 rounded-lg border border-warm-200 dark:border-warm-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
