import "../css/Header.css";
import "../css/SharedStyles.css";
import { Link } from "react-router-dom";
import menu from "../assets/menu4.png";
import github from "../assets/github.png";
import GetWindow from "./GetWindow";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const window = GetWindow();

  let reduced = false;
  if (window.windowWidth <= 600) {
    reduced = true;
  }

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const handleMenu = () => {
    setDropdownMenu((oldState) => !oldState);
  };

  let menuRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setDropdownMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  let rightLinkStyle = reduced ? "link black" : "white";
  let rightLinks = (
    <>
      <Link className={rightLinkStyle} to={"/about"}>
        About
      </Link>
      {reduced && <div className="divide" />}
      <Link className={rightLinkStyle} to={"/projects"}>
        Projects
      </Link>
      {reduced && <div className="divide" />}
      <Link className={rightLinkStyle} to={"/resume"}>
        Resume
      </Link>
    </>
  );
  return (
    <header className="header--container shadow sticky shared--background">
      <ul className="left--links header--links">
        <Link to={"https://github.com/vmrivera22"}>
          <img src={github} className="header--github" />
        </Link>
        <Link className="white" to={"/"}>
          Home
        </Link>
      </ul>
      {!reduced ? (
        <ul className="right--links header--links">{rightLinks}</ul>
      ) : (
        <>
          <ul className="right--links header--links">
            {" "}
            <img src={menu} onClick={handleMenu} className="header--menu" />
          </ul>
          {dropdownMenu && (
            <div className="dropdown--menu" ref={menuRef}>
              <ul className="dropdown--links">{rightLinks}</ul>
            </div>
          )}
        </>
      )}
    </header>
  );
};

export default Header;
