import ReactMarkdown from "react-markdown";
import aboutMD from "../markdown/About.md";
import "../css/SharedStyles.css";

// About Route -- Text in markdown/About
const About = () => {
  return (
    <div className="markdown--container">
      <ReactMarkdown children={aboutMD}></ReactMarkdown>
    </div>
  );
};

export default About;
