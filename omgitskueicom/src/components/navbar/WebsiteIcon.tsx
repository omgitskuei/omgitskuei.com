'use client'

import icon_website from "../../assets/icons/icon_website_nobg.png";
import icon_website_xmas from "../../assets/icons/icon_website_nobg_xmas.png";

import { useEffect, useState } from "react";


const wiStyle: { [key: string]: React.CSSProperties } = {
    container: {
        flexGrow: "1",
    },
    image: {
        filter: "invert(var(--invert))",
    }
};


function isXmas() {
    const today = new Date();
    return (today.getMonth()+1 == 12) && (today.getDate() > 20);
}


function WebsiteIcon({ w, }: { w: string }) {
    const [finalImg, setFinalImg] = useState(icon_website);

    useEffect(() => {
        // Use Xmas festive logo instead
        if(isXmas()) {
            setFinalImg(icon_website_xmas);
        }
    }, []);

    return <div style={wiStyle.container}>
            <img src={finalImg.src} 
            style={wiStyle.image}
            id="website_icon" 
            width={w} height="min-content" 
            alt="Website Logo" />
        </div>;
}

export default WebsiteIcon;

