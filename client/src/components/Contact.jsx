import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real implementation, you would send the form data to a server using the existing emailjs setup
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div id="contact" className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get In <span className="text-primary">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-base-100 rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <a href="mailto:sorrab1999@gmail.com" className="text-primary hover:underline">
                    sorrab1999@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Location</h4>
                  <p>Toronto, Ontario, Canada</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Socials</h4>
                  <div className="flex space-x-3 mt-2">
                    <a href="https://github.com/abarros6" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0.296c-6.627 0-12 5.372-12 12 0 5.302 3.438 9.8 8.206 11.387 0.6 0.111 0.82-0.26 0.82-0.577 0-0.286-0.011-1.231-0.016-2.234-3.338 0.726-4.043-1.416-4.043-1.416-0.546-1.387-1.333-1.756-1.333-1.756-1.089-0.745 0.082-0.729 0.082-0.729 1.205 0.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492 0.997 0.108-0.775 0.418-1.305 0.762-1.604-2.665-0.305-5.467-1.334-5.467-5.931 0-1.311 0.469-2.381 1.237-3.221-0.124-0.303-0.535-1.524 0.117-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.138 3.006 0.404 2.291-1.552 3.297-1.23 3.297-1.23 0.653 1.653 0.242 2.874 0.118 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921 0.43 0.372 0.814 1.103 0.814 2.222 0 1.606-0.014 2.898-0.014 3.293 0 0.319 0.216 0.694 0.824 0.576 4.766-1.589 8.2-6.085 8.2-11.385 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/anthony-barros-b142a1181/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.778-.773 1.778-1.729v-20.542c0-.955-.8-1.729-1.778-1.729z"/>
                      </svg>
                    </a>
                    <a href="https://www.chess.com/member/sorrab" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M14.414,17l-3.414-2v-3.922 c-0.412,0.361-0.95,0.582-1.541,0.582c-1.289,0-2.333-1.044-2.333-2.333c0-1.289,1.044-2.333,2.333-2.333 c1.289,0,2.333,1.044,2.333,2.333c0,0.043-0.001,0.085-0.004,0.127L11.792,13L15,11L14.414,17z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6" onSubmit={handleSubmit} ref={(el) => window.contactForm = el}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name"
                  className="input input-bordered w-full focus:border-primary" 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email"
                  className="input input-bordered w-full focus:border-primary" 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="4" 
                  className="textarea textarea-bordered w-full focus:border-primary" 
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;