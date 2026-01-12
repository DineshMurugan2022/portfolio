import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  SiReact, SiJavascript, SiNextdotjs, SiTypescript, SiGithub, SiVercel,
  SiCss3, SiBootstrap, SiHtml5, SiTailwindcss, SiPython, SiMongodb,
  SiNodedotjs, SiExpress, SiGit, SiPostman, SiFigma, SiVite, SiDocker, SiRedux
} from "react-icons/si";
import { Database, Cloud, Code2, Globe, Server, Smartphone, Laptop } from "lucide-react";
import "./SkillsSection.css";

// All skills data in one array
const SKILLS = [
  { icon: <SiReact color="#61DAFB" />, name: "React" },
  { icon: <SiNextdotjs color="#ffffff" />, name: "Next.js" },
  { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
  { icon: <SiHtml5 color="#E34F26" />, name: "HTML5" },
  { icon: <SiCss3 color="#1572B6" />, name: "CSS3" },
  { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind" },
  { icon: <SiBootstrap color="#7952B3" />, name: "Bootstrap" },
  { icon: <SiNodedotjs color="#339933" />, name: "Node.js" },
  { icon: <SiExpress color="#ffffff" />, name: "Express" },
  { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
  { icon: <SiPython color="#3776AB" />, name: "Python" },
  { icon: <SiGit color="#F05032" />, name: "Git" },
  { icon: <SiGithub color="#ffffff" />, name: "GitHub" },
  { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
  { icon: <SiVercel color="#ffffff" />, name: "Vercel" },
  { icon: <SiFigma color="#F24E1E" />, name: "Figma" },
  { icon: <SiVite color="#646CFF" />, name: "Vite" },
  { icon: <SiDocker color="#2496ED" />, name: "Docker" },
  { icon: <SiRedux color="#764ABC" />, name: "Redux" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <span className="section-badge">Tech Stack</span>
          <h2 className="section-title">My Skill Universe</h2>
          <p className="section-description">
            Rotating through the technologies that power my development journey.
          </p>
        </div>

        <div className="sphere-wrapper">
          <TagCloud skills={SKILLS} />
        </div>
      </div>
    </section>
  );
};

// 3D Tag Cloud Component
const TagCloud = ({ skills }) => {
  const containerRef = useRef(null);

  // Configuration
  const radius = 220; // Radius of the sphere
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  // Calculate positions on a sphere (Fibonacci Sphere algorithm)
  const tags = useMemo(() => {
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    return skills.map((skill, i) => {
      const y = 1 - (i / (skills.length - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // Radius at y

      const theta = phi * i; // Golden angle increment

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      return {
        ...skill,
        position: {
          x: x * radius,
          y: y * radius,
          z: z * radius
        }
      };
    });
  }, [skills, radius]);

  // Animation Loop
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setRotation(prev => ({
        x: prev.x + 0.002,
        y: prev.y + 0.003,
        z: prev.z
      }));
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="tag-cloud-scene" ref={containerRef}>
      <div
        className="tag-cloud-sphere"
        style={{
          transform: `rotateX(${rotation.x}rad) rotateY(${rotation.y}rad)`
        }}
      >
        {tags.map((tag, i) => (
          <Tag key={i} data={tag} />
        ))}
      </div>
    </div>
  );
};

// Individual 3D Tag
const Tag = ({ data }) => {
  return (
    <div
      className="tag-item"
      style={{
        transform: `translate3d(${data.position.x}px, ${data.position.y}px, ${data.position.z}px)`
      }}
    >
      <div className="tag-content">
        <div className="tag-icon">{data.icon}</div>
        <span className="tag-name">{data.name}</span>
      </div>
    </div>
  );
};

export default SkillsSection;
