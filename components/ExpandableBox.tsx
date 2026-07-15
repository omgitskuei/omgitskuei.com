'use client'

import Link from "next/link";
import { useState } from "react";

export const ExpandableBox = ({
    defaultIsOpen = false,
    header,
    children,
    bgColor = "##e0e0e0",
    link,
}: {
    defaultIsOpen?: boolean,
    header: string,
    children: JSX.Element[] | JSX.Element,
    bgColor?: string,
    link?: {
        label: string,
        url: string
    }
}) => {

    const [isOpen, setIsOpen] = useState(defaultIsOpen);

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            style={{
                // border: "1px solid #e0e0e0",
                boxSizing: "border-box",
                // borderRadius: "8px",
                padding: "20px",
                cursor: "pointer",
                // backgroundColor: isOpen ?  "#ffffff" : bgColor,
                transition: "all 0.3s ease",
                // marginBottom: "5px",
                userSelect: "none" // Prevents text highlighting on rapid clicks
            }}
        >
            {/* Header Container */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ margin: 0, fontSize: "1.2rem" }}>{header}</h3>
                <span style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease"
                }}>
                    ▼
                </span>
            </div>

            {/* Collapsible Content */}
            {isOpen && (
                <div onClick={(e) => {
                        // Prevents clicking the link/text from closing the box
                        e.stopPropagation()
                    }}
                    style={{
                        marginTop: "15px",
                        borderTop: "1px solid #eaeaea",
                        paddingTop: "15px"
                    }}>
                    <div style={{ margin: "0 0 15px 0", color: "#555", lineHeight: "1.5" }}>
                        {children}
                    </div>
                    {
                        link === undefined ?
                            <></>
                            :
                            <Link
                                href={link.url}
                                // target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "#00563B", // Imperial Green from earlier!
                                    fontWeight: "600",
                                    textDecoration: "underline"
                                }}
                            >
                                {link.label} →
                            </Link>
                    }

                </div>
            )}
        </div>
    );
}