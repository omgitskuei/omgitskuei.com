'use client'

import Image, { StaticImageData } from 'next/image'
import ntd1 from '@/public/professional/projects/react/webapps/piggybank/ntd1.png';
import ntd1_f from '@/public/professional/projects/react/webapps/piggybank/ntd1_front.png';
import ntd1_b from '@/public/professional/projects/react/webapps/piggybank/ntd1_back.png';
import ntd5 from '@/public/professional/projects/react/webapps/piggybank/ntd5.png';
import ntd5_f from '@/public/professional/projects/react/webapps/piggybank/ntd5_front.png';
import ntd5_b from '@/public/professional/projects/react/webapps/piggybank/ntd5_back.png';
import ntd10 from '@/public/professional/projects/react/webapps/piggybank/ntd10.png';
import ntd10_f from '@/public/professional/projects/react/webapps/piggybank/ntd10_front.png';
import ntd10_b from '@/public/professional/projects/react/webapps/piggybank/ntd10_back.png';
import ntd50 from '@/public/professional/projects/react/webapps/piggybank/ntd50.png';
import ntd50_f from '@/public/professional/projects/react/webapps/piggybank/ntd50_front.png';
import ntd50_b from '@/public/professional/projects/react/webapps/piggybank/ntd50_back.png';
import graphic_cartoon from '@/public/professional/projects/react/webapps/piggybank/graphic_cartoon.png';
import vector from '@/public/professional/projects/react/webapps/piggybank/vector.png';

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProjectBreakdown } from "@/components/ProjectBreakdown";

import { CSSProperties, useEffect, useState } from "react";



export default function Page() {

    const [sum, setSum] = useState<number>(0);

    const coinButtonStyle: CSSProperties = {
        borderRadius: "50%",
        padding: "1px",
        overflow: "hidden", background: "white",
        maxWidth: "25%",
    };
    const coinButtonImageStyle: CSSProperties = {
        maxWidth: "100%",
        height: "auto"
    }

    useEffect(() => {
        const ls_sum = localStorage.getItem("piggybank_sum");
        if (ls_sum) {
            setSum(JSON.parse(ls_sum));
        }
    }, []);

    const saveSumToLocalStorage = (sum: number) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("piggybank_sum", JSON.stringify(sum));
        }
    }

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
                        label: "Piggybank",
                        href: "/professional/projects/react/webapps/piggybank"
                    },
                ]}>
            </Breadcrumbs>
            <h1>Piggybank</h1>
            {/* Description */}
            <section style={{
                marginTop: "20px",
                marginLeft: "10%", marginRight: "10%", alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <div>
                    <h2>What's a 'piggy bank'?</h2>
                    <br />
                    <p>
                        A piggy bank works as a one-way storage container designed to make depositing money easy and retrieving it inconvenient, encouraging delayed gratification and long-term savings.
                    </p>
                    <br />
                    <h2>Why a pig? (historical origin)</h2>
                    <br />
                    <p>
                        During the Middle Ages in Europe, people stored spare coins in jars made of an inexpensive, orange-colored clay called pygg (pronounced pig).
                        As the English language evolved, the word for the clay (pygg) and the animal (pig) came to be pronounced the same way. By the 19th century, potters began shaping these money jars like actual pigs, creating the iconic piggy bank we know today.
                    </p>
                    <br />
                </div>
                <Image src={graphic_cartoon} alt={"Graphic: cartoon featuring a piggy bank"} width={330}></Image>
            </section>
            {/* Project breakdown */}
            <section style={{
                marginLeft: "10%", marginRight: "10%", alignSelf: "stretch",
                // border: "1px solid blue"
            }}>
                <ProjectBreakdown projectName={"Piggybank"}
                    createDate={"2026/07/29"} updateDate={"2026/??/??"}
                    summary={[
                        "The showcase is a counter that assists user with budgeting. The user can use it to exercise financial discipline by putting money away, keeping track of the amount saved.",
                        "The easy to use UI, animations, and prominently displayed cumulated sum may gamify the saving experience and encourage the user to tapper down frivilous spending to 'chase a high score'."
                    ]}
                    goal={"Practice CSS animations to create the flip coin visual, store the sum in localStorage so there's no barrier to use - no sign-up needed."}
                    technologyUsed={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Next.js",
                        "Web APIs: Window.localStorage"
                    ]}
                    scope={[
                        "Click the coin to add its value to the sum.",
                        "Clicking a coin should play animations flipping the coin between Heads and Tails, giving the user visual feedback that the click was registered.",
                        "Clicking a coin should change the prominently displayed sum amount.",
                        "Clicking the hammer should 'smash' the piggybank and zero-out the sum.",
                        "Don't increment the sum further after hitting more than 1 Million by disabling the coin buttons. The hammer button remains enabled."
                    ]}
                    limitations={[
                        "At the moment, only New Taiwan Dollar (NTD) is supported with no option to configure to another currency.",
                        "🚧 The animations part of this app is not complete at this time."
                    ]}>
                </ProjectBreakdown>
            </section>
            {/* Project UI */}
            <section style={{
                marginTop: "20px",
                marginLeft: "10%", marginRight: "10%", alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center"
            }}>
                <h2>Click to deposit</h2>
                {/* Row of coins */}
                <div style={{
                    display: "flex",
                    justifyContent: "center", alignItems: "center",
                    flexWrap: "wrap",
                }}>
                    {/* Click to flip coin and deposit $1 NTD */}
                    <button style={coinButtonStyle}
                        onClick={() => {
                            saveSumToLocalStorage(sum + 1);
                            setSum(sum + 1);
                        }}>
                        {/* <Image src={ntd1_f} alt={"Click to deposit $1 NTD"} width={165}></Image> */}
                        <Image src={ntd1_b}
                            style={coinButtonImageStyle}
                            alt={"Click to deposit $1 NTD"}
                            width={165}>
                        </Image>
                    </button>
                    {/* Click to flip coin and deposit $5 NTD */}
                    <button style={coinButtonStyle}
                        onClick={() => {
                            saveSumToLocalStorage(sum + 5);
                            setSum(sum + 5);
                        }}>
                        {/* <Image src={ntd5_f} alt={"Click to deposit $5 NTD"} width={165}></Image> */}
                        <Image src={ntd5_b}
                            style={coinButtonImageStyle}
                            alt={"Click to deposit $5 NTD"}
                            width={165}>
                        </Image>
                    </button>
                    {/* Click to flip coin and deposit $10 NTD */}
                    <button style={coinButtonStyle}
                        onClick={() => {
                            saveSumToLocalStorage(sum + 10);
                            setSum(sum + 10);
                        }}>
                        {/* <Image src={ntd10_f} alt={"Click to deposit $10 NTD"} width={165}></Image> */}
                        <Image src={ntd10_b}
                            style={coinButtonImageStyle}
                            alt={"Click to deposit $10 NTD"}
                            width={165}>
                        </Image>
                    </button>
                    {/* Click to flip coin and deposit $50 NTD */}
                    <button style={coinButtonStyle}
                        onClick={() => {
                            saveSumToLocalStorage(sum + 50);
                            setSum(sum + 50);
                        }}>
                        {/* <Image src={ntd50_f} alt={"Click to deposit $50 NTD"} width={165}></Image> */}
                        <Image src={ntd50_b}
                            style={coinButtonImageStyle}
                            alt={"Click to deposit $50 NTD"}
                            width={165}></Image>
                    </button>
                </div>
                {/* Current sum */}
                <div style={{
                    width: "100%",
                    // minHeight: "311px",
                    aspectRatio: `${vector.width} / ${vector.height}`,
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                    background: `center / contain no-repeat url(${vector.src})`,
                }}>
                    <span style={{
                        fontSize: "5rem",
                        fontWeight: "bold",
                    }}>
                        ${sum}
                    </span>
                </div>
                {/* Button to reset the sum */}
                <button onClick={() => {
                    saveSumToLocalStorage(0);
                    setSum(0);
                }}
                    style={{
                        padding: "10px 16px",
                        fontSize: "18px"
                    }}>
                    💥🔨 Hammer time!
                </button>
            </section>
        </>
    );
}
