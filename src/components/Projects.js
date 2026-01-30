
import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";


import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const projects = {
      "AI Powered Itinerary Generator": {
        desc:
          "Itinerary Generator integrating FastAPI, React, and Generative AI (Gemini) to automate road-trip planning",
        techStack: "FastAPI, React with Vite, Tailwind CSS, SQL",
        link: "https://github.com/wasifahhme/cis525-frontend",
        open: "https://cis525-frontend.onrender.com/",
      },
      "Overlifter": {
        desc:
          "OverLifter is an intelligent LaTeX resume editor designed for non-technical users. It provides a structured, interactive interface for editing LaTeX resumes without the need to manually navigate or modify .tex files.",
        techStack: "Python, Streamlit, Custom line-by-line LaTeX parser",
        link: "https://github.com/wasifahhme/overlifter",
        open: "",
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card"><a href={projects[key]["link"]}>
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card--title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
            </a></li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
