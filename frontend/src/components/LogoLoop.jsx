import React from 'react';

const LogoLoop = ({ 
  logos, 
  speed = 120, 
  logoHeight = 48, 
  gap = 40, 
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = "#ffffff",
  ariaLabel = "Technology partners"
}) => {
  // Duplicate logos for seamless looping
  const duplicatedLogos = [...logos, ...logos];
  
  return (
    <div 
      className="logo-loop-container"
      style={{ 
        height: `${logoHeight + 20}px`, 
        position: 'relative', 
        overflow: 'hidden',
        width: '100%'
      }}
    >
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(${-100 / logos.length}%); }
        }
        
        .logo-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: scroll ${speed}s linear infinite;
          ${pauseOnHover ? 'animation-play-state: running;' : ''}
        }
        
        .logo-track:hover {
          ${pauseOnHover ? 'animation-play-state: paused;' : ''}
        }
        
        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: ${gap}px;
          ${scaleOnHover ? 'transition: transform 0.3s ease;' : ''}
        }
        
        .logo-item:hover {
          ${scaleOnHover ? 'transform: scale(1.2);' : ''}
        }
        
        ${fadeOut ? `
          .logo-loop-container::before,
          .logo-loop-container::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100px;
            z-index: 2;
            pointer-events: none;
          }
          
          .logo-loop-container::before {
            left: 0;
            background: linear-gradient(to right, ${fadeOutColor}, transparent);
          }
          
          .logo-loop-container::after {
            right: 0;
            background: linear-gradient(to left, ${fadeOutColor}, transparent);
          }
        ` : ''}
      `}</style>
      
      <div 
        className="logo-track"
        aria-label={ariaLabel}
        role="marquee"
      >
        {duplicatedLogos.map((logo, index) => (
          <div 
            key={index} 
            className="logo-item"
            style={{ height: `${logoHeight}px` }}
          >
            {logo.node ? (
              <div style={{ fontSize: `${logoHeight}px` }}>
                {logo.node}
              </div>
            ) : logo.src ? (
              <img 
                src={logo.src} 
                alt={logo.alt || logo.title} 
                style={{ height: '100%', width: 'auto' }}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;