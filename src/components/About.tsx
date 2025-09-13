import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "BBA",
      institution: "BUFT",
      year: "2024",
      description: "Bachelor of Business Administration with focus on entrepreneurship and digital innovation."
    },
    {
      degree: "HSC",
      institution: "Dhaka College",
      year: "2020",
      description: "Higher Secondary Certificate with excellence in science and mathematics."
    },
    {
      degree: "SSC",
      institution: "Dhaka Residential Model College",
      year: "2018",
      description: "Secondary School Certificate with outstanding academic performance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate creator bridging the gap between business strategy and innovative technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Journey */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-foreground">Professional Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey began with a deep fascination for how technology can transform businesses 
                and create meaningful connections with people. Through my academic pursuits and hands-on 
                experience, I've developed a unique perspective that combines strategic thinking with 
                creative execution.
              </p>
              <p>
                As a founder and creative director, I've learned the importance of building teams, 
                managing projects, and delivering results that exceed expectations. My approach is 
                always collaborative, focusing on understanding client needs and translating them 
                into innovative digital solutions.
              </p>
              <p>
                I believe in the power of continuous learning and staying ahead of industry trends. 
                Whether it's exploring new technologies, refining design principles, or developing 
                business strategies, I'm always eager to grow and adapt.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold text-foreground mb-8">Educational Background</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover-lift card-gradient border border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent/20 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-semibold text-foreground">
                            {edu.degree}
                          </h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {edu.year}
                          </div>
                        </div>
                        <div className="flex items-center mb-3">
                          <MapPin className="h-4 w-4 text-accent mr-2" />
                          <span className="font-medium text-accent">{edu.institution}</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          {[
            { label: "Years Experience", value: "4+" },
            { label: "Projects Completed", value: "50+" },
            { label: "Happy Clients", value: "30+" },
            { label: "Awards Won", value: "5+" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 card-gradient rounded-xl hover-lift">
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;