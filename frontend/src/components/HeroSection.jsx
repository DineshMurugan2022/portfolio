import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import dineshImg from "../assets/dinesh.jpeg"; // ✅ Ensure this path is correct

const roles = [
  "Web Developer",
  "Frontend Developer",
  "React Developer",
  "Full Stack Developer(MERN)",
];

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

const HeroSection = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    });

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
  }, [controls]);

  return (
    <section
      id="home"
      className="hero-section position-relative overflow-hidden"
      style={{ paddingTop: "100px" }} // Adjust this value to match your navbar height
    >
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6 text-center  mb-5 mb-md-0">
            <motion.p
              className="text-primary fw-semibold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              className="display-4 fw-bold text-gradient mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Dinesh. M
            </motion.h1>
            <motion.p
              className="lead text-muted mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="me-2">A passionate</span>
              <span className="text-primary fw-bold">
                <Typewriter words={roles} />
              </span>
            </motion.p>
            <motion.div
              className="d-flex flex-column flex-sm-row gap-3 hero-btn-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#projects" className="btn btn-primary btn-lg">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-primary btn-lg">
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Profile Picture */}
          <div className="col-md-6 d-flex justify-content-center">
            <div ref={containerRef} className="transition-transform">
              <motion.div
                className="position-relative rounded-circle overflow-hidden shadow border border-3 border-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                style={{
                  width: "300px",
                  height: "300px",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                }}
              >
                <img
                  src={dineshImg}
                  alt="Portrait of Dinesh, Web Developer"
                  style={{ objectFit: "cover" }}
                  className="w-100 h-100 rounded-circle"
                />
              </motion.div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default HeroSection;
