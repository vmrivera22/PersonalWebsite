import ReactMarkdown from "react-markdown";
import resumeMD from "../markdown/Resume.md";
import NetworkResume from "../assets/Resume_ ComputerNetwork.pdf";
import CSResume from "../assets/Resume_ Software.pdf";
import "../css/SharedStyles.css";
import remarkBreaks from "remark-breaks";

// Resume Route -- Text in markdown/Resume
const Resume = () => {
  return (
    <div className="markdown--container">
      <h1>Resume</h1>
      <h3>One Page Resume PDFs: </h3>
      <ul className="resume--links">
        <li>
          <a
            href={NetworkResume}
            download="NetworkResume_VictorRivera"
            target="_blank"
          >
            Network Resume PDF
          </a>
        </li>
        <li>
          <a
            href={CSResume}
            download="SoftwareResume_VictorRivera"
            target="_blank"
          >
            Software Engineer Resume PDF
          </a>
        </li>
      </ul>
      <br />
      <br />
      <ReactMarkdown
        className="prose prose-invert"
        remarkPlugins={[remarkBreaks]}
        children={resumeMD}
      ></ReactMarkdown>
    </div>
  );
};

export default Resume;
