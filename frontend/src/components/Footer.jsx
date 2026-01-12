import React, { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = (clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateTransform = (index) => {
    const baseRotation = 5;
    const offsetX = mousePosition.x * baseRotation;
    const offsetY = -mousePosition.y * baseRotation;
    const individualOffset = Math.sin(index * 0.5) * 2;

    return {
      transform: `rotateX(${offsetY + individualOffset}deg) rotateY(${offsetX - individualOffset}deg)`
    };
  };

  return (
    <footer className="bg-dark text-white py-5 position-relative overflow-hidden">
      {/* Grid-like background */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        zIndex: 0,
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        opacity: 0.05
      }} />

      <div className="container position-relative z-1">
        <div className="text-center mb-4">
          {/* Social Media Icons */}
          <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
            {[
              { icon: "bi-github", url: "https://github.com/DineshMurugan2022" },
              { icon: "bi-linkedin", url: "https://www.linkedin.com/in/dinesh-m-9483240703/" },
              { icon: "bi-twitter", url: "https://x.com/DineshMurugan20" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-dark shadow-sm"
                style={{
                  width: 44,
                  height: 44,
                  transition: "all 0.3s ease",
                  ...calculateTransform(index)
                }}
              >
                <i className={`bi ${social.icon}`}></i>
              </a>
            ))}
          </div>

          {/* Decorative Line */}
          <div className="mx-auto mb-3" style={{
            width: 80,
            height: 2,
            background: "linear-gradient(90deg, transparent, white, transparent)"
          }}></div>

          {/* Floating Text */}
          <div style={{
            transform: `rotateX(${mousePosition.y * 10}deg) rotateY(${-mousePosition.x * 10}deg)`,
            transition: "transform 0.1s linear"
          }}>
            <p className="bg-secondary bg-opacity-25 d-inline-block px-4 py-2 rounded small shadow-sm backdrop-blur-sm">
              &copy; {currentYear} Dinesh. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 576px) {
          .py-5 {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
          
          .gap-3 {
            gap: 1rem;
          }
          
          p {
            font-size: 0.875rem;
            padding: 0.5rem 1rem !important;
          }
        }
        
        @media (min-width: 576px) and (max-width: 768px) {
          .py-5 {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }
        }
        
        @media (min-width: 1200px) {
          .py-5 {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
          }
          
          p {
            font-size: 1rem;
          }
        }
        
        @media (min-width: 1800px) {
          .py-5 {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }
          
          p {
            font-size: 1.125rem;
            padding: 0.75rem 1.5rem !important;
          }
          
          a {
            width: 50px !important;
            height: 50px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;