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
                <Link href={"/portfolio"}>Portfolio</Link> &gt; UI Components
            </h1>
            {/* Row 1 */}
            
            
            {/* Row 2 */}
        </section>
    );
}
