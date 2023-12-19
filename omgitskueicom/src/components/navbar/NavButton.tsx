'use client'

import { MouseEventHandler } from "react";

const nbStyle: { [key: string]: React.CSSProperties } = {
    icon: {
        display: "inline",
        width: "28px",
        height: "30px",
        filter: "invert(var(--invert))",
    },
    btn: {
        // borderRadius: "0.5rem",
        color: "rgb(var(--pages-header-text-color))",
    },
    btnHighlighted: {
        // borderRadius: "0.5rem",
        color: "rgb(var(--pages-header-text-color))",
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
    id: string,
    label: string,
    isHighlighted: boolean,
    onClick: MouseEventHandler
}) {
    return <button
        id={id}
        style={isHighlighted ? nbStyle.btnHighlighted : nbStyle.btn}
        onClick={onClick}>
        <img style={nbStyle.icon} src={icon}></img>
        <label>{label}</label>
    </button>;
}