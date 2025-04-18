import ProjectCard from "./components/ProjectCard";
import ExperienceSection from "./components/ExperienceSection";
import map from "./assets/WorldMap.svg";
import projects from "./data/projects"; // Importing projects
import experience from "./data/experience"; // Importing experience
import resumePath from "./assets/GarrettHayesResume.pdf"
import { useEffect, useState, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  });
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

  return (
    <div className="font-sans antialiased text-gray-900">
      {/* Navbar */}
      <nav className="bg-base-200 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Garrett Hayes</h1>
          {/* <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
            </ul>
          </div>
          <ul className="hidden lg:flex space-x-6">
            <li>
              <a href="#about" className="btn btn-ghost">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="btn btn-ghost">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="btn btn-ghost">
                Experience
              </a>
            </li>
          </ul> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-base-300 flex items-center justify-center text-center overflow-hidden">
        {/* Background Parallax Image */}
        <img
          src={map}
          alt="Hero Background"
          className="absolute inset-0 object-cover w-full h-full z-0 opacity-50" // Image opacity for effect
        />

        {/* Floating Elements */}
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Welcome to My Portfolio
          </h2>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-12 bg-base-100 flex items-center justify-center"
      >
        <div className="container mx-auto flex flex-col items-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            About Me
          </h2>
          {/* Mockup code block with a fixed height */}
          <div className="w-full bg-base-200 p-8 rounded-lg shadow-lg">
            <div
              className="mockup-code p-4"
              style={{ height: "700px", overflowY: "auto" }} // Set a fixed height with scrolling
            >
              <pre>
                <code>{typedText}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 bg-base-200">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection experience={experience}></ExperienceSection>

      <footer className="bg-base-300 p-6 text-center rounded-t-lg shadow-md">
        <p className="text-lg font-semibold mb-2">&copy; 2024 Garrett Hayes</p>
        <div className="mt-4">
          <p className="text-md">
            Contact:{" "}
            <a
              href="mailto:garrettbridgeshayes@gmail.com"
              className="text-primary font-medium hover:underline"
            >
              garrettbridgeshayes@gmail.com
            </a>
          </p>
          <div className="flex justify-center space-x-6 mt-4 mb-4">
            <a
              href="https://github.com/bridgeshayes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-gray-700 transition duration-200"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://linkedin.com/in/garrett-bridges-hayes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-gray-700 transition duration-200"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
          <button onClick={downloadResume} className="btn btn-link">Download Resume</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
