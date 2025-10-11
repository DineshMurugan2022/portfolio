import React, { useEffect, useRef, useState } from 'react';
import './CardBeamAnimation.css';

const CardBeamAnimation = ({ intensity = 'medium', theme = 'cyan' }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [isActive] = useState(true);

  // Animation intensity settings
  const intensitySettings = {
    low: { cardFreq: 0.1, beamFreq: 0.05, particles: 10 },
    medium: { cardFreq: 0.3, beamFreq: 0.2, particles: 20 },
    high: { cardFreq: 0.5, beamFreq: 0.4, particles: 30 }
  };

  // Theme color settings
  const themes = {
    cyan: { primary: '0, 255, 255', secondary: '255, 255, 255' },
    purple: { primary: '255, 0, 255', secondary: '128, 0, 255' },
    green: { primary: '0, 255, 128', secondary: '0, 255, 0' },
    orange: { primary: '255, 128, 0', secondary: '255, 255, 0' },
    blue: { primary: '0, 128, 255', secondary: '0, 255, 255' }
  };

  const currentTheme = themes[theme] || themes.cyan;
  const settings = intensitySettings[intensity] || intensitySettings.medium;

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isActive) return;

    // Debug log to confirm component is mounting
    console.log('CardBeamAnimation mounted and running');

    // Apply theme colors to container
    container.style.setProperty('--primary-color', currentTheme.primary);
    container.style.setProperty('--secondary-color', currentTheme.secondary);

    // Create floating cards with beam animation
    const createCard = () => {
      const card = document.createElement('div');
      card.className = 'beam-card';
      
      // Random starting position
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      // Random card content (code-like)
      const codeSnippets = [
        'const animate = () => {}',
        'function render() {}',
        'useEffect(() => {})',
        'return <Component />',
        'import React from "react"',
        'export default App',
        'useState(false)',
        'props.children',
        'onClick={handler}',
        'className="active"',
        'npm install react',
        'git commit -m "fix"',
        'const [state, setState]',
        'async/await function',
        'try { } catch (e) {}'
      ];
      
      card.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      card.style.left = startX + 'px';
      card.style.top = startY + 'px';
      
      // Apply theme colors
      card.style.borderColor = `rgba(${currentTheme.primary}, 0.3)`;
      card.style.color = `rgba(${currentTheme.primary}, 0.8)`;
      card.style.boxShadow = `0 0 20px rgba(${currentTheme.primary}, 0.2), inset 0 0 20px rgba(${currentTheme.primary}, 0.05)`;
      
      // Random animation duration
      const duration = 3000 + Math.random() * 2000;
      card.style.animationDuration = duration + 'ms';
      
      container.appendChild(card);
      
      // Remove card after animation
      setTimeout(() => {
        if (card.parentNode) {
          card.parentNode.removeChild(card);
        }
      }, duration);
    };

    // Create beam lines
    const createBeam = () => {
      const beam = document.createElement('div');
      beam.className = 'glow-beam';
      
      const angle = Math.random() * 360;
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      
      beam.style.left = startX + 'px';
      beam.style.top = startY + 'px';
      beam.style.transform = `rotate(${angle}deg)`;
      
      // Apply theme colors to beam
      beam.style.background = `linear-gradient(
        to bottom,
        transparent 0%,
        rgba(${currentTheme.primary}, 0.8) 20%,
        rgba(${currentTheme.secondary}, 1) 50%,
        rgba(${currentTheme.primary}, 0.8) 80%,
        transparent 100%
      )`;
      beam.style.boxShadow = `
        0 0 10px rgba(${currentTheme.primary}, 0.5),
        0 0 20px rgba(${currentTheme.primary}, 0.3),
        0 0 40px rgba(${currentTheme.primary}, 0.1)
      `;
      
      container.appendChild(beam);
      
      setTimeout(() => {
        if (beam.parentNode) {
          beam.parentNode.removeChild(beam);
        }
      }, 2000);
    };

    // Animation loop
    const animate = () => {
      if (!isActive) return;
      
      // Create cards based on intensity
      if (Math.random() < settings.cardFreq) {
        createCard();
      }
      
      // Create beams based on intensity
      if (Math.random() < settings.beamFreq) {
        createBeam();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, currentTheme, settings]);

  return (
    <div 
      ref={containerRef}
      className="card-beam-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Base gradient background */}
      <div className="beam-background"></div>
      
      {/* Floating particles */}
      <div className="particles">
        {[...Array(settings.particles)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 3 + 's',
            backgroundColor: `rgba(${currentTheme.primary}, 0.6)`,
            boxShadow: `0 0 6px rgba(${currentTheme.primary}, 0.4)`
          }}></div>
        ))}
      </div>
    </div>
  );
};

export default CardBeamAnimation;