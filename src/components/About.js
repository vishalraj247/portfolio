import React from "react";
import './About.css';

const About = (props) => {
    const about = props.about.start
    const aboutExit = props.about.exit

    return (
        <section id="about">
            <div className="about-card">
                <div className="card-header">
                    <span
                        className="iconify square-icon"
                        data-icon="mdi:square-medium"
                        data-inline="false"
                    />{" "}
                    &nbsp;{" "}
                    <span
                        className="iconify triangle-icon"
                        data-icon="mdi:triangle"
                        data-inline="false"
                    />{" "}
                    &nbsp;{" "}
                    <span
                        className="iconify circle-icon"
                        data-icon="mdi:circle-medium"
                        data-inline="false"
                    />
                </div>
                <div className="card-body font-trebuchet text-justify">
                    {about}
                    <br/>
                    {aboutExit}
                </div>
            </div>
        </section>
    );
}

export default About;