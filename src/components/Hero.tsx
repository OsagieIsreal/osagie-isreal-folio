import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Play, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import profilePhoto from "@/assets/profile-photo.jpg";


// toast.success(`Welcome Back ${values.username.toUpperCase()}`)
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 4,
  }));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Large Gradient Orbs */}
        <div
          className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div
          className="absolute w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            bottom: '15%',
            right: '15%',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${20 + Math.sin(Date.now() * 0.001 + particle.delay) * 10}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-primary/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-1/3 left-1/5 w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg rotate-12 animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Status Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for new projects
            </div>

            {/* Main Heading with Enhanced Typography */}
            <div className="space-y-4">
              <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p className="text-lg text-muted-foreground mb-2 tracking-wide">
                  Hello, I'm
                </p>
              </div>

              <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-6xl lg:text-8xl font-bold mb-4 hero-text leading-tight">
                  Osagie
                </h1>
              </div>

              <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-6xl lg:text-8xl font-bold text-foreground leading-tight">
                  Osaze <span className="hero-text">Isreal</span>
                </h1>
              </div>
            </div>

            {/* Enhanced Role Description */}
            <div className={`space-y-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-lg lg:text-2xl font-semibold text-primary">
                  <Sparkles className="h-6 w-6" />
                  <span>Front-End Developer</span>
                  <Sparkles className="h-6 w-6" />
                  <span>Graphics Designer</span>
                  <Sparkles className="h-6 w-6" />
                  <span>Desktop Publisher</span>
                </div>
                {/* <div className="text-lg text-accent font-medium">
                  <Sparkles className="h-6 w-6" /><span>Graphics Designer</span>
                  </div> */}
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Crafting beautiful digital experiences with modern technologies.
                Passionate about creating user-centered designs that drive business growth
                and make a lasting impact.
              </p>
            </div>

            {/* Enhanced CTA Section */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("#certifications")}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <a href="src/assets/My Cv.pdf" download>
                <Button
                  variant="glass"
                  size="xl"
                  className="group relative"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Download CV
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </Button>
              </a>
            </div>

            {/* Stats or Quick Info */}
            <div className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {[
                { number: "2+", label: "Years Experience" },
                { number: "5+", label: "Projects Completed" },
                { number: "2", label: "Certifications" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl font-bold hero-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Profile Section */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative">
              {/* Animated Background Ring */}
              <div className="absolute inset-0 rounded-full">
                <div className="w-full h-full rounded-full border-2 border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-4 rounded-full border border-accent/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse" />

              {/* Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl floating group">
                <img
                  src={profilePhoto}
                  alt="Osagie Osaze Isreal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/30 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <span className="text-3xl">💻</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent/30 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <span className="text-2xl">🎨</span>
              </div>
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-r from-primary/15 to-transparent rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20 hover:scale-110 transition-transform duration-300 cursor-pointer">
                <span className="text-xl">⚡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4'}`}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground animate-pulse">Scroll to explore</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("#about")}
              className="rounded-full hover:bg-primary/10 group"
            >
              <ArrowDown className="h-6 w-6 group-hover:translate-y-1 transition-transform animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;