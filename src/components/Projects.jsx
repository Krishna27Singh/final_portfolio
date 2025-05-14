
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
      category: "full-stack",
      liveLink: "https://github.com/Krishna27Singh/hostel-attendance-system",
      githubLink: "https://github.com/Krishna27Singh/hostel-attendance-system",
    },
    {
      title: "MoodBloom (mood-tracker)",
      description: "An image recognition system using OpenCV and TensorFlow to identify objects in images with high accuracy.",
      tags: ["Python", "OpenCV", "TensorFlow", "Machine Learning"],
      image: null,
      icon: "🔍",
      category: "python",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Blogging App",
      description: "A React-based task management application with drag-and-drop functionality, user authentication, and real-time updates.",
      tags: ["React", "Firebase", "Tailwind CSS", "Context API"],
      image: null,
      icon: "✅",
      category: "frontend",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "LinkLoom (url-shortener)",
      description: "A full-featured blog platform with user authentication, content management, commenting system, and responsive design.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      image: null,
      icon: "📝",
      category: "full-stack",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description: "A Python application that uses OpenCV to detect faces in real-time video streams and images.",
      tags: ["Python", "OpenCV", "Computer Vision"],
      image: null,
      icon: "👤",
      category: "python",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Snake Game",
      description: "A responsive weather dashboard that displays current and forecasted weather conditions using external API data.",
      tags: ["JavaScript", "CSS", "API Integration", "Chart.js"],
      image: null,
      icon: "🌤️",
      category: "frontend",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Tic Tac Toe",
      description: "A responsive weather dashboard that displays current and forecasted weather conditions using external API data.",
      tags: ["JavaScript", "CSS", "API Integration", "Chart.js"],
      image: null,
      icon: "🌤️",
      category: "frontend",
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Calculator",
      description: "A responsive weather dashboard that displays current and forecasted weather conditions using external API data.",
      tags: ["JavaScript", "CSS", "API Integration", "Chart.js"],
      image: null,
      icon: "🌤️",
      category: "frontend",
      liveLink: "#",
      githubLink: "#",
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
            href="#"
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
