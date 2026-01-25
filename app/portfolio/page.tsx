import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <article style={{ width: "100%" }}>
            {/* Header */}
            <section style={{
                display: "flex",
                justifyContent: "space-between",
                // width: "80%",
                marginTop: "20px",
                padding: "20px",
            }}>
                <h1>Portfolio</h1>
                <div>yes</div>
            </section>
            {/* Categories */}
            <section>
                <div>
                    <Link href={"/portfolio/app"} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Image src={"/imgs/ui/pc.svg"} alt={"Games"} width={128} height={128}></Image>
                        <h2>Web Apps</h2>
                        <p>Various projects </p>
                    </Link>
                </div>
                <br />
                <div>
                    <Link href={"/portfolio/game"} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Image src={"/imgs/ui/console-controller.svg"} alt={"Games"} width={128} height={128}></Image>
                        <h2>Mini Games</h2>
                    </Link>
                </div>
                <br />
                <div>
                    <Link href={"/portfolio/components"} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Image src={"/imgs/ui/id-card.svg"} alt={"Games"} width={128} height={128}></Image>
                        <h2>UI Components</h2>
                    </Link>
                </div>
            </section>
        </article>
    );
}
