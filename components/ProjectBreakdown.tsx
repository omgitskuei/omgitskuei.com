'use client'

import { ExpandableBox } from "./ExpandableBox";

export const ProjectBreakdown = ({
    projectName,
    createDate,
    updateDate,
    summary,
    goal,
    technologyUsed,
    scope,
    limitations
}: {
    projectName: string,
    createDate: string,
    updateDate: string,
    summary: string[],
    goal: string,
    technologyUsed: string[],
    scope: string[],
    limitations: string[]

}) => {


    return (
        <div style={{
            width: "100%",
            // border: "1px solid red" 
        }}>
            {/* <h2>Project Breakdown</h2> */}
            <br />
            <div>
                <label htmlFor="projectName">Project Name: </label>
                <span>{projectName}</span>
            </div>
            <div>
                <label htmlFor="createDate">Created Date: </label>
                <span>{createDate}</span>
            </div>
            <div>
                <label htmlFor="updateDate">Last Updated: </label>
                <span>{updateDate}</span>
            </div>
            <br />
            <div>
                {
                    summary.map((string, index) => {
                        return (
                            <p key={index}>{string}</p>
                        )
                    })
                }
            </div>
            <ExpandableBox header={"Goal"}>
                <p>{goal}</p>
            </ExpandableBox>
            <ExpandableBox header={"Toolkit"}>
                <ul style={{ columnCount: 2, columnGap: "1em", listStylePosition: "inside" }}>
                    {
                        technologyUsed.map((item, index) => {
                            return (
                                <li key={`${item}_${index}`}>{item}</li>
                            )
                        })
                    }
                </ul>
            </ExpandableBox>
            <ExpandableBox header={"Scope"}>
                {
                    scope.map((string, index) => {
                        return (
                            <p key={index}>{string}</p>
                        )
                    })
                }
            </ExpandableBox>
            <ExpandableBox header={"Limitations"}>
                {
                    limitations.map((string, index) => {
                        return (
                            <p key={index}>{string}</p>
                        )
                    })
                }
            </ExpandableBox>
            <br />
        </div>
    )
}