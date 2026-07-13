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
                        label: "To-Do List",
                        href: "/professional/projects/react/webapps/todolist"
                    },
                ]}>
            </Breadcrumbs>
            <h1>To-Do List</h1>
            <section>

            </section>
        </>
    );
}
