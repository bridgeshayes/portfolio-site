import ProjectCard from "./components/ProjectCard";
import ExperienceSection from "./components/ExperienceSection";
import projects from "./data/projects"; // Importing projects
import experience from "./data/experience"; // Importing experience
import resumePath from "./assets/GarrettHayesResume.pdf"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import YourTour from "./assets/tour.png";
import ParticlesBackground from "./components/ParticlesBackground";
import profilePicture from "./assets/profile.jpg";
import BackToTop from "./components/BackToTop";

function App() {
  useEffect(() => {
    // Initialize AOS with proper configuration
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-in-out',
        delay: 100,
        disable: 'mobile'
      });
    }

    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []); // Add empty dependency array to run only once
  const [typedText, setTypedText] = useState("");
  const [hasTyped, setHasTyped] = useState(false);
  const fullText = `{
  "name": "Garrett Hayes",
  "age": 22,
  "college": "Tennessee Technological University",
  "degrees": [
    "Bachelor of Science with a major in Computer Science"
  ],
  "Computer Science",
  "experience": {
    "roles": [
      "Entry-Level DevOps Engineer"
    ],
    "internships": [
      "Software Development Intern at Dahlgren Naval Base",
      "XR Intern at ARCS Aviation"
    ],
    "leadership": [
      "TNTECH ACM Vice-President",
      "Multiple Team Lead/Scrum Master Positions"
    ]
  },
  "skills": ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Agile/Scrum", "Git/GitHub"],
  "passion": "Software Development",
  "goals": [
    "Build innovative software solutions",
    "Expand technical expertise",
    "Contribute to impactful projects"
  ]
}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTyped) {
          // Check if it has already typed
          setHasTyped(true); // Prevent typing more than once
          typeOutText(fullText, 0); // Start typing the text
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [hasTyped]); // Dependency on hasTyped

  const typeOutText = (text, index) => {
    if (index < text.length) {
      setTypedText(prev => prev + text[index]);
      setTimeout(() => typeOutText(text, index + 1), 5); // Adjust speed here
    }
  };

  function downloadResume(){
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Garrett_Hayes_Resume.pdf";
    link.click();
  }

  // Filter out YourTour from projects
  const filteredProjects = projects.filter(project => project.title !== "YourTour Navigation");

  return (
    <div className="font-mono antialiased bg-[#0a192f] text-[#ccd6f6] overflow-hidden">
      {/* Navbar */}
      <nav className="fixed w-full bg-[#0a192f]/80 backdrop-blur-md z-50 border-b border-[#1e293b]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#64ffda] to-[#8892b0] bg-clip-text text-transparent">GH</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300">About</a>
            <a href="#projects" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300">Projects</a>
            <a href="#experience" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300">Experience</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a192f]">
          <div className="absolute inset-0 bg-[url('./assets/WorldMap.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#112240]"></div>
          <ParticlesBackground />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Profile Picture Section - Left Side */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Profile Picture Placeholder */}
                <div className="w-96 h-96 rounded-full bg-gradient-to-br from-[#64ffda]/20 to-[#8892b0]/20 border-4 border-[#64ffda]/30 flex items-center justify-center overflow-hidden shadow-2xl shadow-[#64ffda]/20 group-hover:shadow-[#64ffda]/40 transition-all duration-500 group-hover:scale-105">
                  {/* Add your profile picture here */}
                  <img src={profilePicture} alt="Garrett Hayes" className="w-full h-full object-cover" />
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#64ffda]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Floating elements around the profile picture */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#64ffda]/30 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#64ffda]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-[#64ffda]/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>

            {/* Content Section - Right Side */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-7xl font-bold mb-6 group">
                <span className="text-[#64ffda] group-hover:text-[#52e0c4] transition-colors duration-300">$</span>{" "}
                <span className="group-hover:text-[#64ffda] transition-colors duration-300">Garrett Hayes</span>
              </h2>
              <p className="text-xl md:text-2xl text-[#8892b0] mb-8 group">
                <span className="group-hover:text-[#ccd6f6] transition-colors duration-300">Full Stack Developer</span>{" "}
                <span className="text-[#64ffda] group-hover:text-[#52e0c4] transition-colors duration-300">&</span>{" "}
                <span className="group-hover:text-[#ccd6f6] transition-colors duration-300">DevOps Engineer</span>
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-[#64ffda] text-[#0a192f] rounded-md hover:bg-[#52e0c4] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#64ffda]/20"
                >
                  View Projects
                </a>
                <a 
                  href="#experience" 
                  className="px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#64ffda]/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#64ffda]/20"
                >
                  View Experience
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#112240] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-[#64ffda]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#64ffda]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#64ffda] rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-[#64ffda] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#64ffda]"
            data-aos="fade-up"
          >
            <span className="text-[#64ffda]">#</span> About Me
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Terminal Style */}
              <div 
                className="bg-[#0a192f] rounded-lg border border-[#1e293b] overflow-hidden"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="bg-[#1e293b] px-4 py-2 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-sm text-[#8892b0]">terminal</div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center" data-aos="fade-up" data-aos-delay="300">
                      <span className="text-[#64ffda]">$</span>
                      <span className="ml-2 text-[#ccd6f6]">whoami</span>
                    </div>
                    <div className="text-[#8892b0] ml-4" data-aos="fade-up" data-aos-delay="400">Garrett Hayes</div>
                    
                    <div className="flex items-center" data-aos="fade-up" data-aos-delay="500">
                      <span className="text-[#64ffda]">$</span>
                      <span className="ml-2 text-[#ccd6f6]">cat education.txt</span>
                    </div>
                    <div className="text-[#8892b0] ml-4" data-aos="fade-up" data-aos-delay="600">
                      Tennessee Technological University<br />
                      Bachelor of Science in Computer Science
                    </div>

                    <div className="flex items-center" data-aos="fade-up" data-aos-delay="700">
                      <span className="text-[#64ffda]">$</span>
                      <span className="ml-2 text-[#ccd6f6]">cat interests.txt</span>
                    </div>
                    <div className="text-[#8892b0] ml-4" data-aos="fade-up" data-aos-delay="800">
                      Full Stack Development<br />
                      DevOps & Cloud Computing<br />
                      Mobile App Development<br />
                      Open Source Contribution
                    </div>
                    
                    <div className="flex items-center" data-aos="fade-up" data-aos-delay="900">
                      <span className="text-[#64ffda]">$</span>
                      <span className="ml-2 text-[#ccd6f6]">ls skills/</span>
                    </div>
                    <div className="text-[#8892b0] ml-4" data-aos="fade-up" data-aos-delay="1000">
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", 
                          "Tailwind", "Node.js", "Express.js", "MongoDB", "PostgreSQL",
                          "Docker", "Docker", "AWS", "Git/GitHub", "Linux",
                          "RESTful APIs", "Next.js", "Agile/Scrum",
                          "VSCode", "Postman", "ESRI GIS"
                        ].map((skill, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-1 bg-[#112240] text-[#64ffda] rounded text-sm"
                            data-aos="fade-up"
                            data-aos-delay={1100 + (index * 50)}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center" data-aos="fade-up" data-aos-delay="1200">
                      <span className="text-[#64ffda]">$</span>
                      <span className="ml-2 text-[#ccd6f6]">cat current_focus.txt</span>
                    </div>
                    <div className="text-[#8892b0] ml-4" data-aos="fade-up" data-aos-delay="1300">
                      Building scalable web applications<br />
                      Cloud infrastructure & DevOps<br />
                      Mobile-first development<br />
                      Continuous learning & improvement
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Interactive Stats */}
              <div className="space-y-6">
                <div 
                  className="bg-[#0a192f] rounded-lg border border-[#1e293b] p-6 hover:border-[#64ffda] transition-colors duration-300"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-4">Connect With Me</h3>
                  <div className="space-y-4">
                    <a 
                      href="https://github.com/bridgeshayes" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#112240] transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 bg-[#64ffda]/20 rounded-full flex items-center justify-center group-hover:bg-[#64ffda]/30 transition-colors duration-300">
                        <FontAwesomeIcon icon={faGithub} className="text-[#64ffda] text-2xl" />
                      </div>
                      <div>
                        <p className="text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors duration-300">GitHub</p>
                        <p className="text-[#8892b0] text-sm">@bridgeshayes</p>
                      </div>
                      <span className="ml-auto text-[#64ffda] opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </a>

                    <a 
                      href="https://linkedin.com/in/garrett-bridges-hayes" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#112240] transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 bg-[#64ffda]/20 rounded-full flex items-center justify-center group-hover:bg-[#64ffda]/30 transition-colors duration-300">
                        <FontAwesomeIcon icon={faLinkedin} className="text-[#64ffda] text-2xl" />
                      </div>
                      <div>
                        <p className="text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors duration-300">LinkedIn</p>
                        <p className="text-[#8892b0] text-sm">Garrett Bridges-Hayes</p>
                      </div>
                      <span className="ml-auto text-[#64ffda] opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </a>

                    <a 
                      href="mailto:garrettbridgeshayes@gmail.com" 
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#112240] transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 bg-[#64ffda]/20 rounded-full flex items-center justify-center group-hover:bg-[#64ffda]/30 transition-colors duration-300">
                        <span className="text-[#64ffda] text-2xl">📧</span>
                      </div>
                      <div>
                        <p className="text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors duration-300">Email</p>
                        <p className="text-[#8892b0] text-sm">garrettbridgeshayes@gmail.com</p>
                      </div>
                      <span className="ml-auto text-[#64ffda] opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </a>

                    <button 
                      onClick={downloadResume}
                      className="w-full flex items-center space-x-4 p-3 rounded-lg hover:bg-[#112240] transition-colors duration-300 group text-left"
                    >
                      <div className="w-12 h-12 bg-[#64ffda]/20 rounded-full flex items-center justify-center group-hover:bg-[#64ffda]/30 transition-colors duration-300">
                        <span className="text-[#64ffda] text-2xl">📄</span>
                      </div>
                      <div>
                        <p className="text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors duration-300">Resume</p>
                        <p className="text-[#8892b0] text-sm">Download PDF</p>
                      </div>
                      <span className="ml-auto text-[#64ffda] opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </button>
                  </div>
                </div>

                <div 
                  className="bg-[#0a192f] rounded-lg border border-[#1e293b] p-6 hover:border-[#64ffda] transition-colors duration-300"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-4">Leadership</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#64ffda]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#64ffda] text-2xl">👥</span>
                      </div>
                      <div>
                        <p className="text-[#ccd6f6]">Former TNTECH ACM Vice-President</p>
                        <p className="text-[#8892b0] text-sm">Leading tech community initiatives</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#64ffda]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#64ffda] text-2xl">📊</span>
                      </div>
                      <div>
                        <p className="text-[#ccd6f6]">Team Lead/Scrum Master</p>
                        <p className="text-[#8892b0] text-sm">Managing agile development teams</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className="bg-[#0a192f] rounded-lg border border-[#1e293b] p-6 hover:border-[#64ffda] transition-colors duration-300"
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-4">Goals</h3>
                  <ul className="space-y-2">
                    {[
                      "Build innovative software solutions",
                      "Expand technical expertise",
                      "Contribute to impactful projects"
                    ].map((goal, index) => (
                      <li 
                        key={index} 
                        className="flex items-center space-x-2 text-[#8892b0]"
                        data-aos="fade-left"
                        data-aos-delay={700 + (index * 100)}
                      >
                        <span className="text-[#64ffda]">→</span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#112240]">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#64ffda]"
            data-aos="fade-up"
          >
            <span className="text-[#64ffda]">#</span> Projects
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YourTour Section */}
      <section className="py-20 bg-[#112240] overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#64ffda]"
            data-aos="fade-up"
          >
            <span className="text-[#64ffda]">#</span> YourTour
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div 
                className="space-y-6"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <h3 className="text-2xl font-bold text-[#ccd6f6]">Revolutionizing Road Trips</h3>
                <p className="text-[#8892b0] text-lg">
                  YourTour transforms ordinary drives into engaging adventures. As you travel, the app dynamically generates 
                  interesting facts and trivia about the places you pass through, turning every journey into an educational 
                  and entertaining experience.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <span className="text-[#64ffda] text-xl mt-1">→</span>
                    <div>
                      <h4 className="text-[#ccd6f6] font-semibold">Real-time Location Awareness</h4>
                      <p className="text-[#8892b0]">Automatically detects your location and provides relevant information about nearby points of interest.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-[#64ffda] text-xl mt-1">→</span>
                    <div>
                      <h4 className="text-[#ccd6f6] font-semibold">Dynamic Content Generation</h4>
                      <p className="text-[#8892b0]">Curates interesting facts and historical information about towns and cities along your route.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-[#64ffda] text-xl mt-1">→</span>
                    <div>
                      <h4 className="text-[#ccd6f6] font-semibold">User Curated Content</h4>
                      <p className="text-[#8892b0]">Facts and trivia are generated based on user defined interests to ensure every drive is tailored to the user.</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pt-6">
                  <a
                    href="https://www.yourtournavigation.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 bg-[#64ffda] text-[#0a192f] rounded-md overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay="900"
                  >
                    <span className="relative z-10 font-semibold">Learn More</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#52e0c4] to-[#64ffda] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -inset-1 bg-[#64ffda]/20 rounded-md blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  </a>
                </div>
              </div>
              <div 
                className="relative"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img
                  src={YourTour}
                  alt="YourTour App"
                  className="rounded-lg shadow-2xl border border-[#1e293b]"
                />
                <div className="absolute -inset-4 bg-[#64ffda]/10 rounded-lg -z-10"></div>
              </div>
            </div>

            {/* Awards Section */}
            <div className="mt-16">
              <h3 
                className="text-2xl font-bold text-[#ccd6f6] mb-8 text-center"
                data-aos="fade-up"
              >
                Awards & Recognition
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {/* Award 1 */}
                <div 
                  className="bg-[#112240] rounded-lg border border-[#1e293b] p-6 hover:border-[#64ffda] transition-colors duration-300"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#64ffda]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#64ffda] text-2xl">👑</span>
                    </div>
                    <h4 className="text-xl font-bold text-[#ccd6f6]">Grand Prize Winner</h4>
                  </div>
                  <p className="text-[#8892b0]">2025 Tennessee Tech Eagle Works Competition</p>
                </div>

                {/* Award 2 */}
                <div 
                  className="bg-[#112240] rounded-lg border border-[#1e293b] p-6 hover:border-[#64ffda] transition-colors duration-300"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#64ffda]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#64ffda] text-2xl">💡</span>
                    </div>
                    <h4 className="text-xl font-bold text-[#ccd6f6]">1st Place Overall</h4>
                  </div>
                  <p className="text-[#8892b0]">Tennessee Tech Idea Challenge</p>               
                </div>

                {/* Award 3 */}
                <div 
                  className="bg-[#112240] rounded-lg border border-[#1e293b] p-6 hover:border-[#64ffda] transition-colors duration-300"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#64ffda]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#64ffda] text-2xl">🌱</span>
                    </div>
                    <h4 className="text-xl font-bold text-[#ccd6f6]">Rural Reimagined Award</h4>
                  </div>
                  <p className="text-[#8892b0]">Tennessee Tech Idea Challenge</p>
                </div>

                {/* Award 4 */}
                <div 
                  className="bg-[#112240] rounded-lg border border-[#1e293b] p-6 hover:border-[#64ffda] transition-colors duration-300"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#64ffda]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#64ffda] text-2xl">⚡</span>
                    </div>
                    <h4 className="text-xl font-bold text-[#ccd6f6]">3rd Place Overall</h4>
                  </div>
                  <p className="text-[#8892b0]">2025 HackMT</p>
                </div>
              </div>
            </div>

            {/* Media Coverage Section */}
            <div className="mt-16">
              <h3 
                className="text-2xl font-bold text-[#ccd6f6] mb-8 text-center"
                data-aos="fade-up"
              >
                Featured in the News
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Video Feature */}
                <div 
                  className="bg-[#112240] rounded-lg border border-[#1e293b] overflow-hidden hover:border-[#64ffda] transition-colors duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="relative">
                    {/* Background image with overlay */}
                    <div className="w-full h-48 bg-cover bg-center relative news-video-bg">
                      {/* Dark overlay for better text readability */}
                      <div className="absolute inset-0 bg-[#0a192f]/70 group-hover:bg-[#0a192f]/50 transition-colors duration-300"></div>
                      
                      {/* Content overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-[#64ffda]/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#64ffda]/30 transition-colors duration-300">
                            <span className="text-[#64ffda] text-2xl">▶️</span>
                          </div>
                          <p className="text-[#ccd6f6] font-semibold">Video Feature</p>
                          <p className="text-[#8892b0] text-sm">
                            <a href="https://www.wbir.com/article/news/local/tennessee-tech-uncover-tn-hidden-gems/51-a7387699-3181-4a82-9aec-6cda35acd431" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-colors duration-300">Click to watch</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-[#64ffda] text-[#0a192f] px-2 py-1 rounded text-xs font-semibold">
                      VIDEO
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-[#ccd6f6] mb-2">Tennessee Tech team wants to uncover TN&apos;s hidden gems</h4>
                    <p className="text-[#8892b0] text-sm mb-3">The team of students and recent grads founded &quot;YourTour&quot; this spring after a road trip took an unexpected turn.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#64ffda] text-sm">WBIR Knoxville</span>
                      <span className="text-[#8892b0] text-xs">June 2025</span>
                    </div>
                  </div>
                </div>

                {/* Article Feature */}
                <div 
                  className="bg-[#112240] rounded-lg border border-[#1e293b] overflow-hidden hover:border-[#64ffda] transition-colors duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="relative">
                    {/* Background image with overlay */}
                    <div className="w-full h-48 bg-cover bg-center relative news-article-bg">
                      {/* Dark overlay for better text readability */}
                      <div className="absolute inset-0 bg-[#0a192f]/70 group-hover:bg-[#0a192f]/50 transition-colors duration-300"></div>
                      
                      {/* Content overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-[#64ffda]/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#64ffda]/30 transition-colors duration-300">
                            <span className="text-[#64ffda] text-2xl">📰</span>
                          </div>
                          <p className="text-[#ccd6f6] font-semibold">Article Feature</p>
                          <p className="text-[#8892b0] text-sm">
                            <a href="https://theucnow.com/2025/06/08/tech-students-ai-based-yourtour-app-to-launch-in-august/" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-colors duration-300">Click to read</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-[#64ffda] text-[#0a192f] px-2 py-1 rounded text-xs font-semibold">
                      ARTICLE
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-[#ccd6f6] mb-2">Tech Students’ AI Based YourTour App To Launch In August</h4>
                    <p className="text-[#8892b0] text-sm mb-3">A team of Tennessee Tech computer science students are working on an AI-based navigation app to help visitors explore the region.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#64ffda] text-sm">UCNOW</span>
                      <span className="text-[#8892b0] text-xs">June 2025</span>
                    </div>
                  </div>
                </div>

                {/* Video Feature */}
                <div 
                  className="bg-[#112240] rounded-lg border border-[#1e293b] overflow-hidden hover:border-[#64ffda] transition-colors duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="relative">
                    {/* Background image with overlay */}
                    <div className="w-full h-48 bg-cover bg-center relative news-podcast-bg">
                      {/* Dark overlay for better text readability */}
                      <div className="absolute inset-0 bg-[#0a192f]/70 group-hover:bg-[#0a192f]/50 transition-colors duration-300"></div>
                      
                      {/* Content overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-[#64ffda]/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#64ffda]/30 transition-colors duration-300">
                            <span className="text-[#64ffda] text-2xl">▶️</span>
                          </div>
                          <p className="text-[#ccd6f6] font-semibold">Video Feature</p>
                          <p className="text-[#8892b0] text-sm">
                            <span className="hover:text-[#64ffda] transition-colors duration-300 cursor-pointer">
                              <a href="https://www.wbir.com/article/news/local/tennessee-tech-graduates-secure-10000-to-develop-ai-powered-east-tn-tour-guide-app/51-b51ec97d-f1a9-4296-ae37-e9861271a99d" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-colors duration-300">Click to watch</a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-[#64ffda] text-[#0a192f] px-2 py-1 rounded text-xs font-semibold">
                      VIDEO
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-[#ccd6f6] mb-2">Tennessee Tech graduates secure $10,000 to develop AI-powered East TN tour guide app</h4>
                    <p className="text-[#8892b0] text-sm mb-3">According to a release, Your Tour will serve as a "digital billboard" for hidden gem spots in East Tennessee, such as restaurants, scenic overlooks and....</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#64ffda] text-sm">WBIR Knoxville</span>
                      <span className="text-[#8892b0] text-xs">June 2025</span>
                    </div>
                  </div>
                </div>

                {/* University Feature */}
                <div 
                  className="bg-[#112240] rounded-lg border border-[#1e293b] overflow-hidden hover:border-[#64ffda] transition-colors duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <div className="relative">
                    {/* Background image with overlay */}
                    <div className="w-full h-48 bg-cover bg-center relative news-university-bg">
                      {/* Dark overlay for better text readability */}
                      <div className="absolute inset-0 bg-[#0a192f]/70 group-hover:bg-[#0a192f]/50 transition-colors duration-300"></div>
                      
                      {/* Content overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-[#64ffda]/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#64ffda]/30 transition-colors duration-300">
                            <span className="text-[#64ffda] text-2xl">📰</span>
                          </div>
                          <p className="text-[#ccd6f6] font-semibold">University Feature</p>
                          <p className="text-[#8892b0] text-sm">
                            <a href="https://www.tntech.edu/news/releases/24-25/tech-computer-science-students-win-top-honors-for-app-designed-to-point-out-hidden-gems.php" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-colors duration-300">Click to read</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-[#64ffda] text-[#0a192f] px-2 py-1 rounded text-xs font-semibold">
                      ARTICLE
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-[#ccd6f6] mb-2">Tech computer science students, recent grads win top honors for app designed to point out state’s ‘hidden gems’</h4>
                    <p className="text-[#8892b0] text-sm mb-3">Tennesseans looking to take a scenic drive could soon have an AI-powered tour guide at their fingertips, thanks to a new app in development...</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#64ffda] text-sm">Tennessee Tech</span>
                      <span className="text-[#8892b0] text-xs">June 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection experience={experience} />

      {/* Back to Top Button */}
      <BackToTop className="z-[9999]" />

      {/* Footer */}
      <footer className="bg-[#0a192f] py-12 border-t border-[#1e293b]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-4 text-[#64ffda]">&copy; 2024 Garrett Hayes</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
