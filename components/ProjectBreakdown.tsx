'use client'

export const ProjectBreakdown = ({
    projectName,
    createDate,
    updateDate,
    technologyUsed,
    goal,
    summary,
    scope,
    limitations
}: {
    projectName: string,
    createDate: string,
    updateDate: string,
    technologyUsed: string[],
    goal: string,
    summary: string[],
    scope: string[],
    limitations: string[]

}) => {

    const Section = ({
        title,
        children = <></>
    }: {
        title: string,
        children?: JSX.Element[] | JSX.Element
    }) => {
        return (<div>
            <h4>{title}</h4>
            {children}
        </div>
        )
    };

    return (
        <section>
            <div>
                <h3>
                    Project Breakdown
                </h3>
            </div>
            <Section title="Project Name:">
                <p>
                    {projectName}
                </p>
            </Section>
            <Section title="Create Date:">
                <p>
                    {createDate}
                </p>
            </Section>
            <Section title="Last Updated:">
                <p>
                    {updateDate}
                </p>
            </Section>
            <Section title="Toolkit:">
                <p>
                    <ul>
                        {
                            technologyUsed.map((item, index) => {
                                return (
                                    <li key={`${item}_${index}`}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </p>
            </Section>
            <Section title="Goal:">
                <p>
                    {goal}
                </p>
            </Section>
            <Section title="Summary:">
                {
                    summary.map((string, index) => {
                        return (
                            <p key={index}>{string}</p>
                        )
                    })
                }
            </Section>
            <Section title={"Scope:"}>
                {
                    scope.map((string, index) => {
                        return (
                            <p key={index}>{string}</p>
                        )
                    })
                }
            </Section>
            <Section title={"Limitations"}>
                {
                    limitations.map((string, index) => {
                        return (
                            <p key={index}>{string}</p>
                        )
                    })
                }
            </Section>
        </section>
    )
}