'use client'

import NavButton from "./NavButton";
import WebsiteIcon from "./../navbar/WebsiteIcon";

import homeIcon from "./../../assets/icons/home.png"
import resumeIcon from "./../../assets/icons/resume.png"
import portfolioIcon from "./../../assets/icons/portfolio.png"
import aboutIcon from "./../../assets/icons/about.png"
import contactIcon from "./../../assets/icons/contact.png"
import settingsIcon from "./../../assets/icons/settings.png"

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const phStyle: { [key: string]: React.CSSProperties } = {
    container: {
        backgroundColor: "rgb(var(--pages-header-bg-color))",
        display: "flex",
        justifyContent: "space-between",
        
        // paddingTop: "0.5rem",
        // paddingRight: "0.5rem",
        // paddingBottom: "0.5rem",
        /* margin-bottom: 0.75rem; */
        /* margin-left: 0.75rem; */
        /* margin-right: 0.75rem; */
        
        /* &:has(:focus-visible) {
            outline: 3px solid rgb(17 21 36 / 50%);
        } */
    },
    twoColumnsEvenWidth: {
        display: "flex",
        // flexGrow: "1",
        // width: "0",
    },
    flexboxJustifyLeft: {
        justifyContent: "left",
        flexShrink: "0",
    },
    flexboxJustifyRight: {
        justifyContent: "right",
        
    }
};



type Props = {
    darkmode?: boolean;
}

export default function PageHeader({darkmode = false}: Props) {
    // const [darkmode, setDarkMode] = useState<boolean>(false);

    const [highlight, setHighlight] = useState<string>("home");
    const router = useRouter();

    // https://upmostly.com/tutorials/pass-a-parameter-through-onclick-in-react
    function handleClick(key: string) {
        setHighlight(key);
        // Imperative Routing - https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating
        router.push('/' + key);
    }

    return <>
        <div className="flexbox-horizontal" style={phStyle.container}>
            <WebsiteIcon width="85px" containerStyle={{...phStyle.twoColumnsEvenWidth, ...phStyle.flexboxJustifyLeft}} darkmode={darkmode}></WebsiteIcon>
            <div style={{...phStyle.twoColumnsEvenWidth, ...phStyle.flexboxJustifyRight}}>
                <NavButton icon={homeIcon.src} label="Home" isHighlighted={highlight == "home"} onClick={() => handleClick("")}/>
                <NavButton icon={resumeIcon.src} label="Resume" isHighlighted={highlight == "resume"} onClick={() => handleClick("resume")}/>
                <NavButton icon={portfolioIcon.src} label="Portfolio" isHighlighted={highlight == "portfolio"} onClick={() => handleClick("portfolio")}/>
                <NavButton icon={aboutIcon.src} label="About" isHighlighted={highlight == "about"} onClick={() => handleClick("about")}/>
                <NavButton icon={contactIcon.src} label="Contact" isHighlighted={highlight == "contact"} onClick={() => handleClick("contact")}/>
                <NavButton icon={settingsIcon.src} label="Settings" isHighlighted={highlight == "settings"} onClick={() => handleClick("settings")}/>
            </div>
        </div>
    </>;
};