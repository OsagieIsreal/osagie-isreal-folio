import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "osagieisreal962@gmail.com",
      link: "mailto:osagieisreal962@gmail.com",
      color: "text-primary",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "08063899541",
      link: "tel:+2348063899541",
      color: "text-accent",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      value: "Let's Chat",
      link: "https://wa.me/2348063899541",
      color: "text-primary",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="hero-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring
            your ideas to life with professional development and design solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="p-6 hover-glow transition-all duration-300 gradient-border group">
                  <a
                    href={contact.link}
                     target="_blank"
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                  >
                    <div className={`${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{contact.title}</h4>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="p-6 gradient-border">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Response Time</h4>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 gradient-border animate-slide-up delay-300">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6 z-10">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry, collaboration, etc."
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  rows={5}
                  required
                  className="mt-2 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isSubmitting}
                className="w-full group"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Prefer direct contact? Reach out via{" "}
                <a
                  href="https://wa.me/2348063899541"
                  className="text-primary hover:underline"
                >
                  WhatsApp
                </a>{" "}
                for faster response.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;