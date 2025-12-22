import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, FileText, Star, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      icon: <Code className="h-8 w-8" />,
      color: "text-primary",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "React.js", level: 85 },
        { name: "React.ts", level: 80 },
      ],
    },
    {
      title: "Graphics Design",
      icon: <Palette className="h-8 w-8" />,
      color: "text-accent",
      skills: [
        { name: "CorelDRAW", level: 88 },
        { name: "Logo Design", level: 85 },
        { name: "Brand Identity", level: 82 },
        { name: "UI/UX Principles", level: 75 },
      ],
    },
    {
      title: "Desktop Publishing",
      icon: <FileText className="h-8 w-8" />,
      color: "text-primary",
      skills: [
        { name: "MS Word", level: 95 },
        { name: "MS Excel", level: 90 },
        { name: "MS PowerPoint", level: 92 },
        { name: "Document Design", level: 88 },
      ],
    },
  ];

  const additionalSkills = [
    "Responsive Designs",
    "Version Control (Git)",
    "Problem Solving",
    "Project Management",
    "Client Communication",
    "Time Management",
    "Accuracy",
    "Creative Thinking",
    "Attention to Details",
    "Adabtability",
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="hero-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technical and creative skills honed through 
            continuous learning and practical application.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 hover-glow transition-all duration-300 gradient-border animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={category.color}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center animate-fade-in delay-500">
          <h3 className="text-2xl font-bold mb-8 text-primary">Additional Skills & Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;