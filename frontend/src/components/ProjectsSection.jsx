import { ExternalLink, Github } from "lucide-react";
 // Optional custom styles

const projects = [
  {
    title: "MERN E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with MongoDB, Express, React, and Node.js with user authentication and payment integration.",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZWM5ZWNlZiIvPgo8dGV4dCB4PSIzMDAiIHk9IjIwMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNDk1MDU3IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TUVSTiBFLWNvbW1lcmNlPC90ZXh0Pgo8L3N2Zz4K",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A Kanban-style task management application with drag-and-drop functionality and user authentication built with the MERN stack.",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZWM5ZWNlZiIvPgo8dGV4dCB4PSIzMDAiIHk9IjIwMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNDk1MDU3IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VGFzayBNYW5hZ2VtZW50PC90ZXh0Pgo8L3N2Zz4K",
    tags: ["React", "Node.js", "MongoDB", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "REST API for Blog Platform",
    description:
      "A RESTful API for a blog platform with user authentication, post creation, and comment functionality.",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZWM5ZWNlZiIvPgo8dGV4dCB4PSIzMDAiIHk9IjIwMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNDk1MDU3IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UkVTVCBBUEk8L3RleHQ+Cjwvc3ZnPgo=",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills, built with modern web technologies.",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZWM5ZWNlZiIvPgo8dGV4dCB4PSIzMDAiIHk9IjIwMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjNDk1MDU3IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UG9ydGZvbGlvIFdlYnNpdGU8L3RleHQ+Cjwvc3ZnPgo=",
    tags: ["React", "Bootstrap", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card card h-100 shadow-sm border rounded overflow-hidden position-relative" style={{ color: '#222', background: 'rgba(255,255,255,0.92)' }}>
      <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
        <img
          src={project.image}
          alt={project.title}
          className="card-img-top h-100 object-fit-cover"
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold mb-2" style={{ color: '#1a237e' }}>{project.title}</h5>
        <p className="card-text flex-grow-1 mb-3" style={{ color: '#333' }}>{project.description}</p>
        <div className="mb-3">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="badge project-tag me-2 mb-1" style={{ background: '#e3f2fd', color: '#1976d2' }}>
              {tag}
            </span>
          ))}
        </div>
        <div className="d-flex gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm d-flex align-items-center gap-1 project-btn"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1 project-btn"
            >
              <Github size={16} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section position-relative" style={{ background: 'transparent', padding: 0 }}>
      <div className="container">
        <h2 className="mb-4 text-center" style={{ color: '#222' }}>My Projects</h2>
        <div className="row g-4" style={{ margin: 0 }}>
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
