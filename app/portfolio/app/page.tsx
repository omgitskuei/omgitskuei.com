import Image from "next/image";
import Link from "next/link";

export default function Page() {
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
                <Link href={"/portfolio"}>Portfolio</Link> &gt; App
            </h1>
            {/* Row 1 */}
            <div style={{ display: "flex", justifyContent: "center", width: "100%", gap: "20px" }}>
                <Link href={"/portfolio/app/todolist"}>
                    <Image src={"/imgs/app/todolist.svg"} alt={"To Do"} width={gameTileSize} height={gameTileSize} style={{ border: "4px solid rgb(30, 40, 30)", borderRadius: "10px" }}></Image>
                </Link>
                <Link href={"/portfolio/app/calc"}>
                    <Image src={"/imgs/app/calculator.svg"} alt={"Calc"} width={gameTileSize} height={gameTileSize} style={{ border: "4px solid rgb(30, 40, 30)", borderRadius: "10px" }}></Image>
                </Link>
                <Link href={"/portfolio/app/chat"}>
                    <Image src={"/imgs/app/conversation.svg"} alt={"Chat"} width={gameTileSize} height={gameTileSize} style={{ border: "4px solid rgb(30, 40, 30)", borderRadius: "10px" }}></Image>
                </Link>
            </div>
            {/* Row 2 */}
        </section>
    );
}
