import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project, index }) => {
  if (!project) return null;

  return (
    <div 
      className="bg-[#0a192f] rounded-lg border border-[#1e293b] overflow-hidden group hover:border-[#64ffda] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#64ffda]/10"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#0a192f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64ffda] hover:text-[#52e0c4] transition-colors duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64ffda] hover:text-[#52e0c4] transition-colors duration-300 transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-[#8892b0]">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
