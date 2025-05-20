import React from 'react';
import Resume from "../assets/Resume.pdf"

const Contact = () => {
    return (
        <div id="contact" className="py-20 bg-base-200">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8">
                    Let's <span className="text-primary">Connect</span>
                </h2>
                
                <p className="text-lg max-w-2xl mx-auto mb-10 opacity-80">
                    I'm always interested in discussing new projects, opportunities or collaborations.
                    Feel free to reach out through any of the channels below.
                </p>
                
                <div className="flex justify-center space-x-6 mb-12">
                    <a 
                        href="https://github.com/abarros6" 
                        target="_blank" 
                        rel="noreferrer"
                        className="group"
                    >
                        <div className="w-16 h-16 rounded-full bg-base-100 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                            <svg className="h-8 w-8 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.296c-6.627 0-12 5.372-12 12 0 5.302 3.438 9.8 8.206 11.387 0.6 0.111 0.82-0.26 0.82-0.577 0-0.286-0.011-1.231-0.016-2.234-3.338 0.726-4.043-1.416-4.043-1.416-0.546-1.387-1.333-1.756-1.333-1.756-1.089-0.745 0.082-0.729 0.082-0.729 1.205 0.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492 0.997 0.108-0.775 0.418-1.305 0.762-1.604-2.665-0.305-5.467-1.334-5.467-5.931 0-1.311 0.469-2.381 1.237-3.221-0.124-0.303-0.535-1.524 0.117-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.138 3.006 0.404 2.291-1.552 3.297-1.23 3.297-1.23 0.653 1.653 0.242 2.874 0.118 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921 0.43 0.372 0.814 1.103 0.814 2.222 0 1.606-0.014 2.898-0.014 3.293 0 0.319 0.216 0.694 0.824 0.576 4.766-1.589 8.2-6.085 8.2-11.385 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </div>
                        <p className="mt-2 font-medium">GitHub</p>
                    </a>
                    
                    <a 
                        href="https://www.linkedin.com/in/anthony-barros-b142a1181/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="group"
                    >
                        <div className="w-16 h-16 rounded-full bg-base-100 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                            <svg className="h-8 w-8 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.778-.773 1.778-1.729v-20.542c0-.955-.8-1.729-1.778-1.729z"/>
                            </svg>
                        </div>
                        <p className="mt-2 font-medium">LinkedIn</p>
                    </a>
                    
                    <a 
                        href="mailto:sorrab1999@gmail.com" 
                        className="group"
                    >
                        <div className="w-16 h-16 rounded-full bg-base-100 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="mt-2 font-medium">Email</p>
                    </a>
                </div>
                
                <div className="mt-10">
                    <a 
                        href={Resume} target="_blank" rel="noreferrer noopener"
                        className="btn btn-primary btn-lg px-8"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;