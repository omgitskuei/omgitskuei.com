import styles from "./page.module.css";

export default function Page() {
    return (
        <>
            <article>
                <h1>Resume</h1>
                <section id="experience">
                    <h2>Experience</h2>
                    
                </section>
                <section id="education">
                    <h2>Education</h2>
                    <div>
                        <h3>Institute for Information Industry (資訊工業策進會)</h3>
                        <ul style={{
                            marginLeft: "25px"
                        }}>
                            <li>Wrote to write server-side/backend Java to handle business logic and data fetching with Fetch API in Spring project</li>
                            <li>Wrote client-side/frontend Java in JSTL to handle data fetching with JQuery AJAX</li>
                            <li>Wrote Java interfacing with MSSQL databases with Hibernate and JDBC</li>
                            <li>Organized code in accordance with MVC model</li>
                            <li>Managed external libraries with Maven in Spring projects</li>
                            <li>Managed project version control and collab code reviews with Github</li>
                        </ul>
                        <div>
                            <h4>Tags</h4>
                            <span>Tomcat</span>
                            <span>Agile Methodologies</span>
                            <span>Leadership</span>
                            <span>Bootstrap</span>
                            <span>GitHub</span>
                            <span>Front-end Development</span>
                            <span>RESTful API</span>
                            <span>Java</span>
                            <span>Python</span>
                            <span>SQL</span>
                            <span>jQuery</span>
                            <span>MSSQL</span>
                            <span>HTML5</span>
                            <span>CSS</span>
                            <span>JS</span>
                            <span>Spring MVC</span>
                            <span>Spring Boot</span>
                            <span>Hibernate</span>
                            <span>JDBC</span>
                            <span>Ajax</span>
                            <span>Maven</span>
                            <span>Git</span>
                            <span></span>
                        </div>
                    </div>
                </section>
                <section id="volunteering">
                    <h2>Volunteering</h2>
                    
                </section>
            </article>
        </>
    );
}
