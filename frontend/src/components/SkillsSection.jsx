import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML5", level: 5 },
      { name: "CSS3", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "ReactJS", level: 4 },
      { name: "Bootstrap", level: 4 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express.js", level: 4 },
      { name: "MongoDB", level: 4 },
      { name: "MySQL", level: 3 },
      { name: "REST APIs", level: 4 },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 4 },
      { name: "GitHub", level: 4 },
      { name: "Vercel", level: 3 },
      { name: "Postman", level: 4 },
      { name: "VS Code", level: 5 },
    ],
  },
];

const SkillBar = ({ level }) => {
  return (
    <div className="progress skill-progress">
      <motion.div
        className="progress-bar skill-gradient"
        role="progressbar"
        initial={{ width: 0 }}
        whileInView={{ width: `${(level / 5) * 100}%` }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={5}
        viewport={{ once: true }}
      />
    </div>
  );
};

const softSkills = [
  "Problem-Solving Skills",
  "Collaboration and Teamwork",
  "Learning and Development",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section py-5 position-relative overflow-hidden">
      <div className="container">
        <motion.h2
          className="mb-5 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.13)" }}
            >
              <div className="card shadow-sm border rounded h-100 p-4 hover-shadow skill-card">
                <h3 className="card-title text-primary mb-4">{category.name}</h3>
                <div className="d-grid gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="d-flex justify-content-between mb-1">
                        <span className="fw-medium">{skill.name}</span>
                        <span className="text-muted small">
                          {Math.round((skill.level / 5) * 100)}%
                        </span>
                      </div>
                      <SkillBar level={skill.level} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: skillCategories.length * 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4">Soft Skills</h3>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                className="badge soft-skill-badge px-3 py-2 rounded-pill fs-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
