import ReactMarkdown from "react-markdown";
import aboutMD from "../markdown/About.md";
import "../css/About.css";

const About = () => {
  return (
    <div className="about--container">
      <ReactMarkdown children={aboutMD}></ReactMarkdown>
    </div>
  );
  /*
  return (
    <div className="about--container">
      <h1>Victor Manuel Rivera</h1>
      <h3>Education</h3>
      <p>
        I graduated from the University of California Santa Cruz (UCSC) with a
        major in Bioengineering: bioelectronics and Computer Engineering in
        2023.
      </p>
      <h3>Related Interests and Hobbies</h3>
      <p>This section is from intrests...</p>
      <h3>Projects</h3>
      <p>This is the section for Projects ...</p>
      <h3>Hands On Experience</h3>
      <p>
        During my time at UCSC I was able to complete network labs using both
        virtual and physical means. In my advanced networks class we used CISCO
        packet tracer to create and configure a virtual network. During these
        labs we configured several different protocols and security measurs
        including: multiarea OSPF, BGP, STP, DHCP, VLANS, Port Security, DHCP
        Snooping, ... Additionally, for this same class I attened additional of
        campus labs the Professor held where I was able to use physical routers
        and switches to create and configure networks. During these sections I
        configured OSPF, VLANs, ...
      </p>
      <h3>Work Experience</h3>
      <p>
        Since graduating from highschool I have been working at Sambado and Son
        during summer breaks. There I have done several physical agricultural
        tasks including pileing brush, fertalizing trees by hand, pulling roots,
        laying tarp, hoeing, and driving and maintaining tractors among other
        tasks. Although a lot of the work has been difficult at times having
        worked at Sambado and Son has taught me a lot of valueble life lessons.
        By completing a variaty of tasks regardless of weather conditions I have
        learned to become more adaptable and hardworking. This job has taught me
        the importance of meeting expectations and goals in a timely and
        efficent manner. Furthermore, during apple season, I would be in charge
        of operating a tractor and helped oversee a crew of 15 workers allowing
        me develop leadership and attention to detail skills.
      </p>
      <h3>Unrelated Interests and Hobbies</h3>
      <p>
        On my free time I enjoy watching and playing sports like soccer,
        basketball and football. I also enjoy riding quads and doing gardening
        projects such as graphting or growing vegtables.
      </p>
    </div>
  );
  */
};

export default About;
