import { useState } from "react";
import { Mail, Phone, Linkedin, MessageCircle, Send, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "bayazid.bhuiyan@example.com",
      link: "mailto:bayazid.bhuiyan@example.com",
      description: "Drop me a line anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+880 1234 567890",
      link: "tel:+8801234567890",
      description: "Call for urgent inquiries"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/bayazidbhuiyan",
      link: "https://linkedin.com/in/bayazidbhuiyan",
      description: "Let's connect professionally"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Telegram",
      value: "@bayazidbhuiyan",
      link: "https://t.me/bayazidbhuiyan",
      description: "Quick messages and updates"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can work together to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'd love to hear from you.
              </p>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="hover-lift card-gradient border border-accent/20">
                  <CardContent className="p-4">
                    <a
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : '_self'}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                        <p className="text-sm font-medium text-accent">{method.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-3">
                {[
                  { icon: <Linkedin />, link: "https://linkedin.com/in/bayazidbhuiyan", label: "LinkedIn" },
                  { icon: <MessageCircle />, link: "https://t.me/bayazidbhuiyan", label: "Telegram" },
                  { icon: <Mail />, link: "mailto:bayazid.bhuiyan@example.com", label: "Email" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target={social.link.startsWith('http') ? '_blank' : '_self'}
                    rel={social.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="p-3 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-all hover-lift"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Card className="card-gradient border border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send Me a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="focus:border-accent"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="focus:border-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, ideas, or questions..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="focus:border-accent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full accent-gradient hover-lift group"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <Card className="card-gradient border border-accent/20 p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I typically respond within 24 hours and offer free consultations for new projects. 
              Let's discuss your ideas and see how I can help bring them to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                ⚡ Quick Response Time
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                💬 Free Consultation
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                🌍 Remote Friendly
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;