import "../css/Home.css";
import SidebarRight from "../components/SidebarRight";
import SidebarLeft from "../components/SidebarLeft";
import GetWindow from "../components/GetWindow";
import linkedIn from "../assets/linkedin.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import portrate from "../assets/portrate.jpg";
import beach from "../assets/beach.png";
import laptop from "../assets/laptop.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

// Home Route Component.
const Home = () => {
  const window = GetWindow();

  // State to show or hide contact information [0] for email and [1] for phone number.
  const [showContact, setShowContact] = useState([false, false]);

  // Toggles between showing and hidding contact information.
  const handleContactClick = (event: any) => {
    const { id } = event.target;
    setShowContact((oldState) => {
      let newState = [...oldState];
      if (Number(id) === 1 && oldState[0]) {
        // Only phone or email shown not both
        newState[0] = false;
      } else if (Number(id) === 0 && oldState[1]) {
        newState[1] = false;
      }
      newState[Number(id)] = !oldState[Number(id)];
      return newState;
    });
  };

  // Creates an event listener and useRef to make clicking outside contact container hide the container.
  let contactRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    let handler = (e: any) => {
      if (!contactRef.current?.contains(e.target)) {
        setShowContact([false, false]);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="home--container">
      <SidebarLeft />
      <div className="home--main">
        <h1 className="home--title white">Victor Manuel Rivera</h1>
        <div className="margin--images">
          <div className="portrate--images">
            <img className="portrate" src={portrate} />
            {window.windowWidth >= 650 && (
              <>
                <img className="beach" src={beach} />
                <img className="laptop" src={laptop} />
              </>
            )}
          </div>
        </div>
        <div ref={contactRef} className="home--contact--container">
          <div className="home--contact--icons">
            <Link
              to={
                "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              }
            >
              <img src={linkedIn} className="icon" />
            </Link>

            <img
              src={email}
              className="icon"
              onClick={handleContactClick}
              id="0"
            />
            <img
              src={phone}
              className="icon"
              onClick={handleContactClick}
              id="1"
            />
          </div>
          {showContact[0] && (
            <div className="contact--show grey--bg">
              <img src={email} className="icon" />
              <p className="black">vmrivera722@gmail.com</p>
            </div>
          )}
          {showContact[1] && (
            <div className="contact--show grey--bg">
              <img src={phone} className="icon" />
              <span className="black">(209) 931-5633</span>
            </div>
          )}
        </div>
      </div>
      {}
      {window.windowWidth < 650 && (
        <div className="home--images">
          <img className="images" src={beach} />
          <img className="images" src={laptop} />
        </div>
      )}
      <SidebarRight />
    </div>
  );
};

export default Home;
