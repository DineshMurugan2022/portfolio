import React, { useEffect, useRef, useState } from "react";
import dineshImg from "../assets/dinesh.jpeg"; // ✅ Make sure this path is correct
import ProfileCard from "../ProfileCard"; // ✅ Ensure ProfileCard is created and styled

// Roles for typewriter animation
const roles = [
  "Web Developer",
  "Frontend Developer",
  "React Developer",
  "Full Stack Developer (MERN)",
];

// Typewriter Component
const Typewriter = ({ words, speed = 120, pause = 1200 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

// Hero Section
const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      containerRef.current.style.transform = `perspective(1000px) rotateY(${
        x * 5
      }deg) rotateX(${-y * 5}deg)`;
    };

    const handleMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.transform =
          "perspective(1000px) rotateY(0deg) rotateX(0deg)";
        containerRef.current.style.transition = "transform 0.5s ease-out";
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="hero-section position-relative overflow-hidden"
      style={{ 
        paddingTop: "100px", 
        paddingBottom: "80px",
        background: "transparent"
      }}
    >
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
            <p className="text-primary fw-semibold mb-2" style={{ color: '#a1c2bd' }}>Hello, I'm</p>
            <h1
              className="display-4 fw-bold mb-3"
              style={{
                background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Dinesh. M
            </h1>
            <p className="lead text-muted mb-3" style={{ color: '#a1c2bd' }}>
              <span className="me-2">A passionate</span>
              <span className="text-primary fw-bold" style={{ color: '#e7f2ef' }}>
                <Typewriter words={roles} />
              </span>
            </p>

            {/* Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4 justify-content-center justify-content-lg-start">
              <a href="#projects" className="btn btn-primary btn-lg" style={{ 
                backgroundColor: '#19183b', 
                borderColor: '#19183b',
                color: '#e7f2ef'
              }}>
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-primary btn-lg" style={{ 
                borderColor: '#19183b',
                color: '#e7f2ef'
              }}>
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Image Section */}
          <div
            className="col-lg-6 d-flex justify-content-center justify-content-lg-end"
            ref={containerRef}
          >
            <ProfileCard
              avatarUrl={dineshImg}
              name="Dinesh. M"
              title="FullStack Developer"
              handle="dineshmurugan"
              status="Online"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;