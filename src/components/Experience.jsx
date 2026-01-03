import { motion } from "framer-motion";
import { HiBriefcase } from "react-icons/hi";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Coding Mentor",
      type: "Part-Time",
      company: "Timedoor Academy",
      location: "Gorontalo, Indonesia",
      period: "Apr 2025 - Present",
      description: "Timedoor Academy is an educational institution focused on technology and digital skills development, especially in programming and information technology. Through interactive, project-based learning, equipping students with in-depth knowledge of coding, application design, and web/mobile development.",
      skills: ["Teaching", "Programming", "Web Development"]
    },
    {
      id: 2,
      role: "Front-End Developer",
      type: "Internship",
      company: "Sekawan Media (SEAL Coding Factory)",
      location: "Malang, Indonesia",
      period: "Sep 2024 - Dec 2024",
      description: "Sekawan Media is an IT company focused on developing applications and websites. Founded in 2013, Sekawan Media has provided top-notch solutions to hundreds of clients from various industries.",
      highlights: [
        "Developed 'ETIAMS' web application - internal audit management system for a BUMN company",
        "Built 'Twintech Precision DCR' - Digital Controlling & Reporting application",
        "Created 'Timah SSO' web application for PT. Timah",
        "Developed 'TeAMS' - audit management system for JOB Pertamina-Medco E&P Tomori Sulawesi"
      ],
      skills: ["Web Development", "Quality Control"]
    },
    {
      id: 3,
      role: "Graphic Designer",
      type: "Part-Time",
      company: "SAShop Gorontalo",
      location: "Gorontalo, Indonesia",
      period: "May 2024 - Jun 2024",
      description: "SAShop Gorontalo is a clothing and personal care store based in Gorontalo, Indonesia offering fashionable clothing items and personal care products.",
      highlights: [
        "Developed engaging Instagram content for SAShop Gorontalo"
      ],
      skills: ["Graphic Design", "Social Media", "Content Creation"]
    },
    {
      id: 4,
      role: "Front-End Developer",
      type: "Freelance",
      company: "Self-employed",
      location: "Gorontalo, Indonesia",
      period: "Apr 2020 - Present",
      description: "High school years transitioning to college years saw dedication to Front-End Development, significantly enhancing experience and skill set.",
      highlights: [
        "New student registration website for SMK Negeri 1 Limboto",
        "SIMIKOM - information management and tuition payment system for SD LABORATORIUM UNG",
        "PKKMB website for Department of Informatics Engineering at UNG",
        "Thesis exam verification web application for Department of Informatics Engineering at UNG"
      ],
      skills: ["Web Development"]
    },
    {
      id: 5,
      role: "Front-End Developer",
      type: "Internship",
      company: "Smart Data Integrasi",
      location: "Gorontalo, Indonesia",
      period: "Jan 2020 - Mar 2020",
      description: "Smart Data Integrasi is a company that specializes in web development. The company has contributed to the creation of websites and applications for several government agencies in Gorontalo.",
      highlights: [
        "Developed the official website of North Gorontalo Regency providing information and news about the region"
      ],
      skills: ["Web Development"]
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
          <h2 className="section-title mb-4">Work Experience</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            My professional journey and contributions
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
              Experience Timeline
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
