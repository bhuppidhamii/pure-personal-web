import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
        <h1 className="text-xl font-bold text-gradient">Portfolio</h1>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#about" 
            className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
          >
            About
          </a>
          <a 
            href="#skills" 
            className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
          >
            Skills
          </a>
          <a 
            href="#experience" 
            className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
          >
            Experience
          </a>
          <a 
            href="#learning" 
            className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
          >
            Learning
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}