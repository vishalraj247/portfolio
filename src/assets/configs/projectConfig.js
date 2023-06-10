import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";

import battle_of_neighbourhoods from "../images/battle_of_neighbourhoods.png"
import bellabeat from "../images/bellabeat.png"
import crisis_detection from "../images/crisis_detection.png"
import coauthor_thumbnail from "../images/coauthor_thumbnail.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-3",
        title: "CoAuthorViz Dashboard",
        links: [
            {
                name: "repo",
                url: "https://github.com/vishalraj247/CoAuthorViz_Dashboard",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/vishalraj247/CoAuthorViz_Dashboard/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/vishalraj247/CoAuthorViz_Dashboard/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: coauthor_thumbnail,
        description: "Analysis of keystroke data of writers co-authorship with GPT-3 and visualising the results.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Retail Crisis Detection",
        links: [
            {
                name: "repo",
                url: "https://github.com/vishalraj247/ANLP_Retail_Crisis_Detection",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/vishalraj247/ANLP_Retail_Crisis_Detection/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/vishalraj247/ANLP_Retail_Crisis_Detection/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: crisis_detection,
        description: "Built an NLP system capable of automatically identifying potential crises from articles, social media posts, " +
        "and tweets, and generating appropriate responses to maintain the reputation of retail brands, with a focus on Amazon.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Bellabeat Case Study",
        links: [
            {
                name: "repo",
                url: "https://github.com/vishalraj247/Bellabeat_Case_Study_using_R",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/vishalraj247/Bellabeat_Case_Study_using_R/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/vishalraj247/Bellabeat_Case_Study_using_R/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: bellabeat,
        description: "Bellabeat, a high-tech manufacturer of health-focused products for women, wants to get analysed smart devices " +
        "data to gain insight into how consumers are using smart devices. This analysis will help guide future marketing strategies " +
        "for the team.",
        target: "_blank"
    },
    {
        id: "project-0",
        title: "Battle of Neighborhoods",
        links: [
            {
                name: "repo",
                url: "https://github.com/vishalraj247/Battle_of_Neighborhoods",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/vishalraj247/Battle_of_Neighborhoods/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/vishalraj247/Battle_of_Neighborhoods/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: battle_of_neighbourhoods,
        description: "Comparison of neighbouring cities of US states in terms of facilities/market research.",
        target: "_blank"
    }
]

export default projectConfig