'use client'

import { StaticImageData } from "next/image";
import lm from "../../assets/icons/lightmode.png";
import dm from "../../assets/icons/darkmode.png";

import { CSSProperties, useEffect, useState } from "react";



const sStyle: { [key: string]: React.CSSProperties } = {
    card: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        minWidth: "100px",
        // height: "100px",
        // backgroundColor: "darkgrey",
        // border: "solid white 1px",
        // borderRadius: "5px",
    },
    borderTop: {
        // borderTop: "solid white 1px"
    },
    centerItems: {
        display: "flex",
        justifyContent: 'center',

    },
};

// Declaring props (as type)
type Props = {
    // width: string;
    // containerStyle?: CSSProperties;
    darkmode: boolean;
}
function SchemeCard({
    // width, 
    // containerStyle, 
    darkmode }: Props) {

    return <div style={sStyle.card}>
            <div style={sStyle.centerItems}>
                <img src={darkmode ? dm.src : lm.src}
                    alt={darkmode ? "Dark mode scheme" : "Light mode scheme"} />
            </div>
            <div style={{...sStyle.borderTop, ...sStyle.centerItems}}>
                {/* <input type="radio" id={darkmode ? "dmRadio" : "lmRadio"} name="scheme" value={darkmode ? "dark" : "light"}></input> */}
                <label htmlFor={darkmode ? "dmRadio" : "lmRadio"}>{darkmode ? "Dark" : "Light"}</label>
            </div>

    </div>;
}

export default SchemeCard;

