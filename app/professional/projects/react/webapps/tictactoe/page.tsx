import { Breadcrumbs } from "@/components/Breadcrumbs";
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
        </>
    );
}
