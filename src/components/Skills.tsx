import { Code2, Palette, Users, Lightbulb, Database, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Code2 className="h-6 w-6" />,
      color: "bg-blue-500/20 text-blue-500",
      skills: [
        { name: "React & Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "TailwindCSS", level: 95 },
        { name: "Node.js", level: 80 },
        { name: "Framer Motion", level: 85 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-purple-500/20 text-purple-500",
      skills: [
        { name: "Figma", level: 92 },
        { name: "Adobe XD", level: 88 },
        { name: "Prototyping", level: 90 },
        { name: "User Research", level: 85 },
        { name: "Design Systems", level: 87 }
      ]
    },
    {
      title: "Business & Leadership",
      icon: <Users className="h-6 w-6" />,
      color: "bg-green-500/20 text-green-500",
      skills: [
        { name: "Team Management", level: 88 },
        { name: "Event Organization", level: 95 },
        { name: "Strategic Planning", level: 85 },
        { name: "Public Speaking", level: 90 },
        { name: "Project Management", level: 92 }
      ]
    },
    {
      title: "Creative Content",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-yellow-500/20 text-yellow-500",
      skills: [
        { name: "Branding", level: 88 },
        { name: "Digital Storytelling", level: 85 },
        { name: "Social Media Strategy", level: 90 },
        { name: "Content Creation", level: 87 },
        { name: "Video Editing", level: 80 }
      ]
    },
    {
      title: "Technical Tools",
      icon: <Database className="h-6 w-6" />,
      color: "bg-red-500/20 text-red-500",
      skills: [
        { name: "GitHub & Git", level: 90 },
        { name: "WordPress", level: 85 },
        { name: "Canva", level: 95 },
        { name: "VS Code", level: 92 },
        { name: "Chrome DevTools", level: 88 }
      ]
    },
    {
      title: "Mobile & Responsive",
      icon: <Smartphone className="h-6 w-6" />,
      color: "bg-indigo-500/20 text-indigo-500",
      skills: [
        { name: "Responsive Design", level: 95 },
        { name: "Mobile-First Approach", level: 90 },
        { name: "Progressive Web Apps", level: 85 },
        { name: "Cross-Browser Testing", level: 88 },
        { name: "Performance Optimization", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through years of hands-on experience and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="hover-lift card-gradient border border-accent/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Stack */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", 
              "Figma", "Adobe XD", "Framer Motion", "Git", "WordPress",
              "Vercel", "Netlify", "Supabase", "MongoDB", "PostgreSQL"
            ].map((tech, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover-lift cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;