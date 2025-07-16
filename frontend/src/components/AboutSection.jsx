import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="about-section py-5 position-relative overflow-hidden">
      <div className="container">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="row align-items-center justify-content-center">
          <motion.div
            className="col-md-6 mb-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="about-glass-card p-4 mb-4">
            <p className="fs-5 mb-3">
  Hello! I'm Dinesh, a passionate full-stack web developer with a strong foundation in both front-end and back-end technologies. I specialize in building responsive, user-friendly web applications using the MERN stack—MongoDB, Express.js, React, and Node.js. With a keen eye for design and a problem-solving mindset, I enjoy crafting elegant digital experiences that are not only functional but also intuitive. My journey in tech has been fueled by continuous learning and a deep commitment to writing clean, efficient code. I thrive in collaborative environments and am always eager to take on new challenges that push the boundaries of innovation and deliver real value to users.
</p>

              <div className="pt-3">
              <a
  href="/resume.pdf"
  download
  className="btn btn-primary d-inline-flex align-items-center about-cv-btn"
>
  <i className="bi bi-file-earmark-text me-2"></i>
  Download CV
</a>

              </div>
            </div>
          </motion.div>
          <motion.div
            className="col-md-6 d-flex justify-content-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="about-glass-card p-4 w-100"
              style={{ maxWidth: 370 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
            >
              <div className="mb-4">
                <h3 className="h5"> Secondary Education</h3>
                <p className="mb-1 fw-semibold">2017 - 2018</p>
                <p className="text-muted">St joseph's higher secondary school</p>
              </div>
              <div className="mb-4">
                <h3 className="h5">Higher Secondary</h3>
                <p className="mb-1 fw-semibold">2018 - 2020</p>
                <p className="text-muted">St joseph's higher secondary school</p>
              </div>
              <div className="mb-4">
                <h3 className="h5">Engineering</h3>
                <p className="mb-1 fw-semibold">Mechanical Engineering</p>
                <p className="text-muted">University College of Engineering, Arni</p>
              </div>
              <div>
                <h3 className="h5">Experience</h3>
                <p className="mb-1 fw-semibold">Web Designer Course</p>
                <p className="text-muted">
                  MagicBus India Foundation, Chennai • November 2024 - January 2025
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
