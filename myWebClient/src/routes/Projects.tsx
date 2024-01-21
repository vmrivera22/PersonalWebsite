import { Outlet, Link, useLocation } from "react-router-dom";
import Project from "../components/Project";
import projectData from "../projectData.json";
import filter from "../assets/filter.png";
import "../css/Project.css";

const Projects = () => {
  let { state } = useLocation();
  const projectList = projectData.map((project) => {
    let returnProject = false;
    if (state) {
      if (state[1].AND) {
        for (let i = 0; i < state[0].length; i++) {
          if (state[0][i] && state[0][i].isSelected) {
            if (project.topics.includes(state[0][i].option)) {
              returnProject = true;
            } else {
              returnProject = false;
              break;
            }
          }
        }
      } else if (state[1].OR) {
        state[0].forEach((element: any) => {
          if (element.isSelected && project.topics.includes(element.option)) {
            returnProject = true;
          }
        });
      }
    } else {
      returnProject = true;
    }
    if (returnProject) {
      return (
        <Project
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
          <img className="filter--image" src={filter} />
        </Link>
      </div>
      <div className="projects">{projectList}</div>
      <Outlet />
    </>
  );
};

export default Projects;
