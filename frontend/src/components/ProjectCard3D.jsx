import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProjectCart.css";

gsap.registerPlugin(ScrollTrigger);

// ---------- PROJECT CARD COMPONENT ----------
const ProjectCard3D = ({ project }) => {
  // Extract properties from the project object with default values to prevent errors
  const { title, description, tech = [], github, live, image } = project || {};
  const cardRef = useRef(null);

  useEffect(() => {
    // Only run animation if project data exists
    if (!project) return;
    
    gsap.fromTo(
      cardRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [project]);

  // Don't render if project data is missing
  if (!project) return null;

  return (
    <motion.div
      ref={cardRef}
      className="project-card card border-0 shadow-lg rounded-4 overflow-hidden bg-dark text-light h-100"
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 260 }}
    >
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="card-body text-center p-4 d-flex flex-column">
        <h3 className="card-title fw-bold mb-3">{title}</h3>
        <p className="card-text text-secondary mb-4 flex-grow-1">{description}</p>
        <div className="tech-stack mb-4">
          {tech.map((t, index) => (
            <span key={index} className="badge bg-secondary text-light mx-1 mb-1">
              {t}
            </span>
          ))}
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-center gap-2 gap-md-3 mt-auto">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light d-flex align-items-center justify-content-center gap-2"
          >
            <FaGithub /> <span className="d-none d-sm-inline">GitHub</span>
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
          >
            <FaExternalLinkAlt /> <span className="d-none d-sm-inline">Live</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard3D;