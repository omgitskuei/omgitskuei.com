'use client'

import { useState } from "react";
import styles from "./page.module.css";

export default function Page() {

    // Sub-component
    const Tag = ({
        label,
    }: {
        label: string
    }) => {
        return (
            <button onClick={() => {
                setTagFilter(label);
            }} style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "5px",
                marginBottom: "5px",
                paddingLeft: "5px",
                paddingRight: "5px",
                paddingTop: "3px",
                paddingBottom: "3px",
                color: tagFiter == label ? "lime" : "white",
                background: "rgb(50, 50, 70)",
                border: tagFiter == label ? "2px lime solid" : "2px white solid",
                borderRadius: "4px"
            }}>
                {label}
            </button>
        );
    };

    const Item = ({
        title,
        details,
        tags,
    }: {
        title: string,
        details: string[],
        tags: string[],
    }) => {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}>
                <h3>{title}</h3>
                <h4>2024-01-31 to 2024-03-29</h4>
                <ul style={{
                    marginLeft: "25px"
                }}>
                    {details.map(detail => (<li key={`key_${detail}`}>{detail}</li>))}
                </ul>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                }}>
                    <h4>Tags</h4>
                    <div>
                        {tags.map(tag => (<Tag key={`key_${tag}`} label={tag}></Tag>))}
                    </div>
                </div>
            </div>
        )
    }

    // useState
    const [tagFiter, setTagFilter] = useState<string>()

    return (
        <>
            <article style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px"
            }}>
                <h1>Resume</h1>
                <section id="experience">
                    <h2>Experience</h2>
                    <Item title={"Product Owner, Full Stack Developer"}
                        details={[
                            "Develop UI interfaces and interaction flow based on Figma designs",
                            "Maintain high-quality code base and write clear documentation",
                            "Tackle complex user interaction problems and build bugfixes",
                            "Act as primary point of contact for international contractors",
                            "Responsible for integrating 3rd party game providers' API",
                            "Collaborate across timezone, language, and cultural differences",
                            "Code review contributions by other developers to ensure code base quality",
                            "Identify potential security risks and performance bottle necks and implement mitigations"
                        ]} 
                        tags={[
                            "Typescript", "React.js", "NextJS", "Express.js", "RESTful API", "Sequelize", 
                            "PostgreSQL", "Socket.io", "HTML5", "CSS", "JS", "Node.js", 
                            "react-qr-code", "jsonwebtoken", "Git", "GitHub", "Google Sign In Integration", "Google Cloud API",
                            "Remote collaboration", "Agile Methodologies", "Front-end Development", "Back-end Development", "Intercultural Skills", "3rd Party API Integration"
                            ]}>
                    </Item>
                </section>

                <section id="education">
                    <h2>Education</h2>
                    <Item title={"Institute for Information Industry (資訊工業策進會)"}
                        details={[
                            "Wrote server-side/backend Java to handle business logic and data fetching with Fetch API in Spring project",
                            "Wrote client-side/frontend Java in JSTL to handle data fetching with JQuery AJAX",
                            "Wrote Java interfacing with MSSQL databases with Hibernate and JDBC",
                            "Organized code in accordance with MVC model",
                            "Managed external libraries with Maven in Spring projects",
                            "Managed project version control and collab code reviews with Github",
                        ]} 
                        tags={[
                            "Java", "Ajax", "Spring", "Spring Boot", "RESTful API", "SQL", 
                            "jQuery", "MSSQL", "HTML5", "CSS", "JS", "JSTL", 
                            "Hibernate", "JDBC", "Git", "GitHub", "Maven", "Tomcat",
                            "Python", "Agile Methodologies", "Front-end Development", "Back-end Development", "Leadership", "Bootstrap"
                            ]}>
                    </Item>
                    
                </section>

                <section id="volunteering">
                    <h2>Volunteering</h2>

                </section>
            </article>
        </>
    );
}

