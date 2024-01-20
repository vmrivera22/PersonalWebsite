import "../css/Project.css";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  id: number;
  options?: string[];
}

const Project = ({ title, description, id, options }: Props) => {
  const projectOptions = options?.map((option) => {
    return <p className="project--option">{option}</p>;
  });
  return (
    <Link className="project--container" to={`/project/${id}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="project--options">{projectOptions}</div>
    </Link>
  );
};

export default Project;
