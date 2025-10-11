import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SimpleParallaxBackground.css';

// Register GSAP plugins safely
gsap.registerPlugin(ScrollTrigger);

const SimpleParallaxBackground = () => {
  const containerRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);

  useEffect(() => {
    console.log('SimpleParallaxBackground mounted');
    const container = containerRef.current;
    const layer1 = layer1Ref.current;
    const layer2 = layer2Ref.current;
    const layer3 = layer3Ref.current;

    if (!container || !layer1 || !layer2 || !layer3) {
      console.log('Background container or layers not found');
      return;
    }

    console.log('Background container found, initializing...', container);

    // Set initial positions
    gsap.set([layer1, layer2, layer3], { clearProps: "all" });

    // Refresh ScrollTrigger to ensure it works on all pages
    ScrollTrigger.refresh();

    // Simple parallax scroll effects
    const scrollTriggers = [];
    
    scrollTriggers.push(gsap.to(layer1, {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body, // Use body instead of container for global effect
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true,
        refreshPriority: -1
      }
    }));

    scrollTriggers.push(gsap.to(layer2, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true,
        refreshPriority: -1
      }
    }));

    scrollTriggers.push(gsap.to(layer3, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true,
        refreshPriority: -1
      }
    }));

    // Floating animation for shapes
    const floatingShapes = container.querySelectorAll('.floating-shape');
    const floatingTween = gsap.to(floatingShapes, {
      y: -30,
      duration: 3,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.5
    });

    // Particle animation
    const particles = container.querySelectorAll('.particle');
    const particleTween = gsap.to(particles, {
      y: -100,
      opacity: 0.8,
      duration: 4,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.2
    });

    // Mouse parallax effect with throttling
    let mouseX = 0, mouseY = 0;
    let isAnimating = false;
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!isAnimating) {
        isAnimating = true;
        requestAnimationFrame(updateParallax);
      }
    };
    
    const updateParallax = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX = (mouseX - centerX) * 0.002;
      const moveY = (mouseY - centerY) * 0.002;

      gsap.to(layer1, {
        x: moveX * 3,
        y: moveY * 3,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.to(layer2, {
        x: moveX * 2,
        y: moveY * 2,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.to(layer3, {
        x: moveX,
        y: moveY,
        duration: 1,
        ease: 'power2.out'
      });
      
      isAnimating = false;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      scrollTriggers.forEach(tween => tween.kill());
      floatingTween.kill();
      particleTween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      className="simple-parallax-container" 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -100,
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        pointerEvents: 'none',
        visibility: 'visible',
        opacity: 1
      }}
    >
      {/* Layer 1 - Background */}
      <div className="parallax-layer layer-1" ref={layer1Ref}>
        <div className="gradient-bg bg-1"></div>
        <div className="floating-shape circle large"></div>
        <div className="floating-shape triangle medium"></div>
      </div>
      
      {/* Layer 2 - Middle */}
      <div className="parallax-layer layer-2" ref={layer2Ref}>
        <div className="gradient-bg bg-2"></div>
        <div className="floating-shape square medium"></div>
        <div className="floating-shape hexagon small"></div>
        <div className="floating-shape circle small"></div>
      </div>
      
      {/* Layer 3 - Foreground */}
      <div className="parallax-layer layer-3" ref={layer3Ref}>
        <div className="gradient-bg bg-3"></div>
        <div className="floating-shape diamond small"></div>
        <div className="floating-shape pentagon medium"></div>
      </div>

      {/* Particles */}
      <div className="particles">
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}></div>
        ))}
      </div>

      {/* Grid overlay */}
      <div className="grid-pattern"></div>
    </div>
  );
};

export default SimpleParallaxBackground;
