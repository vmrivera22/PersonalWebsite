import Template from "../routes/Template";
import "../css/Error.css";

const ErrorPage = () => {
  return (
    <>
      <Template />
      <div className="error--container">
        <h1 className="error--text">404 Not Found</h1>
      </div>
    </>
  );
};

export default ErrorPage;
