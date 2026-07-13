'use client'

import { ExpandableBox } from "./ExpandableBox";

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
        <>
            <h2>Project Breakdown</h2>
            <div>
                <label htmlFor="projectName">Project Name: </label>
                <span>{projectName}</span>
            </div>
            <div>
                <label htmlFor="createDate">Create Date: </label>
                <span>{createDate}</span>
            </div>
            <div>
                <label htmlFor="updateDate">Last Updated: </label>
                <span>{updateDate}</span>
            </div>


            <Section title="Toolkit:">
                <p>
                    <ul style={{ columnCount: 2, columnGap: "1em", listStylePosition: "inside"}}>
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
        </>
    )
}