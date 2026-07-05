'use client'

import { RefObject } from "react";

// Local shared styles
const Style: { [key: string]: React.CSSProperties } = {
    item: {

    },
};

interface Option {
    label: string;
    value: string;
}

// Props
type Props = {
    ref?: RefObject<HTMLSelectElement> | null,
    id?: string,
    name?: string,
    label: string,
    inputWidth: string,
    onChange?: Function | undefined,
    options: Option[],
    defaultOption?: Option
}

// Component
export const SelectGroup = ({
    ref = null,
    id,
    name,
    label,
    inputWidth,
    onChange = undefined,
    options,
    defaultOption = { label: "--Select--", value: "" }
}: Props) => {
    return (
        <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <label htmlFor={id}>{label}: </label>
            <select ref={ref} name={name} id={id} style={{ width: inputWidth }}
                onChange={(e) => {
                    if (onChange != undefined) {
                        onChange(e.currentTarget.value);
                    }
                }}
                defaultValue="">
                <option value={defaultOption.value} disabled>{defaultOption.label}</option>
                {
                    options.map((item, index) => {
                        return <option key={`${item.value}_${index}`} value={item.value}>{item.label}</option>;
                    })
                }
            </select>
        </span>
    )
}
