
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  
  const projects = [
    {
      title: "Hostel Attendance System",
      description: "A full-stack website to manage hostel attendance securly by authentication, location verification and facial recognition.",
      tags: ["React", "Flask", "MongoDB", "OpenCV", "TailwindCSS"],
      image: '/hostatt.jpeg',
      icon: "",
      category: "python",
      liveLink: "https://github.com/Krishna27Singh/hostel-attendance-system",
      githubLink: "https://github.com/Krishna27Singh/hostel-attendance-system",
    },
    {
      title: "MoodBloom (mood-tracker)",
      description: "MoodBloom is a comprehensive mood-tracking app designed to promote mental well-being by combining multiple features.",
      tags: ["Node.js", "React.js", "Google Gemini API", "D3JS", "EJS"],
      image: '/mdd.jpeg',
      icon: "",
      category: "full-stack",
      liveLink: "https://github.com/Krishna27Singh/MoodBloom",
      githubLink: "https://github.com/Krishna27Singh/MoodBloom",
    },
    {
      title: "Blogging App",
      description: "EchoSphere is a dynamic blogging platform where users can securely sign up, log in, and share their thoughts through blogs.",
      tags: ["Node.js", "Express.js", "Bootstrap", "EJS", "MongoDB"],
      image: 'blgg.jpeg',
      icon: "",
      category: "full-stack",
      liveLink: "https://github.com/Krishna27Singh/blogging_app",
      githubLink: "https://github.com/Krishna27Singh/blogging_app",
    },
    {
      title: "LinkLoom (url-shortener)",
      description: "This URL shortener app simplifies link sharing by allowing users to convert lengthy URLs into compact, easy-to-share links.",
      tags: ["Node.js", "Express.js", "EJS", "MongoDB"],
      image: '/lll.jpeg',
      icon: "",
      category: "full-stack",
      liveLink: "https://github.com/Krishna27Singh/Url-Generator",
      githubLink: "https://github.com/Krishna27Singh/Url-Generator",
    },
    {
      title: "Task Management App",
      description: "The task management app is a practical tool for organizing daily activities. It enables users to add, update, and delete tasks effortlessly .",
      tags: ["Python", "Flask", "PostgreSQL", "NumPy"],
      image: '/tdd.jpeg',
      icon: "",
      category: "python",
      liveLink: "https://github.com/Krishna27Singh/todo",
      githubLink: "https://github.com/Krishna27Singh/todo",
    },
    {
      title: "Snake Game",
      description: "This JavaScript-based snake game recreates the classic gaming experience with smooth controls and dynamic gameplay.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: '/snn.jpeg',
      icon: "",
      category: "frontend",
      liveLink: "https://github.com/Krishna27Singh/snake-game",
      githubLink: "https://github.com/Krishna27Singh/snake-game",
    },
    {
      title: "Tic Tac Toe",
      description: "The Tic-Tac-Toe game is a JavaScript-powered interactive application where two players can compete in real-time.",
      tags: ["HTML","CSS", "JavaScript"],
      image: '/tkk.jpeg',
      icon: "",
      category: "frontend",
      liveLink: "https://github.com/Krishna27Singh/Tic-Tac-Toe",
      githubLink: "https://github.com/Krishna27Singh/Tic-Tac-Toe",
    },
    {
      title: "Calculator",
      description: "The JavaScript calculator is a fully functional application that supports basic arithmetic operations like addition, subtraction, multiplication, and division.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: '/cll.jpeg',
      icon: "",
      category: "frontend",
      liveLink: "https://github.com/Krishna27Singh/Calculator-Project",
      githubLink: "https://github.com/Krishna27Singh/Calculator-Project",
    },
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const filters = [
    { value: "all", label: "All Projects" },
    { value: "full-stack", label: "Full Stack" },
    { value: "frontend", label: "Frontend" },
    { value: "python", label: "Python & ML" }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionTitle title="My Projects" subtitle="Recent Work" />
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === item.value
                  ? "bg-primary text-white"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/Krishna27Singh"
            className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
