function ProjectCard({ project }) {
  return (
    <div data-aos="fade-up" className="card shadow-xl bg-base-100">
      <figure>
        <img src={project.image} />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p>{project.description}</p>
        {/* <div className="card-actions justify-end">
          <button
            className="btn btn-accent"
            onClick={() => document.getElementById("project_modal").showModal()}
          >
            Learn More
          </button>
        </div> */}
      </div>
      <dialog id="project_modal" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">{project.title}</h3>
          <p className="py-4">{project.description}</p>

          {/* Tech Stack */}
          <div className="py-2">
            <h4 className="font-semibold">Tech Stack</h4>
            <ul className="list-disc list-inside">
              {project.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="modal-action">
            <button className="btn btn-accent">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default ProjectCard;
