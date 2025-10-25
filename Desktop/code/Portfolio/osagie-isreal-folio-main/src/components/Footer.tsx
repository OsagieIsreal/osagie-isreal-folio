import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "#",
      color: "hover:text-gray-400",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:osagieisreal962@gmail.com",
      color: "hover:text-primary",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-12 relative">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold hero-text mb-4">Osagie.dev</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Passionate about creating beautiful, functional, and user-friendly 
              digital experiences that make a difference.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 text-muted-foreground ${social.color} hover:scale-110 hover:shadow-lg`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <span className="font-medium">Email:</span><br />
                <a 
                  href="mailto:osagieisreal962@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  osagieisreal962@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Phone:</span><br />
                <a 
                  href="tel:+2348063899541"
                  className="hover:text-primary transition-colors"
                >
                  +234 806 389 9541
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Location:</span><br />
                Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear} Osagie Osaze Isreal. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and modern web technologies.</span>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="group hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;