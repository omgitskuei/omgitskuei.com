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
    symbol: string
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
    // Board
    const [showGameBoard, setShowGameBoard] = useState<boolean>(false);

    // Remember game configs
    const playerCountRef = useRef<number>(2);

    const [players, setPlayers] = useState<Player[]>([]);
    const [boardRows, setBoardRows] = useState<number>(3);
    const [boardCols, setBoardCols] = useState<number>(3);
    const [board, setBoard] = useState<Square[][]>([]);

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
            const updatedPlayers: Player[] = players;
            const [draggedItem] = updatedPlayers.splice(draggedIndex, 1);
            updatedPlayers.splice(targetIndex, 0, draggedItem);

            setPlayers(updatedPlayers);
            setDraggedIndex(null);
        };

        return (
            <div style={{ maxWidth: '300px', margin: '20px auto' }}>
                <ol style={{ padding: 0, listStyle: 'none' }}>
                    {
                        players.map((player, index) => (
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
                    flexWrap: "wrap",
                    // justifyContent: "space-around",
                    // flexDirection: "column"
                    gap: "10px",
                    border: "1px solid red"
                }}>
                    {
                        players.map((player, index) => {

                            return (
                                <div style={{
                                    width: "calc(50% - 5px)",
                                    boxSizing: "border-box",
                                    border: "1px solid red",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}>
                                    <div>
                                        <label htmlFor="newPlayerName">Name: </label>
                                        <br />
                                        <input type="text"
                                            id="newPlayerName"
                                            value={player.username}
                                            onChange={(e) => {
                                                const currentPlayers = [...players];
                                                currentPlayers[index] = {
                                                    ...player,
                                                    username: e.target.value
                                                };
                                                setPlayers(currentPlayers);
                                                console.log(currentPlayers);
                                            }}
                                            style={{ width: "115px" }} />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                        <label htmlFor="newPlayerSymbol">Symbol: {player.symbol}</label>
                                        {/* 1 row of symbol btns */}
                                        <div style={{ display: "flex", gap: "5px" }}>
                                            <button style={GameConfigSymbolButtonStyle}
                                                onClick={() => {
                                                    const currentPlayers = [...players];
                                                    if (currentPlayers) {
                                                        player.symbol = "❌";
                                                        currentPlayers[index] = player
                                                        setPlayers(currentPlayers);
                                                        console.log(currentPlayers);
                                                    }
                                                }}>
                                                ❌
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}
                                                onClick={() => {
                                                    const currentPlayers = [...players];
                                                    if (currentPlayers) {
                                                        player.symbol = "⭕";
                                                        currentPlayers[index] = player
                                                        console.log(currentPlayers)
                                                        setPlayers(currentPlayers);
                                                    }
                                                }}>
                                                ⭕
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}
                                                onClick={() => {
                                                    const currentPlayers = [...players];
                                                    if (currentPlayers) {
                                                        player.symbol = "🐈";
                                                        currentPlayers[index] = player
                                                        console.log(currentPlayers)
                                                        setPlayers(currentPlayers);
                                                    }
                                                }}>
                                                🐈
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}
                                                onClick={() => {
                                                    const currentPlayers = [...players];
                                                    if (currentPlayers) {
                                                        player.symbol = "🐩";
                                                        currentPlayers[index] = player
                                                        console.log(currentPlayers)
                                                        setPlayers(currentPlayers);
                                                    }
                                                }}>
                                                🐩
                                            </button>
                                        </div>
                                        {/* 2 row of symbol btns */}
                                        <div style={{ display: "flex", gap: "5px" }}>
                                            <button style={GameConfigSymbolButtonStyle}
                                                onClick={() => {
                                                    const currentPlayers = [...players];
                                                    if (currentPlayers) {
                                                        player.symbol = "💎";
                                                        currentPlayers[index] = player
                                                        console.log(currentPlayers)
                                                        setPlayers(currentPlayers);
                                                    }
                                                }}>
                                                💎
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}
                                                onClick={() => {
                                                    const currentPlayers = [...players];
                                                    if (currentPlayers) {
                                                        player.symbol = "🗑️";
                                                        currentPlayers[index] = player
                                                        console.log(currentPlayers)
                                                        setPlayers(currentPlayers);
                                                    }
                                                }}>
                                                🗑️
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}
                                                onClick={() => {
                                                    const currentPlayers = [...players];
                                                    if (currentPlayers) {
                                                        player.symbol = "👑";
                                                        currentPlayers[index] = player
                                                        console.log(currentPlayers)
                                                        setPlayers(currentPlayers);
                                                    }
                                                }}>
                                                👑
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}

                                                onClick={() => {
                                                    const currentPlayers = [...players];
                                                    if (currentPlayers) {
                                                        player.symbol = "🏰";
                                                        currentPlayers[index] = player
                                                        console.log(currentPlayers)
                                                        setPlayers(currentPlayers);
                                                    }
                                                }}>
                                                🏰
                                            </button>
                                        </div>
                                        {/* 3 row of symbol btns */}
                                        <div style={{ display: "flex", gap: "5px" }}>
                                            <button style={GameConfigSymbolButtonStyle} onClick={() => {
                                                const currentPlayers = [...players];
                                                if (currentPlayers) {
                                                    player.symbol = "🍎";
                                                    currentPlayers[index] = player
                                                    console.log(currentPlayers)
                                                    setPlayers(currentPlayers);
                                                }
                                            }}>
                                                🍎
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle} onClick={() => {
                                                const currentPlayers = [...players];
                                                if (currentPlayers) {
                                                    player.symbol = "🍌";
                                                    currentPlayers[index] = player
                                                    console.log(currentPlayers)
                                                    setPlayers(currentPlayers);
                                                }
                                            }}>
                                                🍌
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}
                                                onClick={() => {
                                                    const currentPlayers = [...players];
                                                    if (currentPlayers) {
                                                        player.symbol = "🗡️";
                                                        currentPlayers[index] = player
                                                        console.log(currentPlayers)
                                                        setPlayers(currentPlayers);
                                                    }
                                                }}>
                                                🗡️
                                            </button>
                                            <button style={GameConfigSymbolButtonStyle}
                                                onClick={() => {
                                                    const currentPlayers = [...players];
                                                    if (currentPlayers) {
                                                        player.symbol = "🛡️";
                                                        currentPlayers[index] = player
                                                        console.log(currentPlayers)
                                                        setPlayers(currentPlayers);
                                                    }
                                                }}>
                                                🛡️
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                {/* Config Step 3: Modify turn order of players */}
                <div style={{
                    display: showGameConfigPlayerTurnOrder ? "flex" : "none",
                    flexDirection: "column"
                }}>
                    <label htmlFor="">Customize turn order: </label>
                    <PlayerTurnOrderArranger></PlayerTurnOrderArranger>
                    <button>Randomize 🎲</button>
                </div>
                {/* Config Step 4: Modify board dimensions */}
                <div style={{
                    display: showGameConfigBoardDimensions ? "flex" : "none",
                    flexDirection: "column"
                }}>
                    <span>Board Dimensions: {boardRows}x{boardCols}</span>
                    <div style={{ width: "300px", display: "flex", justifyContent: "space-between" }}>
                        <label htmlFor="newBoardRows">Rows: </label>
                        <input type="number" id="newBoardRows" value={boardRows} onChange={e => setBoardRows(parseInt(e.target.value))} />
                    </div>
                    <div style={{ width: "300px", display: "flex", justifyContent: "space-between" }}>
                        <label htmlFor="newBoardCols">Columns: </label>
                        <input type="number" id="newBoardCols" value={boardCols} onChange={e => setBoardCols(parseInt(e.target.value))} />
                    </div>
                </div>
                {/* Config - Nav button */}
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
                                players.push(newPlayer);
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
                        setShowGameBoard(true);
                        var newBoard: Square[][] = [];
                        for (let r = 0; r < boardRows; r++) {
                            const row: Square[] = [];

                            for (let c = 0; c < boardCols; c++) {
                                row.push({
                                    owner: null,
                                    symbol: ""
                                })
                            }

                            newBoard.push(row);
                        }
                        setBoard(newBoard);
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
            <div style={{
                display: showGameBoard ? "flex" : "none",
                height: "300px",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                // gap: "20px"
            }}>
                Game board
                {
                    board.map((row, rowIndex) => {
                        return (
                            <>
                                <div style={{ display: "flex", flexDirection: "row" }}>

                                    {
                                        row.map((col, colIndex) => {
                                            return (
                                                <>
                                                    <div style={{
                                                        border: "1px solid black",
                                                        width: "40px",
                                                        height: "40px",
                                                        cursor: col.owner === null ? "pointer" : "no-drop"
                                                    }}
                                                        onClick={() => {
                                                            alert(`Row:${rowIndex}, Col:${colIndex}`)
                                                        }}>
                                                        {/* {`Username: ${col.owner?.username}`} */}
                                                        {`${col.symbol}`}
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                    {/* R# display */}
                                    <div style={{
                                        // border: "1px dashed black",
                                        width: "40px",
                                        height: "40px",
                                        // cursor: col.owner === null ? "pointer" : "no-drop",
                                        display: "flex",
                                        justifyContent: "start",
                                        alignItems: "center"
                                    }}>
                                        R{rowIndex + 1}
                                    </div>
                                </div>
                                {
                                    (rowIndex + 1) == board.length ?
                                        // C# display
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            {
                                                row.map((col, colIndex) => {
                                                    return (
                                                        <div style={{
                                                            // border: "1px dashed black",
                                                            width: "40px",
                                                            height: "40px",
                                                            // cursor: col.owner === null ? "pointer" : "no-drop",
                                                            display: "flex",
                                                            justifyContent: "center"
                                                        }}>
                                                            C{colIndex + 1}
                                                        </div>
                                                    )
                                                })
                                            }
                                            {/* R#/C# joint layout display */}
                                            <div style={{
                                                // border: "1px dashed black",
                                                width: "40px",
                                                height: "40px",
                                                // cursor: col.owner === null ? "pointer" : "no-drop",
                                                display: "flex",
                                                justifyContent: "center"
                                            }}>
                                            </div>
                                        </div>
                                        :
                                        <></>

                                }
                            </>
                        )
                    })
                }


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
        </div >
    );
}