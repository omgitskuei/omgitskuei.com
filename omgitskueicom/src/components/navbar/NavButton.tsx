'use client'

import { MouseEventHandler } from "react";

const nbStyle: { [key: string]: React.CSSProperties } = {
    icon: {
        display: "inline",
        width: "30px",
        height: "33px",
        // marginRight: "5px"
        // filter: "invert(var(--invert))",
    },
    shared: { 
        color: "rgb(var(--pages-header-text-color))",
    },
    regular: {
    
    },
    highlight: {
        backgroundColor: "rgb(255, 255, 255, 0.5)"
    },
};

export default function NavButton({
    icon,
    id,
    label,
    isHighlighted,
    onClick
}: {
    icon: string,
    id?: string,
    label: string,
    isHighlighted: boolean,
    onClick: MouseEventHandler
}) {
    return <button
        id={id}
        className="navButton"
        // https://stackoverflow.com/questions/29979324/how-to-combine-multiple-inline-style-objects
        // use the spread operator {...style1, ...style2}
        style={{...isHighlighted ? nbStyle.highlight : nbStyle.regular, ...nbStyle.shared}}
        onClick={onClick}>
        <img style={nbStyle.icon} src={icon}></img>
        <label>{label}</label>
    </button>;
}