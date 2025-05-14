
import React from "react";
import SectionTitle from "./SectionTitle";
import { 
  Code, 
  Server, 
  Lightbulb, 
  Database, 
  Laptop, 
  Globe, 
  Cpu, 
  BarChart
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: <Code className="w-8 h-8 text-primary" />,
      skills: ["HTML/CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8 text-primary" />,
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST API", "Flask"]
    },
    {
      category: "Python & ML",
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      skills: ["Python", "OpenCV", "Matplotlib", "NumPy"]
    },
    {
      category: "Core Technical Skills",
      icon: <skillCategories className="w-8 h-8 text-primary" />,
      skills: ["Data Structures and Algorithms", "Object Oriented Programming", "Computer Vision", "Web Development", "Artificial Intelligence"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-b from-secondary/30 to-background/50">
      <div className="container mx-auto px-4">
        <SectionTitle title="My Skills" subtitle="Technical Expertise" />

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_0_25px_rgba(156,39,176,0.3)]"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/20 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-accent/20 blur-3xl"></div>
              
              <div className="flex items-center justify-center mb-8">
                <div className="rounded-full p-4 bg-white/5 backdrop-blur-md border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold ml-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  {category.category}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex justify-center items-center p-3 rounded-xl backdrop-blur-md border border-white/5 bg-white/5 transform transition-all duration-300 hover:scale-[1.05] hover:bg-white/10 hover:border-primary/30"
                  >
                    <span className="font-medium text-white">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 z-0"></div>
          
          <div className="flex items-center justify-center mb-8 relative z-10">
            <div className="rounded-full p-4 bg-white/5 backdrop-blur-md border border-white/10">
              <Laptop className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold ml-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Software & Tools
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {[
              "VS Code", "Docker", "Git", "Github", "Postman", 
              "Figma", "EJS", "MongoDB Atlas", "Rive", "Netlify",
              "npm", "render", "Firebase"
            ].map((tool, index) => (
              <div 
                key={index} 
                className="px-6 py-3 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-white font-medium 
                  transform transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(156,39,176,0.3)]"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
