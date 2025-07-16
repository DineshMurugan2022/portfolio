import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react"; // ✅ Icon imports

const projects = [
  {
    title: "MERN E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with MongoDB, Express, React, and Node.js with user authentication and payment integration.",
    image: "https://placehold.co/600x400/e9ecef/495057?text=MERN+E-commerce",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A Kanban-style task management application with drag-and-drop functionality and user authentication built with the MERN stack.",
    image: "https://placehold.co/600x400/e9ecef/495057?text=Task+Management",
    tags: ["React", "Node.js", "MongoDB", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "REST API for Blog Platform",
    description:
      "A RESTful API for a blog platform with user authentication, post creation, and comment functionality.",
    image: "https://placehold.co/600x400/e9ecef/495057?text=REST+API",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills, built with modern web technologies.",
    image: "https://placehold.co/600x400/e9ecef/495057?text=Portfolio+Website",
    tags: ["React", "bootstrap", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 12px 36px 0 rgba(31, 38, 135, 0.18)",
        transition: { duration: 0.3 },
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1,
      }}
      className="project-card card h-100 shadow-sm border rounded overflow-hidden position-relative"
      style={{ cursor: "pointer" }}
    >
      <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
        <motion.img
          src={project.image}
          alt={project.title}
          className="card-img-top h-100 object-fit-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold mb-2">{project.title}</h5>
        <p className="card-text text-muted flex-grow-1 mb-3">{project.description}</p>
        <div className="mb-3">
          {project.tags.map((tag, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * idx }}
              className="badge project-tag me-2 mb-1"
              whileHover={{ scale: 1.12 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="d-flex gap-2">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm d-flex align-items-center gap-1 project-btn"
              whileHover={{ scale: 1.08 }}
            >
              <ExternalLink size={16} /> Live Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1 project-btn"
              whileHover={{ scale: 1.08 }}
            >
              <Github size={16} /> Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section py-5 bg-light position-relative overflow-hidden">
      <div className="container">
        <motion.h2
          className="mb-4 text-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <div className="row g-4">
          {projects.map((project, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-6">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
