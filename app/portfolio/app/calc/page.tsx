import Link from "next/link";


export default function Page() {
  return (
    <section style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        width: "100%",
    }}>
        <h1>
            <Link href={"/portfolio"}>Portfolio</Link> &gt; <Link href={"/portfolio/app"}>App</Link> &gt; Calc
        </h1>
    </section>
  );
}
