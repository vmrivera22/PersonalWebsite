import ReactMarkdown from "react-markdown";
import aboutMD from "../markdown/About.md";
import "../css/SharedStyles.css";
import remarkBreaks from "remark-breaks";
// About Route -- Text in markdown/About
const About = () => {
  return (
    <div className="markdown--container">
      <ReactMarkdown
        className="prose prose-invert"
        remarkPlugins={[remarkBreaks]}
        children={aboutMD}
      ></ReactMarkdown>
    </div>
  );
};

export default About;
