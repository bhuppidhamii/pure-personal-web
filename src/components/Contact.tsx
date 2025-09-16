import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Github, Linkedin, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-surface hover:bg-muted transition-colors duration-200 hover-lift"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-secondary">your.email@example.com</div>
                </div>
              </a>

              <a 
                href="tel:+1234567890"
                className="flex items-center gap-4 p-4 rounded-lg bg-surface hover:bg-muted transition-colors duration-200 hover-lift"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-sm text-secondary">+1 (234) 567-890</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-surface">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-sm text-secondary">Your City, Country</div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-medium mb-4">Follow me on</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-surface hover:bg-primary hover:text-primary-foreground transition-colors duration-200 hover-lift"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-surface hover:bg-primary hover:text-primary-foreground transition-colors duration-200 hover-lift"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-surface hover:bg-primary hover:text-primary-foreground transition-colors duration-200 hover-lift"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Ready to start a project?</h3>
              <p className="text-muted-foreground mb-8">
                Let's discuss your ideas and turn them into reality. I'm available for freelance work and collaborations.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover-lift"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send me an email
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full hover-lift"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Schedule a call
                </Button>
              </div>

              <div className="mt-8 p-4 rounded-lg bg-background/50">
                <p className="text-sm text-muted-foreground">
                  Average response time: <span className="text-primary font-medium">24 hours</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}