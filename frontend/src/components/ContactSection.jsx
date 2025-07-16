import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setShowToast(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setShowToast(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section py-5 position-relative overflow-hidden">
      <div className="container">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <div className="row align-items-center justify-content-center">
          <motion.div
            className="col-lg-6 mb-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="contact-glass-card p-4 h-100">
              <h3 className="h4 mb-3">Get In Touch</h3>
              <p className="text-muted mb-4">
                Have a project in mind or want to work together? Fill out the form and I'll get back to you as soon as possible.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex mb-4">
                  <i className="bi bi-envelope-fill fs-4 text-primary me-3"></i>
                  <div>
                    <h5 className="mb-1">Email</h5>
                    <a href="mailto:2002dineshmurugan@gmail.com" className="text-decoration-none text-muted">2002dineshmurugan@gmail.com</a>
                  </div>
                </li>
                <li className="d-flex mb-4">
                  <i className="bi bi-telephone-fill fs-4 text-primary me-3"></i>
                  <div>
                    <h5 className="mb-1">Phone</h5>
                    <a href="tel:+919843240703" className="text-decoration-none text-muted">+91 9843240703</a>
                  </div>
                </li>
                <li className="d-flex">
                  <i className="bi bi-geo-alt-fill fs-4 text-primary me-3"></i>
                  <div>
                    <h5 className="mb-1">Location</h5>
                    <p className="text-muted mb-0"> T Nagar,Chennai, India</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="contact-glass-card bg-white p-4 rounded shadow-sm border position-relative">
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 contact-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <span className="ripple"></span>
              </button>
              {showToast && (
                <div className="alert alert-success mt-3 mb-0" role="alert">
                  Message sent! Thank you for your message. I'll get back to you soon!
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
