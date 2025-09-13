import { Monitor, Palette, Building, TrendingUp, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Web Design & Development",
      description: "Modern, responsive, and user-friendly websites built with cutting-edge technologies like React, Next.js, and TailwindCSS.",
      features: [
        "Responsive & Mobile-First Design",
        "SEO Optimization",
        "Performance & Speed Optimization",
        "Modern UI/UX Implementation",
        "E-commerce Solutions"
      ],
      color: "bg-blue-500/20 text-blue-500 border-blue-500/30"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive interfaces and seamless user experiences that engage users and drive conversions.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Design Systems & Style Guides",
        "Usability Testing",
        "Interactive Prototypes"
      ],
      color: "bg-purple-500/20 text-purple-500 border-purple-500/30"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Branding & Digital Identity",
      description: "Comprehensive brand strategies, logos, and digital content that help businesses stand out in the digital landscape.",
      features: [
        "Logo & Brand Identity Design",
        "Brand Guidelines & Standards",
        "Digital Marketing Materials",
        "Social Media Content",
        "Brand Strategy Consultation"
      ],
      color: "bg-green-500/20 text-green-500 border-green-500/30"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Consulting & Business Strategy",
      description: "Strategic guidance for digital transformation, project management, and business growth initiatives.",
      features: [
        "Digital Transformation Strategy",
        "Project Management & Planning",
        "Business Process Optimization",
        "Market Research & Analysis",
        "Growth Strategy Development"
      ],
      color: "bg-orange-500/20 text-orange-500 border-orange-500/30"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to help your business thrive in the modern marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`hover-lift card-gradient border-2 ${service.color} animate-slide-up group cursor-pointer`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={scrollToContact}
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg ${service.color}`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {service.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-foreground">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            My <span className="text-gradient">Process</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover", description: "Understanding your goals, requirements, and target audience." },
              { step: "02", title: "Design", description: "Creating wireframes, prototypes, and visual designs." },
              { step: "03", title: "Develop", description: "Building robust, scalable, and optimized solutions." },
              { step: "04", title: "Deliver", description: "Testing, deployment, and ongoing support & maintenance." }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">{process.step}</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground">{process.title}</h4>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: "1s" }}>
          <div className="card-gradient rounded-2xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. I'm here to help you create 
              exceptional digital experiences that drive results.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="accent-gradient hover-lift"
            >
              Let's Work Together
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;