import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";


const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Background Effects */}
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{ zIndex: -20, pointerEvents: "none" }}
      >
        {/* Parallax Background */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "linear-gradient(to bottom, #f8f9fa, #f8f9fa 70%, #6c757d33)",
            transform: `translateY(${scrollY * 0.05}px)`,
            transition: "transform 0.1s ease-out",
          }}
        ></div>

        {/* Grid Lines */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            opacity: 0.05,
            backgroundImage: `
              linear-gradient(to right, #0d6efd 1px, transparent 1px),
              linear-gradient(to bottom, #0d6efd 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `
              perspective(1000px)
              rotateX(${mousePosition.y * 5}deg)
              rotateY(${-mousePosition.x * 5}deg)
            `,
            transition: "transform 0.1s ease-out",
          }}
        ></div>

        {/* Floating Particles */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="position-absolute rounded-circle"
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "rgba(13,110,253,0.3)",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 3 + Math.random() * 7,
                  ease: "easeInOut",
                },
                opacity: {
                  repeat: Infinity,
                  duration: 4 + Math.random() * 5,
                  ease: "easeInOut",
                },
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Light Effect */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            opacity: 0.2,
            background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(13,110,253,0.3) 0%, transparent 70%)`,
            transition: "background 0.2s ease-out",
          }}
        ></div>
      </div>

      {/* Page Content */}
      <Navbar />
      <main className="position-relative" style={{ zIndex: 10 }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
       
      </main>
      <Footer />
    </>
  );
};

export default Index;
