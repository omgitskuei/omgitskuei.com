'use client'

import { useState } from "react";
import Image from "next/image";
import { Overlay } from "@/components/Overlay";
import Link from "next/link";

export default function Page() {


    // Sub-component
    const Tag = ({
        label,
    }: {
        label: string
    }) => {
        return (
            <button onClick={() => {
                if (tagFilter.includes(label)) {
                    // Remove from filter
                    setTagFilter(tagFilter => tagFilter.filter(tag => tag !== label));
                } else {
                    // Add to filter
                    setTagFilter([...tagFilter, label]);
                }
            }} style={{
                margin: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop: "3px",
                paddingBottom: "3px",
                color: tagFilter.includes(label) ? "lime" : "white",
                background: "rgb(30, 40, 30)",
                border: tagFilter.includes(label) ? "2px lime solid" : "2px white solid",
                borderRadius: "4px"
            }}>
                {label}
            </button>
        );
    };

    const TagNA = () => {
        return (
            <button
                style={{
                    margin: "5px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    paddingTop: "3px",
                    paddingBottom: "3px",
                    color: "white",
                    background: "rgb(50, 50, 70)",
                    border: "2px solid rgb(30, 40, 30)",
                    borderRadius: "4px"
                }}>
                N/A
            </button>
        )
    };

    const FilterByTagsAlphabetDisplay = ({
        alphabetLetter,
        children
    }: {
        alphabetLetter: string,
        children: JSX.Element | JSX.Element[]
    }) => {
        return (
            <div style={{ marginLeft: "10px" }}>
                <h4>{alphabetLetter}</h4>
                {children}
            </div>
        )
    };

    const Item = ({
        title,
        organization,
        orgHref,
        orgImgSrc,
        details,
        tags,
        startDate,
        endDate
    }: {
        title: string,
        organization: string,
        orgHref: string | string[],
        orgImgSrc: string,
        details: string[],
        tags: string[],
        startDate: string,
        endDate: string
    }) => {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "100%",
            }}>
                {/* Header */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <h3>{title}</h3>
                    <h3>{startDate} to {endDate}</h3>
                </div>
                <h3 style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                }}>
                    {organization}
                    {
                        typeof orgHref == "string" ?
                            <Link href={orgHref}>
                                <Image src={"/imgs/ui/share.svg"} alt={"Share"} width={25} height={25}></Image>
                            </Link>
                            :
                            orgHref.map(link => (
                                <Link href={link} key={`orgHref_${link}`}>
                                    <Image src={"/imgs/ui/share.svg"} alt={"Share"} width={25} height={25}></Image>
                                </Link>
                            ))
                    }
                </h3>
                <div>
                    {/* Company logo */}
                    <Image src={orgImgSrc} alt={"Company logo"} width={180} height={180} style={{ border: "white 5px solid", float: "left", marginRight: "40px", marginBottom: "10px" }}></Image>
                    {/* Details */}
                    <div>
                        <ul style={{
                            marginLeft: "25px",
                        }}>
                            {
                                details.map(detail => (
                                    <li key={`compLogo_${detail}`}>
                                        {detail}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {/* Tags */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}>
                    <h4>Tags</h4>
                    <div>
                        {
                            tags.map(tag => (
                                <Tag key={`tag_${tag}`} label={tag}></Tag>
                            ))
                        }
                    </div>
                </div>


            </div>
        )
    };

    // useState
    const [tagFilter, setTagFilter] = useState<string[]>([]);
    const [showFiltersUI, setShowFiltersUI] = useState<boolean>(false);
    const [showOverlay, setShowOverlay] = useState<boolean>(false);

    return (
        <article style={{ overflowY: showOverlay ? "hidden" : "auto" }}>
            {/* Header */}
            <section style={{
                display: "flex",
                justifyContent: "space-between",
                width: "1180px",
                marginTop: "20px",
                padding: "20px",
            }}>
                {/* Title */}
                <h1>Resume</h1>
                {/* Buttons on the right-end: Filters & Downloads */}
                <div style={{ display: "flex", gap: "20px" }}>
                    {/* Filters */}
                    <button style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer"
                    }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowFiltersUI(true);
                            setShowOverlay(true);
                        }}>
                        <Image src={"/imgs/ui/funnel.svg"} alt={"Filter"} width={40} height={40}></Image>
                    </button>
                    {/* Downloads */}
                    <a href="/files/resume_test_2020.pdf" download="Kuei Feng Tung Chris Resume 2020">
                        <Image src={"/imgs/ui/cloud-download.svg"} alt={"Download"} width={40} height={40}></Image>
                    </a>
                </div>
            </section>

            {/* Experience */}
            <section id="experience" style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                margin: "20px",
                width: "1080px",
                scrollMarginTop: "70px"
            }}>
                <h2>Experience</h2>
                <Item title={"Product Owner, Full Stack Developer"}
                    organization="RadSoftware"
                    orgHref="https://www.linkedin.com/company/96967938/"
                    orgImgSrc="/imgs/companies/radsoftware-logo.jpeg"
                    startDate="Jan 2024"
                    endDate="Present"
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
                        "PostgreSQL", "Socket.io", "HTML5", "CSS", "JavaScript", "Node.js", "CI/CD", "VSCode",
                        "react-qr-code", "jsonwebtoken", "Git", "GitHub", "Google Sign In Integration", "Google Cloud API",
                        "Remote collaboration", "Agile Methodologies", "Front-end Development", "Back-end Development",
                        "Intercultural Skills", "3rd Party API Integration", "Migration Strategies", "English", "Chinese",
                    ]}>
                </Item>
                <Item title={"Full Stack Developer"}
                    organization="Wistron ITS"
                    orgHref="https://www.linkedin.com/company/18242725/"
                    orgImgSrc="/imgs/companies/wits-logo.jpeg"
                    startDate="Sep 2020"
                    endDate="Aug 2023"
                    details={[
                        "Develop outward/client-facing web pages for insurance systems",
                        "Develop RESTful API endpoints for headless backend system",
                        "Develop internal facing web pages for insurance CRM systems (data CRUD, forms, tables, search, filter, pdfs)",
                        "Automate operating web applications for testing user flow of new web pages",
                        "Complete Agile weekly goals and occasionally exceeded KPI",
                        "Communicate effectively with SA to clarify specifications and avoid blockers",
                        "Review coworkers' commits to maintain quality control",
                        "Wrote JUnit and Selenium test cases as part of Quality Assurance",
                    ]}
                    tags={[
                        "Vue.js", "Java", "HTML5", "Spring Boot", "Spring", "Ajax", "SQL", "JavaServer Pages",
                        "JSTL", "RESTful API", "Jenkins", "JavaScript", "jQuery", "CSS", "Python",
                        "Git", "GitHub", "Maven", "Hibernate", "Tomcat", "JUnit", "Eclipse", "VSCode",
                        "DB2", "Sourcetree", "MSSQL", "TOAD", "Ant", "Selenium", "JIRA", "BitBucket",
                        "Teamwork", "English", "Chinese", "Front-end Development", "Back-end Development",
                        "CI/CD", "Agile Methodologies",
                    ]}>
                </Item>
                <Item title={"Full Stack Developer"}
                    organization="Pershing Technology Services Corporation"
                    orgHref="https://www.linkedin.com/company/53261667/"
                    orgImgSrc="/imgs/companies/ptsc-logo.png"
                    startDate="Apr 2020"
                    endDate="Aug 2020"
                    details={[
                        "Exceeded expectations by resolving bugs in Test-Driven-Development style ahead of deadlines",
                        "Delivered RESTful Java server with Spring in short Agile cycles",
                        "Developed back-end using MVC pattern, Java, Spring, Gradle, T-SQL, JPA, Apache POI, Tomcat, Docker, VirtualBox",
                        "Developed front-end using HTML5, Javascript, jQuery, React.js, AJAX, JSP, Mustache, CSS",
                        "Replaced legacy SWIFT system with RESTful Web API at 永豐銀行(永豐金融控股), Bank SinoPac (SinoPac Financial Holdings Company Limited)",
                    ]}
                    tags={[
                        "Java", "HTML5", "CSS", "Spring Boot", "Spring", "JavaScript", "RESTful API", "CI/CD",
                        "React.js", "Git", "GitHub", "Maven", "Hibernate", "Tomcat", "Ajax", "jQuery", "SQL",
                        "MSSQL", "Eclipse", "Teamwork", "English", "Chinese", "Front-end Development",
                        "Back-end Development", "CI/CD", "Agile Methodologies",
                    ]}>
                </Item>
            </section >

            <section id="education" style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                margin: "20px",
                width: "1080px",
                scrollMarginTop: "70px"
            }}>
                <h2>Education</h2>
                <Item title={"Graduate of Cross-Platform Java Engineer Bootcamp Oct 2019"}
                    organization="Institute for Information Industry (資訊工業策進會)"
                    orgHref={["https://www.ispan.com.tw/longterm/JJEEITT", "https://en.wikipedia.org/wiki/Institute_for_Information_Industry"]}
                    orgImgSrc="/imgs/companies/iii-logo.png"
                    startDate={"Oct 2019"}
                    endDate={"Apr 2020"}
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
                        "jQuery", "MSSQL", "HTML5", "CSS", "JavaScript", "JSTL",
                        "Hibernate", "JDBC", "Git", "GitHub", "Maven", "Tomcat",
                        "Python", "Agile Methodologies", "Front-end Development", "Back-end Development",
                        "Leadership", "Bootstrap", "Teamwork", "CI/CD", "Eclipse",
                    ]}>
                </Item>
                <Item title={"Bachelor of Arts (BA), International Relations and Affairs"}
                    organization="Northeastern University"
                    orgHref={["https://www.linkedin.com/company/5274/", "https://www.northeastern.edu/"]}
                    orgImgSrc="/imgs/companies/northeastern-university-logo.jpeg"
                    startDate={"Sep 2011"}
                    endDate={"Apr 2016"}
                    details={[
                        "Minors: Political Science, History, East Asian Studies",
                        "Activities and Societies: Archery, Taiwanese Student Association, Chinese Student Association, Barkada",
                        "Co-op internship at International Institute of New England (Boston) facilitating refugee resettlement by teaching adults English, cultural etiquette, and job development",
                        "Co-op internship at Land Mine Relief Fund in Cambodia curating museum displays, translating and recording audio tours, and teaching English ",
                    ]}
                    tags={[
                        "Teamwork", "International Relations", "Research", "Public Speaking", "English", "Administrative Assistance", "Grant Writing", "Translation", "Chinese", "Audio Recording", 
                        "Audio Tour Implementation", 
                    ]}>
                </Item>
                {/* northeastern-university-logo.jpeg */}
            </section>

            <section id="volunteering" style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                margin: "20px",
                width: "1080px",
                scrollMarginTop: "70px"
            }}>
                <h2>Volunteering</h2>
                <Item title={"Volunteer"}
                    organization="International Student Volunteers"
                    orgHref={["https://www.linkedin.com/company/1094789/", "https://isvolunteer.org/"]}
                    orgImgSrc="/imgs/companies/isv-logo.png"
                    startDate={"May 2012"}
                    endDate={"Jun 2012"}
                    details={[
                        "Facilitate learning of hygiene, disease, water safety, and English for children between ages 5 to 15",
                        "Playe team-building games to improve coordination and encourage cooperation",
                        "Construct homes to improve local sanitation and quality of life in Haitian immigrant community",
                        "Remove 2 ton of environmental hazards like glass shards, barbed wires, and trash from community",
                        "Revitalize houses with paint, cement floors, new wooden walls, and tile mosaics",
                    ]}
                    tags={[
                        "English", "Teamwork", "Teaching", "Administrative Assistance", "Communication", "Leadership",
                        "Construction", "Attention to Detail", "Concrete", "Manual Labor", "Shoring"
                    ]}>
                </Item>
            </section>

            <section id="honors" style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                margin: "20px",
                width: "1080px",
                scrollMarginTop: "70px"
            }}>
                <h2>Honors & Awards</h2>
                <Item title={"Silver & Bronze Duke of Edinburgh’s Awards"}
                    organization="Duke of Edinburgh Award"
                    orgHref={"https://www.dofe.org"}
                    orgImgSrc="/imgs/companies/dofe-logo.png"
                    startDate={"May 2010"}
                    endDate={"May 2011"}
                    details={[
                        "A flexible program(me) that helps to develop young people for life and work by mandating months of Physical Sports, Volunteering Community Service, Skills, and Expedition organizing concurrent to High School",
                        "Complete 400 hours of sports, journalistic writing, community service, and event planning in 9 months",
                    ]}
                    tags={[
                        "Photography", "Swimming", "Community Service", "Event planning", "Journalism"
                    ]}>
                </Item>
                <Item title={"1st Place Winner"}
                    organization="Stock Market Game, SIFMA Foundation"
                    orgHref={["https://www.stockmarketgame.org/", "https://www.linkedin.com/company/sifmafoundation/"]}
                    orgImgSrc="/imgs/companies/stock-market-game.png"
                    startDate={"Sept 2009"}
                    endDate={"Dec 2009"}
                    details={[
                        "The SIFMA Foundation is dedicated to fostering knowledge and understanding of the financial markets for individuals of all backgrounds [by providing] financial education programs and tools that strengthen economic opportunity across communities and increase individuals’ awareness of and access to the benefits of the global marketplace.",
                        "In SIFMA's Stock Market Game, my team of 2 traded our virtual $100,000 investment portfolio to compete for the largest portfolio after 4 months. In the simulation, my team won first place in Dec 2009 for the highest profile growth. Our strategy was to limit frequent trading and buy based on data.",
                    ]}
                    tags={[
                        "Quantitative Analysis", "Excel", "Communication"
                    ]}>
                </Item>
            </section>

            <Overlay showOverlay={showOverlay} closeOverlay={() => setShowOverlay(false)} dim={true}>
                {/* Filter by Tags */}
                <div style={{
                    width: "90vw",
                    height: "80vh",
                    border: "1px solid white",
                    borderRadius: "10px",
                    background: "black",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}>
                    <h2 style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px", }}>
                        Filter by Tags
                    </h2>
                    <p style={{ marginLeft: "20px", marginRight: "20px", }}>
                        Click on the tags below (sorted in alphabetical order) to highlight relevant Resume items.
                    </p>
                    {/* Tags */}
                    <div style={{
                        marginLeft: "20px",
                        marginRight: "20px",
                        marginBottom: "10px",
                        flexGrow: "1",
                        overflowY: "scroll",
                        borderTop: "1px lime solid",
                        borderBottom: "1px lime solid",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                    }}>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"#"}>
                            <Tag label={"3rd Party API Integration"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"A"}>
                            <Tag label={"Administrative Assistance"}></Tag>
                            <Tag label={"Agile Methodologies"}></Tag>
                            <Tag label={"Ajax"}></Tag>
                            <Tag label={"Ant"}></Tag>
                            <Tag label={"Attention to Detail"}></Tag>
                            <Tag label={"Audio Recording"}></Tag>
                            <Tag label={"Audio Tour Implementation"}></Tag>

                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"B"}>
                            <Tag label={"Back-end Development"}></Tag>
                            <Tag label={"BitBucket"}></Tag>
                            <Tag label={"Bootstrap"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"C"}>
                            <Tag label={"Chinese"}></Tag>
                            <Tag label={"CI/CD"}></Tag>
                            <Tag label={"Communication"}></Tag>
                            <Tag label={"Community Service"}></Tag>
                            <Tag label={"Concrete"}></Tag>
                            <Tag label={"Construction"}></Tag>
                            <Tag label={"CSS"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"D"}>
                            <Tag label={"DB2"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"E"}>
                            <Tag label={"Eclipse"}></Tag>
                            <Tag label={"English"}></Tag>
                            <Tag label={"Event planning"}></Tag>
                            <Tag label={"Excel"}></Tag>
                            <Tag label={"Express.js"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"F"}>
                            <Tag label={"Front-end Development"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"G"}>
                            <Tag label={"Git"}></Tag>
                            <Tag label={"GitHub"}></Tag>
                            <Tag label={"Google Cloud API"}></Tag>
                            <Tag label={"Google Sign In Integration"}></Tag>
                            <Tag label={"Grant Writing"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"H"}>
                            <Tag label={"Hibernate"}></Tag>
                            <Tag label={"HTML5"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"I"}>
                            <Tag label={"Intercultural Skills"}></Tag>
                            <Tag label={"International Relations"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"J"}>
                            <Tag label={"Java"}></Tag>
                            <Tag label={"JavaScript"}></Tag>
                            <Tag label={"JavaServer Pages"}></Tag>
                            <Tag label={"JDBC"}></Tag>
                            <Tag label={"Jenkins"}></Tag>
                            <Tag label={"JIRA"}></Tag>
                            <Tag label={"Journalism"}></Tag>
                            <Tag label={"jQuery"}></Tag>
                            <Tag label={"jsonwebtoken"}></Tag>
                            <Tag label={"JSTL"}></Tag>
                            <Tag label={"JUnit"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"K"}>
                            <TagNA></TagNA>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"L"}>
                            <Tag label={"Leadership"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"M"}>
                            <Tag label={"Manual Labor"}></Tag>
                            <Tag label={"Maven"}></Tag>
                            <Tag label={"Migration Strategies"}></Tag>
                            <Tag label={"MSSQL"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"N"}>
                            <Tag label={"NextJS"}></Tag>
                            <Tag label={"Node.js"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"O"}>
                            <TagNA></TagNA>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"P"}>
                            <Tag label={"Photography"}></Tag>
                            <Tag label={"PostgreSQL"}></Tag>
                            <Tag label={"Public Speaking"}></Tag>
                            <Tag label={"Python"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"Q"}>
                            <Tag label={"Quantitative Analysis"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"R"}>
                            <Tag label={"React.js"}></Tag>
                            <Tag label={"react-qr-code"}></Tag>
                            <Tag label={"Remote collaboration"}></Tag>
                            <Tag label={"Research"}></Tag>
                            <Tag label={"RESTful API"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"S"}>
                            <Tag label={"Selenium"}></Tag>
                            <Tag label={"Sequelize"}></Tag>
                            <Tag label={"Shoring"}></Tag>
                            <Tag label={"Socket.io"}></Tag>
                            <Tag label={"Sourcetree"}></Tag>
                            <Tag label={"Spring"}></Tag>
                            <Tag label={"Spring Boot"}></Tag>
                            <Tag label={"SQL"}></Tag>
                            <Tag label={"Swimming"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"T"}>
                            <Tag label={"Teaching"}></Tag>
                            <Tag label={"Teamwork"}></Tag>
                            <Tag label={"TOAD"}></Tag>
                            <Tag label={"Tomcat"}></Tag>
                            <Tag label={"Translation"}></Tag>
                            <Tag label={"Typescript"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"U"}>
                            <TagNA></TagNA>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"V"}>
                            <Tag label={"VSCode"}></Tag>
                            <Tag label={"Vue.js"}></Tag>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"W"}>
                            <TagNA></TagNA>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"X"}>
                            <TagNA></TagNA>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"Y"}>
                            <TagNA></TagNA>
                        </FilterByTagsAlphabetDisplay>
                        <FilterByTagsAlphabetDisplay alphabetLetter={"Z"}>
                            <TagNA></TagNA>
                        </FilterByTagsAlphabetDisplay>
                    </div>
                    {/* Close overlay */}
                    <div style={{ display: "flex", gap: "20px" }}>
                        <button
                            onClick={() => {
                                setShowOverlay(false);
                            }}
                            style={{
                                display: "flex", justifyContent: "center", alignItems: "center",
                                border: "1px solid lime",
                                borderRadius: "10px",
                                background: "rgb(30, 40, 30)",
                                marginLeft: "20px",
                                marginBottom: "20px",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                flexBasis: "50%"
                            }}>
                            <Image src={"/imgs/ui/check-mark.svg"} alt={"Check mark"} width={30} height={30}></Image>
                        </button>
                        <button
                            onClick={() => {
                                setShowOverlay(false);
                                setTagFilter([]);
                            }}
                            style={{
                                display: "flex", justifyContent: "center", alignItems: "center",
                                border: "1px solid lime",
                                borderRadius: "10px",
                                background: "rgb(30, 40, 30)",
                                marginRight: "20px",
                                marginBottom: "20px",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                flexBasis: "50%"
                            }}>
                            <Image src={"/imgs/ui/trash-can.svg"} alt={"Cancel"} width={30} height={30}></Image>
                        </button>
                    </div>
                </div>
            </Overlay>
        </article>
    );
}

