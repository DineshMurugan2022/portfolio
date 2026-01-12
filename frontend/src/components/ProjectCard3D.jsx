import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Loader2 } from "lucide-react";

// The CSS is imported in the parent or globally.

const ProjectCard3D = ({ project, index }) => {
  const [isLoading, setIsLoading] = useState(true);
  const cardRef = useRef(null);

  // Default to true if not specified
  const canEmbed = project.embeddable !== false;

  // Stagger animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1, // Stagger effect
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card-wrapper"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="card-inner is-live">
        {/* Preview Section - Always Live */}
        <div className="card-image-container">
          {canEmbed ? (
            <div className="iframe-container">
              {isLoading && (
                <div className="iframe-loader">
                  <Loader2 className="animate-spin" size={32} color="#3b82f6" />
                </div>
              )}
              <iframe
                src={project.live}
                title={`Live preview of ${project.title}`}
                className="live-iframe"
                onLoad={() => setIsLoading(false)}
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              />
              <div className="live-badge">
                <span className="pulsing-dot"></span> Live Preview
              </div>
            </div>
          ) : (
            <div className="iframe-container" style={{ position: 'relative' }}>
              <img
                src={project.image}
                alt={project.title}
                className="card-image"
                style={{ filter: 'blur(2px) brightness(0.4)' }}
              />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                width: '100%',
                padding: '1rem'
              }}>
                <p style={{ color: '#fff', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  Preview not available due to security settings
                </p>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-action btn-preview"
                  style={{ display: 'inline-flex', padding: '0.5rem 1rem', width: 'auto' }}
                >
                  <ExternalLink size={16} style={{ marginRight: '6px' }} />
                  Open in New Tab
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="card-content">
          <div className="card-tags">
            {project.tech.map((tech, i) => (
              <span key={i} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <h3 className="card-title">{project.title}</h3>
          <p className="card-desc">{project.description}</p>

          <div className="card-actions">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action btn-preview"
              title="Open Live Site"
            >
              <ExternalLink size={18} />
              Open Site
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action btn-github"
              title="View Source Code"
            >
              <FaGithub size={18} />
              Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard3D;
