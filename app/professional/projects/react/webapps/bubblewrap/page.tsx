'use client'

import { Breadcrumbs } from "@/components/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Page() {
    // Constants
    const bubbleSize = 100;



    return (
        <>
            <Breadcrumbs separator="/"
                items={[
                    {
                        label: "Professional",
                        href: "/professional"
                    },
                    {
                        label: "Projects",
                        href: "/professional/projects"
                    },
                    {
                        label: "React",
                        href: "/professional/projects/react"
                    },
                    {
                        label: "Web Apps",
                        href: "/professional/projects/react/webapps"
                    },
                    {
                        label: "Bubble Wrap",
                        href: "/professional/projects/react/webapps/bubblewrap"
                    },
                ]}>
            </Breadcrumbs>
            <h1>Bubble Wrap</h1>



            <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Image src={"/imgs/ui/info.svg"} alt={"A nice bubble"} height={30} width={30}></Image>Clicking on any of these bubbles will pop them. Popping all of them is Perfect for scratching that OCD itch.
            </p>
            <p>Or just pop a few and call it a day, <span style={{ textDecoration: "line-through" }}>like a monster</span>. Totally up to you.</p>
            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: "20px"
            }}>
                <Bubble bubbleSize={bubbleSize}></Bubble>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
            }}>
                <Bubble bubbleSize={bubbleSize}></Bubble>
                <Bubble bubbleSize={bubbleSize}></Bubble>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
            }}>
                <Bubble bubbleSize={bubbleSize}></Bubble>
                <Bubble bubbleSize={bubbleSize}></Bubble>
                <Bubble bubbleSize={bubbleSize}></Bubble>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
            }}>
                <Bubble bubbleSize={bubbleSize}></Bubble>
                <Bubble bubbleSize={bubbleSize}></Bubble>
                <Bubble bubbleSize={bubbleSize}></Bubble>
                <Bubble bubbleSize={bubbleSize}></Bubble>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
            }}>
                <Bubble bubbleSize={bubbleSize}></Bubble>
                <Bubble bubbleSize={bubbleSize}></Bubble>
                <Bubble bubbleSize={bubbleSize}></Bubble>
                <Bubble bubbleSize={bubbleSize}></Bubble>
                <Bubble bubbleSize={bubbleSize}></Bubble>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
            }}>
                <Bubble bubbleSize={bubbleSize}></Bubble>
                <Bubble bubbleSize={bubbleSize}></Bubble>
                <Bubble bubbleSize={bubbleSize}></Bubble>
            </div>
        </>
    );
}

const Bubble = ({
    bubbleSize
}: {
    bubbleSize: number
}) => {

    const [isPopped, setIsPopped] = useState<boolean>(false);
    return (
        <div>
            <Image src={"/imgs/game/bubblewrap/bubble.svg"} alt={"A nice bubble"} height={bubbleSize} width={bubbleSize} style={{
                display: isPopped ? "none" : "block",
                translate: "0px 0px",
            }}
                onClick={() => {
                    setIsPopped(true);
                }}>
            </Image>
            <Image src={"/imgs/game/bubblewrap/circle-sparks.svg"} alt={"A sad bubble"} height={bubbleSize + 20} width={bubbleSize + 20} style={{
                display: isPopped ? "block" : "none",
                translate: "10px -10px",
                marginLeft: "-20px",
                marginBottom: "-20px"
            }}>
            </Image>
        </div>
    )
}