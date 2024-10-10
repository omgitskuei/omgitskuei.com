'use client'

import { Nabla, Roboto } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

const nabla = Nabla({
    weight: "400",
    subsets: ["latin"]
});
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

const Style: { [key: string]: React.CSSProperties } = {
    navbarItem: { display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }
}

export const Navbar = ({ }: {}) => {

    const [showNav, setShowNav] = useState<boolean>(false);
    const [showSettings, setShowSettings] = useState<boolean>(false);

    const NavbarItem = ({
        hrefLink,
        imgSrc,
        label,
    }: {
        hrefLink: string,
        imgSrc: string,
        label: string,
    }) => {
        return (
            <Link href={hrefLink}>
                <h2 className={roboto.className}
                    style={Style.navbarItem}>
                    <Image src={imgSrc} alt={label}
                        width={30} height={30}
                        style={{ filter: "var(--button_filter)" }}>
                    </Image>
                    {label}
                </h2>
            </Link>
        )
    }

    return (
        <nav style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            width: "100%",
            height: "70px",
            zIndex: "10",
            background: "linear-gradient(to bottom, rgba(var(--themeColor1), 0.1), rgba(var(--callout-rgb), 0.1))",
            borderRadius: "0px",
            borderBottom: "1px solid rgba(var(--callout-border-rgb), 0.80)",
            backgroundClip: "padding-box",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            paddingLeft: "0px",
            paddingRight: "20px",
            inset: "0 0 auto",
        }}>
            {/* Logo */}
            <Link href="/">
                <Image src={"/imgs/logo/icon_website_black.png"} alt={"Notes"} width={100} height={70} style={{ background: "rgb(50, 205, 50)" }}></Image>
            </Link>

            <div style={{ display: "flex", alignItems: "center" }}>


                {/* Nav */}
                {
                    !showNav ?
                        <button
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                background: "none",
                                border: "none"
                            }}
                            onClick={() => {
                                setShowSettings(false);
                                setShowNav(true);
                            }
                            }>
                            <Image src={"/imgs/ui/hamburger-menu.svg"} alt={"Nav menu"}
                                width={50} height={50}
                                style={{ filter: "var(--button_filter)" }}>
                            </Image>
                        </button>
                        :
                        <div style={{ display: "flex", gap: "20px" }}>
                            <NavbarItem hrefLink={"/resume"} imgSrc={"/imgs/ui/graduate-cap.svg"} label={"Resume"}>
                            </NavbarItem>
                            <NavbarItem hrefLink={"/portfolio"} imgSrc={"/imgs/ui/medal.svg"} label={"Portfolio"}>
                            </NavbarItem>
                            <NavbarItem hrefLink={"/notes"} imgSrc={"/imgs/ui/inspiration.svg"} label={"Notes"}>
                            </NavbarItem>
                            <NavbarItem hrefLink={"/blog"} imgSrc={"/imgs/ui/chat-bubble.svg"} label={"Blog"}>
                            </NavbarItem>
                            <NavbarItem hrefLink={"/about"} imgSrc={"/imgs/ui/magnifying-glass.svg"} label={"About"}>
                            </NavbarItem>
                            <NavbarItem hrefLink={"/contact"} imgSrc={"/imgs/ui/envelope.svg"} label={"Contact"}>
                            </NavbarItem>
                        </div>
                }

                {/* Divider */}
                <div style={{ width: "4px", background: 'lime', height: "50px", marginLeft: "40px", marginRight: "40px", filter: "var(--button_filter)" }}></div>

                {/* Settings */}
                {
                    !showSettings ?
                        <button
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                background: "none",
                                border: "none"
                            }}
                            onClick={() => {
                                setShowSettings(true);
                                setShowNav(false);
                            }
                            }>
                            <Image src={"/imgs/ui/settings-knobs.svg"} alt={"Settings"}
                                width={50} height={50}
                                style={{ filter: "var(--button_filter)" }}>
                            </Image>
                        </button>
                        :
                        <div style={{ display: "flex", gap: "20px" }}>
                            <NavbarItem hrefLink={"/settings#language"} imgSrc={"/imgs/ui/wireframe-globe.svg"} label={"Language"}>
                            </NavbarItem>
                            <NavbarItem hrefLink={"/settings#theme"} imgSrc={"/imgs/ui/moon.svg"} label={"Theme"}>
                            </NavbarItem>
                        </div>
                }


            </div>
        </nav>
    )
}