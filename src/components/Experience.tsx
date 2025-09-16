import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company Name",
    location: "City, Country",
    period: "2023 - Present",
    description: "Led development of modern web applications using React and TypeScript. Collaborated with cross-functional teams to deliver high-quality user experiences.",
    highlights: [
      "Improved application performance by 40%",
      "Mentored junior developers",
      "Implemented design system components"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Startup Company",
    location: "City, Country",
    period: "2021 - 2023",
    description: "Developed and maintained full-stack applications using modern technologies. Worked closely with design and product teams.",
    highlights: [
      "Built RESTful APIs with Node.js",
      "Developed responsive web interfaces",
      "Implemented CI/CD pipelines"
    ]
  },
  {
    title: "Junior Developer",
    company: "First Company",
    location: "City, Country",
    period: "2020 - 2021",
    description: "Started my development career working on various web projects and learning industry best practices.",
    highlights: [
      "Learned modern web development",
      "Contributed to team projects",
      "Gained experience with version control"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            My professional journey and the exciting projects I've worked on.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <div className="md:ml-20 bg-card rounded-2xl p-8 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-sm text-secondary">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-secondary">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-secondary">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}