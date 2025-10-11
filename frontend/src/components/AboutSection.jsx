import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import "./AboutMeConnectors.css";

gsap.registerPlugin(ScrollTrigger);

const educationExperience = [
  {
    type: "education",
    title: "Secondary Education",
    period: "2017 - 2018",
    details: "St Joseph's Higher Secondary School",
    icon: <FaGraduationCap />,
  },
  {
    type: "education",
    title: "Higher Secondary",
    period: "2018 - 2020",
    details: "St Joseph's Higher Secondary School",
    icon: <FaGraduationCap />,
  },
  {
    type: "education",
    title: "Engineering - Mechanical",
    period: "",
    details: "University College of Engineering, Arni",
    icon: <FaGraduationCap />,
  },
  {
    type: "experience",
    title: "Web Designer Course",
    period: "Nov 2024 - Jan 2025",
    details: "MagicBus India Foundation, Chennai",
    icon: <FaBriefcase />,
  },
    {
    type: "experience",
    title: "MERN stack developer",
    period: "2025 - 2025(8 months)",
    details: "B&Y Technologies ",
    icon: <FaBriefcase />,
  },
];

export default function AboutMeConnectors() {
  const timelineRef = useRef([]);

  useEffect(() => {
    // Animate timeline line scaling
    timelineRef.current.forEach((el) => {
      const icon = el.querySelector(".timeline-icon");
      const connector = el.querySelector(".timeline-connector");

      // Animate item content
      gsap.fromTo(
        el,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );

      // Animate icon sliding
      gsap.fromTo(
        icon,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );

      // Animate connector line from icon to timeline
      gsap.fromTo(
        connector,
        { width: 0 },
        {
          width: 30,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="about" className="about-connectors-section">
      <div className="intro-panel">
        <h1>
          Hello, I'm <span className="highlight">Dinesh</span>
        </h1>
        <p>
          I'm a passionate full-stack web developer with a strong foundation in both front-end and back-end technologies. I specialize in building responsive, user-friendly web applications using the MERN stack—MongoDB, Express.js, React, and Node.js. I thrive in collaborative environments and enjoy tackling new challenges.
        </p>
      </div>

      <div className="timeline-panel">
        <div className="timeline-line"></div>

        {educationExperience.map((item, idx) => (
          <div
            key={idx}
            className={`timeline-item ${item.type}`}
            ref={(el) => (timelineRef.current[idx] = el)}
          >
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-connector"></div>
            <div className="timeline-content">
              <h4>{item.title}</h4>
              {item.period && <span className="timeline-period">{item.period}</span>}
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}