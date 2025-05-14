
// Helper function to check if an element is in viewport
export const isInViewport = (element, offset = 150) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= 0
  );
};

// Function to animate elements when they come into view
export const animateOnScroll = (elementSelector, animationClass) => {
  const elements = document.querySelectorAll(elementSelector);
  
  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add(animationClass);
    }
  });
};

// Animate skill bars
export const animateSkillBars = () => {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(bar => {
    if (isInViewport(bar)) {
      bar.classList.add('animate');
    }
  });
};

// Typing animation
export const typeText = (element, text, speed = 100, callback = null) => {
  let i = 0;
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  
  element.textContent = '';
  type();
};

// Particle animation
export const createParticles = (canvas, count = 100) => {
  if (!canvas) return null;
  
  const ctx = canvas.getContext('2d');
  const particles = [];
  
  // Create particles
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, 255, ${Math.random() * 0.4 + 0.1})`,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25
    });
  }
  
  // Animation function
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
      
      // Connect particles
      connectParticles(particles, particle, ctx, 100);
    });
  }
  
  // Connect particles with lines
  function connectParticles(particles, currentParticle, ctx, distance) {
    particles.forEach(particle => {
      if (currentParticle === particle) return;
      
      const dx = currentParticle.x - particle.x;
      const dy = currentParticle.y - particle.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < distance) {
        const opacity = 1 - (dist / distance);
        ctx.beginPath();
        ctx.strokeStyle = `rgba(150, 150, 255, ${opacity * 0.2})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(currentParticle.x, currentParticle.y);
        ctx.lineTo(particle.x, particle.y);
        ctx.stroke();
      }
    });
  }
  
  // Start animation
  animate();
  
  // Return particles array for potential external manipulation
  return particles;
};
