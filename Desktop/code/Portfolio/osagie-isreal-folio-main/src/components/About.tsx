import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { GraduationCap, Target, Users, Lightbulb, Sparkles } from "lucide-react";

const About = () => {
  const education = [
    {
      title: "Senior Secondary School",
      institution: "Government Technical College Ikotun",
      period: "2021 – 2024",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: "Junior Secondary School", 
      institution: "Happy Bet College, Ikotun-Igando",
      period: "Completed",
      icon: <GraduationCap className="h-6 w-6" />,
    },
  ];

  const strengths = [
    {
      title: "Adaptability",
      description: "Quick to learn and adapt to new technologies and environments",
      icon: <Target className="h-8 w-8" />,
    },
    {
      title: "Results-Driven",
      description: "Focused on delivering high-quality solutions that drive business growth",
      icon: <Lightbulb className="h-8 w-8" />,
    },
    {
      title: "Teamwork",
      description: "Collaborative approach to problem-solving and project development",
      icon: <Users className="h-8 w-8" />,
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="hero-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am a dedicated professional with a passion for growth, efficiency, and excellence. 
            My journey in technology is driven by a desire to create meaningful digital experiences 
            that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 text-primary">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover-glow transition-all duration-300 gradient-border">
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{edu.title}</h4>
                      <p className="text-primary mb-2">{edu.institution}</p>
                      <p className="text-muted-foreground">{edu.period}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Strengths */}
          <div className="animate-slide-up delay-300">
            <h3 className="text-2xl font-bold mb-8 text-primary">Key Strengths</h3>
            <div className="space-y-6">
              {strengths.map((strength, index) => (
                <Card key={index} className="p-6 hover-glow transition-all duration-300 gradient-border">
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">
                      {strength.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{strength.title}</h4>
                      <p className="text-muted-foreground">{strength.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center animate-fade-in delay-500">
          <Card className="p-8 max-w-4xl mx-auto gradient-border">
            <h3 className="text-2xl font-bold mb-4 hero-text">My Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To leverage my skills in front-end development and graphic design to create 
              innovative digital solutions that not only meet client expectations but exceed them. 
              I believe in the power of clean code, beautiful design, and user-centered experiences 
              to transform businesses and connect people.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;