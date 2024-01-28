import { Outlet, Link, useLocation } from "react-router-dom";
import ProjectComponent from "../components/ProjectComponent";
import projectData from "../projectData.json";
import filter from "../assets/filter.png";
import "../css/Projects.css";
import "../css/SharedStyles.css";

// Route that displays all the projects
const Projects = () => {
  // Get state from filter route (Options that the user input)
  let { state } = useLocation();
  const projectList = projectData.map((project) => {
    let returnProject = false;
    if (state) {
      if (state[1].AND) {
        // Defines the projects to show if the options are ANDed together
        for (let i = 0; i < state[0].length; i++) {
          // Go throught selected options
          if (state[0][i] && state[0][i].isSelected) {
            if (project.topics.includes(state[0][i].option)) {
              returnProject = true;
            } else {
              returnProject = false; // If any of the selected options is not included then don't print it.
              break;
            }
          }
        }
      } else if (state[1].OR) {
        // Defines the projects to show if the options are ORed together.
        state[0].forEach((element: any) => {
          if (element.isSelected && project.topics.includes(element.option)) {
            returnProject = true; // If any of the selected options is included then print it.
          }
        });
      }
    } else {
      // If no options is selected then print all.
      returnProject = true;
    }
    if (returnProject) {
      return (
        <ProjectComponent
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          options={project.topics}
          works={project.incomplete}
        />
      );
    }
  });
  return (
    <>
      <div className="project--filter--container">
        <h2 className="project--page--heading">Projects</h2>
        <Link to={"/projects/filter"} className="project--filter">
          <img className="icon" src={filter} />
        </Link>
      </div>
      <div className="projects">{projectList}</div>
      <Outlet />
    </>
  );
};

export default Projects;
