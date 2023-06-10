import {
    SiPython,
    SiJupyter,
    SiPostgresql,
    SiR,
    SiRstudio,
    SiDocker,
    SiWindowsterminal,
    SiMicrosoftazure,
    SiTableau,
    SiApachespark,
    SiDatabricks,
    SiPowerbi,
    SiSnowflake,
    SiApacheairflow,
    SiAmazonaws,
    SiTensorflow,
    SiPytorch,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiMicrosoftexcel
} from "react-icons/si";
import {FaGitAlt} from "react-icons/fa";
import {DiGoogleCloudPlatform} from "react-icons/di";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiR size={50}/>,
            text: "R"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiJupyter size={50}/>,
            text: "Jupyter"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiRstudio size={50}/>,
            text: "RStudio"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiPostgresql size={50}/>,
            text: "PostgreSQL"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiDocker size={50}/>,
            text: "Docker"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiApachespark size={50}/>,
            text: "Apache Spark"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiDatabricks size={50}/>,
            text: "Databricks"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiPandas size={50}/>,
            text: "Pandas"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiNumpy size={50}/>,
            text: "Numpy"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiScikitlearn size={50}/>,
            text: "Scikit-learn"
        }
    ],
    complementarySkills: [
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiMicrosoftazure size={50}/>,
            text: "Microsoft Azure"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiTableau size={50}/>,
            text: "Tableau"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiWindowsterminal size={50}/>,
            text: "Bash"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiSnowflake size={50}/>,
            text: "Snowflake"
        },
        {
            id: "skills-16",
            className: "skill-icon",
            icon: <SiApacheairflow size={50}/>,
            text: "Apache Airflow"
        },
        {
            id: "skills-17",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        },
        {
            id: "skills-18",
            className: "skill-icon",
            icon: <DiGoogleCloudPlatform size={50}/>,
            text: "Google Cloud Platform"
        },
        {
            id: "skills-19",
            className: "skill-icon",
            icon: <SiAmazonaws size={50}/>,
            text: "AWS"
        },
        {
            id: "skills-20",
            className: "skill-icon",
            icon: <SiTensorflow size={50}/>,
            text: "TensorFlow"
        },
        {
            id: "skills-17",
            className: "skill-icon",
            icon: <SiPytorch size={50}/>,
            text: "PyTorch"
        },
        {
            id: "skills-21",
            className: "skill-icon",
            icon: <SiMicrosoftexcel size={50}/>,
            text: "Excel"
        }
    ]
}

export default skillsConfig
