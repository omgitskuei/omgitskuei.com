import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExpandableBox } from "@/components/ExpandableBox";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import webappDicerollPreview from "@/public/professional/projects/react/webapps/diceroll/preview.png";
import webappTerminalPreview from "@/public/professional/projects/react/webapps/terminal/preview.png";
import webappTictactoePreview from "@/public/professional/projects/react/webapps/tictactoe/preview.png";
import webappTodolistPreview from "@/public/professional/projects/react/webapps/todolist/preview.png";

export default function Page() {
    // Constants
    const gameTileSize = 200;

    const FilterSet = ({
        header,
        type,
        options,
    }: {
        header: string,
        type: "radio" | "checkbox",
        options: {
            label: string,
            value: string
        }[]
    }) => {
        return (
            <fieldset style={{ display: "flex", gap: "10px", padding: "16px 10px", flexWrap: "wrap" }}>
                <legend style={{ paddingLeft: "5px", paddingRight: "5px" }}>{header}</legend>
                {
                    options.map((option) => {
                        const optionKey = `fieldset_${header.toLowerCase()}_${type}_${option.value}`;
                        const name = `fieldset_${header.toLowerCase()}`;
                        return (
                            <div key={optionKey} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <input type={type} name={name} id={optionKey} value={option.value} />
                                <label htmlFor={optionKey}>{option.label}</label>
                            </div>
                        );
                    })
                }
            </fieldset>
        );
    };

    const SearchResult = ({
        header,
        imgSrc,
        link,
        summary,
        tags,
        wip = false
    }: {
        header: string,
        imgSrc: StaticImageData,
        link: string,
        summary: string,
        tags: string[],
        wip?: boolean
    }) => {
        return (
            <div style={{
                display: "flex",
                // flexDirection: "column",
                border: "1px solid black",
            }}
                className="responsive-container">
                {/* Clickable image preview that opens a dialog with a fullsize image */}
                <div style={{
                    height: "100px",
                    width: "50%",
                    border: "1px solid red",

                    // minHeight: "311px",
                    aspectRatio: `${imgSrc.width} / ${100}px`,
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                    background: `center / contain no-repeat url(${imgSrc})`,
                }}>
                    {
                            // <Image src={imgSrc} width={3000} height={160}
                            //     // placeholder="blur"
                            //     // blurDataURL=... image src, see https://blurred.dev/?
                            //     // layout="responsive"
                            //     alt={`${header} preview`}>
                            // </Image>
                            /* {
                            :
                            <Image src={imgSrc}
                                // style={{
                                //     width: "300px",
                                //     height: "auto"
                                // }}
                                // width={250} height={100}
                                // placeholder="blur"
                                // blurDataURL=... image src, see https://blurred.dev/?
                                // layout="responsive"
                                alt={`${header} preview`}>
                            </Image>
                    } */}
                </div>
                {/* Text */}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    {/* Name */}
                    <Link href={link}>
                        {
                            !wip ?
                                <>{header}</>
                                :
                                <>
                                    👷🚧<s>
                                        {header}
                                    </s>
                                </>
                        }
                    </Link>
                    {/* Summary */}
                    <div>
                        <p>
                            {summary}
                        </p>
                    </div>
                    {/* Tags */}
                    <div>
                        {
                            tags.map(tag => {
                                return <>{tag}</>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

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
            {/* Filter */}
            <section style={{
                // width: "80%",
                marginTop: "10px",
                alignSelf: "stretch", marginLeft: "10%", marginRight: "10%",
            }}>
                <ExpandableBox header={"Filter"}>
                    <FilterSet header={"Category"} type={"checkbox"} options={[
                        {
                            label: "Productivity",
                            value: "productivity"
                        },
                        {
                            label: "Utilities",
                            value: "utilities"
                        },
                        {
                            label: "Social",
                            value: "social"
                        },
                        {
                            label: "Shopping",
                            value: "shopping"
                        },
                        {
                            label: "Art",
                            value: "art"
                        },
                        {
                            label: "Music",
                            value: "music"
                        },
                        {
                            label: "Health",
                            value: "health"
                        },
                        {
                            label: "Fitness",
                            value: "fitness"
                        },
                        {
                            label: "Entertainment",
                            value: "entertainment"
                        },
                        {
                            label: "Education",
                            value: "education"
                        },
                        {
                            label: "Finance",
                            value: "finance"
                        }
                    ]}>
                    </FilterSet>
                    <br />
                    <FilterSet header={"Sort"} type={"radio"} options={[
                        {
                            label: "Year",
                            value: "year"
                        },
                        {
                            label: "Difficulty",
                            value: "difficulty"
                        },
                        {
                            label: "Name",
                            value: "name"
                        }
                    ]}>
                    </FilterSet>
                    <br />
                    <div style={{
                        marginTop: "5px",
                        display: "flex", gap: "26px", justifyContent: "space-between"
                    }}>
                        <button style={{
                            flexGrow: "1",
                            height: "32px"
                        }}>Search</button>
                        <button style={{
                            flexGrow: "1",
                            height: "26px"
                        }}>Clear</button>
                    </div>
                </ExpandableBox>
            </section>




            {/* TESTING */}
            <div className="responsive-container" style={{
                border: "1px solid red",
                alignSelf: "stretch", marginLeft: "10%", marginRight: "10%",
            }}>
                <div className="card" style={{ border: "1px solid blue" }}>Item 1</div>
                <div className="card" style={{ border: "1px solid green" }}>Item 2</div>
                <div className="card" style={{ border: "1px solid black" }}>Item 3</div>
            </div>






            {/* Results */}
            <section style={{
                marginTop: "10px",
                alignSelf: "stretch", marginLeft: "10%", marginRight: "10%",
                background: "white",
                display: "flex", flexDirection: "column", gap: "20px"
            }}>
                <h2>Results</h2>

                <Link href={"/professional/projects/react/webapps/bubblewrap"}>
                    👷🚧<s>
                        {"Bubble Wrap"}
                    </s>
                </Link>
                <Link href={"/professional/projects/react/webapps/calculator"}>
                    👷🚧<s>
                        {"Calculator"}
                    </s>
                </Link>
                <Link href={"/professional/projects/react/webapps/chess"}>
                    👷🚧<s>
                        {"Chess"}
                    </s>
                </Link>
                <Link href={"/professional/projects/react/webapps/diceroll"}>
                    👷🚧<s>
                        {"Dice Roll"}
                    </s>
                </Link>
                <SearchResult header={"Dice Roll"} wip={true}
                    summary={"Under construction..."}
                    // imgSrc={"/professional/projects/react/webapps/diceroll/preview.png"}
                    imgSrc={webappDicerollPreview}
                    link={"/professional/projects/react/webapps/diceroll"}
                    tags={[
                        "art",
                        "entertainment",
                        "social",
                    ]}>
                </SearchResult>

                <SearchResult header={"Piggybank"}
                    summary={"An extremely easy to use and straightforward piggy bank for tracking your savings without over-engineered features like stats, predictions, telemetry, and user management"}
                    imgSrc={webappTerminalPreview}
                    link={"/professional/projects/react/webapps/piggybank"}
                    tags={[
                        "finance",
                        "utilities",
                    ]}>
                </SearchResult>

                <SearchResult header={"Split the bill"} wip={true}
                    summary={"Under construction..."}
                    imgSrc={webappDicerollPreview}
                    link={"/professional/projects/react/webapps/splitthebill"}
                    tags={[
                        "finance",
                        "productivity",
                        "shopping",
                        "social",
                    ]}>
                </SearchResult>

                <SearchResult header={"Terminal"}
                    summary={"An emulation of a Linux command-line interface (CLI) window inside a web browser"}
                    imgSrc={webappTerminalPreview}
                    link={"/professional/projects/react/webapps/terminal"}
                    tags={[
                        "utilities",
                    ]}>
                </SearchResult>

                <SearchResult header={"Tic Tac Toe"} wip={true}
                    summary={"Under construction..."}
                    imgSrc={webappTictactoePreview}
                    link={"/professional/projects/react/webapps/tictactoe"}
                    tags={[
                        "entertainment",
                    ]}>
                </SearchResult>
                <SearchResult header={"To-Do List"}
                    summary={"Under construction..."}
                    imgSrc={webappTodolistPreview}
                    link={"/professional/projects/react/webapps/todolist"}
                    tags={[
                        "productivity",
                    ]}>
                </SearchResult>


                {/* <SearchResult header={"To-Do List"} wip={true}
                    summary={"Under construction..."}
                    imgSrc={"/professional/projects/react/webapps/todolist/preview.png"}
                    link={"/professional/projects/react/webapps/todolist"}
                    tags={[
                        "art",
                        "education",
                        "entertainment",
                        "fitness",
                        "finance",
                        "health",
                        "music",
                        "productivity",
                        "shopping",
                        "social",
                        "utilities",
                    ]}>
                </SearchResult> */}
            </section>
        </>
    );
}
