
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");
  
  const education = [
    {
      degree: "Certificate in MongoDB",
      institution: "MongoDB University",
      duration: "2025",
      description: "Successfully completed the Introduction to MongoDB course, demonstrating proficiency in building and managing NoSQL databases."
    },
    {
      degree: "Certificate in Prompt Engineering",
      institution: "simplilearn",
      duration: "2025",
      description: "Successfully completed the Introduction to Prompt Engineering course, showcasing expertise in designing effective prompts for AI-driven solutions."
    }
  ];
  
  const experience = [
    {
      position: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      duration: "2021 - Present",
      description: "Leading the development of enterprise-level applications using MERN stack. Managing a team of 5 developers. Implementing CI/CD pipelines and best practices.",
      achievements: [
        "Reduced application load time by 40% through code optimization",
        "Implemented authentication system with multi-factor authentication",
        "Designed and deployed microservices architecture"
      ]
    },
    {
      position: "Core Member - Cybernauts (Technical Society of NITJ)",
      company: "Cybernauts NITJ",
      duration: "2025 - Present",
      description: "Developed and maintained multiple web applications for clients across various industries. Worked with React, Node.js, and MongoDB to create responsive and scalable applications.",
      achievements: [
        "Built e-commerce platform with payment integration",
        "Implemented real-time notification system",
        "Optimized database queries for improved performance"
      ]
    },
    {
      position: "Frontend Developer Intern",
      company: "Digital Agency",
      duration: "2017 - 2018",
      description: "Assisted in developing user interfaces for client websites. Worked with HTML, CSS, JavaScript, and React.",
      achievements: [
        "Contributed to 10+ client projects",
        "Built responsive landing pages",
        "Implemented animations and interactive elements"
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <SectionTitle title="My Resume" subtitle="Qualifications" />
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("education")}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === "education"
                ? "bg-primary text-white"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
            }`}
          >
            Education
          </button>
          {/* <button
            onClick={() => setActiveTab("experience")}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === "experience"
                ? "bg-primary text-white"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
            }`}
          >
            Experience
          </button> */}
        </div>
        
        <div className="max-w-3xl mx-auto">
          {activeTab === "education" ? (
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="glass p-6 rounded-lg relative">
                  <div className="absolute top-6 left-0 w-1 h-[calc(100%-48px)] bg-primary"></div>
                  <div className="absolute top-6 left-0 w-3 h-3 rounded-full bg-primary transform -translate-x-1"></div>
                  
                  <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-muted-foreground">{item.institution}</p>
                    <span className="text-xs bg-primary/30 px-2 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="glass p-6 rounded-lg relative">
                  <div className="absolute top-6 left-0 w-1 h-[calc(100%-48px)] bg-primary"></div>
                  <div className="absolute top-6 left-0 w-3 h-3 rounded-full bg-primary transform -translate-x-1"></div>
                  
                  <h3 className="text-xl font-semibold mb-1">{item.position}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-muted-foreground">{item.company}</p>
                    <span className="text-xs bg-primary/30 px-2 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
          <Button
  className="bg-primary hover:bg-primary/80 text-white font-medium py-2 px-6 rounded-md transition-all duration-300"
  onClick={() => window.open('https://drive.google.com/file/d/1AdjA7J8xv6egxLJMtD8nnOc4-ARyiB-a/view?usp=drive_link', '_blank')}
>
  Download CV
</Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
