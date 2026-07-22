'use client'

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectBreakdown } from "@/components/ProjectBreakdown";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
        done: boolean,
        id: number,        // timestamp
        taskListId: number,
        text: string,
    };
    const [tasks, setTasks] = useState<Task[]>([
        {
            taskListId: 0,
            id: 0,
            done: false,
            text: "Test this webapp"
        },
        {
            taskListId: 1,
            id: 1,
            done: false,
            text: "Milk"
        },
        {
            taskListId: 1,
            id: 2,
            done: false,
            text: "Eggs"
        },
        {
            taskListId: 2,
            id: 3,
            done: false,
            text: "Wash dishes"
        },
        {
            taskListId: 2,
            id: 4,
            done: false,
            text: "Sweep the house"
        },
        {
            taskListId: 2,
            id: 5,
            done: false,
            text: "Water all plants"
        },
        {
            taskListId: 3,
            id: 6,
            done: false,
            text: "John Wick (featuring Keanu Reeves)"
        },
        {
            taskListId: 3,
            id: 7,
            done: false,
            text: "Her (which doesn't feature Keanu)"
        }
    ]);

    // States for taskLists
    interface TaskList {
        id: number,
        name: string,
    };
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
    const dialogNewListRef = useRef<HTMLDialogElement>(null);
    // Dialog for help
    const dialogHelpRef = useRef<HTMLDialogElement>(null);
    const [dialogHelpPage, setShowDialogHelpPage] = useState<number>(1);
    const maxDialogHelpPages = 4;

    const TopbarButtonStyle: React.CSSProperties = {
        padding: "0px",
        margin: "0px",
        borderRadius: "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        fontSize: "13px",
    };

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

        // Get current selected option (a list)
        const selectAllTodolists = document.getElementById("selectAllTodolists") as HTMLSelectElement;
        const updatedLists = [...taskLists];                                // Copy to mutate it
        // Delete the list at the currently selected index
        const indexToRemove = selectAllTodolists.selectedIndex;
        const removedList = updatedLists.splice(indexToRemove, 1)[0];       // Mutated by .splice()

        // Clean up tasks belonging to the deleted list
        const updatedTasks = tasks.filter((task) => task.taskListId !== removedList.id);

        setTasks(updatedTasks);
        setTaskLists(updatedLists);

        // Update localStorage
        if (typeof window !== "undefined") {
            localStorage.setItem("taskLists", JSON.stringify(updatedLists));
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        }
    };

    /**
     * Create a task from state and update localStorage
     */
    function handleCreateTask() {
        const updatedTasks: Task[] = [
            ...tasks,
            {
                id: Date.now(),
                taskListId: activeTaskListId,
                done: false,
                text: "New task",
            }
        ];
        setTasks(updatedTasks);
        if (typeof window !== "undefined") {
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        }
    };

    /**
     * Delete a specific task from state and update localStorage
     */
    function handleDeleteThisTask(taskToDelete: Task) {
        setTasks((prevTasks) => {
            const updatedTasks = prevTasks.filter((t) => t !== taskToDelete);
            if (typeof window !== "undefined") {
                localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            }
            return updatedTasks;
        });
    }

    /**
     * Clear the active task list of all tasks
     */
    function handleDeleteAllTasksFromActiveList() {
        const tasksFromOtherLists = tasks.filter(eachTask => { activeTaskListId != eachTask.taskListId })
        console.log(tasksFromOtherLists)

        setTasks(tasksFromOtherLists);
        if (typeof window !== "undefined") {
            localStorage.setItem("tasks", JSON.stringify(tasksFromOtherLists));
        }
    };

    /**
     * Top bar of the webapp, for creating, deleting, and selecting lists
     */
    const TasklistTopBar = () => {
        return (
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
                                    style={{}}
                                    selected={taskList.id === activeTaskListId}>
                                    {taskList.name} ({tasks.filter(eachTask => eachTask.taskListId === taskList.id).length})
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
                        onClick={() => {
                            // Show Create new list dialog window
                            if (dialogNewListRef.current) {
                                dialogNewListRef.current.showModal();
                            }
                        }}>
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
        );
    };

    /**
     * Middle part for all tasks for the active list, and sidebar for manipulating all tasks belonging to the active list
     */
    const TasklistMiddleSection = () => {
        return (
            <div style={{
                display: "flex",
                borderLeft: "1px solid grey",
                borderRight: "1px solid grey",
                borderBottom: "1px solid grey"
            }}>
                {/* All tasks for active list */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "stretch",
                    flexGrow: "1",
                }}>
                    {/* Iterate and display all tasks for the active list */}
                    {
                        tasks.reduce((accumulator: React.ReactNode[], eachTask) => {
                            // 1. The Filter Step
                            if (eachTask.taskListId === activeTaskListId) {
                                // 2. The Map Step: Push the JSX element into our array
                                accumulator.push(
                                    <Task key={`${eachTask.taskListId}.${eachTask.id}.${tasks.length}`} todo={eachTask} />
                                );
                            }
                            // Always return the array for the next loop iteration
                            return accumulator;
                        }, []) // <-- Start with an empty array []
                    }
                    {/* Button to create new task for the active list */}
                    <button style={{
                        border: "1px solid #6666665e",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "35px",
                    }}
                        onClick={handleCreateTask}>
                        ➕
                    </button>
                </div>
                {/* Sidebar for manipulating a tasklist's tasks*/}
                <div style={{
                    height: "100%",
                    minHeight: "300px",
                    width: "35px",
                    borderLeft: "1px solid black",
                    display: "flex",
                    flexDirection: "column-reverse"
                }}>
                    <button style={{
                        borderTop: "black 1px solid",
                        borderBottom: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        width: "100%",
                        height: "35px",
                        ...TopbarButtonStyle
                    }} onClick={handleDeleteAllTasksFromActiveList}>
                        🗑️
                    </button>
                </div>
            </div>
        );
    };

    /**
     * Footer with statistics and Help button
     */
    const TasklistFooter = () => {
        return (
            <div style={{
                height: "35px",
                width: "100%",
                borderLeft: "1px solid grey",
                borderRight: "1px solid grey",
                borderBottom: "1px solid grey",
                display: "flex",
                justifyContent: "space-between",
            }}>
                {/* Help button */}
                <button style={{
                    borderTop: "none",
                    borderBottom: "none",
                    borderLeft: "none",
                    borderRight: "1px solid black",
                    flexBasis: "35px",
                    cursor: "pointer",
                    ...TopbarButtonStyle
                }}
                    onClick={() => {
                        // Show help dialog window
                        if (dialogHelpRef.current) {
                            dialogHelpRef.current.showModal();
                        }
                    }}>
                    ❔
                </button>
                {/* Count tasks */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "10px"
                }}>
                    <span>Total Tasks: {tasks.length}</span>
                </div>
            </div>
        );
    }




























































    /**
     * Each task in the webapp's middle section
     * @param param0 task typeof Task (done, id, taskListId, text)
     * @returns
     */
    const Task = ({
        todo: task
    }: {
        todo: Task
    }) => {
        // It is perfectly safe to use useState here!
        const [editable, setEditable] = useState<boolean>(false);

        return (
            <div style={{
                // padding: "5px",
                border: "1px solid #6666665e",
                display: "flex",
                // justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
                height: "35px",
                // paddingLeft: "10px"
            }}>
                <div style={{ display: "flex", }}>
                    <button className="hideOnMobile"
                        style={{
                            borderTop: "1px solid #6666665e",
                            borderBottom: "1px solid #6666665e",
                            borderLeft: "none",
                            borderRight: "black 1px solid",
                            height: "35px",
                            width: "35px",
                            cursor: taskLists.length === 0 ? "not-allowed" : "pointer",
                            ...TopbarButtonStyle
                        }}
                        onClick={() => {
                            // Copy tasks to mutate it with later
                            const copyOfTasks = [...tasks];
                            // Filter tasks to get a list of tasks that are only for the active tasklist
                            const tasksForActiveList = copyOfTasks.filter(eachTask => eachTask.taskListId === activeTaskListId);
                            // Get this task
                            const thisTaskInActiveList = tasksForActiveList.find(eachTask => eachTask.id === task.id);
                            // Check if task exists
                            if (thisTaskInActiveList) {
                                // Check and Ignore click if the task is the topmost task for the active list
                                const indexOfThisTaskInActiveList = tasksForActiveList.indexOf(thisTaskInActiveList);
                                if (indexOfThisTaskInActiveList === 0) {
                                    alert("This task cannot be reordered that way.");
                                    return;
                                } else {
                                    // Get indexs of the two tasks in the full list
                                    const otherTaskInActiveList = tasksForActiveList[indexOfThisTaskInActiveList - 1];
                                    const indexOfThisTaskInFullList = copyOfTasks.indexOf(thisTaskInActiveList);
                                    const indexOfOtherTaskInFullList = copyOfTasks.indexOf(otherTaskInActiveList);

                                    // Swap in-place
                                    [
                                        copyOfTasks[indexOfThisTaskInFullList],
                                        copyOfTasks[indexOfOtherTaskInFullList]
                                    ] = [
                                            copyOfTasks[indexOfOtherTaskInFullList],
                                            copyOfTasks[indexOfThisTaskInFullList]
                                        ];

                                    // Save
                                    setTasks(copyOfTasks);
                                    if (typeof window !== "undefined") {
                                        localStorage.setItem("tasks", JSON.stringify(copyOfTasks));
                                    }
                                }
                            } else {
                                // Task doesn't exist (for some reason), ignore click
                                return;
                            }
                        }}>
                        🡱
                    </button>
                    <button className="hideOnMobile"
                        style={{
                            borderTop: "1px solid #6666665e",
                            borderBottom: "1px solid #6666665e",
                            borderLeft: "none",
                            borderRight: "black 1px solid",
                            height: "35px",
                            width: "35px",
                            cursor: taskLists.length === 0 ? "not-allowed" : "pointer",
                            ...TopbarButtonStyle
                        }}
                        onClick={() => {
                            // Copy tasks to mutate it with later
                            const copyOfTasks = [...tasks];
                            // Filter tasks to get a list of tasks that are only for the active tasklist
                            const tasksForActiveList = copyOfTasks.filter(eachTask => eachTask.taskListId === activeTaskListId);
                            // Get this task
                            const thisTaskInActiveList = tasksForActiveList.find(eachTask => eachTask.id === task.id);
                            // Check if task exists
                            if (thisTaskInActiveList) {
                                // Check and Ignore click if the task is the topmost task for the active list
                                const indexOfThisTaskInActiveList = tasksForActiveList.indexOf(thisTaskInActiveList);
                                if (indexOfThisTaskInActiveList === (tasksForActiveList.length - 1)) {
                                    alert("This task cannot be reordered that way.");
                                    return;
                                } else {
                                    // Get indexs of the two tasks in the full list
                                    const otherTaskInActiveList = tasksForActiveList[indexOfThisTaskInActiveList + 1];
                                    const indexOfThisTaskInFullList = copyOfTasks.indexOf(thisTaskInActiveList);
                                    const indexOfOtherTaskInFullList = copyOfTasks.indexOf(otherTaskInActiveList);

                                    // Swap in-place
                                    [
                                        copyOfTasks[indexOfThisTaskInFullList],
                                        copyOfTasks[indexOfOtherTaskInFullList]
                                    ] = [
                                            copyOfTasks[indexOfOtherTaskInFullList],
                                            copyOfTasks[indexOfThisTaskInFullList]
                                        ];

                                    // Save
                                    setTasks(copyOfTasks);
                                    if (typeof window !== "undefined") {
                                        localStorage.setItem("tasks", JSON.stringify(copyOfTasks));
                                    }
                                }
                            } else {
                                // Task doesn't exist (for some reason), ignore click
                                return;
                            }







                        }}>
                        🡳
                    </button>
                    <button style={{
                        borderTop: "1px solid #6666665e",
                        borderBottom: "1px solid #6666665e",
                        borderLeft: "none",
                        borderRight: "black 1px solid",
                        height: "35px",
                        width: "35px",
                        cursor: taskLists.length === 0 ? "not-allowed" : "pointer",
                        ...TopbarButtonStyle
                    }}
                        onClick={() => {
                            if (editable) {
                                // Get task values (done, text)
                                const taskText = document.getElementById(`${task.taskListId}.${task.id}.text`) as HTMLInputElement;
                                const taskDone = document.getElementById(`${task.taskListId}.${task.id}.done`) as HTMLInputElement;
                                if (taskText && taskDone) {
                                    const newTaskTextValue = taskText.value;
                                    const newTaskDoneValue = taskDone.checked;
                                    // Create a replacement task
                                    const updatedTask: Task = {
                                        taskListId: task.taskListId,
                                        id: task.id,
                                        done: newTaskDoneValue,
                                        text: newTaskTextValue
                                    }
                                    // Replace with updated task
                                    const updatedTasks = [...tasks];
                                    const foundIndex = updatedTasks.findIndex(eachTask => eachTask.id === task.id && eachTask.taskListId === task.taskListId)
                                    updatedTasks[foundIndex] = updatedTask;

                                    // Save
                                    setTasks(updatedTasks);
                                    if (typeof window !== "undefined") {
                                        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
                                    }

                                    // Update the text label
                                    const taskTextLabel = document.getElementById(`${task.taskListId}.${task.id}.textLabel`) as HTMLLabelElement;
                                    taskTextLabel.innerText = newTaskTextValue;
                                }
                            }
                            setEditable(!editable);
                        }}>
                        {editable ? "💾" : "✏️"}
                    </button>
                    <button style={{
                        borderTop: "1px solid #6666665e",
                        borderBottom: "1px solid #6666665e",
                        borderLeft: "none",
                        borderRight: "black 1px solid",
                        height: "35px",
                        width: "34px",
                        cursor: taskLists.length === 0 ? "not-allowed" : "pointer",
                        ...TopbarButtonStyle
                    }}
                        onClick={() => handleDeleteThisTask(task)}>
                        ➖
                    </button>
                </div>
                {/* Done/Not-Done */}
                <input id={`${task.taskListId}.${task.id}.done`} type="checkbox"
                    style={{ transform: "scale(1.2)" }}
                    checked={task.done}
                    onChange={(e) => {
                        const updatedDone = e.target.checked;
                        alert(updatedDone);
                    }} />
                {/* Text and text's edit/confirm */}
                <div style={{ marginRight: "10px", width: "100%" }}>
                    {/* Label for desktop AND tablet */}
                    <label htmlFor={`${task.taskListId}.${task.id}.text`}
                        id={`${task.taskListId}.${task.id}.textLabel`}
                        className="hideOnMobile"
                        style={{ display: editable ? "none" : "inline-block", width: "100%" }}>
                        {task.text}
                    </label>
                    {/* Label for mobile, hidden on tablet and desktop */}
                    <label htmlFor={`${task.taskListId}.${task.id}.text`}
                        className="hideOnNonMobile"
                        style={{ display: editable ? "none" : "inline-block", width: "100%" }}>
                        {task.text.substring(0, 20)}{task.text.length > 18 ? ".." : ""}
                    </label>
                    {/* Input for changing text, which is only shown when the labels are hidden */}
                    <input id={`${task.taskListId}.${task.id}.text`} style={{ display: editable ? "inline" : "none", width: "100%" }}
                        type="text"
                        defaultValue={task.text} />
                </div>
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
                <dialog ref={dialogNewListRef} className={styles.dialog}
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
                                    dialogNewListRef.current?.close();
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
                                        dialogNewListRef.current?.close();
                                    }}
                                        style={{ minWidth: "80px", padding: "5px" }}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog >
                {/* Help dialog */}
                <dialog ref={dialogHelpRef} className={styles.dialog}
                    style={{ padding: "0px", borderRadius: "4px", overflowX: "hidden" }}>
                    {/* This puts the form and image side-by-side */}
                    <div style={{ display: "flex" }}>
                        <div style={{
                            display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",
                            margin: "10px",
                        }}>
                            <h3>Help</h3>
                            {/* Instructions #1 - top bar, new/activate/delete list*/}
                            <div style={{ display: (dialogHelpPage === 1) ? "block" : "none" }}>
                                <ol type="a">
                                    <li>a) Click on the dropdown to switch lists</li>
                                    <li>b) Click the + button to create a new list</li>
                                    <li>c) Click the - button to delete the current list</li>
                                </ol>
                                {/* <Image src={""} alt={""} width={250} height={300}></Image> */}
                            </div>
                            {/* Instructions #2 - side bar, save/new/delete/delete-all tasks*/}
                            <div style={{ display: (dialogHelpPage === 2) ? "block" : "none" }}>
                                <ol type="a">
                                    <li>a) Click the - button to delete all tasks</li>
                                </ol>
                            </div>
                            {/* Instructions #3 - bottom bar, stats */}
                            <div style={{ display: (dialogHelpPage === 3) ? "block" : "none" }}>
                                <ol type="a">
                                    <li>a) Displays statistics like total number of tasks</li>
                                    <li>b) Click the ? button to display this help message again</li>
                                </ol>
                            </div>
                            {/* Instructions #4 - tasks */}
                            <div style={{ display: (dialogHelpPage === 4) ? "block" : "none" }}>
                                <ol type="a">
                                    <li>a) Click the up/down arrows to reorder tasks</li>
                                    <li>b) Click the pencil button to begin editting a task</li>
                                    <li>c) Click the - button to delete the task</li>
                                </ol>
                            </div>
                            <span>{dialogHelpPage}/{maxDialogHelpPages}</span>

                            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                <button type="button"
                                    onClick={() => {
                                        if (dialogHelpPage === 1) {
                                            setShowDialogHelpPage(maxDialogHelpPages);
                                        } else {
                                            setShowDialogHelpPage(dialogHelpPage - 1);
                                        }
                                    }}
                                    style={{ minWidth: "80px", padding: "5px" }}>
                                    Prev.
                                </button>
                                <button onClick={() => {
                                    dialogHelpRef.current?.close();
                                }}
                                    style={{ minWidth: "80px", padding: "5px" }}>
                                    X
                                </button>
                                <button type="button"
                                    onClick={() => {
                                        if (dialogHelpPage === maxDialogHelpPages) {
                                            setShowDialogHelpPage(1);
                                        } else {
                                            setShowDialogHelpPage(dialogHelpPage + 1);
                                        }
                                    }}
                                    style={{ minWidth: "80px", padding: "5px" }}>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </dialog >
                {/* Menu bar at the top for manipulating all taskLists */}
                <TasklistTopBar></TasklistTopBar>
                {/* Middle part for all tasks for the active list, and sidebar for manipulating all tasks belonging to the active list */}
                <TasklistMiddleSection></TasklistMiddleSection>
                {/* Footer with statistics and Help button */}
                <TasklistFooter></TasklistFooter>
            </section>
        </>
    );
}
