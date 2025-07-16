import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // On mount, check localStorage for theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('bg-dark', 'text-light');
    } else {
      setDarkMode(false);
      document.body.classList.remove('bg-dark', 'text-light');
    }
  }, []);

  // Handle scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.classList.remove('bg-dark', 'text-light');
      localStorage.setItem('theme', 'light');
    } else {
      setDarkMode(true);
      document.body.classList.add('bg-dark', 'text-light');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <header
      className={`fixed-top transition-all ${
        scrolled
          ? darkMode
            ? 'bg-dark shadow-sm'
            : 'bg-white shadow-sm'
          : darkMode
          ? 'bg-transparent text-light'
          : 'bg-transparent text-dark'
      }`}
    >
      <div className="container py-3 d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a
          href="#home"
          className={`fs-4 fw-bold text-decoration-none ${
            darkMode ? 'text-light' : 'text-primary'
          }`}
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className={`d-none d-md-flex gap-4 ${darkMode ? 'text-light' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`position-relative fw-medium text-decoration-none px-2 py-1 nav-link ${
                darkMode ? 'text-light' : 'text-dark'
              }`}
              style={{
                transition: 'color 0.3s',
                borderBottom: '2px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottomColor = darkMode ? '#0d6efd' : '#0d6efd';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottomColor = 'transparent';
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Dark Mode Toggle & Mobile Toggle Button */}
        <div className="d-flex align-items-center gap-2">
          {/* Dark Mode Toggle Button */}
          <button
            type="button"
            className={`btn btn-sm ${
              darkMode ? 'btn-light' : 'btn-dark'
            }`}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              // Sun icon for light mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-sun"
                viewBox="0 0 16 16"
              >
                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                <path d="M8 0a.5.5 0 0 1 .5.5v1.09a.5.5 0 1 1-1 0V.5A.5.5 0 0 1 8 0zm5.657 1.343a.5.5 0 1 1 .707.707l-.77.77a.5.5 0 0 1-.707-.707l.77-.77zM16 8a.5.5 0 0 1-.5.5h-1.09a.5.5 0 1 1 0-1H15.5a.5.5 0 0 1 .5.5zm-1.343 5.657a.5.5 0 0 1-.707.707l-.77-.77a.5.5 0 0 1 .707-.707l.77.77zM8 15a.5.5 0 0 1-.5-.5v-1.09a.5.5 0 1 1 1 0v1.09A.5.5 0 0 1 8 15zm-5.657-1.343a.5.5 0 0 1-.707-.707l.77-.77a.5.5 0 1 1 .707.707l-.77.77zM0 8a.5.5 0 0 1 .5-.5h1.09a.5.5 0 1 1 0 1H.5A.5.5 0 0 1 0 8zm1.343-5.657a.5.5 0 0 1 .707-.707l.77.77a.5.5 0 1 1-.707.707l-.77-.77z" />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-moon"
                viewBox="0 0 16 16"
              >
                <path d="M6 0a7 7 0 0 0 7 7 7 7 0 1 1-7-7z" />
              </svg>
            )}
          </button>

          {/* Mobile Toggle Button */}
          <button
            className={`btn btn-outline-primary d-md-none`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-x"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L12 11.293l6.646-6.647a.5.5 0 0 1 .708.708L12.707 12l6.647 6.646a.5.5 0 0 1-.708.708L12 12.707l-6.646 6.647a.5.5 0 0 1-.708-.708L11.293 12 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-list"
              >
                <path
                  fillRule="evenodd"
                  d="M3.5 12a.5.5 0 0 1 0-1h17a.5.5 0 0 1 0 1h-17zm0 5a.5.5 0 0 1 0-1h17a.5.5 0 0 1 0 1h-17zm0-10a.5.5 0 0 1 0-1h17a.5.5 0 0 1 0 1h-17z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className={`shadow d-md-none ${
            darkMode ? 'bg-dark text-light' : 'bg-white text-dark'
          }`}
        >
          <div className="container d-flex flex-column py-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`fw-medium py-2 text-decoration-none ${
                  darkMode ? 'text-light' : 'text-dark'
                }`}
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
