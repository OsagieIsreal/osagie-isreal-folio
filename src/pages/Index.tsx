import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
// import ViewCertificate from "@/components/ViewCertificate";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Services />
      <Contact />
      <Footer />
      {/* <ViewCertificate /> */}
    </div>
  );
};

export default Index;
