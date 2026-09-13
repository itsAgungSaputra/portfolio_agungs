import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import SpotlightCard from "./ui/SpotlightCard";
import { 
  DiHtml5, DiCss3, DiJavascript1, DiReact, DiPhp, DiLaravel, DiGit
} from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiFigma, SiPostman, SiTypescript } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      description: t('skills.frontendDesc'),
      skills: [
        { name: "HTML5",      icon: <DiHtml5 />,      color: "#E34F26" },
        { name: "CSS3",       icon: <DiCss3 />,       color: "#1572B6" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "JavaScript", icon: <DiJavascript1 />,color: "#F7DF1E" },
        { name: "React",      icon: <DiReact />,      color: "#61DAFB" },
        { name: "Next.js",    icon: <SiNextdotjs />,  color: "#000000" },
        { name: "Tailwind",   icon: <SiTailwindcss />,color: "#06B6D4" },
      ]
    },
    {
      title: t('skills.backend'),
      description: t('skills.backendDesc'),
      skills: [
        { name: "PHP",     icon: <DiPhp />,     color: "#777BB4" },
        { name: "Laravel", icon: <DiLaravel />, color: "#FF2D20" },
      ]
    },
    {
      title: t('skills.tools'),
      description: t('skills.toolsDesc'),
      skills: [
        { name: "Git",     icon: <DiGit />,     color: "#F05032" },
        { name: "VS Code", icon: <VscCode />,   color: "#007ACC" },
        { name: "Figma",   icon: <SiFigma />,   color: "#F24E1E" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 md:py-20 px-4">
      <div className="container-main">
        {/* Section Header */}
        <Reveal className="mb-12">
          <span className="section-label">01 // SKILLS & TECHNOLOGIES</span>
          <h2 className="section-title mb-3">{t('skills.title')}</h2>
          <p className="section-subtitle max-w-xl">{t('skills.subtitle')}</p>
        </Reveal>

        {/* Skills Grid — each card reveals with small stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.1}>
              <SpotlightCard className="h-full flex flex-col justify-between p-6 sm:p-7">
                <div>
                  {/* Category Header with luxury jewel dot */}
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-xs shadow-amber-500/50" />
                      <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-warm-900 dark:text-warm-50">
                        {category.title}
                      </h3>
                    </div>
                    {/* <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-warm-100 dark:bg-warm-800 text-warm-700 dark:text-warm-300 border border-warm-200/80 dark:border-warm-700/80">
                      {category.skills.length} Tools
                    </span> */}
                  </div>

                  <p className="text-sm text-warm-700 dark:text-warm-300 font-normal leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="tech-badge">
                        <span style={{ color: skill.color }} className="text-lg dark:brightness-110">
                          {skill.icon}
                        </span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
