import { useState, useEffect } from "react";
import picOfMe from '../assets/picOfMe.jpeg'

const Hero = () => {
  const [theme, setTheme] = useState("night");
  const [secretCode, setSecretCode] = useState("");
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const validThemes = [
    "lemonade", "nord", "night", "forest", "chess", 
    "light", "dark", "business", "winter", "autumn",
    "mytheme"
  ];
  
  // Print valid themes to console on component mount
  useEffect(() => {
    console.log("🎮 Secret theme codes:", validThemes.join(", "));
    console.log("Try entering these in the secret code input!");
  }, []);
  
  // Theme effect
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  // Handle secret code
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCheatCode();
    }
  };

  const handleCheatCode = () => {
    if (validThemes.includes(secretCode.toLowerCase())) {
      setTheme(secretCode.toLowerCase());
      setShowEasterEgg(true);
      console.log(`🎉 Theme changed to: ${secretCode.toLowerCase()}`);
      setTimeout(() => setShowEasterEgg(false), 2000);
    } else if (secretCode.toLowerCase() === "themes") {
      // Special code to show all themes
      console.log("📋 Available themes:", validThemes.join(", "));
      alert(`Available themes: ${validThemes.join(", ")}`);
    }
    setSecretCode("");
  };

  return (
    <div id="hero" className="hero min-h-screen bg-base-200">
      {/* Easter egg notification */}
      {showEasterEgg && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-success">
            <div>
              <span>Easter egg found! Theme changed to {theme}!</span>
            </div>
          </div>
        </div>
      )}
      
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="relative">
            <img 
              src={picOfMe}
              alt="Anthony Barros"
              className="rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover"
            />
          </div>
        </div>
        
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">
            Hi, I'm <span className="text-primary">Anthony Barros</span>
          </h1>
          <p className="py-4 text-lg">
            Software Engineer • M.E.Sc. Student • React Developer
          </p>
          <p className="py-2 opacity-80">
            Building user-friendly applications with modern web technologies.
            Currently pursuing a Master's in Electrical Engineering at Western University.
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
            >
              Get in touch
            </button>
            <a 
              href="https://github.com/abarros6" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0.296c-6.627 0-12 5.372-12 12 0 5.302 3.438 9.8 8.206 11.387 0.6 0.111 0.82-0.26 0.82-0.577 0-0.286-0.011-1.231-0.016-2.234-3.338 0.726-4.043-1.416-4.043-1.416-0.546-1.387-1.333-1.756-1.333-1.756-1.089-0.745 0.082-0.729 0.082-0.729 1.205 0.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492 0.997 0.108-0.775 0.418-1.305 0.762-1.604-2.665-0.305-5.467-1.334-5.467-5.931 0-1.311 0.469-2.381 1.237-3.221-0.124-0.303-0.535-1.524 0.117-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.138 3.006 0.404 2.291-1.552 3.297-1.23 3.297-1.23 0.653 1.653 0.242 2.874 0.118 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921 0.43 0.372 0.814 1.103 0.814 2.222 0 1.606-0.014 2.898-0.014 3.293 0 0.319 0.216 0.694 0.824 0.576 4.766-1.589 8.2-6.085 8.2-11.385 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
          
          <div className="mt-8">
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter secret code..."
                  className="input input-bordered focus:border-primary"
                  value={secretCode}
                  onChange={(e) => setSecretCode(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button onClick={handleCheatCode} className="btn btn-square">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <label className="label">
                <span className="label-text-alt">Hint: Try "nord", "forest", "night", or type "themes" for a full list</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 w-full flex justify-center">
        <button 
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce p-2 rounded-full bg-base-300 hover:bg-primary hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;