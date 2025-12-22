import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Code, Palette } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Front-End (HTML, CSS, JS) Teacher",
      year: "2022",
      type: "Teaching & Mentoring",
      icon: <Users className="h-6 w-6" />,
      description: "Taught fundamental web development technologies to aspiring developers, focusing on HTML, CSS, and JavaScript. Mentored students through hands-on projects and practical coding exercises.",
      highlights: [
        "Curriculum Development",
        "Student Mentoring", 
        "Project-Based Learning",
        "Code Review Sessions",
      ],
      skills: ["HTML", "CSS", "JavaScript", "Teaching", "Mentoring"],
    },
    {
      title: "Graphic Designer",
      year: "2020",
      type: "Creative Design",
      icon: <Palette className="h-6 w-6" />,
      description: "Created compelling visual designs and brand materials using CorelDRAW. Worked with clients to develop their brand identity and create marketing materials that effectively communicated their message.",
      highlights: [
        "Brand Identity Design",
        "Marketing Materials",
        "Client Consultation",
        "Creative Problem Solving",
      ],
      skills: ["CorelDRAW", "Brand Design", "Client Relations", "Creative Direction"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="hero-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on experience in development and design, 
            with a focus on education and creative solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-16 animate-slide-up`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10 glow-effect"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="p-6 hover-glow transition-all duration-300 gradient-border">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-primary">
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-primary font-semibold">{exp.year}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">
                        Key Highlights
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {exp.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge 
                            key={i} 
                            variant="outline" 
                            className="text-xs border-primary/30 hover:bg-primary/10 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Future Goals */}
          <div className="text-center mt-16 animate-fade-in delay-500">
            <Card className="p-8 gradient-border">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold hero-text">Looking Forward</h3>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ever ready to contribute to innovative projects and collaborate with talented teams. 
                Seeking opportunities to grow as a developer while competing with others and making meaningful contributions 
                to cutting-edge web applications and user experiences.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;