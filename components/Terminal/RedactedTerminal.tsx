'use client'

import styles from "./page.module.css";

import { useState, useRef } from "react";

interface Directory {
    label: string,
    parent: string,
    redirect?: string | undefined,
    systemMessage?: string | undefined,
    children: Directory[],
}

export default function FakeTerminal() {

    // Constant defining user name
    const username = "redacted";
    // Constant defining terminal green color code
    const colorTerminalGreen = "#00FF66";
    const colorTerminalBlack = "#0d1117";
    // Constant defining the directory tree that the terminal can climb
    const fileSystem: Directory[] = [
        {
            label: username,
            parent: "",
            systemMessage: "sh: DENIED - no authorization to navigate to [r00T]",
            children: [
                {
                    label: "home",
                    parent: username,
                    redirect: "/",
                    children: [
                        {
                            label: "professional",
                            parent: "home",
                            redirect: "/professional",
                            children: [
                                {
                                    label: "contact",
                                    parent: "professional",
                                    redirect: "/professional/contact",
                                    children: []
                                },
                                {
                                    label: "resume",
                                    parent: "professional",
                                    redirect: "/professional/resume",
                                    children: []
                                },
                            ]
                        },
                        {
                            label: "personal",
                            parent: "home",
                            redirect: "/personal",
                            children: [
                                {
                                    label: "blog",
                                    parent: "personal",
                                    children: [],
                                    redirect: "/personal/blog"
                                },
                                {
                                    label: "redacted",
                                    parent: "personal",
                                    children: [],
                                    systemMessage: "sh: DENIED - no redirect needed"
                                }
                            ]
                        },
                        {
                            label: "sitemap",
                            parent: "home",
                            redirect: "/sitemap",
                            children: []
                        }
                    ]
                }
            ]
        }
    ];

    // The current/starting Directory, start at ${username}/home/
    const workingDirectory = useRef<Directory>(fileSystem[0].children[0]);
    // Focus the hidden input when clicking anywhere on the terminal
    const inputRef = useRef<HTMLInputElement>(null);
    const focusInput = () => inputRef.current?.focus();

    // Terminal history
    const [history, setHistory] = useState([
        { text: "RedactedTerminal 0.96.3-798.11.8.x86_64 v2026.6.25 on an x86_64", type: "system" },
        { text: "Type 'help' for a list of available commands.", type: "system" },
    ]);
    // User input
    const [input, setInput] = useState("");

    /**
     * Iterate (recursively) over all nodes in the Directory tree looking for a Directory with a specific string label value
     * @param label the string label to look for
     * @param directoryTree the tree of Directory objects to look through
     * @returns 
     */
    function getDirectoryByLabel(label: string, directoryTree: Directory[]): Directory | null {
        for (const node of directoryTree) {
            // Check if the current directory matches the target label
            if (node.label === label) {
                return node;
            }
            // If it has children, search deeper inside them
            if (node.children && node.children.length > 0) {
                const prevNode = getDirectoryByLabel(label, node.children);

                // If the recursive call found the directory, pass it back up
                if (prevNode) {
                    return prevNode;
                }
            }
        }
        // Return null if no matching label is found in this branch
        return null;
    }

    const clickClose = () => {
        let response = "sh: DENIED - insufficient authorization to close this window";
        // Update terminal history
        setHistory((prev) => [
            ...prev,
            { text: `${username}$ exit`, type: "user" },
            ...(response ? [{ text: response, type: "system" }] : []),
        ]);
        // Clear input line
        setInput("");
        inputRef.current?.focus();
    }

    /**
     * Listen for [Enter] and [ArrowUp] keydowns, then handle user input
     * @param e event's keystroke as string - pressing [Enter] gives a string of "Enter"
     * @returns Handles changes to response, workingDirectory, input, history
     */
    const handleKeyDown = (e: { key: string; }) => {
        if (e.key === "Enter") {
            const cmd = input.trim().toLowerCase();
            let response = "";
            // Handle fake commands
            if (cmd === "cd" || (input.toLowerCase().substring(0, 3) === "cd " && cmd.length > 3)) {
                // Handle going to home shortcuts
                var inputTrimmed = input.trim();
                if (cmd === "cd" || inputTrimmed === "cd $HOME" || inputTrimmed === "cd ~") {
                    response = "cd: HOME not set";
                } else if (cmd.substring(3).length > 0) {
                    var newLabel = input.toLowerCase().substring(3);
                    if (newLabel.indexOf("/") != -1) {  // Handle navigating multiple directories in one go
                        response = `sh: cd: line 0: navigating multiple directories is disabled`;
                    } else if (newLabel == "..") {      // Handle going to parent
                        var parent = getDirectoryByLabel(workingDirectory.current.parent, fileSystem);
                        if (parent != null) {
                            workingDirectory.current = parent;
                            response = "";
                        } else {
                            response = `sh: cd: line 0: no such file or directory`;
                        }
                    } else {                            // Handle going to child
                        for (let i = 0; i < workingDirectory.current.children.length; i++) {
                            const eachChild = workingDirectory.current.children[i];
                            // Move dir to matching child
                            if (eachChild.label == newLabel) {
                                workingDirectory.current = eachChild;
                                response = "";
                                break;
                            }
                            response = `sh: cd: line 0: no such file or directory`
                        }
                    }
                }
            } else if (cmd === "clear") {
                // Clear terminal history
                setHistory([
                    { text: "RedactedTerminal 0.96.3-798.11.8.x86_64 v2026.6.25 on an x86_64", type: "system" },
                    { text: "Type 'help' for a list of available commands.", type: "system" },
                ]);
                // Clear input line
                setInput("");
                return;     // Skip Updating terminal history a second time later
            } else if (cmd === "help") {
                response = "sh: help: built-in commands: cd, clear, help, login, ls, pwd, redirect";
            } else if (cmd === "login") {
                response = "sh: login: line 0: no OTP provided via --args";
            } else if (cmd.substring(0, 8) === "login --") {
                response = "sh: login: provided OTP was incorrect";
            } else if (cmd === "ls") {
                var lsPrintout = "";
                for (let i = 0; i < workingDirectory.current.children.length; i++) {
                    const element = workingDirectory.current.children[i];
                    lsPrintout = element.label + " " + lsPrintout;
                }
                response = lsPrintout;
            } else if (cmd === "pwd") {
                var concatStr = `${workingDirectory.current.label}/`;
                var hasChildren = true;
                var currDir: Directory = workingDirectory.current;
                // Keep looking for parents until there are no more parents
                while (hasChildren) {
                    var parentDir = getDirectoryByLabel(currDir.parent, fileSystem);
                    if (parentDir != null) {
                        concatStr = `${parentDir.label}/${concatStr}`;
                        currDir = parentDir;
                    } else {
                        hasChildren = false;
                    }
                }
                response = concatStr;
            } else if (cmd === "redirect") {
                if (workingDirectory.current.systemMessage) {
                    response = workingDirectory.current.systemMessage;
                }
                if (workingDirectory.current.redirect) {
                    // Simulates clicking a link (adds to browser history)
                    window.location.href = workingDirectory.current.redirect;
                }
            } else {
                response = `sh: command not found`;
            }
            // Update terminal history
            setHistory((prev) => [
                ...prev,
                { text: `${username}$ ${input}`, type: "user" },
                ...(response ? [{ text: response, type: "system" }] : []),
            ]);
            // Clear input line
            setInput("");
        } else if (e.key === "ArrowUp") {
            let response = "sh: history is disabled";
            // Update terminal history
            setHistory((prev) => [
                ...prev,
                { text: `${username}$ ${input}`, type: "user" },
                ...(response ? [{ text: response, type: "system" }] : []),
            ]);
            // Clear input line
            setInput("");
        }
    };

    return (
        <div style={{
            minWidth: "320px",
            boxShadow: "0px 10px 20px rgba(0,0,0,0.5)",
        }}>
            {/* Window top bar, window name, and close btn */}
            <div style={{
                backgroundColor: "white",
                border: "1px black solid",
                paddingLeft: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <span style={{}}>#Redacted Terminal</span>
                <button style={{
                    width: "20px",
                    height: "100%",
                    backgroundColor: "lightgrey",
                    border: "none",
                    cursor: "pointer"
                }}
                    onClick={clickClose}>
                    X
                </button>
            </div>
            {/* Terminal */}
            <div
                onClick={focusInput}
                style={{
                    backgroundColor: colorTerminalBlack,
                    color: colorTerminalGreen,
                    fontFamily: "Courier New, monospace",
                    minHeight: "300px",
                    maxHeight: "320px",
                    scrollbarColor: `${colorTerminalGreen} ${colorTerminalBlack}`,
                    scrollbarWidth: "thin"
                }}
                className={styles.terminalWindow}>

                {/* Terminal History */}
                {history.map((line, index) => (
                    <div key={index}
                        style={{
                            marginBottom: "8px",
                            whiteSpace: "pre-wrap"
                        }}
                    >
                        {line.text}
                    </div>
                ))}

                {/* Active Input Line */}
                <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ marginRight: "8px", color: "#8b949e" }}>{username}$</span>
                    <span style={{ position: "relative", color: "#fff" }}>
                        {input}
                        <span className={styles.inlineBlinkingCursor}
                            style={{
                                backgroundColor: colorTerminalGreen,
                                marginLeft: "2px"
                            }}>
                            &nbsp;
                        </span>
                    </span>
                    {/* Hidden Input to trap keystrokes */}
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        style={{
                            position: "absolute",
                            opacity: 0,
                            pointerEvents: "none",
                        }}
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
}