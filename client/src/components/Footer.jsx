// Footer Component
const Footer = () => {
    return (
      <footer className="bg-base-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-center md:text-left">
                Designed and coded by <span className="font-bold">Anthony Barros</span>
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/abarros6" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-base-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0.296c-6.627 0-12 5.372-12 12 0 5.302 3.438 9.8 8.206 11.387 0.6 0.111 0.82-0.26 0.82-0.577 0-0.286-0.011-1.231-0.016-2.234-3.338 0.726-4.043-1.416-4.043-1.416-0.546-1.387-1.333-1.756-1.333-1.756-1.089-0.745 0.082-0.729 0.082-0.729 1.205 0.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492 0.997 0.108-0.775 0.418-1.305 0.762-1.604-2.665-0.305-5.467-1.334-5.467-5.931 0-1.311 0.469-2.381 1.237-3.221-0.124-0.303-0.535-1.524 0.117-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.138 3.006 0.404 2.291-1.552 3.297-1.23 3.297-1.23 0.653 1.653 0.242 2.874 0.118 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921 0.43 0.372 0.814 1.103 0.814 2.222 0 1.606-0.014 2.898-0.014 3.293 0 0.319 0.216 0.694 0.824 0.576 4.766-1.589 8.2-6.085 8.2-11.385 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/anthony-barros-b142a1181/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-base-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.778-.773 1.778-1.729v-20.542c0-.955-.8-1.729-1.778-1.729z"/>
                </svg>
              </a>
              <a 
                href="https://www.chess.com/member/sorrab" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-base-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M14.414,17l-3.414-2v-3.922 c-0.412,0.361-0.95,0.582-1.541,0.582c-1.289,0-2.333-1.044-2.333-2.333c0-1.289,1.044-2.333,2.333-2.333 c1.289,0,2.333,1.044,2.333,2.333c0,0.043-0.001,0.085-0.004,0.127L11.792,13L15,11L14.414,17z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;