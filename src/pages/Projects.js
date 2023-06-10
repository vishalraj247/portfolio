import CardItem from "../components/Cards/CardItem";
import "../components/Cards/CardItem.css";
import projectConfig from "../assets/configs/projectConfig"
import React from 'react'

const Projects = () => {
    return (
        <div className="wrapper">
            {projectConfig.map((item) => (
                <CardItem item={item}/>
                )
            )}
        </div>)
}

export default Projects