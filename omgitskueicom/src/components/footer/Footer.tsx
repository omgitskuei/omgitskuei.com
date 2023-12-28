'use client'

// import NavButton from "./NavButton";
// import Breadcrumbs from "./Breadcrumbs";

import WebsiteIcon from "../navbar/WebsiteIcon";
import { useState } from "react";

const fStyle: { [key: string]: React.CSSProperties } = {
    container: {
        backgroundColor: "rgb(var(--pages-header-bg-color))",
        display: "flex",
        justifyContent: "space-between",
        padding: "0.5rem 0.5rem",
    },
    link: {
        color: "lightblue",
        textDecoration: "underline"
        // https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
    }
};

type Props = {
    darkmode?: boolean;
    linkFB?: string;
    linkLinkedIn?: string;
    linkMailTo?: string;
    link104?: string;
    copyrightYr?: number;
    children?: React.ReactNode;
}

export default function Footer({
    darkmode = false, 
    linkFB = "https://www.facebook.com/kuei.feng.tung.chris",
    linkLinkedIn = "https://www.linkedin.com/in/kuei-feng-tung",
    linkMailTo = "mailto:mail@omgitskuei.com",
    link104 = "https://pda.104.com.tw/profile/download?vno=75rwa3o6r",
    copyrightYr = 2024,
    children
}: Props) {
    // const [darkmode, setDarkMode] = useState<boolean>(false);

    return <>
    <div className="flexbox-horizontal" style={fStyle.container}>
        <WebsiteIcon width="50px"></WebsiteIcon>
        <div className="flexbox-vertical" >
            <p>Facebook: <a style={fStyle.link} href={linkFB}>Chris Tung</a></p>
            <p>LinkedIn: <a style={fStyle.link} href={linkLinkedIn}>Kuei-Feng Tung Chris</a></p>
        </div>
        <div className="flexbox-vertical" >
            <p>Contact: <a style={fStyle.link} href={linkMailTo}>Email Kuei!</a></p>
            <p>104人力銀行: <a style={fStyle.link} href={link104}>Download resume here</a></p>
        </div>
        <div className="flexbox-vertical" >
            <p>©{copyrightYr} All rights reserved.</p>
            {children}    
        </div>
    </div>
    </>;
};