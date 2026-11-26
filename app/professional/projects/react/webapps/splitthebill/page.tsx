import { Breadcrumbs } from "@/components/Breadcrumbs";

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
                        label: "Split the Bill",
                        href: "/professional/projects/react/webapps/splitthebill"
                    },
                ]}>
            </Breadcrumbs>
            <h1>Split the bill</h1>
            WIP...
            {/* User input data */}
            <h2>Enter bill information</h2>
            WIP...
            {/* Button to validate and calculate the bill breakdown */}
            <button>Calculate!</button>
            WIP...
            {/* Display bill breakdown */}
            <h2>Bill Breakdown</h2>
            WIP...
        </>
    );
}
