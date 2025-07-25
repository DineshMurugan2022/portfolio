import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="about-section py-5 position-relative overflow-hidden">
      <div className="container">
        <h2 className="text-center mb-5">About Me</h2>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 mb-4">
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
                  <i className="shake-vertical"></i>
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div className="about-glass-card p-4 w-100" style={{ maxWidth: 370 }}>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
