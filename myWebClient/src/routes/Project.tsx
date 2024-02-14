import projectData from "../projectData.json";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import smartBikeLockMD from "../markdown/SmartBikeLock.md";
import "../css/ProjectRoute.css";
import remarkBreaks from "remark-breaks";

// Route that displays a single project.
const Project = () => {
  let { id } = useParams(); // Get the id of the selected project from the URL.
  let project; // Find the projject that will be displayed based on the id.
  for (let i = 0; i < projectData.length; i++) {
    if (Number(id) === projectData[i].id) {
      project = projectData[i];
    }
  }

  if (!project) {
    // If the project was not found then there is an error.
    return <div>Error: This Project does not exist</div>;
  }

  let projectFiles; // Ceate a list using the pojects files as the list items.
  if (project.files) {
    projectFiles = project.files.map((file) => {
      return <li>{file}</li>;
    });
  }

  let projectRoutes; // Create a list using the project routes as the list items.
  if (project.routes) {
    projectRoutes = project.routes.map((route) => {
      return <li>{route}</li>;
    });
  }

  let projectOptional; // Create a list using the project options as the list items.
  if (project.options) {
    projectOptional = project.options.map((option) => {
      return <li>{option}</li>;
    });
  }
  return (
    <div className="project--single">
      {project?.incomplete && <div>In the Works</div>}
      <h1>{project?.title}</h1>
      {project?.link && (
        <Link className="project--code" to={project?.link}>
          Source Code
        </Link>
      )}
      {project.websitelink && (
        <>
          <Link to={project.websitelink} className="project--code">
            Deployed Website
          </Link>
          <br />
        </>
      )}
      {project.frontend && (
        <>
          <Link className="project--code" to={project.frontend}>
            Frontend Repository
          </Link>
          <br />
          <Link className="project--code" to={project.backend}>
            Backend Repository
          </Link>
        </>
      )}
      <br />
      <h2>Summary</h2>
      <p>{project?.description}</p>
      {project?.files && (
        <>
          <h2>Files</h2>
          <ul className="project--list">{projectFiles}</ul>
        </>
      )}
      {project?.routes && (
        <>
          <h2>Routes</h2>
          <ul className="project--list">{projectRoutes}</ul>
        </>
      )}
      {project?.options && (
        <>
          <h2>Options</h2>
          <ul className="project--list">{projectOptional}</ul>
        </>
      )}
      {project.longDescription && (
        <>
          <h2>Project Overview</h2>
          <ReactMarkdown
            className="prose prose-invert"
            remarkPlugins={[remarkBreaks]}
            children={smartBikeLockMD}
          ></ReactMarkdown>
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
