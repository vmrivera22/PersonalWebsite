import "../css/Header.css";
import "../css/SharedStyles.css";
import "../css/DropdownMenu.css";
import { Link } from "react-router-dom";
import menu from "../assets/menu.png";
import github from "../assets/github.png";
import GetWindow from "./GetWindow";
import { useState, useEffect, useRef } from "react";
import LinkItem from "./LinkItem";
import { v4 as uuidv4 } from "uuid";

// Component for the header
const Header = () => {
  const window = GetWindow();

  let windowSizeMedium = window.windowWidth <= 600 ? true : false; // Determins if the layout should be adjusted for smaller screens.

  const [showMenu, setShowMenu] = useState(false); // Show menu icon if true and displays menu options in header if false.
  const handleMenu = () => {
    setShowMenu((oldState) => !oldState);
  };

  let menuRef = useRef<HTMLInputElement>(null); // Create an event listener that closes the pop down menu if anywhere outside the menu is clicked.
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

  let rightLinkStyle = windowSizeMedium ? "menu--item white" : "white";
  // Creates the menu link components based on the rightLinks array.
  const rightComponents = rightLinks.map((link) => {
    return (
      <LinkItem
        key={uuidv4()}
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
          <img src={github} className="header--github white--bg icon" />
        </Link>
        <Link className="white" to={"/"}>
          Home
        </Link>
      </ul>
      {!windowSizeMedium ? (
        <ul className="right--links header--links white">{rightComponents}</ul>
      ) : (
        <>
          <div ref={menuRef} className="right--links header--links">
            <img src={menu} onClick={handleMenu} className="header--menu" />
            {showMenu && (
              <div className="dropdown black grey--bg">{rightComponents}</div>
            )}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
