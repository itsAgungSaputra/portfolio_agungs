import { HiAcademicCap, HiBookOpen } from "react-icons/hi";
import { useState } from "react";
import Skeleton from "./ui/Skeleton";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

// Import education logos
import logoUNG from "../assets/education/UNIVERSITASNEGERIGORONTALO.png";
import logoUB from "../assets/education/UNIVERSITASBRAWIJAYA.png";
import logoSMK from "../assets/education/SMKNEGERI1LIMBOTO.png";

// Education Item Component with logo loading state
const EducationItem = ({ edu, index }) => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const { language } = useLanguage();

  return (
    <div className="relative pl-6 sm:pl-8">
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-amber-700 dark:bg-amber-500 border-[3px] sm:border-4 border-white dark:border-warm-900 shadow-sm" />

      {/* Content */}
      <div className="bg-warm-50 dark:bg-warm-800/50 rounded-xl sm:rounded-2xl p-3 sm:p-5 hover:bg-warm-100 dark:hover:bg-warm-800 transition-colors">
        {/* Mobile: Vertical Layout, Desktop: Horizontal Layout */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
          {/* Logo + Period Row (Mobile) */}
          <div className="flex items-center justify-between sm:justify-start gap-3">
            {/* Logo */}
            <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 relative">
              {!logoLoaded && (
                <Skeleton className="w-10 h-10 sm:w-14 sm:h-14" rounded="rounded-lg sm:rounded-xl" />
              )}
              <img 
                src={edu.logo} 
                alt={edu.institution}
                className={`w-10 h-10 sm:w-14 sm:h-14 object-contain rounded-lg sm:rounded-xl bg-white dark:bg-warm-700 p-1 sm:p-1.5 transition-opacity duration-300 ${logoLoaded ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}
                onLoad={() => setLogoLoaded(true)}
              />
            </div>
            {/* Period - Visible only on mobile inline with logo */}
            <span className="sm:hidden text-xs text-warm-600 dark:text-warm-500 whitespace-nowrap">
              {edu.period}
            </span>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-1 mb-1">
              <h4 className="font-heading text-base sm:text-lg font-bold text-warm-900 dark:text-white leading-tight">
                {edu.degree}
              </h4>
              {/* Period - Hidden on mobile, shown on desktop */}
              <span className="hidden sm:block text-sm text-warm-600 dark:text-warm-500 whitespace-nowrap">
                {edu.period}
              </span>
            </div>
            
            <p className="text-amber-700 dark:text-amber-400 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
              {edu.institution}
            </p>
            
            {/* IPK/GPA */}
            {edu.gpa && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800/50">
                <span className="text-[10px] sm:text-xs font-semibold text-amber-700 dark:text-amber-300">
                  {language === 'id' ? 'IPK:' : 'GPA:'}
                </span>
                <span className="text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-100">{edu.gpa}</span>
              </div>
            )}
            
            <p className="text-warm-600 dark:text-warm-400 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
              {edu.description}
            </p>

            {/* Focus Areas */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {edu.achievements.map((achievement) => (
                <span 
                  key={achievement}
                  className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-white dark:bg-warm-700 text-warm-600 dark:text-warm-300 rounded-md sm:rounded-lg border border-warm-200 dark:border-warm-600"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const { t } = useLanguage();

  // Education data - using translations
  const educations = [
    {
      id: 1,
      degree: t('education.degrees.bachelor'),
      institution: t('education.institutions.ung'),
      period: "Aug 2021 - Dec 2025",
      gpa: "3.74",
      description: t('education.descriptions.ung'),
      achievements: [t('education.achievements.webDev'), t('education.achievements.database')],
      logo: logoUNG
    },
    {
      id: 2,
      degree: t('education.degrees.exchange'),
      institution: t('education.institutions.ub'),
      period: "Aug 2023 - Dec 2023",
      gpa: "3.69",
      description: t('education.descriptions.ub'),
      achievements: [t('education.achievements.webDev'), t('education.achievements.uiux'), t('education.achievements.bigData'), t('education.achievements.dataScience'), t('education.achievements.humanComputerInteraction'), t('education.achievements.dataVisualization')],
      logo: logoUB
    },
    {
      id: 3,
      degree: t('education.degrees.vocational'),
      institution: t('education.institutions.smk'),
      period: "2018 - 2021",
      description: t('education.descriptions.smk'),
      achievements: [t('education.achievements.programmingBasics'), t('education.achievements.softwareDev')],
      logo: logoSMK
    },
  ];

  // Certifications/Courses
  const certifications = [
    {
      id: 1,
      name: t('education.certs.vsga'),
      issuer: "Digitalent Scholarship",
      year: "2021, 2022"
    },
  ];

  return (
    <section id="education" className="py-10 sm:py-12 md:py-20 px-3 sm:px-4">
      <div className="container-main">
        {/* Section Header */}
        <Reveal className="mb-8 sm:mb-12">
          <span className="section-label">02 // ACADEMIC BACKGROUND</span>
          <h2 className="section-title mb-3 sm:mb-4">{t('education.title')}</h2>
          <p className="section-subtitle max-w-xl text-sm sm:text-base">
            {t('education.subtitle')}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Education Timeline Card */}
          <Reveal delay={0.05} className="lg:col-span-2">
          <div className="bento-card h-full">

            {/* Card Header */}
            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
              <HiAcademicCap className="w-6 h-6 sm:w-7 sm:h-7 text-amber-700 dark:text-amber-500" />
              <h3 className="font-heading text-base sm:text-xl font-bold text-warm-900 dark:text-white">
                {t('education.academicBackground')}
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[5px] sm:left-[7px] top-2 bottom-2 w-0.5 bg-warm-200 dark:bg-warm-700" />

              {/* Timeline Items */}
              <div className="space-y-5 sm:space-y-8">
                {educations.map((edu, index) => (
                  <EducationItem key={edu.id} edu={edu} index={index} />
                ))}
              </div>
            </div>
          </div>
          </Reveal>

          {/* Certifications Card */}
          <Reveal delay={0.12}>
          <div className="bento-card h-full">
            <h3 className="font-heading text-base sm:text-lg font-bold text-warm-900 dark:text-white mb-4 sm:mb-6">
              {t('education.certifications')}
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3 sm:p-4 bg-warm-50 dark:bg-warm-800/50 rounded-lg sm:rounded-xl hover:bg-warm-100 dark:hover:bg-warm-800 transition-colors"
                >
                  <h4 className="font-medium text-warm-900 dark:text-white text-xs sm:text-sm mb-1 leading-tight">
                    {cert.name}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs text-warm-500 dark:text-warm-500">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] sm:text-xs text-warm-600 dark:text-warm-600">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Note */}
            <div className="mt-6 p-4 bg-warm-50 dark:bg-warm-800/50 rounded-xl border border-warm-200 dark:border-warm-700">
              <div className="flex items-start gap-2">
                <HiBookOpen className="w-5 h-5 text-amber-700 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-warm-600 dark:text-warm-400">
                  {t('skills.learningNote')}
                </p>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
