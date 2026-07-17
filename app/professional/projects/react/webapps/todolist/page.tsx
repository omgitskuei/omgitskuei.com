'use client'

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectBreakdown } from "@/components/ProjectBreakdown";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


export default function Page() {

    interface TodolistItem {
        done: boolean,
        text: string,
        deadlineDate: string,
        deadlineTime: string,
        priority: string,
        tags: string[]
    }

    const [tags, setTags] = useState<string[]>();


    // 1. Initialize state as an empty array (perfect server-client match)
    const [todolist, setTodolist] = useState<TodolistItem[]>([]);

    // 2. Fetch the data only *after* mounting has successfully completed
    useEffect(() => {
        const localStorage_todolist = localStorage.getItem("todolist");
        if (localStorage_todolist) {
            setTodolist(JSON.parse(localStorage_todolist));
        }
    }, []);



    /**
     * Save todolist as is into localStorage
     */
    function handleSave() {
        if (typeof window !== "undefined") {
            localStorage.setItem("todolist", JSON.stringify(todolist))
        }
    }
















    const TodoItem = ({ todo }: {
        todo: TodolistItem,
    }) => {
        // It is perfectly safe to use useState here!
        const [editable, setEditable] = useState<boolean>(false);

        return (
            <div>
                <input type="checkbox" />
                <label style={{ display: editable ? "none" : "inline" }}>{todo.text}</label>
                <input style={{ display: editable ? "inline" : "none" }} type="text" defaultValue={todo.text} />
                <button onClick={() => {
                    if (editable) {
                        handleSave();
                    }
                    setEditable(!editable);
                }}>
                    {editable ? "OK" : "Edit"}
                </button>
                <button>Trash</button>
            </div>
        );
    };


    /**
     * 
     * @param formData 
     */
    const handleSubmit = (formData: FormData) => {
        // 1. Extract data easily from the FormData object
        const newEntry = Object.fromEntries(formData.entries());

        // 2. Safely read, push, and write to localStorage
        const existingData = JSON.parse(localStorage.getItem('todolist') || '[]');
        existingData.push(newEntry);
        localStorage.setItem('todolist', JSON.stringify(existingData));

        alert('Data saved successfully!');

        // 3. Reset the form natively (if desired)
        // Note: Since this is standard HTML, you can target the event creator
        (document.getElementById('my-form') as HTMLFormElement)?.reset();
    };

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
            <section style={{
                marginLeft: "10%", marginRight: "10%", alignSelf: "stretch",
            }}>
                <ProjectBreakdown projectName={"To-Do List"}
                    createDate="2026/07/16"
                    updateDate="2026/07/16"
                    technologyUsed={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Next.js"
                    ]}
                    goal={"..."}
                    summary={[
                        "...",
                    ]}
                    scope={[
                        "...",
                    ]}
                    limitations={[
                        "...",
                    ]}>
                </ProjectBreakdown>
            </section>

            <section style={{ marginLeft: "10%", marginRight: "10%", alignSelf: "stretch" }}>
                {/* Menu bar up top */}
                <div style={{
                    minWidth: "320px",
                    alignSelf: "stretch",
                    border: "1px solid grey",
                    // maxWidth: "320px",
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.5)",
                }}>
                    <button onClick={() => {
                        handleSave();
                    }}>
                        💾Save
                    </button>
                    <button onClick={() => {
                        setTodolist([
                            ...todolist,
                            {
                                done: false,
                                text: "wow",
                                deadlineDate: "",
                                deadlineTime: "",
                                priority: "",
                                tags: []
                            }
                        ]);
                    }}>
                        ➕New
                    </button>
                    <button onClick={() => {
                        setTodolist([]);
                    }}>
                        🗑️Clear
                    </button>

                </div>
                {/* Display list */}
                <div style={{
                    minWidth: "320px",
                    alignSelf: "stretch",
                    border: "1px solid grey",
                    // maxWidth: "320px",
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.5)",
                }}>
                    {
                        todolist.map((todo, index) => {
                            return (
                                <TodoItem todo={todo}></TodoItem>
                            );
                        })
                    }
                </div>
            </section>




            <section>
                <form onSubmit={() => {

                }}>
                    {/* Text - required */}
                    <label htmlFor="newItemText">*required</label>
                    <input type="text" id="newItemText" maxLength={150} required />
                    {/* Deadline */}
                    <div>
                        <label htmlFor="">Deadline:</label>
                        <input type="date" name="" id="" />
                        <input type="time" name="" id="" />
                    </div>
                    {/* Priority */}
                    <div>
                        <label htmlFor="">Priority: </label>
                        <select name="" style={{}}>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>
                    {/* Tags */}
                    {/* <div>

                    </div> */}
                    <div>
                        {/* Add */}
                        <button type="submit" style={{ width: "50px" }} onClick={handleSave}>+Add</button>
                        {/* Clear */}
                        <button type="reset" style={{ width: "50px" }}>Clear</button>
                    </div>
                </form>
            </section>

            {/* 
            <form id="my-form"
                action={handleSubmit}
                className="flex flex-col gap-4 max-w-md p-4">
                <div>
                    <label htmlFor="username" className="block font-bold">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        className="border p-2 w-full"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block font-bold">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="border p-2 w-full"
                    />
                </div>

                <button type="submit" className="bg-blue-600 text-white p-2 rounded">
                    Submit
                </button>
            </form> */}



            <output>
                {
                    todolist.map((item, index) => {
                        return (
                            <div key={`${index}`}>{item.text}</div>
                        )
                    })
                }
            </output>

        </>
    );
}
