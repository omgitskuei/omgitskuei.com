import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExpandableBox } from "@/components/ExpandableBox";
import Image from "next/image";
import Link from "next/link";

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
        imgLink,
        link,
        tags
    }: {
        header: string,
        imgLink: string,
        link: string,
        tags: string[]
    }) => {
        return (
            <div style={{ display: "flex", }}>
                {/* Clickable image preview that opens a dialog with a fullsize image */}
                <Image src={imgLink} alt={""} width={250} height={100}
                // layout="responsive"
                ></Image>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    {/* Name */}
                    <Link href={link}>
                        {header}
                    </Link>
                    {/* Summary */}
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repudiandae nesciunt consectetur?
                        Modi a unde ex quibusdam voluptates, illum porro.
                        Quaerat explicabo porro, harum optio ipsum delectus magnam sapiente non commodi animi aperiam neque, hic vitae eaque.
                        Quos itaque, voluptate vero porro est dolor consectetur dicta quia debitis dolorem alias perferendis sed dolores.
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
            {/* Results */}
            <section style={{
                marginTop: "10px",
                alignSelf: "stretch", marginLeft: "10%", marginRight: "10%",
                background: "white",
                display: "flex", flexDirection: "column"
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
                <Link href={"/professional/projects/react/webapps/terminal"}>
                    {"Terminal"}
                </Link>
                <Link href={"/professional/projects/react/webapps/tictactoe"}>
                    👷🚧<s>
                        {"Tic Tac Toe"}
                    </s>
                </Link>


                <SearchResult header={"To-Do List"}
                    imgLink={"/professional/projects/react/webapps/image.png"}
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
                </SearchResult>
            </section>
        </>
    );
}
