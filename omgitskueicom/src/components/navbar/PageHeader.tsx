'use client'

import NavButton from "./NavButton";
import Breadcrumbs from "./Breadcrumbs";

import WebsiteIcon from "./../navbar/WebsiteIcon";
import homeIcon from "./../../assets/icons/home.png"
import resumeIcon from "./../../assets/icons/resume.png"
import portfolioIcon from "./../../assets/icons/portfolio.png"
import aboutIcon from "./../../assets/icons/about.png"
import contactIcon from "./../../assets/icons/contact.png"
import settingsIcon from "./../../assets/icons/settings.png"


function handleClick() {
    console.log('You clicked me!');
}




export default function PageHeader() {
    return <>
        <div className="flexbox-vertical">
            <div className="flexbox-horizontal page-header">
                <WebsiteIcon w="85px"></WebsiteIcon>
                <NavButton icon={homeIcon.src} id="home" label="Home" isHighlighted={true} onClick={handleClick}/>
                <NavButton icon={resumeIcon.src} id="resume" label="Resume" isHighlighted={false} onClick={handleClick}/>
                <NavButton icon={portfolioIcon.src} id="portfolio" label="Portfolio" isHighlighted={false} onClick={handleClick}/>
                <NavButton icon={aboutIcon.src} id="about" label="About" isHighlighted={false} onClick={handleClick}/>
                <NavButton icon={contactIcon.src} id="contact" label="Contact" isHighlighted={false} onClick={handleClick}/>
                <NavButton icon={settingsIcon.src} id="settings" label="Settings" isHighlighted={false} onClick={handleClick}/>
            </div>
            <Breadcrumbs></Breadcrumbs>
        </div>
    </>;
};