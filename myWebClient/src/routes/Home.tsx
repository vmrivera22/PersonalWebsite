import "../css/Home.css";
import SidebarRight from "../components/SidebarRight";
import SidebarLeft from "../components/SidebarLeft";
import GetWindow from "../components/GetWindow";
import linkedIn from "../assets/linkedin1.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import reddit from "../assets/reddit.png";

const Home = () => {
  const window = GetWindow();
  return (
    <div className="home--container">
      {window.windowWidth > 600 && <SidebarLeft />}
      <div className="home--main">
        <h1 className="home--title">Victor Manuel Rivera</h1>
        <div className="home--contact--container">
          <img src={linkedIn} className="home--contact home--linkedin" />
          <img src={email} className="home--contact home--email" />
          <img src={phone} className="home--contact home--phone" />
          <img src={reddit} className="home--contact home--reddit" />
        </div>
      </div>
      <SidebarRight />
    </div>
  );
};

export default Home;
