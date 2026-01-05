import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { 
  DiHtml5, 
  DiCss3, 
  DiJavascript1, 
  DiReact, 
  DiPhp,
  DiLaravel,
  DiGit
} from "react-icons/di";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFigma, 
  SiPostman,
  SiTypescript
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      description: t('skills.frontendDesc'),
      skills: [
        { name: "HTML5", icon: <DiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <DiCss3 />, color: "#1572B6" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "JavaScript", icon: <DiJavascript1 />, color: "#F7DF1E" },
        { name: "React", icon: <DiReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      ]
    },
    {
      title: t('skills.backend'),
      description: t('skills.backendDesc'),
      skills: [
        { name: "PHP", icon: <DiPhp />, color: "#777BB4" },
        { name: "Laravel", icon: <DiLaravel />, color: "#FF2D20" },
      ]
    },
    {
      title: t('skills.tools'),
      description: t('skills.toolsDesc'),
      skills: [
        { name: "Git", icon: <DiGit />, color: "#F05032" },
        { name: "VS Code", icon: <VscCode />, color: "#007ACC" },
        { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 md:py-20 px-4">
      <div className="container-main">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title mb-4">{t('skills.title')}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bento-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-500">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="tech-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span style={{ color: skill.color }} className="text-lg dark:brightness-110">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Card */}
        <motion.div
          className="bento-card mt-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-neutral-600 dark:text-neutral-400">
            {t('skills.learningNote')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
