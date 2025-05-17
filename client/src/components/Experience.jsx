// Experience Component
const Experience = () => {
    return (
      <div id="experience" className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Experience & <span className="text-primary">Projects</span>
          </h2>
          
          <div className="grid gap-8">
            <div className="card lg:card-side bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h3 className="card-title text-2xl">Versa Networks</h3>
                  <div className="badge badge-primary">May 2022 - August 2023</div>
                </div>
                <p className="text-primary font-medium">Software Engineer Intern</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Built reusable UI components in React that improved user experience for SaaS web applications</li>
                  <li>Drafted comprehensive technical reports for management with status updates and recommendations</li>
                  <li>Delivered technical presentations to cross-functional teams, demonstrating communication skills</li>
                  <li>Converted Figma wireframes into production-ready UIs while meeting tight deadlines</li>
                  <li>Fixed hundreds of bugs in Bugzilla while developing new features and documentation</li>
                </ul>
              </div>
            </div>
            
            <div className="card lg:card-side bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h3 className="card-title text-2xl">UWO President's Challenge - 2nd Place</h3>
                  <div className="badge badge-primary">Jan 2024 - June 2024</div>
                </div>
                <p className="text-primary font-medium">Healthcare Solution Project</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Developed a full-stack web application using the MERN stack that allowed ER patients to wait at home</li>
                  <li>Collaborated with legal and healthcare specialists to limit liability concerns</li>
                  <li>Presented solution to Ontario Ministry of Health executives</li>
                  <li>Prepared detailed report on problems with lengthy wait times in Ontario ERs</li>
                </ul>
              </div>
            </div>
            
            <div className="card lg:card-side bg-base-200 shadow-xl">
              <div className="card-body">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h3 className="card-title text-2xl">Trading Bot with GUI</h3>
                  <div className="badge badge-primary">Side Project</div>
                </div>
                <p className="text-primary font-medium">Python Application</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Built UI components using Tkinter, the built-in GUI framework for Python</li>
                  <li>Integrated with two different cryptocurrency exchange APIs to automate buy and sell orders</li>
                  <li>Implemented functionality to change trading strategies for executing orders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Experience;