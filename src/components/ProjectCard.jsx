import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function ProjectCard({ project, index }) {
  // Ensure technologies is an array, default to empty array if undefined
  const technologies = project.technologies || [];

  return (
    <div 
      className="bg-[#112240] rounded-lg border border-[#1e293b] overflow-hidden hover:border-[#64ffda] transition-colors duration-300 group"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="800"
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-[#0a192f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-[#8892b0] mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-[#0a192f] text-[#64ffda] rounded-full border border-[#1e293b]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
