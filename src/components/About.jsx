import React from "react";
import SectionTitle from "./SectionTitle";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" subtitle="My Introduction" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-80 md:h-96 rounded-lg glass overflow-hidden animate-float">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-6xl">
                  <img src="/gitim.jpeg" alt="me" />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-lg mb-6 text-muted-foreground">
              I'm a passionate first-year B.Tech undergraduate at <span className="text-white font-medium">Dr. B.R. Ambedkar National Institute of Technology.</span> As a Full Stack and <span className="text-white font-medium">MERN Stack Developer</span>, I enjoy crafting seamless web applications with intuitive frontends and robust backends. My enthusiasm for <span className="text-white font-medium">backend development</span> drives me to create efficient and scalable systems.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Beyond web development, I have a strong foundation in <span className="text-white font-medium">Python</span>, specializing in frameworks like <span className="text-white font-medium">Flask</span> for building APIs and utilizing <span className="text-white font-medium">OpenCV</span> for image processing tasks and <span className="text-white font-medium">deep learning</span>. Currently, I am diving deep into the fascinating world of Machine Learning, exploring its potential to revolutionize technology.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              I also have a keen interest in <span className="text-white font-medium">competitive programming</span>. I regularly participate in coding contests on platforms like <span className="text-white font-medium">Codeforces, CodeChef,</span> and <span className="text-white font-medium">LeetCode</span>, which sharpen my problem-solving skills and enhance my algorithmic thinking.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              With a blend of curiosity and dedication, I am constantly learning and evolving to tackle challenging projects and contribute meaningfully to the tech community. 😊
            </p>
            
            <Button className="bg-primary hover:bg-primary/80 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 transform hover:translate-y-[-5px]">
              <a href="https://drive.google.com/file/d/1FRT7k7_6kfnmpHl2VjVkc4ZQxdNHE97Y/view?usp=sharing">Download Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
