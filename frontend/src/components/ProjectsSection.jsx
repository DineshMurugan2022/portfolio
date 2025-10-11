import React from 'react';
import ProjectCard3D from './ProjectCard3D';
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";
import ecartImage from '../assets/ecart.png';
import gymimage from '../assets/gym.png';
import portfolioimage from '../assets/portfolio.png'
import chatbotimage from '../assets/chatbot.PNG'
import crmimage from '../assets/crm.PNG'
import paymentimage from '../assets/payment.PNG'

const projects = [
  {
    title: "E-commerce site with Admin panel",
    description: "Full-featured e-commerce platform with product catalog, shopping cart functionality, and user-friendly interface for online shopping.",
    image: ecartImage,
    tech: ["React", "JavaScript", "CSS", "E-commerce", "UI/UX"],
    github: "https://github.com/DineshMurugan2022",
    live: "https://cart-crafts-creator.lovable.app",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    category: "E-commerce"
  },
  {
    title: "Gym Management System",
    description: "Comprehensive gym management application with admin and user portals for managing memberships, schedules, and fitness tracking.",
    image: gymimage,
    tech: ["React", "Node.js", "MongoDB", "Express", "Authentication"],
    github: "https://github.com/DineshMurugan2022",
    live: "https://gymsite-2nfa.vercel.app/",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    category: "Management"
  },
  {
    title: "AI Chatbot Application",
    description: "Interactive chatbot powered by Gemini API, providing intelligent responses and conversation capabilities for enhanced user engagement.",
    image: chatbotimage,
    tech: ["React", "Gemini API", "JavaScript", "AI Integration", "Chat UI"],
    github: "https://github.com/DineshMurugan2022",
    live: "http://chatbot-cyan-iota.vercel.app",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    category: "AI/ML"
  },
  {
    title: "CRM Customer Relationship Management",
    description: "Secure login and signup application with JWT token-based authentication, user session management, and protected routes (Use username: admin and password: admin123456789).",
    image: crmimage,
    tech: ["React", "Node.js", "JWT", "Express", "Authentication"],
    github: "https://github.com/DineshMurugan2022",
    live: "http://nothing-nine-neon.vercel.app",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    category: "Business"
  },
  {
    title: "Personal Portfolio Website",
    description: "Responsive portfolio showcasing web development skills, projects, and experience with modern design and smooth animations.",
    image:portfolioimage ,
    tech: ["React", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
    github: "https://github.com/DineshMurugan2022",
    live: "https://portfolio-seven-iota-q49tq1tb5z.vercel.app/",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    category: "Portfolio"
  },
  {
    title: "Payment Gateway Integration",
    description: "E-commerce payment system integrated with Razorpay API for secure online transactions and payment processing.",
    image: paymentimage,
    tech: ["React", "Node.js", "Razorpay API", "Payment Gateway", "Express"],
    github: "https://github.com/DineshMurugan2022",
    live: "https://payment-liart-zeta.vercel.app/",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    category: "Fintech"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-5 position-relative" style={{ background: 'transparent', minHeight: '100vh' }}>
      {/* Enhanced Background decorations */}
      <div 
        className="position-absolute"
        style={{
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'linear-gradient(135deg, rgba(25, 24, 59, 0.1), rgba(161, 194, 189, 0.1))', // Changed to project palette
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <div 
        className="position-absolute"
        style={{
          top: '60%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, rgba(112, 137, 147, 0.1), rgba(25, 24, 59, 0.1))', // Changed to project palette
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0,
          animation: 'float 8s ease-in-out infinite reverse'
        }}
      />
      
      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Enhanced Header */}
        <div className="text-center mb-5 pb-4">
          <div className="mb-3">
            <span 
              className="badge rounded-pill px-4 py-2 mb-3"
              style={{
                background: 'linear-gradient(135deg, #19183b 0%, #708993 100%)', // Changed to project palette
                color: '#e7f2ef', // Changed to light mint
                fontSize: '0.9rem',
                fontWeight: '500',
                letterSpacing: '0.5px'
              }}
            >
              ✨ Featured Work
            </span>
          </div>
          <h2 
            className="display-4 fw-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #19183b 0%, #708993 50%, #a1c2bd 100%)', // Changed to project palette
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-1px'
            }}
          >
            My Projects
          </h2>
          <p 
            className="lead mx-auto"
            style={{ 
              maxWidth: '600px', 
              lineHeight: '1.8',
              fontSize: '1.1rem',
              color: '#a1c2bd' // Changed to muted teal
            }}
          >
            Explore my portfolio of innovative web applications, showcasing modern technologies 
            and creative problem-solving in full-stack development.
          </p>
        </div>

        {/* Projects Grid using ProjectCard3D */}
        <div className="row g-4 mb-5">
          {projects.map((project, index) => (
            <div key={project.title} className="col-12 col-sm-6 col-lg-4">
              <ProjectCard3D project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Enhanced Call-to-Action */}
        <div className="text-center">
          <div className="mb-4">
            <h3 className="h4 fw-bold mb-3" style={{ color: '#e7f2ef' }}> {/* Changed to light mint */}
              Interested in working together?
            </h3>
            <p className="mb-4" style={{ color: '#a1c2bd' }}> {/* Changed to muted teal */}
              Check out more of my work on GitHub or get in touch to discuss your next project.
            </p>
          </div>
          
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
            <Button 
              size="lg"
              variant="outline"
              className="cta-button"
              asChild
              style={{
                border: '2px solid #19183b', // Changed to dark navy blue
                borderRadius: '15px',
                padding: '12px 30px',
                fontWeight: '600',
                fontSize: '1rem',
                background: 'transparent',
                color: '#e7f2ef', // Changed to light mint
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #19183b 0%, #708993 100%)'; // Changed to project palette
                e.currentTarget.style.color = '#e7f2ef'; // Changed to light mint
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(25, 24, 59, 0.4)'; // Changed to dark navy blue
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#e7f2ef'; // Changed to light mint
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <a 
                href="https://github.com/DineshMurugan2022" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="d-flex align-items-center justify-content-center text-decoration-none"
                style={{ color: 'inherit' }}
              >
                <Github size={20} className="me-2" />
                View All Projects
              </a>
            </Button>
            
            <Button 
              size="lg"
              className="cta-button-primary"
              asChild
              style={{
                background: 'linear-gradient(135deg, #19183b 0%, #708993 100%)', // Changed to project palette
                border: 'none',
                borderRadius: '15px',
                padding: '12px 30px',
                fontWeight: '600',
                fontSize: '1rem',
                color: '#e7f2ef', // Changed to light mint
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #708993 0%, #19183b 100%)'; // Changed to project palette
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(112, 137, 147, 0.4)'; // Changed to muted blue-gray
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #19183b 0%, #708993 100%)'; // Changed to project palette
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <a 
                href="#contact" 
                className="d-flex align-items-center justify-content-center text-decoration-none"
                style={{ color: '#e7f2ef' }} // Changed to light mint
              >
                <ExternalLink size={20} className="me-2" />
                Let's Connect
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .project-card {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .tech-badge {
          animation: fadeInUp 0.4s ease-out forwards;
          opacity: 0;
        }
        
        .btn-icon {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        /* Responsive adjustments for smaller screens */
        @media (max-width: 576px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .display-4 {
            font-size: 2rem;
          }
          
          .lead {
            font-size: 1rem;
          }
          
          .col-12 {
            margin-bottom: 1.5rem;
          }
        }
        
        /* Responsive adjustments for tablets */
        @media (min-width: 576px) and (max-width: 768px) {
          .col-sm-6 {
            margin-bottom: 1.5rem;
          }
        }
        
        /* Responsive adjustments for large screens */
        @media (min-width: 1200px) {
          .display-4 {
            font-size: 3rem;
          }
          
          .lead {
            font-size: 1.25rem;
          }
        }
        
        /* Responsive adjustments for extra large screens and TVs */
        @media (min-width: 1800px) {
          .display-4 {
            font-size: 3.5rem;
          }
          
          .lead {
            font-size: 1.5rem;
            max-width: 800px;
          }
          
          .h4 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;