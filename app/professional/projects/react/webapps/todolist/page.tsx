'use client'

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectBreakdown } from "@/components/ProjectBreakdown";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "./page.module.css";


export default function Page() {

    // Fetch the data only *after* mounting has successfully completed
    useEffect(() => {
        // Tasks
        const ls_tasks = localStorage.getItem("tasks");
        if (ls_tasks) {
            setTasks(JSON.parse(ls_tasks));
        }

        // TaskLists
        const ls_tasklists = localStorage.getItem("tasklists");
        if (ls_tasklists) {
            setTaskLists(JSON.parse(ls_tasklists));
        }
    }, []);

    // States for tasks
    interface Task {
        taskListId: number,
        done: boolean,
        text: string,
        deadlineDate: string,
        deadlineTime: string,
        priority: string,
        tags: string[]
    };
    const [tasks, setTasks] = useState<Task[]>([]);

    // States for taskLists
    interface TaskList {
        id: number,
        name: string,
    };
    // const selectedListIndex = useRef<number>(0);
    const [taskLists, setTaskLists] = useState<TaskList[]>([
        {
            id: 0,
            name: "Default list"
        },
        {
            id: 1,
            name: "Shopping list"
        },
        {
            id: 2,
            name: "Chore list"
        },
        {
            id: 3,
            name: "Movies"
        },
    ]);
    const [activeTaskListId, setActiveTasklistId] = useState<number>(0);

    // Dialog for adding new list
    const newListDialogRef = useRef<HTMLDialogElement>(null);







    const [tags, setTags] = useState<string[]>();










    const TopbarButtonStyle: React.CSSProperties = {
        padding: "0px",
        margin: "0px",
        borderRadius: "0px",
        background: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        fontSize: "13px",
    };


    /**
     * Open the Create new list dialog
     */
    function handleCreateList() {
        // Show dialog window
        if (newListDialogRef.current) {
            newListDialogRef.current.showModal();
        }
    }

    /**
     * Delete the selected todolist
     * @returns
     */
    function handleDeleteList() {
        // Prevent deleting if the list is already empty
        if (taskLists.length === 0) {
            alert("There's no lists to delete!");
            return;
        }

        // Get current selected option
        const selectAllTodolists = document.getElementById("selectAllTodolists") as HTMLSelectElement;
        const copyOfTodolists = [...taskLists];
        const indexToRemove = selectAllTodolists.selectedIndex;
        const poppedItem = copyOfTodolists.splice(indexToRemove, 1)[0];     // Mutated by .splice()
        // console.log(`Updated taskLists: ${copyOfTodolists}, removing this todolist ${poppedItem}`);
        // Delete the item at the currently selected index
        setTaskLists(copyOfTodolists);
    };

    /**
     * Save todolist as is into localStorage
     */
    function handleSave() {
        if (typeof window !== "undefined") {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    };

    /**
     * New todolist as is into localStorage
     */
    function handleNewTask() {
        const newList: Task[] = [
            ...tasks,
            {
                taskListId: 0,
                done: false,
                text: "New task",
                deadlineDate: "",
                deadlineTime: "",
                priority: "",
                tags: [],
            }
        ];
        setTasks(newList);
        if (typeof window !== "undefined") {
            localStorage.setItem("tasks", JSON.stringify(newList));
        }
    };

    /**
     * Clear todolist as is into localStorage
     */
    function handleClear() {
        setTasks([]);
        if (typeof window !== "undefined") {
            localStorage.setItem("tasks", JSON.stringify([]));
        }
    };












    const Task = ({
        todo
    }: {
        todo: Task
    }) => {
        // It is perfectly safe to use useState here!
        const [editable, setEditable] = useState<boolean>(false);
        const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

        return (
            <div style={{
                // padding: "5px",
                border: "1px solid #6666665e",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                height: "35px",
                paddingLeft: "10px"
            }}>



                {/* Done/Not-Done */}
                <input style={{ transform: "scale(1.2)" }} type="checkbox" />

                {/* Text and text's edit/confirm */}
                <div>
                    <label style={{ display: editable ? "none" : "inline-block", width: "200px" }}>
                        {todo.text}
                    </label>
                    <input style={{ display: editable ? "inline" : "none", width: "200px" }}
                        type="text"
                        defaultValue={todo.text} />
                    <button

                        onClick={() => {
                            if (editable) {
                                handleSave();
                            }
                            setEditable(!editable);
                        }}>
                        {editable ? "OK" : "✏️"}
                    </button>
                </div>

                {/* Deadline */}
                <div>
                    {/* <label htmlFor="">Deadline:</label> */}
                    <input type="date" name="" id="" />
                    <input type="time" name="" id="" />
                </div>

                {/* Priority */}
                <div>
                    {/* <label htmlFor="">Priority: </label> */}
                    <select name="" style={{}}>
                        <option value="" selected disabled>--Priority--</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                </div>





                {/* <button style={{
                    borderTop: "none",
                    borderBottom: "none",
                    borderLeft: "black 1px solid",
                    borderRight: "none",
                    flexBasis: "35px",
                    background: "red",
                    cursor: "pointer",
                    ...TopbarButtonStyle
                }}
                    onClick={() => {
                        alert("UP")
                    }}>
                    🔼
                </button>
                <button style={{
                    borderTop: "none",
                    borderBottom: "none",
                    borderLeft: "black 1px solid",
                    borderRight: "none",
                    flexBasis: "35px",
                    cursor: taskLists.length === 0 ? "not-allowed" : "pointer",
                    ...TopbarButtonStyle
                }}
                    onClick={() => {
                        alert("DWON")
                    }}>
                    🔽
                </button> */}

            </div >
        );
    };




    return (
        <>
            {/* Breadcrumbs */}
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
            {/* Header */}
            <h1>To-Do List</h1>
            {/* Project breakdown -------------------------------------- WIP*/}
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
            {/* Project */}
            <section style={{
                marginLeft: "10%",
                marginRight: "10%",
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0px 10px 5px 0px rgba(0,0,0,0.5)",
            }}>
                {/* New list dialog */}
                <dialog ref={newListDialogRef} className={styles.dialog}
                    style={{ padding: "0px", borderRadius: "4px", overflowX: "hidden" }}>
                    {/* This puts the form and image side-by-side */}
                    <div style={{ display: "flex" }}>
                        <div style={{
                            display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",
                            margin: "10px",
                        }}>
                            <h3>Create a new To-do list</h3>
                            <p style={{ textWrap: "nowrap" }}>A to-do list must have a name or title.</p>
                            <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                                    e.preventDefault();
                                    const inputNewListName = document.getElementById("inputNewListName") as HTMLInputElement;
                                    setTaskLists([{
                                        name: inputNewListName.value,
                                        id: 0
                                    },
                                    ...taskLists,]);
                                    inputNewListName.value = "";
                                    newListDialogRef.current?.close();
                                }}>
                                {/* Font sizes */}
                                <div style={{ display: "flex", flexDirection: "row", gap: "5px", alignItems: "center" }}>
                                    <label>New list name: </label>
                                    <input type="text" id="inputNewListName" maxLength={18}></input>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <button type="submit" style={{ minWidth: "80px", padding: "5px" }}>
                                        Confirm
                                    </button>
                                    <button type="button" onClick={() => {
                                        const inputNewListName = document.getElementById("inputNewListName") as HTMLInputElement;
                                        inputNewListName.value = "";
                                        newListDialogRef.current?.close();
                                    }}
                                        style={{ minWidth: "80px", padding: "5px" }}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog >
                {/* Menu bar at the top for manipulating all taskLists */}
                <div style={{
                    height: "35px",
                    width: "100%",
                    border: "1px solid grey",
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    {/* Select which todolist is active */}
                    <select id="selectAllTodolists"
                        style={{
                            flexGrow: "1",
                            borderRadius: "0px",
                            border: "none",
                            boxSizing: "border-box",
                            paddingLeft: "5px",
                            marginRight: "2px",
                            cursor: taskLists.length === 0 ? "not-allowed" : "pointer",
                        }}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                            const selectedTasklistId = parseInt(e.target.value);
                            setActiveTasklistId(selectedTasklistId);



                        }}
                        disabled={taskLists.length === 0 ? true : false}>
                        {
                            taskLists.map((taskList, index) => {
                                return (
                                    <option value={taskList.id}
                                        key={`${taskList.id}_${index}`}
                                        style={{}}>
                                        {taskList.name}
                                        {/* {`${todolist.name.substring(0, 15)}${todolist.name.length > 15 ? "..." : ""}`} */}
                                    </option>
                                )
                            })
                        }
                    </select>
                    {/* Buttons (Add, Delete) on the right */}
                    <div style={{ display: "flex", width: "70px" }}>
                        <button style={{
                            borderTop: "none",
                            borderBottom: "none",
                            borderLeft: "black 1px solid",
                            borderRight: "none",
                            flexBasis: "35px",
                            ...TopbarButtonStyle,
                        }}
                            onClick={handleCreateList}>
                            ➕
                        </button>
                        <button style={{
                            borderTop: "none",
                            borderBottom: "none",
                            borderLeft: "black 1px solid",
                            borderRight: "none",
                            flexBasis: "35px",
                            cursor: taskLists.length === 0 ? "not-allowed" : "pointer",
                            ...TopbarButtonStyle
                        }}
                            onClick={handleDeleteList}>
                            ➖
                        </button>
                    </div>
                </div>




                <div style={{
                    display: "flex",
                    borderLeft: "1px solid grey",
                    borderRight: "1px solid grey",
                    borderBottom: "1px solid grey"
                }}>
                    {/* Sidebar for manipulating a todolist's todos*/}
                    <div style={{
                        height: "100%",
                        minHeight: "300px",
                        width: "35px",
                        borderRight: "1px solid grey",
                        // borderBottom: "1px solid grey",
                        display: "flex",
                        flexDirection: "column"
                        // justifyContent: "space-between",
                    }}>
                        <button style={{
                            borderTop: "none",
                            borderBottom: "black 1px solid",
                            borderLeft: "none",
                            borderRight: "none",
                            width: "100%",
                            height: "35px",
                            ...TopbarButtonStyle
                        }} onClick={handleSave}>
                            💾
                            {/* <span className="hideOnMobile">Save list</span> */}
                        </button>
                        <button style={{
                            borderTop: "none",
                            borderBottom: "black 1px solid",
                            borderLeft: "none",
                            borderRight: "none",
                            width: "100%",
                            height: "35px",
                            ...TopbarButtonStyle
                        }} onClick={handleNewTask}>
                            ➕
                        </button>
                        <button style={{
                            borderTop: "none",
                            borderBottom: "black 1px solid",
                            borderLeft: "none",
                            borderRight: "none",
                            width: "100%",
                            height: "35px",
                            ...TopbarButtonStyle
                        }} onClick={handleClear}>
                            ➖
                        </button>
                        <button style={{
                            borderTop: "none",
                            borderBottom: "black 1px solid",
                            borderLeft: "none",
                            borderRight: "none",
                            width: "100%",
                            height: "35px",
                            ...TopbarButtonStyle
                        }} onClick={handleClear}>
                            🗑️
                        </button>
                    </div>


                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: "stretch",
                        flexGrow: "1",
                    }}>
                        {
                            tasks.reduce((accumulator: React.ReactNode[], eachTask) => {
                                // 1. The Filter Step
                                if (eachTask.taskListId === activeTaskListId) {
                                    // 2. The Map Step: Push the JSX element into our array
                                    accumulator.push(
                                        <Task key={eachTask.taskListId} todo={eachTask} />
                                    );
                                }
                                // Always return the array for the next loop iteration
                                return accumulator;
                            }, []) // <-- Start with an empty array []
                        }
                    </div>
                </div>
























                {/* Footer with statistics */}
                <div style={{
                    height: "35px",
                    width: "100%",
                    borderLeft: "1px solid grey",
                    borderRight: "1px solid grey",
                    borderBottom: "1px solid grey",
                    display: "flex",
                    // display: "none",

                    justifyContent: "space-between",
                }}>
                    {/* Count tasks */}
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        // border: "1px dashed red"
                    }}>
                        <span>Tasks: {tasks.length}</span>
                    </div>
                </div>
            </section>
        </>
    );
}
