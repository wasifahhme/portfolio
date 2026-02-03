import React from "react";

import "../styles/Intro.css";
//import Typist from "react-typist";
//import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ArticleIcon from "@mui/icons-material/Article";
//import FadeInSection from "./FadeInSection";
import ParticlePortrait from "./ParticlePortrait";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <div className="intro-simulation">
          <ParticlePortrait />
        </div>
        <div className="intro-block">
            <span className="intro-title">
              {"hi, "}
              <span className="intro-name">{"Wasif"}</span>
              {" here."}
            </span>
            <a href="mailto:iamwasif17@gmail.com" className="intro-contact">
              <EmailRoundedIcon></EmailRoundedIcon>
              {" Say hi!"}
            </a>
            
            <a href="Wasif-Resume.pdf" className = "intro-contact-2">
            <ArticleIcon></ArticleIcon>
            {" Resume "}
            </a>
        </div>
      </div>
    );
  }
}

export default Intro;
