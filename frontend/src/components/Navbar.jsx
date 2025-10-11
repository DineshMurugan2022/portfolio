import React, { useState, useEffect } from 'react';

// Navigation links
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  // Add scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed-top transition-all duration-300 ${
        scrolled 
          ? 'bg-[#19183b] shadow-lg' // dark navy blue from project palette
          : 'bg-transparent'
      }`}
    >
      <div className="container py-3 d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a
          href="#home"
          className={`fs-4 fw-bold text-decoration-none ${
            scrolled ? 'text-[#e7f2ef]' : 'text-[#e7f2ef]'
          }`}
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="d-none d-lg-flex gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`position-relative fw-medium text-decoration-none px-2 py-1 nav-link ${
                scrolled ? 'text-[#e7f2ef]' : 'text-[#e7f2ef]'
              }`}
              style={{
                transition: 'color 0.3s',
                borderBottom: '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottomColor = '#a1c2bd'; // muted teal
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottomColor = 'transparent';
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right-side controls */}
        <div className="d-flex align-items-center gap-2">
          {/* Mobile Menu Toggle */}
          <button
            className={`btn d-lg-none ${
              scrolled 
                ? 'btn-outline-light text-[#e7f2ef] border-[#a1c2bd]' 
                : 'btn-outline-light text-[#e7f2ef] border-[#e7f2ef]'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              // X icon
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L12 11.293l6.646-6.647a.5.5 0 0 1 .708.708L12.707 12l6.647 6.646a.5.5 0 0 1-.708.708L12 12.707l-6.646 6.647a.5.5 0 0 1-.708-.708L11.293 12 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list">
                <path fillRule="evenodd" d="M3.5 12a.5.5 0 0 1 0-1h17a.5.5 0 0 1 0 1h-17zm0 5a.5.5 0 0 1 0-1h17a.5.5 0 0 1 0 1h-17zm0-10a.5.5 0 0 1 0-1h17a.5.5 0 0 1 0 1h-17z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="shadow d-lg-none bg-[#19183b] text-[#e7f2ef]">
          <div className="container d-flex flex-column py-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="fw-medium py-2 text-decoration-none text-[#e7f2ef] hover:text-[#a1c2bd]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;