import { motion } from "framer-motion";
import { HiAcademicCap, HiBookOpen } from "react-icons/hi";

const Education = () => {
  // Education data - using your actual info
  const educations = [
    {
      id: 1,
      degree: "Bachelor of Information Systems",
      institution: "Universitas Negeri Gorontalo",
      period: "Aug 2021 - Dec 2025",
      description: "Focused on web development, database management, and software engineering. Graduated with a strong foundation in both technical and analytical skills.",
      achievements: ["Web Development", "Database Systems", "Software Engineering"]
    },
    {
      id: 2,
      degree: "Student Exchange Program",
      institution: "Universitas Brawijaya",
      period: "Aug 2023 - Dec 2023",
      description: "Bachelor of Computer Science exchange program, expanding knowledge and networking.",
      achievements: ["Computer Science", "Web Development", "UI/UX Design"]
    },
    {
      id: 3,
      degree: "Software Engineering",
      institution: "SMK Negeri 1 Gorontalo",
      period: "2018 - 2021",
      description: "Vocational high school with focus on software engineering and programming fundamentals.",
      achievements: ["Programming Basics", "Software Development"]
    },
  ];

  // Certifications/Courses - dummy data, replace with your actual certs
  const certifications = [
    {
      id: 1,
      name: "Junior Web Developer - VSGA",
      issuer: "Digitalent Scholarship",
      year: "2021"
    },
    {
      id: 2,
      name: "Web Development Bootcamp",
      issuer: "Online Course",
      year: "2023"
    },
  ];

  return (
    <section id="education" className="py-12 md:py-20 px-4">
      <div className="container-main">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title mb-4">Education</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Education Timeline Card */}
          <motion.div
            className="bento-card lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <HiAcademicCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                Academic Background
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-neutral-700" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {educations.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    className="relative pl-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-500 border-4 border-white dark:border-neutral-900 shadow-sm" />

                    {/* Content */}
                    <div className="bg-gray-50 dark:bg-neutral-800/50 rounded-2xl p-5 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <span className="text-sm text-gray-400 dark:text-neutral-500 whitespace-nowrap">
                          {edu.period}
                        </span>
                      </div>
                      
                      <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-3">
                        {edu.institution}
                      </p>
                      
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                        {edu.description}
                      </p>

                      {/* Focus Areas */}
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement) => (
                          <span 
                            key={achievement}
                            className="px-3 py-1 text-xs font-medium bg-white dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-lg border border-gray-200 dark:border-neutral-600"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            className="bento-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
              Certifications & Courses
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className="p-4 bg-gray-50 dark:bg-neutral-800/50 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h4 className="font-medium text-neutral-900 dark:text-white text-sm mb-1">
                    {cert.name}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-neutral-600">
                      {cert.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Learning Note */}
            <div className="mt-6 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl border border-purple-100 dark:border-purple-900/30">
              <div className="flex items-start gap-2">
                <HiBookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Always learning new technologies and staying updated with the latest trends in web development.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
