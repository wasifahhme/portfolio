import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I am a recent Graduate of Master's in <b>Computer Science</b> from the 
        <b>University of Michigan </b> where I mastered in AI, 
        took classes of Distribute Operating Systems,
        Advance Computer Networks and so on.
        I was able to implement a peer-to-peer Language Model training and inference engine under the Advanced OS course.
        Likewise, my final project for my master's was AI-Powered Itinerary Generator which significantly helped a lot of 
        my friends to plan itineraries for their road-trips.
      </p>
    );
    const two = (
      <p>
        When I am not coding, I tend to learn about coffee and understand coffee culture. Quite fascinated about how 
        everyone's roasting it differently around the world.
      </p>
    );

    const tech_stack = [
      "Python",
      "Typescript",
      "React.js",
      "Java",
      "Javascript ES6+",
      "Node.js",

    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Mohammed Wasif Ahmed" src={"/profile.jpeg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;