import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "HTML, CSS, JavaScript Certification",
      issuer: "Babtech Computers",
      date: "December 16, 2023",
      description: "Comprehensive certification covering front-end web development fundamentals including HTML5, CSS3, and modern JavaScript programming.",
      skills: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation", "Responsive Design"],
      credentialId: "BABTECH-2023-HTMLCSSJS",
    },
    {
      title: "Industrial Training Certification",
      issuer: "National Board for Technical Education",
      date: "September 5, 2023",
      description: "Official certification recognizing completion of industrial training program with focus on technical skills development and professional practice.",
      skills: ["Technical Training", "Professional Development", "Industry Standards", "Practical Application"],
      credentialId: "NBTE-IT-2023",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hero-text">Certifications</span> & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognized credentials that validate my technical expertise and commitment 
            to continuous learning in web development and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="p-8 hover-glow transition-all duration-300 gradient-border animate-scale-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-primary font-semibold">{cert.issuer}</p>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{cert.date}</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                  Skills Covered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Credential ID */}
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium">Credential ID:</span> {cert.credentialId}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Portfolio Preview */}
        <div className="text-center mt-16 animate-fade-in delay-500">
          <Card className="p-8 max-w-4xl mx-auto gradient-border">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 hero-text">Portfolio Projects</h3>
              <p className="text-lg text-muted-foreground">
                Coming Soon – Exciting Projects in Progress
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {["Web Applications", "Design Projects", "Code Samples"].map((category, index) => (
                <div 
                  key={index}
                  className="p-6 bg-muted/30 rounded-lg border border-dashed border-primary/30 hover:border-primary/50 transition-colors"
                >
                  <div className="text-primary mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-2xl">🚀</span>
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{category}</h4>
                  <p className="text-sm text-muted-foreground">
                    Showcase of {category.toLowerCase()} demonstrating technical skills and creativity.
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;