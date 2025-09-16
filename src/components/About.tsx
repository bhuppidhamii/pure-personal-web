export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Get to know more about my background, interests, and what drives me as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate developer with a love for creating digital solutions that make a difference. 
              My journey in tech started [when you started], and since then, I've been constantly learning 
              and evolving with the rapidly changing technology landscape.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me [your hobbies/interests]. I believe in the power of 
              continuous learning and enjoy sharing knowledge with the developer community.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 rounded-lg bg-surface">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-secondary">Years Experience</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-surface">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-secondary">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
              <div className="w-full h-full rounded-2xl bg-surface flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    YN
                  </div>
                  <p className="text-muted-foreground">Your professional photo here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}