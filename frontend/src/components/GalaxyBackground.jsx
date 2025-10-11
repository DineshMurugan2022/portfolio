import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const GalaxyBackground = () => {
  const containerRef = useRef(null);
  const particleContainerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const particleContainer = particleContainerRef.current;
    
    if (!container || !particleContainer) return;

    // Get distance between two points
    const getDistance = (x1, y1, x2, y2) => {
      const xDist = x2 - x1;
      const yDist = y2 - y1;
      return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    };

    // Create particles function
    const createParticles = (numParticles = 50) => {
      const { innerWidth: width, innerHeight: height } = window;
      
      // Clear existing particles
      particleContainer.innerHTML = '';
      
      for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const particle = document.createElement('div');
        particle.className = 'galaxy-particle';
        particleContainer.appendChild(particle);

        const size = Math.random() * 3 + 1;

        gsap.set(particle, {
          x: x,
          y: y,
          width: size,
          height: size,
          position: 'absolute',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '50%',
          opacity: 0.7,
        });

        // Animate particles
        gsap.to(particle, {
          duration: 10 + Math.random() * 10,
          y: y - 200,
          x: x + (Math.random() - 0.5) * 100,
          opacity: 0,
          repeat: -1,
          ease: 'none',
          delay: Math.random() * 5
        });
      }
    };

    // Mouse move handler with throttling
    let mouseX = 0, mouseY = 0;
    let isAnimating = false;
    
    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      
      if (!isAnimating) {
        isAnimating = true;
        requestAnimationFrame(updateParallax);
      }
      
      // Handle particle interactions
      const particles = particleContainer.querySelectorAll('.galaxy-particle');
      particles.forEach((particle) => {
        const rect = particle.getBoundingClientRect();
        const particleX = rect.left + rect.width / 2;
        const particleY = rect.top + rect.height / 2;
        const distance = getDistance(mouseX, mouseY, particleX, particleY);

        if (distance < 100) {
          gsap.to(particle, {
            duration: 0.3,
            scale: 2,
            opacity: 1,
            ease: 'power2.out'
          });
        } else {
          gsap.to(particle, {
            duration: 0.3,
            scale: 1,
            opacity: 0.7,
            ease: 'power2.out'
          });
        }
      });
    };
    
    const updateParallax = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX = (mouseX - centerX) * 0.001;
      const moveY = (mouseY - centerY) * 0.001;

      gsap.to('.galaxy-layer-1', {
        x: moveX * 15,
        y: moveY * 15,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.to('.galaxy-layer-2', {
        x: moveX * 10,
        y: moveY * 10,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.to('.galaxy-layer-3', {
        x: moveX * 5,
        y: moveY * 5,
        duration: 0.8,
        ease: 'power2.out',
      });
      
      isAnimating = false;
    };

    // Initialize
    createParticles();
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      createParticles();
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      gsap.killTweensOf('.galaxy-layer-1, .galaxy-layer-2, .galaxy-layer-3, .galaxy-particle');
    };
  }, []);

  return (
    <div 
      className="galaxy-container" 
      ref={containerRef} 
      style={{
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
      }}
    >
      <div className="parallax-layer galaxy-layer-1" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '120%',
        height: '120%',
        background: 'linear-gradient(45deg, rgba(138, 43, 226, 0.1) 0%, rgba(30, 144, 255, 0.1) 100%)',
        willChange: 'transform'
      }}></div>
      
      <div className="parallax-layer galaxy-layer-2" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '110%',
        height: '110%',
        background: 'linear-gradient(-45deg, rgba(255, 20, 147, 0.1) 0%, rgba(0, 191, 255, 0.1) 100%)',
        willChange: 'transform'
      }}></div>
      
      <div className="parallax-layer galaxy-layer-3" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '105%',
        height: '105%',
        background: 'linear-gradient(90deg, rgba(75, 0, 130, 0.1) 0%, rgba(25, 25, 112, 0.1) 100%)',
        willChange: 'transform'
      }}></div>
      
      <div 
        ref={particleContainerRef}
        className="particle-container"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      ></div>
    </div>
  );
};

export default GalaxyBackground;
