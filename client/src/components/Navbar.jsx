import { useState, useEffect } from "react";
import Resume from "../assets/Resume.pdf"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Ensure navbar doesn't overlap content
  useEffect(() => {
    // Add padding to the body equal to navbar height
    const navbar = document.getElementById("Navbar");
    if (navbar) {
      const navbarHeight = navbar.offsetHeight;
      document.body.style.paddingTop = `${navbarHeight}px`;
      
      // Also update any section that might be immediately after the navbar
      const hero = document.getElementById("hero");
      if (hero) {
        hero.style.marginTop = `-${navbarHeight}px`;
        hero.style.paddingTop = `${navbarHeight}px`;
      }
    }
    
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const navbar = document.getElementById("Navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsMenuOpen(false);
  };

  return (
    <div id="Navbar" className={`navbar fixed z-50 transition-all duration-300 ${scrolled ? 'bg-base-100 shadow-md' : 'bg-base-100'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
            </svg>
          </label>
          {isMenuOpen && (
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary font-bold">
              <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
              <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              <li><a href={Resume} target="_blank" rel="noreferrer noopener">Resume</a></li>
            </ul>
          )}
        </div>
        <a href="#hero" className="btn btn-ghost normal-case text-xl">Anthony Barros</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-primary font-bold">
          <li><button onClick={() => scrollToSection('hero')} className="btn btn-ghost">Home</button></li>
          <li><button onClick={() => scrollToSection('about')} className="btn btn-ghost">About</button></li>
          <li><button onClick={() => scrollToSection('skills')} className="btn btn-ghost">Skills</button></li>
          <li><button onClick={() => scrollToSection('experience')} className="btn btn-ghost">Experience</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="btn btn-ghost">Contact</button></li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <a href={Resume} target="_blank" rel="noreferrer noopener" className="btn btn-primary">Resume</a>
      </div>
    </div>
  );
};

export default Navbar;