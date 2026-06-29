'use client'

// Local shared styles
const Style: { [key: string]: React.CSSProperties } = {
    item: {

    },
};

// Props
type Props = {
    id: string,
    name?: string,
    label: string,
    type: string,
    inputWidth: string,
    onChange?: Function | undefined,
    checked?: boolean,
    value?: string
}

// Component
export const InputGroup = ({
    id,
    name,
    label,
    type,
    inputWidth,
    onChange = undefined,
    checked,
    value
}: Props) => {
    return (
        <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <label htmlFor={id}>{label}: </label>
            <input type={type} id={id}
                name={name}
                style={{ width: inputWidth }}
                onChange={() => {
                    if (onChange) {
                        onChange();
                    }
                }}
                defaultChecked={checked} 
                value={value}
                disabled={true}/>
        </span>
    )
}
