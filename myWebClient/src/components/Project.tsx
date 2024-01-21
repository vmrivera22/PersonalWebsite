import "../css/Project.css";
import { Link } from "react-router-dom";
import chef from "../assets/chef2.png";
import knife from "../assets/knife.png";

interface Props {
  title: string;
  description: string;
  id: number;
  options?: string[];
  works?: boolean;
}

const Project = ({ title, description, id, options, works }: Props) => {
  const projectOptions = options?.map((option) => {
    return <p className="project--option">{option}</p>;
  });
  return (
    <Link className="project--container" to={`/project/${id}`}>
      {works && (
        <div className="project--works">
          <div className="design--container">
            <div className="project--chef--container">
              <img src={chef} className="project--chef" />
            </div>
            <div className="project--text--container">
              <h1 className="project--works--text">Still Cooking ...</h1>
            </div>
            <img src={knife} className="project--knife" />
          </div>
        </div>
      )}
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="project--options">{projectOptions}</div>
    </Link>
  );
};

export default Project;
