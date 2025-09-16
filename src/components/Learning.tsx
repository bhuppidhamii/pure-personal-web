import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Zap } from "lucide-react";

const currentLearning = [
  {
    title: "Advanced React Patterns",
    description: "Diving deep into advanced React concepts like render props, compound components, and custom hooks.",
    progress: 75,
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    title: "System Design",
    description: "Learning about scalable architecture patterns and distributed systems design.",
    progress: 60,
    icon: <Target className="w-5 h-5" />
  },
  {
    title: "AI/ML Fundamentals",
    description: "Exploring machine learning concepts and their applications in web development.",
    progress: 40,
    icon: <Zap className="w-5 h-5" />
  }
];

const upcomingGoals = [
  "AWS Cloud Architecture",
  "Microservices with Docker",
  "GraphQL Advanced Patterns",
  "Mobile Development with React Native",
  "Web3 & Blockchain Basics"
];

export function Learning() {
  return (
    <section id="learning" className="py-24 px-6 bg-surface/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Currently <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            I believe in continuous learning. Here's what I'm currently studying and what's next on my learning path.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Current Learning */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Current Focus
            </h3>
            
            <div className="space-y-6">
              {currentLearning.map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-6 hover-lift">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-secondary">Progress</span>
                      <span className="text-sm font-medium">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500" 
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Goals */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Upcoming Goals
            </h3>
            
            <div className="bg-card rounded-xl p-6">
              <p className="text-muted-foreground mb-6">
                Technologies and concepts I'm planning to explore in the coming months.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {upcomingGoals.map((goal, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="px-3 py-2 text-sm hover:bg-primary/10 hover:border-primary transition-colors duration-200"
                  >
                    {goal}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Learning Philosophy</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Stay curious, stay hungry. Technology evolves rapidly, and the key to staying relevant 
                  is never stopping the pursuit of knowledge."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}