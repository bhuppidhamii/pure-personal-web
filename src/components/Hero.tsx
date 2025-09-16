import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Your Name</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer & Tech Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            I create beautiful, functional, and user-centered digital experiences. 
            Passionate about modern technologies and always learning something new.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover-lift">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="hover-lift">
              Download CV
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 mb-16">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-surface hover:bg-muted transition-colors duration-200 hover-lift"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-surface hover:bg-muted transition-colors duration-200 hover-lift"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="p-3 rounded-lg bg-surface hover:bg-muted transition-colors duration-200 hover-lift"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="animate-float">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}