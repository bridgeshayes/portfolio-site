import React, { useState } from "react";
import AOS from 'aos'; // Ensure AOS is imported

function ExperienceSection({ experience }) {
  const [activeTab, setActiveTab] = useState(0);

  // Helper function to get company name from image path
  const getCompanyName = (imagePath) => {
    const name = imagePath.split('/').pop().split('.')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <section id="experience" className="py-20 bg-[#112240]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#64ffda]">
          <span className="text-[#64ffda]">#</span> Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => {
            const responsibilities = exp.responsibilities || [];
            const technologies = exp.technologies || [];
            const companyName = getCompanyName(exp.company);

            return (
              <div
                key={index}
                className="mb-12 bg-[#0a192f] rounded-lg border border-[#1e293b] p-6 hover:border-[#64ffda] transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#ccd6f6]">{exp.title}</h3>
                    <div className="flex items-center mt-2">
                      <span className="text-[#8892b0]">{companyName}</span>
                      <span className="mx-2 text-[#64ffda]">•</span>
                      <span className="text-[#8892b0]">{exp.date}</span>
                    </div>
                  </div>
                </div>
                
                {exp.description && (
                  <p className="text-[#8892b0] mb-4 italic">{exp.description}</p>
                )}
                
                <ul className="list-disc list-inside text-[#8892b0] space-y-2 mb-4">
                  {responsibilities.map((resp, i) => (
                    <li key={i} className="hover:text-[#ccd6f6] transition-colors duration-300">
                      {resp}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-[#112240] text-[#64ffda] rounded-full border border-[#1e293b]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
