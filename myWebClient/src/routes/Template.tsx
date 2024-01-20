import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import GetWindow from "../components/GetWindow";

const Template = () => {
  const windowDimension = GetWindow();
  let fullDesktop = false;
  if (windowDimension.windowWidth >= 600) {
    fullDesktop = true;
  }

  return (
    <>
      <Header windowDimension={windowDimension} fullDesktop={fullDesktop} />
      <div className="shared--background shared--background--dim" />
      <div className="shared--container">
        <Outlet />
      </div>
    </>
  );
};

export default Template;
