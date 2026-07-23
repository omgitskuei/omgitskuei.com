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

    // Define test data
    const testDataLists: TaskList[] = [
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
    ];
    const testDataTasks: Task[] = [
        {
            done: false,
            id: 0,
            taskListId: 0,
            text: "Test this webapp"
        },
        {
            done: false,
            id: 1,
            taskListId: 1,
            text: "Milk"
        },
        {
            done: false,
            id: 2,
            taskListId: 1,
            text: "Eggs"
        },
        {
            done: false,
            id: 3,
            taskListId: 2,
            text: "Wash dishes"
        },
        {
            done: false,
            id: 4,
            taskListId: 2,
            text: "Sweep the house"
        },
        {
            done: false,
            id: 5,
            taskListId: 2,
            text: "Water all plants"
        },
        {
            done: false,
            id: 6,
            taskListId: 3,
            text: "John Wick (featuring Keanu Reeves)"
        },
        {
            done: false,
            id: 7,
            taskListId: 3,
            text: "Her (which doesn't feature Keanu)"
        }
    ];

    // States for tasks
    interface Task {
        done: boolean,
        id: number,        // timestamp
        taskListId: number,
        text: string,
    };
    const [tasks, setTasks] = useState<Task[]>(testDataTasks);

    // States for taskLists
    interface TaskList {
        id: number,
        name: string,
    };
    const [taskLists, setTaskLists] = useState<TaskList[]>(testDataLists);
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
        background: "#c0c0c0",
        color: "black"
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
                done: false,
                id: Date.now(),
                taskListId: activeTaskListId,
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
                        border: "1px solid grey",
                        boxSizing: "border-box",
                        paddingLeft: "5px",
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
                        borderLeft: "none",
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
                        background: "#c0c0c0",
                        color: "black"
                    }}
                        onClick={handleCreateTask}>
                        ➕
                    </button>
                </div>
                {/* Sidebar for manipulating a tasklist's tasks*/}
                <div style={{
                    minHeight: "210px",
                    width: "35px",
                    borderLeft: "1px solid grey",
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
                        // Copy tasks to mutate it with later
                        const copyOfTasks = [...tasks];
                        // Find index of the task to be modified
                        const indexOfTargetTask = copyOfTasks.indexOf(task);
                        copyOfTasks[indexOfTargetTask] = {
                            done: updatedDone,
                            id: task.id,
                            taskListId: task.taskListId,
                            text: task.text
                        };
                        // Save
                        setTasks(copyOfTasks);
                        if (typeof window !== "undefined") {
                            localStorage.setItem("tasks", JSON.stringify(copyOfTasks));
                        }
                    }} />
                {/* Text and text's edit/confirm */}
                <div style={{ marginRight: "10px", width: "100%" }}>
                    {/* Label for desktop AND tablet */}
                    <label htmlFor={`${task.taskListId}.${task.id}.text`}
                        id={`${task.taskListId}.${task.id}.textLabel`}
                        className="hideOnMobile"
                        style={{ display: editable ? "none" : "inline-block", width: "100%" }}>
                        {
                            task.done ?
                                <s>{task.text}</s>
                                :
                                <>{task.text}</>
                        }
                    </label>
                    {/* Label for mobile, hidden on tablet and desktop */}
                    <label htmlFor={`${task.taskListId}.${task.id}.text`}
                        className="hideOnNonMobile"
                        style={{ display: editable ? "none" : "inline-block", width: "100%" }}>
                        {
                            task.done ?
                                <s>{task.text.substring(0, 20)}{task.text.length > 18 ? ".." : ""}</s>
                                :
                                <>{task.text.substring(0, 20)}{task.text.length > 18 ? ".." : ""}</>
                        }
                        { }
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
            {/* Project breakdown */}
            <section style={{
                marginLeft: "10%", marginRight: "10%", alignSelf: "stretch",
            }}>
                <ProjectBreakdown projectName={"To-Do List"}
                    createDate="2026/07/16"
                    updateDate="2026/07/23"
                    technologyUsed={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Next.js"
                    ]}
                    goal={"Familiar myself with storing and retrieving data from localStorage, practice UIUX design, and RWD webapp development."}
                    summary={[
                        "A to-do list webapp where users can CRUD lists and todos, sort todos, and the user data is persisted even after a page refresh.",
                        "By using browser localStorage, this data persistance is possible without using cookies nor database tables nor requiring login.",
                        "localStorage is not without drawbacks - see details under Limitations.",

                        ""
                    ]}
                    scope={[
                        "Maybe add a upload/download the data as json stored in .txt files so that the user can transfer data between browsers across devices, to combat the drawbacks of localStorage.",
                        "Initially I wanted to add a drag-drop feature to the todos in the list and this way forgo the up/down arrows, but this proved a bit difficult at the moment.",
                        "I need a separate project to familiarize and implement draggable in React. Perhaps the Chess project is a good candidate for implementing dragging and dropping. I wasn't in a hurry to figure out drag and drop here because to be honest drag and drop is not as mobile and accessibility friendly as just simply clicking.",
                        "I purposefully spaced out the UI hot-zones (eg. cluster of buttons) away frome each other to minimize user misclicking. Misclicking would be very frustrating because some buttons will delete data without confirmation.",
                    ]}
                    limitations={[
                        "Storing data with a particular browser means users will not find their data if they swap browsers on the same device; eg. using Firefox and Chrome on the same laptop",
                        "Users also will not find their data if they use the same browser but on multiple devices; eg. using Chrome on a desktop and then on a laptop.",
                        "Lastly, localStorage isn't available when the webpage is accessed without a browser; eg. a user using terminal command CURL technically bypasses a browser and shouldn't have a localStorage."
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
            {/* Button with onClick to Reset project test data */}
            <section style={{ width: "100%", display: "flex", justifyContent: "space-between", paddingLeft: "10%", paddingRight: "10%" }}>
                <button style={{
                    borderRadius: "10px",
                    background: "lightgrey",
                    color: "black",
                    padding: "10px 16px",
                    marginBottom: "30px", marginTop: "30px",
                    border: "1px solid #918f8f",
                    boxShadow: "0px 5px 5px grey"
                }}
                    onClick={() => {
                        // Set test data
                        setTaskLists(testDataLists);
                        setTasks(testDataTasks);

                        // Save test data
                        if (localStorage) {
                            localStorage.setItem("tasklists", JSON.stringify(testDataLists));
                            localStorage.setItem("tasks", JSON.stringify(testDataTasks));
                        }
                    }}>
                    Repopulate test data for webapp
                </button>
                <button style={{
                    borderRadius: "10px",
                    background: "lightgrey",
                    color: "black",
                    padding: "10px 16px",
                    marginBottom: "30px", marginTop: "30px",
                    border: "1px solid #918f8f",
                    boxShadow: "0px 5px 5px grey"
                }}
                    onClick={() => {
                        console.log(taskLists);
                        console.log(tasks);
                    }}>
                    console.log
                </button>
            </section>
        </>
    );
}
