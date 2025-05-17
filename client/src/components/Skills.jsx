// Skills Component
const Skills = () => {
    const technicalSkills = [
      { name: "React.js", percentage: 90 },
      { name: "JavaScript/HTML/CSS", percentage: 85 },
      { name: "Node.js/Express", percentage: 75 },
      { name: "Python", percentage: 80 },
      { name: "Tailwind/DaisyUI", percentage: 85 }
    ];
    
    const toolsLibraries = [
      "React", "JavaScript", "HTML5", "CSS3", "Python", 
      "Java", "SQL", "MongoDB", "Git", "Docker", 
      "Jira", "Tailwind", "DaisyUI", "Express", "Flask"
    ];
  
    return (
      <div id="skills" className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            My <span className="text-primary">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              
              {technicalSkills.map((skill, index) => (
                <div className="mb-4" key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-base-300 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-base-300 rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">My Development Philosophy</h3>
              <div className="space-y-4">
                <p>
                  I believe in building applications that solve real problems and enhance user experience.
                  My approach combines technical expertise with practical solutions.
                </p>
                <p>
                  During my internship at Versa Networks, I learned the importance of creating
                  reusable UI components that improve both user experience and code maintainability.
                </p>
                <p>
                  I enjoy working in team environments and value the collaborative process
                  of transforming ideas into functional, user-friendly applications.
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-2">Languages & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {toolsLibraries.map((tool, index) => (
                    <span key={index} className="px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Skills;