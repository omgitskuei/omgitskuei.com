'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {

    const [grid, setGrid] = useState<JSX.Element[]>([
        // Row 1
        <Image src={"/imgs/game/chess/black/chess-rook.svg"} alt={"Rook"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/black/chess-knight.svg"} alt={"Knight"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/black/chess-bishop.svg"} alt={"Bishop"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/black/chess-king.svg"} alt={"King"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/black/chess-queen.svg"} alt={"Queen"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/black/chess-bishop.svg"} alt={"Bishop"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/black/chess-knight.svg"} alt={"Knight"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/black/chess-rook.svg"} alt={"Rook"} width={100} height={100}></Image>,
        // Row 2
        <Image src={"/imgs/game/chess/black/chess-pawn.svg"} alt={"Pawn"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/black/chess-pawn.svg"} alt={"Pawn"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/black/chess-pawn.svg"} alt={"Pawn"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/black/chess-pawn.svg"} alt={"Pawn"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/black/chess-pawn.svg"} alt={"Pawn"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/black/chess-pawn.svg"} alt={"Pawn"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/black/chess-pawn.svg"} alt={"Pawn"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/black/chess-pawn.svg"} alt={"Pawn"} width={100} height={100}></Image>,
        // Row 3
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        // Row 4
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        // Row 5
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        // Row 5
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        <div></div>,
        // Row 6
        <Image src={"/imgs/game/chess/white/chess-pawn.svg"} alt={"Pawn"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/white/chess-pawn.svg"} alt={"Pawn"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/white/chess-pawn.svg"} alt={"Pawn"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/white/chess-pawn.svg"} alt={"Pawn"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/white/chess-pawn.svg"} alt={"Pawn"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/white/chess-pawn.svg"} alt={"Pawn"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/white/chess-pawn.svg"} alt={"Pawn"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/white/chess-pawn.svg"} alt={"Pawn"} width={100} height={100}></Image>,
        // Row 7
        <Image src={"/imgs/game/chess/white/chess-rook.svg"} alt={"Rook"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/white/chess-knight.svg"} alt={"Knight"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/white/chess-bishop.svg"} alt={"Bishop"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/white/chess-king.svg"} alt={"King"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/white/chess-queen.svg"} alt={"Queen"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/white/chess-bishop.svg"} alt={"Bishop"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/white/chess-knight.svg"} alt={"Knight"} width={100} height={100}></Image>,
        <Image src={"/imgs/game/chess/white/chess-rook.svg"} alt={"Rook"} width={100} height={100}></Image>,
    ]);

    const Style: { [key: string]: React.CSSProperties } = {
        boardTile: {
            display: "flex",
            width: "100px",
            height: "100px",
        },
    }

    const [activePlayer, setActivePlayer] = useState<"white" | "black">("white");
872
    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
        }}>
            
            <h1>
            <Link href={"/portfolio"}>Portfolio</Link> &gt; <Link href={"/portfolio/game"}>Game</Link> &gt; Chess
            </h1>
            {/* Stats */}
            <section style={{
                padding: "20px",
                border: "2px white solid",
                display: "flex",
                height: "100px",
                width: "850px",
            }}>
                Active player: {activePlayer}
            </section>
            {/* Board */}
            <section style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {/* Board image */}
                <Image src={"/imgs/game/chess/empty-chessboard.svg"} alt={"Board"} width={872} height={872}></Image>
                {/* Board's overlay grid */}
                <div style={{ margin: "13px", position: "absolute", zIndex: "2" }}>
                    <div style={{ display: "flex", width: "800px", height: "100px", }}>
                        <div style={Style.boardTile}>{grid[0]}</div>
                        <div style={Style.boardTile}>{grid[1]}</div>
                        <div style={Style.boardTile}>{grid[2]}</div>
                        <div style={Style.boardTile}>{grid[3]}</div>
                        <div style={Style.boardTile}>{grid[4]}</div>
                        <div style={Style.boardTile}>{grid[5]}</div>
                        <div style={Style.boardTile}>{grid[6]}</div>
                        <div style={Style.boardTile}>{grid[7]}</div>
                    </div>
                    <div style={{ display: "flex", width: "800px", height: "100px", }}>
                        <div style={Style.boardTile}>{grid[8]}</div>
                        <div style={Style.boardTile}>{grid[9]}</div>
                        <div style={Style.boardTile}>{grid[10]}</div>
                        <div style={Style.boardTile}>{grid[11]}</div>
                        <div style={Style.boardTile}>{grid[12]}</div>
                        <div style={Style.boardTile}>{grid[13]}</div>
                        <div style={Style.boardTile}>{grid[14]}</div>
                        <div style={Style.boardTile}>{grid[15]}</div>
                    </div>
                    <div style={{ display: "flex", width: "800px", height: "100px", }}>
                        <div style={Style.boardTile}>{grid[16]}</div>
                        <div style={Style.boardTile}>{grid[17]}</div>
                        <div style={Style.boardTile}>{grid[18]}</div>
                        <div style={Style.boardTile}>{grid[19]}</div>
                        <div style={Style.boardTile}>{grid[20]}</div>
                        <div style={Style.boardTile}>{grid[21]}</div>
                        <div style={Style.boardTile}>{grid[22]}</div>
                        <div style={Style.boardTile}>{grid[23]}</div>
                    </div>
                    <div style={{ display: "flex", width: "800px", height: "100px", }}>
                        <div style={Style.boardTile}>{grid[24]}</div>
                        <div style={Style.boardTile}>{grid[25]}</div>
                        <div style={Style.boardTile}>{grid[26]}</div>
                        <div style={Style.boardTile}>{grid[27]}</div>
                        <div style={Style.boardTile}>{grid[28]}</div>
                        <div style={Style.boardTile}>{grid[29]}</div>
                        <div style={Style.boardTile}>{grid[30]}</div>
                        <div style={Style.boardTile}>{grid[31]}</div>
                    </div>
                    <div style={{ display: "flex", width: "800px", height: "100px", }}>
                        <div style={Style.boardTile}>{grid[32]}</div>
                        <div style={Style.boardTile}>{grid[33]}</div>
                        <div style={Style.boardTile}>{grid[34]}</div>
                        <div style={Style.boardTile}>{grid[35]}</div>
                        <div style={Style.boardTile}>{grid[36]}</div>
                        <div style={Style.boardTile}>{grid[37]}</div>
                        <div style={Style.boardTile}>{grid[38]}</div>
                        <div style={Style.boardTile}>{grid[39]}</div>
                    </div>
                    <div style={{ display: "flex", width: "800px", height: "100px", }}>
                        <div style={Style.boardTile}>{grid[40]}</div>
                        <div style={Style.boardTile}>{grid[41]}</div>
                        <div style={Style.boardTile}>{grid[42]}</div>
                        <div style={Style.boardTile}>{grid[43]}</div>
                        <div style={Style.boardTile}>{grid[44]}</div>
                        <div style={Style.boardTile}>{grid[45]}</div>
                        <div style={Style.boardTile}>{grid[46]}</div>
                        <div style={Style.boardTile}>{grid[47]}</div>
                    </div>
                    <div style={{ display: "flex", width: "800px", height: "100px", }}>
                        <div style={Style.boardTile}>{grid[48]}</div>
                        <div style={Style.boardTile}>{grid[49]}</div>
                        <div style={Style.boardTile}>{grid[50]}</div>
                        <div style={Style.boardTile}>{grid[51]}</div>
                        <div style={Style.boardTile}>{grid[52]}</div>
                        <div style={Style.boardTile}>{grid[53]}</div>
                        <div style={Style.boardTile}>{grid[54]}</div>
                        <div style={Style.boardTile}>{grid[55]}</div>
                    </div>
                    <div style={{ display: "flex", width: "800px", height: "100px", }}>
                        <div style={Style.boardTile}>{grid[56]}</div>
                        <div style={Style.boardTile}>{grid[57]}</div>
                        <div style={Style.boardTile}>{grid[58]}</div>
                        <div style={Style.boardTile}>{grid[59]}</div>
                        <div style={Style.boardTile}>{grid[60]}</div>
                        <div style={Style.boardTile}>{grid[61]}</div>
                        <div style={Style.boardTile}>{grid[62]}</div>
                        <div style={Style.boardTile}>{grid[63]}</div>
                    </div>
                </div>
            </section>
            <div>
            </div>
            <div>
            </div>
        </section>
    );
}
