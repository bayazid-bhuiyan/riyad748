import { Mail, Phone, Linkedin, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold">Bayazid Bhuiyan</h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Creative designer and developer passionate about building modern solutions 
              that blend innovation with simplicity. Always eager to collaborate on 
              impactful projects.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:bayazid.bhuiyan@example.com"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all hover-lift"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+8801234567890"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all hover-lift"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/bayazidbhuiyan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/bayazidbhuiyan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all hover-lift"
                aria-label="Telegram"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { label: "Home", id: "hero" },
                { label: "About", id: "about" },
                { label: "Experience", id: "experience" },
                { label: "Skills", id: "skills" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <nav className="space-y-2">
              {[
                { label: "Web Development", id: "services" },
                { label: "UI/UX Design", id: "services" },
                { label: "Branding", id: "services" },
                { label: "Consulting", id: "services" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <span>© {currentYear} Bayazid Bhuiyan. Made with</span>
              <Heart className="h-4 w-4 text-accent fill-current" />
              <span>in Bangladesh</span>
            </div>
            <div className="flex items-center space-x-6 text-primary-foreground/80">
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-accent transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="hover:text-accent transition-colors"
              >
                Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;