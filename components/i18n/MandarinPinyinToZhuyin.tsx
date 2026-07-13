'use client'

import { useState } from "react";
import { zhuyinMap } from "./mandarinPinyinToZhuyinMap";

export const MandarinPinyinToZhuyin = ({
    baseText,
    annotation,
    translation = "",
    fontSize = "28px"
}: {
    baseText: string,
    annotation: string,
    translation?: string,
    fontSize?: string
}) => {



    const [showAnnotations, setShowAnnotations] = useState<boolean>(false);
    const styleVisibility = showAnnotations ? "visible" : "hidden";

    
    for (const key of zhuyinMap) {
        // Run your replacement logic here
    }

    return (
        <ruby style={{
            fontSize: fontSize,
            padding: "0px",
            rubyAlign: "center",
            rubyPosition: "under",
        }}>
            <ruby
                style={{
                    cursor: showAnnotations ? "pointer" : "help",
                    rubyPosition: "over",
                }}
                onClick={() => setShowAnnotations(!showAnnotations)}>{baseText}
                <rp style={{ visibility: styleVisibility }}>(</rp>
                <rt style={{ visibility: styleVisibility }}>{annotation}</rt>
                <rp style={{ visibility: styleVisibility }}>)</rp>
            </ruby>
            <rt style={{ visibility: styleVisibility }}>'{translation}'</rt>
        </ruby>
    )
}