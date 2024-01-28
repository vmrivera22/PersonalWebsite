import { Outlet } from "react-router-dom";
import Header from "../components/Header";

// Route that adds background and header to all the routes.
const Template = () => {
  return (
    <>
      <Header />
      <div className="shared--background shared--background--dim" />
      <div className="white">
        <Outlet />
      </div>
    </>
  );
};

export default Template;
