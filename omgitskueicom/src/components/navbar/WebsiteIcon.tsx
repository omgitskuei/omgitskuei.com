'use client'

import icon_website from "../../assets/icons/icon_website.png";
import icon_website_dm from "../../assets/icons/icon_website_dm.png";

import { useEffect } from "react";

const wiStyle: { [key: string]: React.CSSProperties } = {
    container: {
        // width: 400,
        // backgroundColor: "lightgreen",
        
        // filter: "invert(var(--invert))",
        // display: "flex",
        // justifyContent: "flex-start",
    },
    image: {

    }
};




function WebsiteIcon({ w, }: { 
    w: string
}) {
    let isBrowserDefaultDark = false;

useEffect(() => {
    isBrowserDefaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
}, []);

    if (isBrowserDefaultDark) {
        return <div style={wiStyle.container}>
        <img src={icon_website_dm.src} 
        style={wiStyle.image}
        id="website_icon" 
        width={w} height="min-content" 
        alt="Website Logo" />
    </div>;
    }

    return <div style={wiStyle.container}>
            <img src={icon_website.src} 
            style={wiStyle.image}
            id="website_icon" 
            width={w} height="min-content" 
            alt="Website Logo" />
        </div>;
}

export default WebsiteIcon;

