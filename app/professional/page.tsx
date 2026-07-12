'use client';

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { MandarinPinyin } from "@/components/i18n/MandarinPinyin";
import { useRef, useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function Page() {

    const [avatarIndex, setAvatarIndex] = useState<number>(0);

    const avatarWidth = 200;
    const avatarHeight = 200;
    const introductionFontFamily = "Roboto, sans-serif";
    const introductionHeaderFontSize = "27px";
    const introductionFontSize = "18px";

    const avatarImages = [
        "/professional/line_avatar.png",
        "/professional/linkedin_avatar.jpg"
    ];

    /**
     * Handles the click event for the avatar image.
     */
    const handleAvatarClick = () => {
        setAvatarIndex((prevIndex) => (prevIndex + 1) % 2);
    }

    /**
     * Handles the click event for the sound button, playing the pronunciation audio.
     */
    const handleSoundClick = () => {
        const audio = new Audio("/professional/pronunciation.mp3");
        audio.play();
    }

    return (
        <>
            <Breadcrumbs separator="/"></Breadcrumbs>
            {
                avatarIndex === 0 ?
                    <Image src={avatarImages[0]}
                        alt={"Kuei-Feng Tung (Chris)"}
                        style={{
                            borderRadius: "50%",
                            margin: "30px 0px",
                            cursor: "pointer"
                        }}
                        width={avatarWidth} height={avatarHeight}
                        onClick={handleAvatarClick}>
                    </Image>
                    :
                    <></>
            }
            {
                avatarIndex === 1 ?
                    <Image src={avatarImages[1]}
                        alt={"Kuei-Feng Tung (Chris)"}
                        style={{
                            borderRadius: "50%",
                            margin: "30px 0px",
                            cursor: "pointer"
                        }}
                        width={avatarWidth} height={avatarHeight}
                        onClick={handleAvatarClick}>
                    </Image>
                    :
                    <></>
            }

            <section style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "20px",
            }}>
                <h1 style={{ fontFamily: introductionFontFamily, fontSize: introductionHeaderFontSize }}>Kuei-Feng Tung (Chris)</h1>
                <div style={{
                    marginTop: "5px",
                }}>
                    <MandarinPinyin baseText={"董奎峰"}
                        annotation={`do3ng kui2 fe1ng`}
                        translation={``}
                        fontSize={"25px"}
                        reversePositionng={true}>
                    </MandarinPinyin>
                    <button style={{
                        height: "25px",
                        width: "25px",
                        marginLeft: "5px",
                        transform: "translateY(-3px)",
                        background: "black",
                        border: "rgba(0,80,255,1) 1px solid",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }} onClick={handleSoundClick}>
                        🔊
                    </button>
                </div>
            </section>
            <section style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "10%",
                marginRight: "10%",
                gap: "10px"
            }}>
                <p style={{ fontFamily: introductionFontFamily, fontSize: introductionFontSize }}>As a software engineer experienced in a variety of web development roles, I do more than just write code; I build systems that are secure, reliable, and scalable. </p>
                <p style={{ fontFamily: introductionFontFamily, fontSize: introductionFontSize }}>Much of my career has been spent in Fintech, where reliability and security are non-negotiable, and I take great pride in the quality of my work. </p>
                <p style={{ fontFamily: introductionFontFamily, fontSize: introductionFontSize }}>While my experience is primarily Java-related, I am a language-agnostic problem solver with a track record of expanding my toolkit as needed, proven by my proficiency in Python and JavaScript ecosystems. </p>
                <p style={{ fontFamily: introductionFontFamily, fontSize: introductionFontSize }}>Technical expertise is only half the equation, though — what sets me apart is that I am an exceptional teammate. My strong communication skills, collaborative mindset, and experience working with international colleagues make me a seamless addition to any team looking to bolster its roster.</p>
            </section>
            <section style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "20px",
                gap: "10px"
            }}>
                <Link href={"/professional/contact"} style={{
                    // height: "25px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px 16px",
                    background: "black",
                    border: "rgba(0,80,255,1) 1px solid",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontFamily: introductionFontFamily,
                }}>
                    Contact
                </Link>
                <Link href={"/professional/resume"} style={{
                    // height: "25px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px 16px",
                    background: "black",
                    border: "rgba(0,80,255,1) 1px solid",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontFamily: introductionFontFamily,
                }}>
                    Resume
                </Link>
                <Link href={"/professional/projects"} style={{
                    // height: "25px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px 16px",
                    background: "black",
                    border: "rgba(0,80,255,1) 1px solid",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontFamily: introductionFontFamily,
                }}>
                    Projects
                </Link>
            </section>

        </>
    );
}
