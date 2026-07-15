'use client'

import styles from "./page.module.css";

import { useState, useRef } from "react";

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

    const [showTitle, setShowTitle] = useState<boolean>(true);
    const [showGameConfig, setShowGameConfig] = useState<boolean>(false);

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
                display: showTitle ? "block" : "none",
                height: "300px"
            }}>
                <button onClick={() => {
                    setShowTitle(false);
                    setShowGameConfig(true)
                }}>
                    NEW GAME
                </button>
            </div>
            {/* Configure the game */}
            <div style={{
                display: showGameConfig ? "block" : "none",
                height: "300px"
            }}>
                <span>New Player</span>
                <div>
                    <label htmlFor="newPlayerName">Name: </label>
                    <input type="text" id="newPlayerName" />
                </div>
                <div>
                    <label htmlFor="newPlayerSymbol">Choose your Symbol</label>
                    <button>🐈</button>
                    <button>🐩</button>
                    <button>💎</button>
                    <button>👑</button>
                    <button>🍎</button>
                    <button>🗡️</button>
                </div>
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