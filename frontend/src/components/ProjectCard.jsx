function ProjectCard({ title, tech, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <small>{tech}</small>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
