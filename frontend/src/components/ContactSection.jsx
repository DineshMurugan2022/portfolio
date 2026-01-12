import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with your actual EmailJS credentials
    // You can get them from https://dashboard.emailjs.com/admin
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        setToastMessage("Message sent! Thank you for your message. I'll get back to you soon!");
        setIsError(false);
        setShowToast(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setShowToast(false), 5000);
      }, (error) => {
        console.error(error.text);
        setToastMessage("Failed to send message. Please try again later or email me directly.");
        setIsError(true);
        setShowToast(true);

        setTimeout(() => setShowToast(false), 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-section py-5 position-relative overflow-hidden">
      <div className="container">
        <h2 className="text-center mb-5" style={{ color: '#e7f2ef' }}>Contact Me</h2>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="contact-glass-card p-4 h-100">
              <h3 className="h4 mb-3" style={{ color: '#e7f2ef' }}>Get In Touch</h3>
              <p className="mb-4" style={{ color: '#a1c2bd' }}>
                Have a project in mind or want to work together? Fill out the form and I'll get back to you as soon as possible.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex mb-4">
                  <i className="bi bi-envelope-fill fs-4 text-primary me-3" style={{ color: '#a1c2bd' }}></i>
                  <div>
                    <h5 className="mb-1" style={{ color: '#e7f2ef' }}>Email</h5>
                    <a href="mailto:2002dineshmurugan@gmail.com" className="text-decoration-none" style={{ color: '#a1c2bd' }}>2002dineshmurugan@gmail.com</a>
                  </div>
                </li>
                <li className="d-flex mb-4">
                  <i className="bi bi-telephone-fill fs-4 text-primary me-3" style={{ color: '#a1c2bd' }}></i>
                  <div>
                    <h5 className="mb-1" style={{ color: '#e7f2ef' }}>Phone</h5>
                    <a href="tel:+919843240703" className="text-decoration-none" style={{ color: '#a1c2bd' }}>+91 9843240703</a>
                  </div>
                </li>
                <li className="d-flex">
                  <i className="bi bi-geo-alt-fill fs-4 text-primary me-3" style={{ color: '#a1c2bd' }}></i>
                  <div>
                    <h5 className="mb-1" style={{ color: '#e7f2ef' }}>Location</h5>
                    <p className="mb-0" style={{ color: '#a1c2bd' }}> T Nagar,Chennai, India</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-glass-card p-4 rounded shadow-sm border position-relative">
              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label htmlFor="name" className="form-label" style={{ color: '#e7f2ef' }}>Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    style={{
                      backgroundColor: 'rgba(25, 24, 59, 0.3)',
                      color: '#e7f2ef',
                      borderColor: 'rgba(161, 194, 189, 0.3)'
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label" style={{ color: '#e7f2ef' }}>Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    style={{
                      backgroundColor: 'rgba(25, 24, 59, 0.3)',
                      color: '#e7f2ef',
                      borderColor: 'rgba(161, 194, 189, 0.3)'
                    }}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label" style={{ color: '#e7f2ef' }}>Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  style={{
                    backgroundColor: 'rgba(25, 24, 59, 0.3)',
                    color: '#e7f2ef',
                    borderColor: 'rgba(161, 194, 189, 0.3)'
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label" style={{ color: '#e7f2ef' }}>Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  style={{
                    backgroundColor: 'rgba(25, 24, 59, 0.3)',
                    color: '#e7f2ef',
                    borderColor: 'rgba(161, 194, 189, 0.3)'
                  }}
                />
              </div>
              <button type="submit" className="btn contact-btn w-100" disabled={isSubmitting} style={{
                background: 'linear-gradient(135deg, #19183b 0%, #708993 100%)',
                borderColor: '#19183b',
                color: '#e7f2ef'
              }}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <span className="ripple"></span>
              </button>
              {showToast && (
                <div className={`alert ${isError ? 'alert-danger' : 'alert-success'} mt-3 mb-0`} role="alert" style={{
                  backgroundColor: 'rgba(25, 24, 59, 0.7)',
                  color: isError ? '#ff6b6b' : '#e7f2ef',
                  borderColor: 'rgba(161, 194, 189, 0.3)'
                }}>
                  {toastMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;