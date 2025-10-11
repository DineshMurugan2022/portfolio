import React from 'react';
import LogoLoop from './LogoLoop';
import { SiReact, SiJavascript, SiNextdotjs, SiTypescript, SiGithub, SiVercel,  SiCss3, SiBootstrap,  SiHtml5, SiTailwindcss, SiPython, SiMongodb, SiNodedotjs, SiExpress } from 'react-icons/si';


const SkillsSection = () => {
  const techLogos = [
    { node: <SiReact />, title: "React" },
    { node: <SiNextdotjs />, title: "Next.js" },
    { node: <SiNodedotjs />, title: "Node.js" },
    { node: <SiExpress />, title: "Express" },
    { node: <SiPython />, title: "Python" },
    { node: <SiMongodb />, title: "MongoDB" },
    { node: <SiTypescript />, title: "TypeScript" },
    { node: <SiBootstrap />, title: "Bootstrap" },
    { node: <SiHtml5 />, title: "HTML" },
    { node: <SiTailwindcss />, title: "Tailwind CSS" },
     { node: <SiJavascript />, title: "JavaScript" },
     { node: <SiCss3 />, title: "CSS" },
     { node: <SiGithub />, title: "GitHub" },
     { node: <SiVercel />, title: "Vercel" },


  ];

  return (
    <section id="skills" className="skills-wrapper">
      <div className="container1">
        <LogoLoop
          logos={techLogos}
          speed={80}
          logoHeight={78}
          gap={80}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#010c15"
          ariaLabel="Technology skills"
        />
      </div>
    </section>
  );
};

export default SkillsSection;