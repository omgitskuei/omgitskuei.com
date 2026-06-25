import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import { Roboto, Nabla, Inter } from 'next/font/google'
import { ExpandableBox } from "@/components/ExpandableBox";

const inter = Inter({
    weight: "400",
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

interface DoorSection {
    label: string;
    url: string;
    description: string;
}

export default function Page() {

    // Sub-components
    const Door = ({
        header,
        description,
        url,
        sections,
        bgColor,
        textColor
    }: {
        header: String,
        description: String,
        url: string,
        sections: DoorSection[],
        bgColor: string,
        textColor: string
    }) => {
        return (
            <section className={styles.door} style={{
                backgroundColor: bgColor,
                color: textColor,
                padding: "5%",
                minWidth: "320px",
                // Make Doors within the same flex container to use up width evenly
                flexGrow: "1",
                flexShrink: "1",
                flexBasis: "0",
                boxSizing: "border-box" // Prevents padding/borders from being used to calculate dividing the width
            }}>
                <h1>{header}</h1>
                <p>
                    {description}
                </p>
                <div>
                    <Link href={url} style={{ color: textColor }}>Enter →</Link>
                </div>
                <br />
                <div>
                    <h2>{"Jump to ..."}</h2>
                    <div>
                        {
                            sections.map((item, index) => (
                                <Link key={`${item.label}-${index}`}  href={item.url} style={{ color: textColor }}><h3>{item.label}</h3></Link>
                            ))
                        }
                    </div>
                </div>
            </section>
        )
    }

    return (
        <>
            <article style={{
                paddingLeft: "10%",
                paddingRight: "10%",
            }}>
                {/* <h1>Welcome to OmgItsKuei</h1> */}
                <section style={{
                    display: "flex",
                    flexDirection: "row",

                }}>
                    {/* Professional */}
                    <Door header={"Professional"} url={"/professional"} bgColor={"#1d3f28"} textColor="#eeeeee"
                        description={"For employers and clients interested in secure, robust, and fast tailored digital solutions, explore my portfolio, resume, pricing, and contact-me"}
                        sections={[
                            {
                                label: 'Portfolio',
                                url: '/professional/portfolio',
                                description: 'The official documentation for React, covering hooks, components, and state management.'
                            },
                            {
                                label: 'Resume',
                                url: '/professional/resume',
                                description: 'A comprehensive guide to learning TypeScript, interfaces, types, and compiler configurations.'
                            },
                            {
                                label: 'Pricing',
                                url: '/professional/pricing',
                                description: 'A utility-first CSS framework documentation for rapidly building custom user interfaces.'
                            },
                            {
                                label: 'Contact me',
                                url: 'https://tailwindcss.com/docs',
                                description: 'A utility-first CSS framework documentation for rapidly building custom user interfaces.'
                            }
                        ]}>
                    </Door>
                    {/* Personal */}
                    <Door header={"Personal"} url={"/personal"} bgColor={"#000000"} textColor="lime"
                        description={"Explore my hobbies; Art, Woodworking, Archery, Cooking, Travel, Video games, Hardware, and [REDACTED]"}
                        sections={[
                            {
                                label: 'Art',
                                url: '/personal/art',
                                description: 'Painting, Drawing, Sketching, Pottery'
                            },
                            {
                                label: 'Woodworking',
                                url: '/personal/woodworking',
                                description: 'Wood carving, Houseware and Furniture making, Whittling'
                            },
                            {
                                label: 'Archery',
                                url: '/personal/archery',
                                description: 'Shooting recurve and the data science behind measuring my performance over time'
                            },
                            {
                                label: 'Cooking',
                                url: '/personal/cooking',
                                description: 'Learning recipes and modifying them to better suite my tastes'
                            },
                            {
                                label: 'Travel',
                                url: '/personal/travel',
                                description: 'Album from my travels'
                            },
                            {
                                label: 'Video games',
                                url: '/personal/videogames',
                                description: 'Video game Gallery, Reviews, Achievemenets'
                            },
                            {
                                label: 'Hardware',
                                url: '/personal/hardware',
                                description: 'Album from my travels'
                            },
                            {
                                label: '[REDACTED]',
                                url: '/personal/redacted',
                                description: 'Top-secret corner for Authorized users only'
                            },
                        ]}>
                    </Door>
                </section>
            </article>
        </>
    );
}
