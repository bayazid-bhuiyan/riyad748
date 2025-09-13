import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/bayazid-headshot.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-foreground">I'm</span>{" "}
                <span className="text-gradient">Creative Designer & Developer</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I'm Bayazid Bhuiyan, a passionate and creative individual with a strong interest in business, 
              technology, and design. I enjoy building modern solutions that blend innovation with simplicity, 
              whether through digital platforms or creative projects. My focus is on continuous learning, 
              growth, and delivering impactful work that inspires others.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("portfolio")}
                size="lg"
                className="hero-gradient hover-lift group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="hover-lift"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              <div className="flex space-x-3">
                <a
                  href="https://linkedin.com/in/bayazidbhuiyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-all hover-lift"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/bayazidbhuiyan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-all hover-lift"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:bayazid.bhuiyan@example.com"
                  className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-all hover-lift"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute -inset-4 accent-gradient rounded-full blur-lg opacity-30 animate-pulse-glow"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/20">
                <img
                  src={profileImage}
                  alt="Bayazid Bhuiyan"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center animate-float">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <span className="text-xl">💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;