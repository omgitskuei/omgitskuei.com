import { Breadcrumbs } from "@/components/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    // Constants
    const gameTileSize = 200;

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
                ]}>
            </Breadcrumbs>
            <h1>Web Apps</h1>
            <Link href={"/professional/projects/react/webapps/bubblewrap"}>
                {"Bubble Wrap"}
            </Link>
            <Link href={"/professional/projects/react/webapps/calculator"}>
                {"Calculator"}
            </Link>
            <Link href={"/professional/projects/react/webapps/chess"}>
                {"Chess"}
            </Link>
            <Link href={"/professional/projects/react/webapps/diceroll"}>
                {"Dice Roll"}
            </Link>
            <Link href={"/professional/projects/react/webapps/tictactoe"}>
                {"Tic Tac Toe"}
            </Link>
            <Link href={"/professional/projects/react/webapps/todolist"}>
                {"To-Do List"}
            </Link>
        </>
    );
}
