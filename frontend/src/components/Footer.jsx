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
          <div className="d-flex justify-content-center gap-3 mb-4">
            {[
              { icon: "bi-github", url: "https://github.com" },
              { icon: "bi-linkedin", url: "https://linkedin.com" },
              { icon: "bi-twitter", url: "https://twitter.com" }
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
    </footer>
  );
};

export default Footer;
