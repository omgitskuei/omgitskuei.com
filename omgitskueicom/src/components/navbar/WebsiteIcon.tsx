'use client'

import Image, { StaticImageData } from "next/image";
import icon_website_lm from "../../assets/icons/icon_website_lm.png";
// import icon_website_dm from "../../assets/icons/icon_website_dm.png";
import icon_website_xmas from "../../assets/icons/icon_website_nobg_xmas.png";

import { CSSProperties, useEffect, useState } from "react";



const wiStyle: { [key: string]: React.CSSProperties } = {
    image: {
    },
    imageDarkMode: {
        filter: "invert(var(--invert))",
    }
};

// Declaring props (as type)
type Props = {
    width: number;
    containerStyle?: CSSProperties;
    darkmode?: boolean;
}

function WebsiteIcon({ width, containerStyle, darkmode = false }: Props) {

    const [finalImg, setFinalImg] = useState<StaticImageData>(icon_website_lm);

    useEffect(() => {
        const today = new Date();
        
        // Change website icon for a festive version between certain days
        if((today.getMonth()+1 == 12) 
            && (today.getDate() > 22)
            && (today.getDate() < 27)) {
            // Change icon for Xmas version between Dec 23 and 26
            setFinalImg(icon_website_xmas);
        } else if((today.getMonth()+1 == 2) 
            && (today.getDate() == 14)) {
            // Change icon for Valentines version on Feb 14
            // setFinalImg(icon_website_val);
        } else if((today.getMonth()+1 == 1) 
        && (today.getDate() == 1)) {
            // Change icon for New Years version on Jan 1
            // setFinalImg(icon_website_ny);
        }
        // ... extendable

        // if(darkmode){
        //     setFinalImg(icon_website_dm);
        // }
    }, []);

    return <div style={containerStyle}>
            <Image src={finalImg.src} 
            style={darkmode ? wiStyle.imageDarkMode : wiStyle.image}
            id="website_icon" 
            width={width} 
            alt="Website Logo" />
        </div>;
}

export default WebsiteIcon;

