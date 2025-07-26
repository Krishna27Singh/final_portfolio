
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import SplashCursor from './SplashCursor'


const Hero = () => {
  const textRef = useRef(null);
  <SplashCursor />
  
  useEffect(() => {
    const phrases = ["Full Stack Developer", "MERN Stack Developer", "Python Developer", "Competitive Programmer"];
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let isEnd = false;
    
    function loop() {
      isEnd = false;
      if (textRef.current) {
        textRef.current.innerHTML = currentPhrase.join('');
        
        if (i < phrases.length) {
          // If deleting
          if (isDeleting && currentPhrase.length === 0) {
            isDeleting = false;
            i = (i + 1) % phrases.length;
            j = 0;
            // Pause before typing next phrase
            setTimeout(loop, 500);
            return;
          }
          
          // If typing
          if (!isDeleting && j === phrases[i].length) {
            isEnd = true;
            isDeleting = true;
            // Pause at the end of phrase
            setTimeout(loop, 2000);
            return;
          }
          
          // Set typing speed
          const typingSpeed = isDeleting ? 50 : 100;
          
          // Add or remove character
          if (isDeleting) {
            currentPhrase.pop();
          } else {
            currentPhrase.push(phrases[i][j]);
            j++;
          }
          
          setTimeout(loop, typingSpeed);
        }
      }
    }
    
    loop();
  }, []);

  return (
    
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,120,255,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4">
        <div className="text-center md:text-left max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            <span className="text-gradient">KRISHNA SINGH</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 h-10">
            <span className="text-accent" ref={textRef}></span>
            <SplashCursor />
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Passionate about building seamless applications, competitive programming, 
            and creating innovative solutions to real word problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button className="bg-primary hover:bg-primary/80 text-white font-medium py-2 px-6 rounded-md btn-pulse transition-all duration-300 transform hover:translate-y-[-5px]">
              <a href="#projects">View My Work</a>
            </Button>
            <Button className="bg-secondary hover:bg-secondary/80 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 transform hover:translate-y-[-5px]">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="mt-16 animate-bounce flex justify-center md:justify-start">
            <a href="#about" aria-label="Scroll down">
              <svg 
                width="30" 
                height="30" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-muted-foreground"
              >
                <path 
                  d="M12 5V19M12 19L5 12M12 19L19 12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
