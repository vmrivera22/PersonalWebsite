import ReactMarkdown from "react-markdown";
import resumeMD from "../markdown/Resume.md";
import "../css/Resume.css";

const Resume = () => {
  return (
    <div className="resume--container">
      <ReactMarkdown children={resumeMD}></ReactMarkdown>
    </div>
  );
};

export default Resume;
