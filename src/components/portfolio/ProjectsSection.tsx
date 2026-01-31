import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, BarChart3, Database, TrendingUp, Users } from "lucide-react";

const projects = [
  {
    title: "Zomato Restaurant Performance Dashboard",
    description: "Cleaned and transformed raw Excel data using Power Query. Developed interactive dashboards using DAX for KPIs such as revenue, order count, and customer trends. Implemented geospatial analysis to identify top-performing locations.",
    tools: ["Power BI", "DAX", "Power Query"],
    achievement: "Increased insight accuracy by 30%",
    icon: BarChart3,
    githubUrl: "https://github.com/premsagar39/zomato-restaurant-analysis",
  },
  {
    title: "E-commerce Sales Analysis using MySQL",
    description: "Performed end-to-end SQL analysis on E-commerce sales data to evaluate sales performance, profitability, customer behavior, and regional trends. Wrote complex SQL queries using aggregation functions, CTEs, and window functions.",
    tools: ["MySQL", "Excel", "SQL"],
    achievement: "Analyzed SuperStoreUS-2015 dataset",
    icon: Database,
    githubUrl: "https://github.com/premsagar39/ecommerce-sales-analysis",
  },
  {
    title: "Customer Churn Analysis",
    description: "Analyzed 7,043 telecom customer records to identify churn drivers using Python. Measured an overall churn rate of ~26%, identifying month-to-month contracts as highest churn segment. Built business-ready visualizations.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    achievement: "Insights to reduce churn by 10-15%",
    icon: Users,
    githubUrl: "https://github.com/premsagar39/customer-churn-analysis",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="h-full p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <motion.div
                        whileHover={{ rotate: -45 }}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </motion.div>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-primary mb-3">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp size={16} className="text-primary" />
                      <span className="text-primary font-medium">{project.achievement}</span>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
