import { Briefcase, Calendar, MapPin, Users, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Founder & Creative Director",
      company: "BUFT Business Club",
      period: "2023 – Present",
      location: "Dhaka, Bangladesh",
      type: "Leadership Role",
      description: "Founded and led a dynamic business club focused on entrepreneurship, innovation, and professional development. Organized workshops, seminars, and networking events for 200+ members.",
      achievements: [
        "Grew membership from 0 to 200+ active participants",
        "Organized 15+ successful events and workshops", 
        "Established partnerships with 10+ industry leaders",
        "Mentored 50+ aspiring entrepreneurs"
      ],
      skills: ["Leadership", "Event Management", "Strategic Planning", "Team Building"]
    },
    {
      title: "Freelance Web Designer & Developer",
      company: "Independent",
      period: "2021 – Present",
      location: "Remote",
      type: "Freelance",
      description: "Providing comprehensive web design and development services to small businesses and startups. Specializing in modern, responsive websites and e-commerce solutions.",
      achievements: [
        "Delivered 30+ successful web projects",
        "Maintained 98% client satisfaction rate",
        "Generated $50K+ in freelance revenue",
        "Built long-term partnerships with 15+ clients"
      ],
      skills: ["React", "Next.js", "TailwindCSS", "UI/UX Design", "WordPress"]
    },
    {
      title: "Intern – Outbound Sales & Service Executive",
      company: "CreatiCore",
      period: "2025 (Upcoming)",
      location: "Dhaka, Bangladesh", 
      type: "Internship",
      description: "Upcoming internship focused on sales strategy, customer relationship management, and service excellence in a fast-paced creative agency environment.",
      achievements: [
        "Selected from 100+ applicants for competitive program",
        "Will focus on B2B sales and client acquisition",
        "Expected to contribute to team growth initiatives",
        "Opportunity to work with international clients"
      ],
      skills: ["Sales Strategy", "CRM", "Client Relations", "Business Development"]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "Leadership Role":
        return <Users className="h-5 w-5" />;
      case "Freelance":
        return <Zap className="h-5 w-5" />;
      case "Internship":
        return <Target className="h-5 w-5" />;
      default:
        return <Briefcase className="h-5 w-5" />;
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey of growth, innovation, and impactful contributions across various roles and industries.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="hover-lift card-gradient border border-accent/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left: Main Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-muted-foreground">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-2" />
                            <span className="font-medium text-accent">{exp.company}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="flex items-center space-x-2">
                        {getIcon(exp.type)}
                        <span>{exp.type}</span>
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Skills */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="hover-lift">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Visual Timeline Element */}
                    <div className="hidden lg:block">
                      <div className="w-full h-32 card-gradient rounded-lg flex items-center justify-center">
                        <div className="p-4 bg-accent/20 rounded-full">
                          {getIcon(exp.type)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;