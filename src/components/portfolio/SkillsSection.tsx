import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skills = {
  programming: [
    { name: "Python", level: 85 },
    { name: "SQL (MySQL)", level: 90 },
    { name: "DAX", level: 75 },
  ],
  libraries: [
    { name: "Pandas", level: 85 },
    { name: "NumPy", level: 80 },
    { name: "Matplotlib", level: 75 },
    { name: "Seaborn", level: 70 },
  ],
  visualization: [
    { name: "Power BI", level: 90 },
    { name: "Tableau", level: 85 },
    { name: "Excel", level: 90 },
    { name: "Power Query", level: 85 },
  ],
  analysis: [
    { name: "EDA", level: 90 },
    { name: "Data Cleaning", level: 90 },
    { name: "Statistical Analysis", level: 80 },
    { name: "KPI Reporting", level: 85 },
  ],
};

const education = [
  {
    degree: "B.Tech – Computer Science & Engineering (Data Science)",
    institution: "GATES Institute of Technology, Gooty",
    year: "2022 – 2026",
    score: "CGPA: 75.83%",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Srisai Jr. College, Gooty",
    year: "2022",
    score: "71%",
  },
  {
    degree: "SSC",
    institution: "Mourya High School, Tadipatri",
    year: "2020",
    score: "95%",
  },
];

const certifications = [
  "Data Analytics Certification – GrowAI (2025)",
  "Data Analyst Bootcamp – Udemy (2025)",
  "Oracle Analytics Cloud 2025 Certified Professional",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 md:py-32 bg-card/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <Tabs defaultValue="skills" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-12 bg-muted/50">
            <TabsTrigger value="skills" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Skills
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Education
            </TabsTrigger>
            <TabsTrigger value="certifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Certifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="skills">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-primary font-display text-lg font-semibold mb-6">Programming & Databases</h3>
                {skills.programming.map((skill, index) => (
                  <SkillBar key={skill.name} {...skill} index={index} />
                ))}
                <h3 className="text-primary font-display text-lg font-semibold mb-6 mt-8">Python Libraries</h3>
                {skills.libraries.map((skill, index) => (
                  <SkillBar key={skill.name} {...skill} index={index} />
                ))}
              </div>
              <div>
                <h3 className="text-primary font-display text-lg font-semibold mb-6">BI & Visualization</h3>
                {skills.visualization.map((skill, index) => (
                  <SkillBar key={skill.name} {...skill} index={index} />
                ))}
                <h3 className="text-primary font-display text-lg font-semibold mb-6 mt-8">Data Analysis</h3>
                {skills.analysis.map((skill, index) => (
                  <SkillBar key={skill.name} {...skill} index={index} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-primary font-medium">{edu.score}</span>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications">
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors flex items-center gap-4"
                >
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-foreground">{cert}</span>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
