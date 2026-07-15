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

interface Game {
    config: {
        boardRows: number,
        boardColumns: number,
        winLength: number,
        playerTurnOrder: Player[]
    },
    history: GameState[]
}

export default function TicTacToe() {

   

    return (
        <div style={{
            minWidth: "320px",
            alignSelf: "stretch",
            border: "1px solid green",
            // maxWidth: "320px",
            boxShadow: "0px 10px 20px rgba(0,0,0,0.5)",
        }}>
           
        </div>
    );
}