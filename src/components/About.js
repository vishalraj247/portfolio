import React from "react";

const About = (props) => {
    const about = props.about.start
    const aboutExit = props.about.exit

    return (
        <section id="about">
            <div className="about-card" style={{backgroundColor: "#3f51b5"}}>
                <div className="card-header">
                    <span
                        className="iconify"
                        data-icon="emojione:red-circle"
                        data-inline="false"
                    />{" "}
                    &nbsp;{" "}
                    <span
                        className="iconify"
                        data-icon="twemoji:yellow-circle"
                        data-inline="false"
                    />{" "}
                    &nbsp;{" "}
                    <span
                        className="iconify"
                        data-icon="twemoji:green-circle"
                        data-inline="false"
                    />
                </div>
                <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                        height: "auto",
                        fontSize: "132%",
                        lineHeight: "150%",
                        backgroundColor: "#f5f5f5",
                        color: "#3f51b5",
                        padding: "2rem",
                        borderRadius: "15px",
                        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
                    }}
                >
                    {about}
                    <br/>
                    {aboutExit}
                </div>
            </div>
        </section>
    );
}

export default About;