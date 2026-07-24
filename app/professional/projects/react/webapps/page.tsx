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

            {/* Filter */}
            <section style={{
                alignSelf: "stretch", marginLeft: "10%", marginRight: "10%",
                marginTop: "10px",
                background: "white"
            }}>
                <h2>Filter</h2>

                <h3>Categories</h3>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Productivity</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Utilities</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Social</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Shopping</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Art</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Music</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Health & Fitness</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Entertainment</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Education</label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Finance</label>
                </div>

                <h3>Sort</h3>
                <fieldset>
                    <legend>Sort</legend>
                    <div>
                        <input type="radio" name="radioFilterSort" id="radioFilterSortYear" value={"Year"} />
                        <label htmlFor="radioFilterSortYear">Year</label>
                    </div>
                    <div>
                        <input type="radio" name="radioFilterSort" id="radioFilterSortDifficulty" value={"Difficulty"} />
                        <label htmlFor="radioFilterSortYear">Difficulty</label>
                    </div>
                    <div>
                        <input type="radio" name="radioFilterSort" id="radioFilterSortName" value={"Name"} />
                        <label htmlFor="radioFilterSortYear">Name</label>
                    </div>
                </fieldset>
                
                

            </section>


            <section style={{
                alignSelf: "stretch", marginLeft: "10%", marginRight: "10%",
                marginTop: "10px",
                background: "white",
                display: "flex", flexDirection: "column"
            }}>
                <h2>Results</h2>

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
                <Link href={"/professional/projects/react/webapps/terminal"}>
                    {"Terminal"}
                </Link>
                <Link href={"/professional/projects/react/webapps/tictactoe"}>
                    {"Tic Tac Toe"}
                </Link>
                <Link href={"/professional/projects/react/webapps/todolist"}>
                    {"To-Do List"}
                </Link>
            </section>
        </>
    );
}
