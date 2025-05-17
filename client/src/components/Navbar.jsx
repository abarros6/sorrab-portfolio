import { useState, useEffect} from "react";
import resume from "../assets/resume.pdf"

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

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
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
              <li><a target="_blank" href={resume} rel="noreferrer noopener">Resume</a></li>
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
        <a href="/assets/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">Resume</a>
      </div>
    </div>
  );
};


export default Navbar;