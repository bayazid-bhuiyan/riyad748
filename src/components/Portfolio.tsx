import { ExternalLink, Github, Play, Image as ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "BUFT Business Club Website",
      description: "A dynamic and modern website showcasing club activities, events, and member achievements. Built with React and featuring interactive elements and smooth animations.",
      category: "Web Development",
      technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
      features: [
        "Event management system",
        "Member portal with authentication",
        "Interactive gallery and media center",
        "Responsive design for all devices",
        "SEO optimized content structure"
      ],
      status: "Live",
      type: "website",
      color: "bg-blue-500/20 text-blue-500"
    },
    {
      title: "Fashion E-commerce Platform",
      description: "A fully functional online store with modern design, secure payment integration, and comprehensive admin dashboard for inventory management.",
      category: "E-commerce",
      technologies: ["Next.js", "Stripe", "MongoDB", "TailwindCSS", "Node.js"],
      features: [
        "Product catalog with filtering",
        "Secure payment processing",
        "Order management system",
        "Admin dashboard for inventory",
        "Customer reviews and ratings"
      ],
      status: "Live",
      type: "ecommerce",
      color: "bg-purple-500/20 text-purple-500"
    },
    {
      title: "Motivational Video Series",
      description: "A collection of cinematic motivational videos for social media campaigns, featuring professional editing, motion graphics, and compelling storytelling.",
      category: "Video Production",
      technologies: ["Adobe Premiere", "After Effects", "Canva", "Figma"],
      features: [
        "Professional video editing",
        "Motion graphics and animations",
        "Social media optimization",
        "Brand-consistent visual style",
        "Engaging storytelling approach"
      ],
      status: "Published",
      type: "video",
      color: "bg-green-500/20 text-green-500"
    },
    {
      title: "Village Life Animated Shorts",
      description: "AI-generated animated shorts showcasing beautiful Bangladeshi village scenes, combining traditional culture with modern storytelling techniques.",
      category: "Animation",
      technologies: ["AI Generation", "Video Editing", "Motion Graphics"],
      features: [
        "AI-powered scene generation",
        "Cultural authenticity focus",
        "High-quality animations",
        "Storytelling through visuals",
        "Social media ready formats"
      ],
      status: "In Progress",
      type: "animation",
      color: "bg-orange-500/20 text-orange-500"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "website":
      case "ecommerce":
        return <ExternalLink className="h-4 w-4" />;
      case "video":
        return <Play className="h-4 w-4" />;
      case "animation":
        return <ImageIcon className="h-4 w-4" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work across web development, design, and creative content production.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="hover-lift card-gradient border border-accent/20 animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant={project.status === "Live" ? "default" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>
                    <Badge variant="outline" className={project.color}>
                      {project.category}
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="hover-lift">
                      {getIcon(project.type)}
                    </Button>
                    <Button variant="ghost" size="icon" className="hover-lift">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Image Placeholder */}
                <div className={`w-full h-48 rounded-lg ${project.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                  <div className="text-center">
                    {getIcon(project.type)}
                    <div className="mt-2 text-sm font-medium">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button className="flex-1 hero-gradient hover-lift">
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="hover-lift">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid md:grid-cols-4 gap-8 animate-slide-up" style={{ animationDelay: "0.8s" }}>
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Happy Clients" },
            { number: "4+", label: "Years Experience" },
            { number: "99%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 card-gradient rounded-xl hover-lift">
              <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: "1s" }}>
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Like What You See?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These are just a few examples of my work. I'd love to discuss how I can help 
            bring your next project to life with the same level of quality and attention to detail.
          </p>
          <Button size="lg" className="accent-gradient hover-lift">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;