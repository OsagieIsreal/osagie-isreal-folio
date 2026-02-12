import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Smartphone, Zap, Users, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom responsive websites built with modern technologies and best practices.",
      icon: <Code className="h-8 w-8" />,
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Performance Optimization",
        "Cross-browser Compatibility",
        "SEO-friendly Structure",
      ],
      technologies: ["React", "TypeScript", "HTML5", "CSS3", "JavaScript"],
      color: "text-primary",
    },
    {
      title: "Graphics Design",
      description: "Creative visual solutions that communicate your brand message effectively.",
      icon: <Palette className="h-8 w-8" />,
      features: [
        "Brand Identity Design",
        "Logo Creation",
        "Marketing Materials",
        "Print Design", 
        "Digital Graphics",
      ],
      technologies: ["CorelDRAW", "Brand Strategy", "Color Theory", "Typography"],
      color: "text-accent",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design approach for intuitive and engaging digital experiences.",
      icon: <Smartphone className="h-8 w-8" />,
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
        "Design Systems",
      ],
      technologies: ["Figma", "Adobe XD", "User Testing", "Design Thinking"],
      color: "text-primary",
    },
  ];

  const benefits = [
    {
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Collaborative Approach",
      description: "Working closely with clients throughout the development process",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Growth-Focused",
      description: "Solutions designed to scale and grow with your business",
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="hero-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to meet your business needs 
            and exceed your expectations.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover-glow transition-all duration-300 gradient-border animate-scale-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Header */}
              <div className="text-center mb-6">
                <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-primary">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-primary">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="text-xs border-primary/30 hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                onClick={scrollToContact}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-card/50 rounded-2xl p-8 animate-fade-in delay-500">
          <h3 className="text-2xl font-bold text-center mb-8 hero-text">Why Choose Me?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <div className="text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in delay-700">
          <Card className="p-8 max-w-3xl mx-auto gradient-border">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help bring your vision to life with professional 
              web development and design solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={scrollToContact}>
                Start a Project
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;