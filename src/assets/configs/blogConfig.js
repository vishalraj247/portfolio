import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {SiMedium} from "react-icons/si";
import fastapiSklearn from "../images/fastapi_sklearn.png"

const blogConfig = [
    {
        id: "blog-1",
        title: "Innovating Wildlife Conservation using data: Saving the Planet!",
        links: [
            {
                name: "article",
                url: "https://medium.com/nerd-for-tech/innovating-wildlife-conservation-using-data-saving-the-planet-cf9d0f93de7c",
                icon: <SiMedium/>
            }
        ],
        image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*1OPfH05fS1J5PP86b4gkKw.png",
        description: "Exploring the intersection of data science and wildlife conservation, this article delves into innovative strategies to protect our planet's biodiversity. Learn how leveraging data can make a significant impact in conserving endangered species and their habitats.",
        target: "_blank"
    },
    {
        id: "blog-0",
        title: "The Battle of Neighborhoods — Comparison of neighboring cities of US states.",
        links: [
            {
                name: "article",
                url: "https://medium.com/nerd-for-tech/the-battle-of-neighborhoods-comparison-of-neighboring-cities-of-us-states-5079a9889b66",
                icon: <SiMedium/>
            },
            {
                name: "repo",
                url: "https://github.com/vishalraj247/Battle_of_Neighborhoods",
                icon: <AiFillGithub/>
            }
        ],
        image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*Z5dbpk0DzkWEeIaB1Z2qWQ.jpeg",
        description: "An insightful analysis of neighboring cities across US states, this article presents a comprehensive comparison based on various factors. Discover how data science can be used to understand the unique characteristics and dynamics of different neighborhoods.",
        target: "_blank"
    }
]

export default blogConfig