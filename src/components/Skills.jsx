import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
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
          <span className="section-label">{t('skills.label')}</span>
          <h2 className="section-title mb-3">{t('skills.title')}</h2>
          <p className="section-subtitle max-w-xl">{t('skills.subtitle')}</p>
        </Reveal>

        {/* Skills list: typography and grouping carry the hierarchy. */}
        <div className="divide-y divide-warm-200 dark:divide-warm-800 border-y border-warm-200 dark:border-warm-800">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.04}>
              <div className="grid grid-cols-1 md:grid-cols-[minmax(10rem,0.7fr)_minmax(0,1.8fr)] gap-5 md:gap-10 py-7 md:py-9">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-warm-900 dark:text-warm-50">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-warm-600 dark:text-warm-400 leading-relaxed max-w-xs">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap content-start gap-x-5 gap-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 text-sm font-medium text-warm-800 dark:text-warm-200">
                      <span style={{ color: skill.color }} className="text-lg dark:brightness-110">
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
