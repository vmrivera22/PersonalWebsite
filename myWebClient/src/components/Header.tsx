import "../css/Header.css";
import "../css/SharedStyles.css";
import "../css/DropdownMenu.css";
import { Link } from "react-router-dom";
import menu from "../assets/menu4.png";
import github from "../assets/github.png";
import GetWindow from "./GetWindow";
import { useState, useEffect, useRef } from "react";
import LinkItem from "./LinkItem";

const Header = () => {
  const window = GetWindow();

  let reduced = false;
  if (window.windowWidth <= 600) {
    reduced = true;
  }

  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu((oldState) => !oldState);
  };

  let menuRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  let rightLinkStyle = reduced ? "menu--item black" : "white";

  let rightLinks = [
    {
      dest: "/about",
      linkName: "About",
    },
    {
      dest: "/projects",
      linkName: "Projects",
    },
    {
      dest: "/resume",
      linkName: "Resume",
    },
  ];

  const rightComponents = rightLinks.map((link) => {
    return (
      <LinkItem
        style={rightLinkStyle}
        dest={link.dest}
        linkName={link.linkName}
      />
    );
  });

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
        <ul className="right--links header--links white">{rightComponents}</ul>
      ) : (
        <>
          <div ref={menuRef} className="right--links header--links">
            <img src={menu} onClick={handleMenu} className="header--menu" />
            {showMenu && (
              <div className="dropdown black">{rightComponents}</div>
            )}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
