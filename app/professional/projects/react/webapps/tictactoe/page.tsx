import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectBreakdown } from "@/components/ProjectBreakdown";
import TicTacToe from "@/components/TicTacToe";
import Link from "next/link";


export default function Page() {
    return (
        <>
            <Breadcrumbs separator="/"
                items={[
                    {
                        label: "Professional",
                        href: "/professional"
                    },
                    {
                        label: "Projects",
                        href: "/professional/projects"
                    },
                    {
                        label: "React",
                        href: "/professional/projects/react"
                    },
                    {
                        label: "Web Apps",
                        href: "/professional/projects/react/webapps"
                    },
                    {
                        label: "Dice Roll",
                        href: "/professional/projects/react/webapps/tictactoe"
                    },
                ]}>
            </Breadcrumbs>
            <h1>Tic Tac Toe</h1>

            <section style={{
                marginLeft: "10%", marginRight: "10%", alignSelf: "stretch",
                // border: "1px solid blue"
            }}>
                <ProjectBreakdown projectName={"Tic Tac Toe"}
                    createDate="2026/07/15"
                    updateDate="2026/07/15"
                    technologyUsed={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Next.js"
                    ]}
                    goal={"Practice using frontend technologies to create something in a webpage; a configurable tic-tac-toe game that can be played against hot-seat style."}
                    summary={[
                        "The showcase is a tic-tac-toe game where many of the rules of the original game like player count, board size, etc, can be modified.",
                    ]}
                    scope={[
                        "This game implements the rules and gameplay loop of the original Tic Tac Toe game, but also keeps the data structures and values dynamic.",
                    ]}
                    limitations={[
                        "The game will be hot-seat with no way to play with multiplayer over the network, no lobby, no matchmaking, and the game has no computer opponent for the player to play against.",
                    ]}>
                </ProjectBreakdown>
            </section>

            <section style={{ marginLeft: "10%", marginRight: "10%", alignSelf: "stretch" }}>
                <TicTacToe></TicTacToe>
            </section>
        </>
    );
}
