'use client'

import { useState } from "react";
import { pinyinMap } from "./mandarinPinyinMap";

export const MandarinPinyin = ({
    baseText,
    annotation,
    translation = "",
    fontSize = "28px",
    fontFamily = "Roboto, sans-serif",
    reversePositionng = false
}: {
    baseText: string,
    annotation: string,
    translation?: string,
    fontSize?: string,
    fontFamily?: string,
    reversePositionng?: boolean
}) => {

    const [showAnnotations, setShowAnnotations] = useState<boolean>(false);

    // Regex breakdown:
    // ([aeiouv]) -> Capture group 1: any lowercase vowel
    // ([1-4])   -> Capture group 2: any number from 1 to 4
    // 'gi'      -> Global match (all instances) and Case-Insensitive
    const regex = /([aeiouv])([1-4])/gi;

    const finalAnnotations = annotation.replace(regex, (match, vowel, tone) => {
        const replaced = pinyinMap[(vowel.toLowerCase() + tone)];
        // In case a regex match was found but the match didn't
        // correspond to a key-value pair in mandarinPinyinToneMap
        if (!replaced) {
            return "?";
        }
        // If the original vowel was uppercase (eg. "A3"),
        // standardize it all to lowercase (eg. "A3" -> "a3").
        return replaced;
    });

    const styleVisibility = showAnnotations ? "visible" : "hidden";

    return (
        <ruby style={{
            fontSize: fontSize,
            padding: "0px",
            rubyAlign: "center",
            rubyPosition: reversePositionng ? "over" : "under",
        }}>
            <ruby
                style={{
                    cursor: showAnnotations ? "pointer" : "help",
                    rubyPosition: reversePositionng ? "under" : "over",
                    fontFamily: fontFamily,
                }}
                onClick={() => setShowAnnotations(!showAnnotations)}>{baseText}
                <rp style={{ visibility: styleVisibility }}>(</rp>
                <rt style={{ visibility: styleVisibility }}>{finalAnnotations}</rt>
                <rp style={{ visibility: styleVisibility }}>)</rp>
            </ruby>
            {
                translation === undefined || translation === "" ?
                    <></>
                    :
                    <rt style={{ visibility: styleVisibility, fontFamily: fontFamily, marginTop: "3px" }}>'{translation}'</rt>
            }

        </ruby>
    )
}