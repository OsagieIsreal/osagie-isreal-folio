// import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { File } from "lucide-react";
import { 
  // CertificatesOne, 
  // CertificatesTwo, 
  CertificatesThree, 
  // CertificatesFour 
} from "../assets/certificates/AllCertificates";
// import certi1 from "@/assets/profile-photo.jpg";


const ViewCertificates = () => {
  const viewCertificatesCategories = [
    // {
    //   title: "HTML, CSS, JavaScript Certification",
    //   icon: <File className="h-8 w-8" />,
    //   Image: <CertificatesOne />,
    //   color: "text-primary",
    // },
    // {
    //   title: "Industrial Training Certification",
    //   icon: <File className="h-8 w-8" />,
    //   Image: <CertificatesTwo />,
    //   color: "text-accent",
    // },
    {
      title: "Design Summer Camp Certification",
      icon: <File className="h-8 w-8" />,
      Image: <CertificatesThree />,
      color: "text-primary",
    },
    // {
    //   title: "Design Summer Camp Certification",
    //   icon: <File className="h-8 w-8" />,
    //   Image: <CertificatesFour />,
    //   color: "text-primary",
    // },
  ];


  return (
    <section id="ViewCertificates" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Isreal's <span className="hero-text">Certificates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technical and creative ViewCertificates honed through 
            continuous learning and practical application.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {viewCertificatesCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 hover-glow transition-all duration-300 gradient-border animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={category.color}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
              
              {/* <div className="space-y-4">
                {category.ViewCertificates.map((viewCertificates,))}
              </div> */}
              <div className="space-y-4">
                {category.Image}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ViewCertificates;