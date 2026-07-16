'use client'

import styles from "./page.module.css";

import { useState, useRef } from "react";
import { TurnOrderOrganizer } from "./TurnOrderOrganizer";

interface Player {
    id: number,
    username: string,
    symbol: string
}

interface Square {
    owner: Player | null,
}

type Board = Square[][];

interface GameState {
    board: Board,
    turn: number,
    isDraw: "win" | "draw" | "ongoing",
}

interface GameConfig {
    boardRows: number,
    boardColumns: number,
    winLength: number,
    playerTurnOrder: Player[]
}

interface GameHistory {
    history: GameState[]
}

export default function TicTacToe() {

    // Menu:Title
    const [showTitle, setShowTitle] = useState<boolean>(true);
    // Menu:Config
    const [showGameConfig, setShowGameConfig] = useState<boolean>(false);
    // Menu:Config>step 1
    const [showGameConfigPlayerCount, setShowGameConfigPlayerCount] = useState<boolean>(false);
    // Menu:Config>step 2
    const [showGameConfigNewPlayers, setShowGameConfigNewPlayers] = useState<boolean>(false);
    // Menu:Config>step 3
    const [showGameConfigPlayerTurnOrder, setShowGameConfigPlayerTurnOrder] = useState<boolean>(false);
    // Menu:Config>step 4
    const [showGameConfigBoardDimensions, setShowConfigBoardDimensions] = useState<boolean>(false);

    // Remember game configs
    const playerCountRef = useRef<number>(2);

    const playersRef = useRef<Player[]>([]);
    const boardRowsCountRef = useRef<number>(3);
    const boardColsCountRef = useRef<number>(3);


    const GameConfigSymbolButtonStyle = {
        height: "25px", width: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    const configStep = showGameConfigPlayerCount ? 1 :
        showGameConfigNewPlayers ? 2 :
            showGameConfigPlayerTurnOrder ? 3 :
                showGameConfigBoardDimensions ? 4 : -1;


    const PlayerTurnOrderArranger = () => {
        // Track the index of the item currently being dragged
        const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

        const handleDragStart = (index: number) => {
            setDraggedIndex(index);
        };

        const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
            // Necessary to allow dropping
            e.preventDefault();
        };

        const handleDrop = (targetIndex: number) => {
            if (draggedIndex === null || draggedIndex === targetIndex) return;

            // Reorder the array
            const updatedPlayers: Player[] = playersRef.current;
            const [draggedItem] = updatedPlayers.splice(draggedIndex, 1);
            updatedPlayers.splice(targetIndex, 0, draggedItem);

            playersRef.current = updatedPlayers;
            setDraggedIndex(null);
        };

        return (
            <div style={{ maxWidth: '300px', margin: '20px auto' }}>
                <h3>Set Turn Order</h3>
                <ol style={{ padding: 0, listStyle: 'none' }}>
                    {
                        playersRef.current.map((player, index) => (
                            <li
                                key={player.id}
                                draggable
                                onDragStart={() => handleDragStart(index)}
                                onDragOver={handleDragOver}
                                onDrop={() => handleDrop(index)}
                                style={{
                                    padding: '10px',
                                    margin: '8px 0px',
                                    backgroundColor: '#ffffff',
                                    border: '2px solid #ccc',
                                    borderRadius: '6px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    cursor: 'grab',
                                    // Visual cue while dragging
                                    opacity: draggedIndex === index ? 0.5 : 1,
                                }}
                            >
                                <span>
                                    <strong>{index + 1}.</strong> {player.username}
                                </span>
                                {/* Grab handle visual indicator */}
                                <span style={{ color: '#888', userSelect: 'none' }}>
                                    ⋮⋮
                                </span>
                            </li>
                        ))}
                </ol>
            </div>
        );
    }

    return (
        <div style={{
            minWidth: "320px",
            alignSelf: "stretch",
            border: "1px solid grey",
            // maxWidth: "320px",
            boxShadow: "0px 10px 20px rgba(0,0,0,0.5)",
        }}>
            {/* Game title */}
            <div style={{
                display: showTitle ? "flex" : "none",
                flexDirection: "column",
                gap: "20px",
                height: "300px",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <button onClick={() => {

                }}
                    disabled
                    style={{
                        padding: "10px 16px",
                        minWidth: "150px"
                    }}>
                    NEW GAME
                </button>
                <button onClick={() => {
                    setShowTitle(false);
                    setShowGameConfig(true);
                    setShowGameConfigPlayerCount(true);
                }}
                    style={{
                        padding: "10px 16px",
                        minWidth: "150px"
                    }}>
                    NEW CUSTOM GAME
                </button>
            </div>
            {/* User clicke NEW CUSTOM GAME > Configure the game */}
            <div style={{
                display: showGameConfig ? "flex" : "none",
                height: "300px",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px"
            }}>
                <span>New Game {`(${configStep}/4)`}</span>
                {/* Config Step 1: Player Count */}
                <div style={{
                    display: showGameConfigPlayerCount ? "flex" : "none",
                    alignItems: "center",
                    gap: "10px"
                }}>
                    <label htmlFor="gameConfigPlayerCount">Player count: </label>
                    <input type="number" id="gameConfigPlayerCount" min={2} defaultValue={2} style={{ width: "45px" }} />
                </div>
                {/* Config Step 2: New Players symbols and names */}
                <div style={{
                    display: showGameConfigNewPlayers ? "flex" : "none",
                    // flexDirection: "column"
                    gap: "10px"
                }}>
                    {
                        playersRef.current.map((player, index) => {

                            return (
                                <div>
                                    <div>
                                        <label htmlFor="newPlayerName">Name: </label>
                                        <br />
                                        <input type="text" 
                                            id="newPlayerName" 
                                            value={player.username} 
                                            style={{ width: "115px"}}/>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                        <label htmlFor="newPlayerSymbol">Symbol:</label>
                                        {/* 1 row of symbol btns */}
                                        <div style={{ display: "flex", gap: "5px" }}>
                                            <button style={GameConfigSymbolButtonStyle}>
                                                ❌
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}>
                                                ⭕
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}>
                                                🐈
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}>
                                                🐩
                                            </button>
                                        </div>
                                        {/* 2 row of symbol btns */}
                                        <div style={{ display: "flex", gap: "5px" }}>
                                            <button style={GameConfigSymbolButtonStyle}>
                                                💎
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}>
                                                🗑️
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}>
                                                👑
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}>
                                                🏰
                                            </button>
                                        </div>
                                        {/* 3 row of symbol btns */}
                                        <div style={{ display: "flex", gap: "5px" }}>
                                            <button style={GameConfigSymbolButtonStyle}>
                                                🍎
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}>
                                                🍌
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}>
                                                🗡️
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}>
                                                🛡️
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>

                <div style={{
                    display: showGameConfigPlayerTurnOrder ? "flex" : "none"
                }}>
                    <label htmlFor="">Turn order: </label>




                    <PlayerTurnOrderArranger></PlayerTurnOrderArranger>

                    {/* <TurnOrderOrganizer></TurnOrderOrganizer> */}






                    <button>Randomize 🎲</button>
                </div>
                <div style={{
                    display: showGameConfigBoardDimensions ? "flex" : "none"
                }}>
                    <label htmlFor="">Board Dimensions: </label>
                    <label htmlFor="">Rows: </label>
                    <label htmlFor="">Columns: </label>
                </div>


                <button onClick={() => {
                    if (showGameConfigPlayerCount) {
                        setShowGameConfigPlayerCount(false);
                        setShowGameConfigNewPlayers(true);
                        const inputGameConfigPlayerCount = document.getElementById("gameConfigPlayerCount") as HTMLInputElement;
                        if (inputGameConfigPlayerCount) {
                            const playerCount = parseInt(inputGameConfigPlayerCount.value);
                            playerCountRef.current = playerCount;
                            for (let i = 0; i < playerCount; i++) {
                                const newPlayer: Player = {
                                    id: i,
                                    username: `Player ${i + 1}`,  // default player name
                                    symbol: ""
                                };
                                playersRef.current.push(newPlayer);
                            }
                        } else {
                            alert("ERROR: Unable to get Player Count, defaulting to 2 players");
                            playerCountRef.current = 2;
                        }
                    }
                    if (showGameConfigNewPlayers) {
                        setShowGameConfigNewPlayers(false);
                        setShowGameConfigPlayerTurnOrder(true);
                    }
                    if (showGameConfigPlayerTurnOrder) {
                        setShowGameConfigPlayerTurnOrder(false);
                        setShowConfigBoardDimensions(true);
                    }
                    if (showGameConfigBoardDimensions) {
                        setShowConfigBoardDimensions(false);
                        setShowGameConfig(false);
                        // START GAME
                    }
                }}
                    style={{
                        padding: "10px 16px",
                        minWidth: "150px"
                    }}>
                    {
                        showGameConfigBoardDimensions ?
                            "START"
                            :
                            "NEXT"
                    }
                </button>








            </div>
            {/* Start playing */}
            <div>

            </div>
            {/* Stats */}
            {/* Current player */}
            {/* Turn number */}

            {/* History */}

            {/* Board */}
            <div>
                {

                }
            </div>
        </div>
    );
}