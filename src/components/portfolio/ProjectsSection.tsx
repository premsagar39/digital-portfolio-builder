import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Store, Users } from "lucide-react";

const projects = [
  {
    title: "Business Sales Insights Dashboard",
    subtitle: "Sales analytics · MySQL + Power BI",
    description:
      "Identified leadership's lack of visibility into revenue drivers. Wrote 50+ optimized SQL queries on 1,800+ records and built a Power BI KPI dashboard, uncovering that 22% of revenue was concentrated in 2 product categories. Delivered self-serve interactive slicers and drill-through reports.",
    tools: ["MySQL", "Power BI", "DAX"],
    achievement: "Enabled targeted pricing & inventory strategy",
    icon: BarChart3,
    githubUrl: "https://github.com/premsagar39/superstore-sales-analysis",
  },
  {
    title: "Zomato Restaurant Performance Dashboard",
    subtitle: "Market analysis · Power BI",
    description:
      "Built an end-to-end Power BI dashboard analyzing 9,551 restaurants across 15 countries and 4M+ user votes. Identified high-growth cuisine segments — North Indian (3,960 units) and Chinese (2,735 units). Performed time-series and correlation analysis revealing 63.88% of non-delivery restaurants had lower popularity.",
    tools: ["Power BI", "DAX", "Power Query"],
    achievement: "Data-driven market expansion insights",
    icon: Store,
    githubUrl: "https://github.com/premsagar39/zomato-restaurant-analysis-powerbi",
  },
  {
    title: "Customer Churn Analysis",
    subtitle: "Telecom analytics · Python",
    description:
      "Decomposed the telecom churn problem into testable hypotheses across contract type, tenure, and charges. Analyzed 7,000+ records using Pandas and NumPy — identifying a 27% churn rate among month-to-month customers and translating findings into actionable retention strategies.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
    achievement: "Identified 27% churn rate & retention strategies",
    icon: Users,
    githubUrl: "https://github.com/premsagar39/telecom-Customer-Churn-Analysis",
  },
];

const doorEase = [0.65, 0, 0.35, 1] as const;

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-8 md:py-12" aria-label="Data Analysis Projects by Premsagar">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl font-bold mb-4"
        >
          Selected projects
        </motion.h2>

        <p className="text-muted-foreground max-w-2xl mb-8 md:mb-10">
          Business questions explored through data, dashboards and clear recommendations.
        </p>

        <div className="grid gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-card border border-border/80 p-6 md:p-10 lg:p-12 grid lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)] gap-8 lg:gap-12 items-center overflow-hidden"
              >
                <div>
                  <p className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground mb-5">
                    {String(index + 1).padStart(2, "0")} &nbsp;·&nbsp; {project.subtitle}
                  </p>
                  <h3 className="font-display text-2xl md:text-4xl font-bold leading-tight mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3.5 py-1.5 rounded-full border border-border bg-background text-sm font-medium text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <p className="flex items-start gap-2 text-sm text-muted-foreground mb-7">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/60 flex-shrink-0" aria-hidden="true" />
                    {project.achievement}
                  </p>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background text-sm font-medium hover:bg-secondary transition-colors duration-300"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    View on GitHub
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>

                <div className="relative order-first flex aspect-[4/3] lg:order-none lg:aspect-[1.08/1] items-center justify-center overflow-hidden rounded-xl border border-border/80 bg-background" aria-hidden="true">
                  <div className="absolute inset-0 p-5 sm:p-7">
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <div>
                        <span className="block font-display text-sm font-semibold text-foreground/80">{project.title.split(" ").slice(0, 2).join(" ")}</span>
                        <span className="mt-1 block text-xs text-muted-foreground">Performance overview</span>
                      </div>
                      <span className="rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground">2025</span>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-md border border-border p-3">
                        <span className="block text-[10px] uppercase tracking-wide text-muted-foreground">Key finding</span>
                        <span className="mt-1 block font-display text-xl font-bold text-foreground">{index === 0 ? "22%" : index === 1 ? "9.5k+" : "27%"}</span>
                      </div>
                      <div className="rounded-md border border-border p-3">
                        <span className="block text-[10px] uppercase tracking-wide text-muted-foreground">Records analyzed</span>
                        <span className="mt-1 block font-display text-xl font-bold text-foreground">{index === 0 ? "1,800+" : index === 1 ? "9,551" : "7,000+"}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex h-[34%] min-h-20 items-end gap-2 border-b border-l border-border px-3 pb-0">
                      {[40, 68, 52, 82, 62, 100, 75, 88].map((height, barIndex) => (
                        <span
                          key={barIndex}
                          className="flex-1 rounded-t-sm bg-secondary transition-[height,background-color] duration-500 group-hover:bg-muted-foreground/60"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
                      <span>Insights by category</span>
                      <Icon size={17} strokeWidth={1.5} className="text-foreground/50 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                </div>

                {/* Magic doors cover — two halves slide apart on hover (desktop) */}
                <div aria-hidden="true" className="hidden lg:block absolute inset-0 pointer-events-none">
                  <div
                        className="absolute inset-y-0 left-0 w-1/2 bg-secondary/95 transition-transform duration-700 group-hover:-translate-x-full group-focus-within:-translate-x-full border-r border-border/60"
                    style={{ transitionTimingFunction: `cubic-bezier(${doorEase.join(",")})` }}
                  >
                    <div className="h-full flex items-center justify-center gap-4">
                      <span className="font-display text-7xl font-bold text-foreground/25 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon size={44} strokeWidth={1.2} className="text-foreground/25" />
                    </div>
                  </div>
                  <div
                        className="absolute inset-y-0 right-0 w-1/2 bg-secondary/95 transition-transform duration-700 group-hover:translate-x-full group-focus-within:translate-x-full border-l border-border/60"
                    style={{ transitionTimingFunction: `cubic-bezier(${doorEase.join(",")})` }}
                  >
                    <div className="h-full flex flex-col items-center justify-center gap-2">
                      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                        Hover to open
                      </span>
                      <span className="w-px h-10 bg-border" />
                      <span className="font-display text-xl font-bold text-foreground/70">
                        {project.title.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
