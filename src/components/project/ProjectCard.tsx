
import type { ProjectCardProps } from "../../type/Type";
import "../../styles/ProjectCard.css";

const ProjectCard = ({ title, image, github, live }: ProjectCardProps) => {
  return (
    <div className="card">
      {image ? (
        <img src={image} alt={title} className="card-image" />
      ) : (
        <div className="card-placeholder">No Image</div>
      )}
      <h3 className="card-title">{title}</h3>
      <div className="card-links">
        <a href={github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
        <a href={live} target="_blank" rel="noreferrer" className="btn btn-live">Live</a>
      </div>
    </div>
  );
};

export default ProjectCard;
