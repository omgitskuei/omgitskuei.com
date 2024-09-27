import Image from "next/image";
import Link from "next/link";

export default function Page() {
    // Constants
    const gameTileSize = 200;

    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            width: "100%",
        }}>
            <h1>
                <Link href={"/portfolio"}>Portfolio</Link> &gt; Game
            </h1>
            {/* Row 1 */}
            <div style={{ display: "flex", justifyContent: "center", width: "100%", gap: "20px" }}>
                <Link href={"/portfolio/game/chess"}>
                    <Image src={"/imgs/game/chess.svg"} alt={"Chess"} width={gameTileSize} height={gameTileSize} style={{ border: "4px solid rgb(30, 40, 30)", borderRadius: "10px" }}></Image>
                </Link>
                <Link href={"/portfolio/game/tictactoe"}>
                    <Image src={"/imgs/game/tic-tac-toe.svg"} alt={"Tic Tac Toe"} width={gameTileSize} height={gameTileSize} style={{ border: "4px solid rgb(30, 40, 30)", borderRadius: "10px" }}></Image>
                </Link>
                <Link href={"/portfolio/game/dices"}>
                    <Image src={"/imgs/game/rolling-dices.svg"} alt={"Dices"} width={gameTileSize} height={gameTileSize} style={{ border: "4px solid rgb(30, 40, 30)", borderRadius: "10px" }}></Image>
                </Link>

                <Link href={"/portfolio/game/bubblewrap"}>
                    <Image src={"/imgs/game/bubbles.svg"} alt={"Bubble Wrap"} width={gameTileSize} height={gameTileSize} style={{ border: "4px solid rgb(30, 40, 30)", borderRadius: "10px" }}></Image>
                </Link>
            </div>
            {/* Row 2 */}
        </section>
    );
}
