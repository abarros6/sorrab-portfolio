const About = () => {
    return (
      <div id="about" className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Software Engineering</h3>
                <p>
                  I'm a software engineer with a focus on web development and React.
                  I'm currently pursuing my M.E.Sc. in Electrical Engineering at Western University,
                  specializing in software development.
                </p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Outdoor Activities</h3>
                <p>
                  When I'm not coding, you'll find me playing sports, camping, or exploring the outdoors.
                  I'm an active person who enjoys soccer, basketball, softball, and various outdoor activities.
                </p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <div className="w-12 h-12 bg-primary bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Games & Chess</h3>
                <p>
                  I love strategy games like chess and am an active member of Western's chess and go club.
                  In my free time, I enjoy video games, board games, and other strategic activities that
                  challenge my mind.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-base-200 rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">My Interests</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-3 text-primary">Sports & Activities</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Intramural soccer at Western University</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Intramural basketball and softball</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Camping and outdoor exploration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Western engineering robotics club member</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-primary">Games & Entertainment</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Active chess player (<a href="https://www.chess.com/member/sorrab" target="_blank" rel="noreferrer" className="text-primary hover:underline">Challenge me!</a>)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Board games enthusiast</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Trading card game player</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    <span>Video games - Skyrim and indie titles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default About;

  