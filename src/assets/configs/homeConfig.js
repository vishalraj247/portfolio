import React from 'react';
import {GrCertificate} from "react-icons/gr";
import {MdOutlineWorkOutline, MdHomeWork} from "react-icons/md";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Vishal Raj</strong>
        </h1>,
    titles: [
        "Data Scientist"
    ],
    about: {
        start: "Currently pursuing master's from University of Technology Sydney in the coursework of Data Science. Solid " +
                "understanding of datasets with hands-on experience in data cleaning, data visualisation, and translating data " +
                "analytical insights. Proficient and enthusiastic in building strong relationships with clients, team members, and " +
                "stakeholders, including managing client expectations and requirements. ",
        exit:  "I'm fluent in Python, R, SQL, BI tools, and more, " +
               "with a deep interest in machine learning and AI/LLMs."
    },
    workTimeline: [
        {
            id: "work-3",
            title: "Data Science Intern",
            company: "University of Technology Sydney",
            description: "Engaged in a research project, I worked extensively with the CoAuthor dataset, " +
            "analysing keystroke-level data of users co-writing with GPT-3. My role involved conducting literature reviews, creating " +
            "visualisations, defining user behavioural metrics, and extending Python notebooks for NLP reports. I also developed a " +
            "dashboard to highlight key findings and provide valuable feedback to educators.",
            date: "Mar 2023 - May 2023",
            icon: <MdOutlineWorkOutline/>,
            tags: ["Data Science", "Research", "CoAuthor Dataset", "Keystroke-level Data", "GPT-3", "Literature Review", 
                   "Data Visualisation", "User Behavior Metrics", "Python", "Natural Language Processing (NLP)", "Data Storytelling",
                   "Dashboard Development", "Educator Feedback", "Data Analysis", "Machine Learning", "AI Writing", "Data Reporting",
                   "User Patterns", "Text Analysis", "Data-driven Insights"]
        },
        {
            id: "work-2",
            title: "MSc Data Science",
            company: "University of Technology Sydney",
            description: "Pursuing a Master's in Data Science and Innovation, I've gained hands-on experience in solving business " +
            "problems using the CRISP-DM approach. My academic journey has involved developing various machine-learning models, " +
            "building Monte Carlo simulation models, and performing textual analysis using NLP techniques. I've honed my skills " +
            "in Python, handling class imbalance, and conducting sentiment analysis, " +
            "including the construction of ETLs, data lakes, and data warehouses.",
            date: "Feb 2022 - Dec 2023",
            icon: <MdHomeWork/>,
            tags: ["Data Science", "CRISP-DM", "Machine Learning", "Python", "Regression Models", "Classifiers", "Monte Carlo Simulation",
                   "Textual Analysis", "NLP", "Sentiment Analysis", "ml", "airflow", "python", "docker", "snowflake", "postgres", "azure",
                   "Databricks"]
        },
        {
            id: "work-1",
            title: "Data Analytics Professional Certificate",
            company: "Google/Coursera",
            description: "Acquired a Data Analytics Professional Certificate from Google/Coursera, where I developed key analytical " +
            "skills, including data aggregation, data ethics, and visualisation in Tableau. I also gained proficiency in tools such as " +
            "spreadsheets, SQL, R Studio, and Tableau.",
            date: "May 2021 - Aug 2021",
            icon: <GrCertificate/>,
            tags: ["Data Analytics", "Google", "Coursera", "Data Aggregation", "Data Ethics", "Visualization", "Tableau", "Spreadsheets",
                   "SQL", "R Studio"]
        },
        {
            id: "work-0",
            title: "Data Science Specialization Professional Certificate",
            company: "IBM/Coursera",
            description: "Completed a Data Science Specialization Professional Certificate from IBM/Coursera, where I honed key skills " +
            "such as data analysis, Python programming, statistical analysis, and data visualisation. I also became adept at using " + 
            "tools like Jupyter Notebook, GitHub, and Watson Studio.",
            date: "Oct 2020 - Apr 2021",
            icon: <GrCertificate/>,
            tags: ["Data Science", "IBM", "Coursera", "Data Analysis", "Python", "Statistical Analysis", "Data Visualization", 
                   "Jupyter Notebook", "GitHub", "Watson Studio"]
        }
    ]
}


export default homeConfig