import Link from "next/link";


export default function Page() {
    return (
        <>
            <h1>
                <Link href={"/portfolio"}>Portfolio</Link> &gt; <Link href={"/portfolio/game"}>Game</Link> &gt; Dices
            </h1>
        </>
    );
}
