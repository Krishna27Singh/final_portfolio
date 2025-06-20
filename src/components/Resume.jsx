import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  const education = [
    {
      degree: "B.Tech in Biotechnology",
      institution: "Dr. B.R. Ambedkar National Institute of Technology, Jalandhar",
      duration: "2024 - 2028",
    }
  ];

  const experience = [
    {
      position: "Volunteer",
      company: "National Service Scheme (NSS)",
      duration: "Aug 2024 - Dec 2024",
      description: "Engaged in various social service activities aimed at community welfare and development."
    },
    {
      position: "Member",
      company: "Web Development and Management Club, NIT Jalandhar",
      duration: "Jan 2025 - Present",
      description: "Collaborating on web development projects to enhance technical skills and contribute to club activities."
    },
    {
      position: "Core Member",
      company: "Cybernauts NITJ (Tech Society)",
      duration: "Feb 2025 - Present",
      description: "Actively involved in organizing and participating in technical workshops, coding competitions."
    },
    {
      position: "Contributor",
      company: "SSOC'25",
      duration: "June 2025",
      description: "Contributed to open-source projects under the Summer Season of Code initiative."
    }
  ];

  return (
    <section id="resume" className="py-20 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Education and Experiences" subtitle="Education" />

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
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === "experience"
                ? "bg-primary text-white"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
            }`}
          >
            Experience
          </button>
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
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button
              className="bg-primary hover:bg-primary/80 text-white font-medium py-2 px-6 rounded-md transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1FRT7k7_6kfnmpHl2VjVkc4ZQxdNHE97Y/view?usp=sharing",
                  "_blank"
                )
              }
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
