import "../css/Projects.css";
import "../css/SharedStyles.css";
import { Link } from "react-router-dom";
import chef from "../assets/chef.png";
import knife from "../assets/knife.png";

interface Props {
  title: string;
  description: string;
  id: number;
  options?: string[];
  works?: boolean;
}

// Function that creates a component project for the projects route.
const ProjectComponent = ({
  title,
  description,
  id,
  options,
  works,
}: Props) => {
  const projectOptions = options?.map((option) => {
    // Create components for the projects options.
    return <p className="project--option">{option}</p>;
  });
  return (
    <Link className="project--container white" to={`/project/${id}`}>
      {works && (
        <div className="project--in--progress black--op--bg">
          <div className="design--container">
            <div className="project--chef--container">
              <img src={chef} className="project--chef" />
            </div>
            <div className="project--text--container">
              <h1 className="red">Still Cooking ...</h1>
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

export default ProjectComponent;
