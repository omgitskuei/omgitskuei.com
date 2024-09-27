import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <section style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
        }}>
            <h1>
                Portfolio
            </h1>
            <div>
                {/* Web Apps */}
                <section style={{
                    display: "flex",
                    gap: "10px",
                    border: "1px solid white",
                    width: "1180px"
                }}>
                    <Link href={"/portfolio/app"}>
                        <h2>Web Apps</h2>
                        <Image src={"/imgs/ui/pc.svg"} alt={"Games"} width={128} height={128}></Image>
                    </Link>
                </section>
                {/* Mini Games */}
                <section style={{
                    display: "flex",
                    gap: "10px",
                    border: "1px solid white",
                    width: "1180px"
                }}>
                    <Link href={"/portfolio/game"}>
                        <h2>Mini Games</h2>
                        <Image src={"/imgs/ui/console-controller.svg"} alt={"Games"} width={128} height={128}></Image>
                    </Link>
                </section>
                {/* UI Components */}
                <section style={{
                    display: "flex",
                    gap: "10px",
                    border: "1px solid white",
                    width: "1180px"
                }}>
                    <Link href={"/portfolio/components"}>
                        <h2>UI Components</h2>
                        <Image src={"/imgs/ui/id-card.svg"} alt={"Games"} width={128} height={128}></Image>
                    </Link>
                </section>
            </div>
        </section>
    );
}
