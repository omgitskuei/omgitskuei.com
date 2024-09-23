import type { Metadata } from "next";
import { Inter, Roboto, Nabla } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({
    subsets: ["latin"]
});
const nabla = Nabla({
    weight: "400",
    subsets: ["latin"]
});
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <nav className={styles.navbar}>
                    <Link href="/"
                        style={{
                            filter: "hue-rotate(90deg)"
                        }}>
                        <div style={{ fontSize: "28px" }} className={nabla.className}>
                            OMG
                        </div>
                        <div style={{ fontSize: "10px", color: "gold", letterSpacing: "1.9px" }}
                            className={roboto.className}>
                            it's Kuei
                        </div>
                    </Link>
                    <div style={{ display: "flex", }}>
                        <Link href="/resume">
                            <h2>
                                Resume <span className={inter.className}>-&gt;</span>
                            </h2>
                        </Link>
                        <Link href="/portfolio">
                            <h2>
                                Portfolio <span className={inter.className}>-&gt;</span>
                            </h2>
                        </Link>
                        <Link href="/notes">
                            <h2>
                                Notes <span className={inter.className}>-&gt;</span>
                            </h2>
                        </Link>
                        <Link href="/blog">
                            <h2>
                                Blog <span className={inter.className}>-&gt;</span>
                            </h2>
                        </Link>
                        <Link href="/about">
                            <h2>
                                About <span className={inter.className}>-&gt;</span>
                            </h2>
                        </Link>
                        <Link href="/contact">
                            <h2>
                                Contact <span className={inter.className}>-&gt;</span>
                            </h2>
                        </Link>
                    </div>
                </nav>
                <main className={styles.main}>
                    <section style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        border: "1px solid red"
                    }}>
                        {children}
                    </section>
                </main>
                <footer className={styles.footer}>
                    <Link href="/sitemap" className={styles.card}>
                        <h4>
                            Sitemap
                        </h4>
                    </Link>
                    <div style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <FooterContact platform={"LINE ID"} username={"kueifengtung"} imgSrc={"/imgs/line.svg"} imgAlt={"LINE"}></FooterContact>
                        <FooterContact platform={"GitHub"} username={"omgitskuei"} imgSrc={"/imgs/github.svg"} imgAlt={"GitHub"} imgInverse={true} link={"https://github.com/omgitskuei/"}></FooterContact>
                        <FooterContact platform={"Discord"} username={"omgitskuei"} imgSrc={"/imgs/discord.svg"} imgAlt={"Discord"}></FooterContact>
                    </div>
                    <div>
                        <p>Copyright © 2024 Kuei Feng Tung.</p>
                        <p>All Rights Reserved.</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}

const FooterContact = ({
    platform,
    username,
    imgSrc,
    imgAlt,
    imgInverse = false,
    link = ""
}: {
    platform: string,
    username: string,
    imgSrc: string,
    imgAlt: string,
    imgInverse?: boolean,
    link?: string
}) => {

    if (link != "") {
        return (
            <Link href={link}>
                <div style={{
                    display: "flex",
                }}>
                    <span style={{
                        width: "100px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px"
                    }}>
                        <Image src={imgSrc} alt={imgAlt} width={15} height={15} style={{ filter: imgInverse ? "invert(1)" : "none" }}></Image>{platform}:
                    </span>
                    <span style={{ textDecoration: "underline" }}>
                        {username}
                    </span>
                </div>
            </Link>
        );
    } else {
        return (
            <div style={{
                display: "flex",
            }}>
                <span style={{
                    width: "100px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px"
                }}>
                    <Image src={imgSrc} alt={imgAlt} width={15} height={15} style={{ filter: imgInverse ? "invert(1)" : "none" }}></Image>{platform}:
                </span>
                <span>
                    {username}
                </span>
            </div>
        );
    }
}
