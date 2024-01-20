import projectData from "../projectData.json";
import { useParams, Link } from "react-router-dom";
import "../css/ProjectRoute.css";

const Project = () => {
  let { id } = useParams();
  let project;
  for (let i = 0; i < projectData.length; i++) {
    if (Number(id) === projectData[i].id) {
      project = projectData[i];
    }
  }
  if (!project) {
    return <div>Error: This Project does not exist</div>;
  }
  let projectFiles;
  if (project.files) {
    projectFiles = project.files.map((file) => {
      return <li>{file}</li>;
    });
  }

  let projectOptional;
  if (project.options) {
    projectOptional = project.options.map((option) => {
      return <li>{option}</li>;
    });
  }
  return (
    <div className="project--single">
      <h1>{project?.title}</h1>
      {project?.link && (
        <Link className="project--code" to={project?.link}>
          Source Code
        </Link>
      )}
      <br />
      <h2>Summary</h2>
      <p>{project?.description}</p>
      {project?.files && (
        <>
          <h2>Files</h2>
          <ul>{projectFiles}</ul>
        </>
      )}
      {project?.options && (
        <>
          <h2>Options</h2>
          <ul>{projectOptional}</ul>
        </>
      )}
      {project?.link && (
        <h4 className="project--footer">
          For more information regarding the project see the README and code at
          the "Source Code" link at the top of the page.
        </h4>
      )}
    </div>
  );
};

export default Project;
