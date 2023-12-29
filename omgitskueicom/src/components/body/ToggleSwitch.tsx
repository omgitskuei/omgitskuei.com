'use client'

import { useState } from "react";
import "./ToggleSwitch.css"


type Props = {
    label: string;
    labelChecked?: string;
    labelUnchecked?: string;
    valueChecked: string;
    valueUnchecked: string;
    id: string;
    // initChecked?: boolean;
    // handleChange?: React.ChangeEvent<HTMLInputElement>;
    children?: React.ReactNode;
}

export default function ToggleSwitch({
    label = "",
    labelChecked = "",
    labelUnchecked = "",
    valueChecked,
    valueUnchecked,
    id = "",
    // initChecked = true,
    // handleChange,
    children
}: Props) {
    const [toggleState, setToggleState] = useState<boolean>(false); // false for "off", true for "on"

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setToggleState(event.target.checked);
    //     console.log(event.target.checked);
    //   };

    return <div className="flexbox-horizontal flexbox-center">
        <label htmlFor={id}>Current {label}: {toggleState? valueChecked : valueUnchecked}</label>
        <div>
            <span className="on">{labelChecked}</span>
            <label className="switch">
                <input type="checkbox" 
                // checked={initChecked} 
                onChange={e => setToggleState(e.target.checked)}
                name={id} id={id}/>
                {/* <span>Light mode</span> */}
                <span className="slider"></span>
            </label>
            <span className="off">{labelUnchecked}</span>
        </div>
    </div>;
};