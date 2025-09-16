import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code", "Linux", "CI/CD"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 hover-lift">
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">Always learning and exploring new technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
}