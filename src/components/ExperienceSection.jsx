import React from "react";
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faUsers, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function ExperienceSection({ experience = [] }) {
  const getIcon = (type) => {
    switch(type) {
      case 'work':
        return faCode;
      case 'internship':
        return faServer;
      case 'leadership':
        return faUsers;
      default:
        return faGraduationCap;
    }
  };

  return (
    <section id="experience" className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#64ffda]"
          data-aos="fade-up"
        >
          <span className="text-[#64ffda]">#</span> Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className="relative group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#64ffda] to-[#52e0c4] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-[#112240] rounded-lg p-6 border border-[#1e293b] group-hover:border-[#64ffda] transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#64ffda]/20 rounded-full flex items-center justify-center group-hover:bg-[#64ffda]/30 transition-colors duration-300">
                      <FontAwesomeIcon icon={getIcon(exp.type || 'default')} className="text-[#64ffda] text-xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-xl font-bold text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-[#64ffda] text-sm">{exp.duration}</p>
                      </div>
                      <p className="text-[#64ffda] mb-4">{exp.company}</p>
                      
                      <div className="space-y-3">
                        {Array.isArray(exp.description) ? (
                          exp.description.map((desc, i) => (
                            <p key={i} className="text-[#8892b0] leading-relaxed">
                              {desc}
                            </p>
                          ))
                        ) : (
                          <p className="text-[#8892b0] leading-relaxed">
                            {exp.description}
                          </p>
                        )}
                      </div>

                      {exp.techStack && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.techStack.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 bg-[#0a192f] text-[#64ffda] rounded-full text-sm border border-[#64ffda]/20 hover:border-[#64ffda] transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
