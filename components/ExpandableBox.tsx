'use client'

import Link from "next/link";
import { useState } from "react";

export const ExpandableBox = ({ 
    header, 
    description, 
    url, 
    bgColor = "#e0e0e0",
    linkText = "Learn More" 
}: {
    header: String, 
    description: String, 
    url: string, 
    bgColor?: string,
    linkText?: String
}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            style={{
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "20px",
                cursor: "pointer",
                backgroundColor: isOpen ?  "#ffffff" : bgColor,
                transition: "all 0.3s ease",
                marginBottom: "15px",
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
                <div
                    onClick={(e) => e.stopPropagation()} // Prevents clicking the link/text from closing the box
                    style={{ marginTop: "15px", borderTop: "1px solid #eaeaea", paddingTop: "15px" }}
                >
                    <p style={{ margin: "0 0 15px 0", color: "#555", lineHeight: "1.5" }}>
                        {description}
                    </p>
                    <Link
                        href={url}
                        // target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: "#00563B", // Imperial Green from earlier!
                            fontWeight: "600",
                            textDecoration: "underline"
                        }}
                    >
                        {linkText} →
                    </Link>
                </div>
            )}
        </div>
    );
}