import "../css/Header.css";
import "../css/SharedStyles.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.png";
import github from "../assets/github.png";

interface Props {
  windowDimension: { windowWidth: number; windowHeight: number };
  fullDesktop: boolean;
}

const Header = ({ fullDesktop }: Props) => {
  return (
    <header className="header--container shadow sticky shared--background">
      <ul className="left--links header--links">
        <Link to={"https://github.com/vmrivera22"}>
          <img src={github} className="header--github" />
        </Link>
        <Link className="link" to={"/"}>
          Home
        </Link>
      </ul>
      <ul className="right--links header--links">
        <Link className="link" to={"/about"}>
          About
        </Link>
        <Link className="link" to={"/projects"}>
          Projects
        </Link>
        <Link className="link" to={"/resume"}>
          Resume
        </Link>
      </ul>
    </header>
  );
};

export default Header;
