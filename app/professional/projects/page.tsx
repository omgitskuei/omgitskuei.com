import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";
import Image from "next/image"

export default function Page() {

    const Project = ({
        imgAlt,
        imgSrc,
        title,
        url,
        quicklinks
    }: {
        imgAlt: string,
        imgSrc: string,
        title: string,
        url: string,
        quicklinks: {
            label: string,
            url: string
        }[]
    }) => {
        const borderRadius = "10px";
        const height = "160px";

        return (
            <div style={{
                display: "flex",
                border: "1px solid grey",
                borderRadius: borderRadius,
                boxShadow: "-5px 7px 5px grey"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: height,
                    width: "100px",
                    border: "none", background: "white",
                    borderTopLeftRadius: borderRadius,
                    borderBottomLeftRadius: borderRadius
                }}>
                    <div>
                        <Image src={imgSrc} alt={imgAlt}
                            // layout="responsive"
                            width={65} height={65}>
                        </Image>
                    </div>
                    <div>
                        <Link href={url}>
                            {title}
                        </Link>
                    </div>
                </div>
                <div style={{
                    background: "lightgrey",
                    height: height,
                    width: "200px",
                    borderTopRightRadius: borderRadius,
                    borderBottomRightRadius: borderRadius,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "10px"
                }}>
                    <div>
                        {
                            quicklinks.length !== 0 ?
                                <h4>Highlights</h4>
                                :
                                <></>
                        }
                        <ul style={{ paddingLeft: "10px" }}>
                            {
                                quicklinks.map((project, index) => {
                                    return (
                                        <li>
                                            <Link href={project.url}>
                                                {project.label}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <Link style={{ alignSelf: "end" }} href={url}>All projects</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Breadcrumbs separator="/"></Breadcrumbs>
            <h1>Projects</h1>
            <section style={{ display: "flex" }}>
                <Project imgAlt={"React logo"} imgSrc={"/professional/projects/react.png"}
                    title={"React"} url={"/professional/projects/react"}
                    quicklinks={[
                        // {
                        //     label: "Web app: Calculator",
                        //     url: "/professional/projects/react/webapps/calculator"
                        // },
                        {
                            label: "web app: Chess",
                            url: "/professional/projects/react/webapps/chess"
                        },
                        // {
                        //     label: "Web app: Dice roll",
                        //     url: "/professional/projects/react/webapps/diceroll"
                        // },
                        {
                            label: "Web app: Terminal",
                            url: "/professional/projects/react/webapps/terminal"
                        },
                        // {
                        //     label: "Web app: Tic Tac Toe",
                        //     url: "/professional/projects/react/webapps/tictactoe"
                        // },
                        {
                            label: "Web app: To-do List",
                            url: "/professional/projects/react/webapps/todolist"
                        },
                    ]}>
                </Project>
            </section>

        </>
    );
}
