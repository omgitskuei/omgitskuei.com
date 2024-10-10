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
    onChange?: Function,
    checked?: boolean,
}

// Component
export const InputGroup = ({
    id,
    name,
    label,
    type,
    inputWidth,
    onChange,
    checked
}: Props) => {
    return (
        <span style={{ display: "flex", justifyContent: "space-between"}}>
            <label htmlFor={id}>{label}: </label>
            <input type={type} id={id} name={name} style={{ width: inputWidth}} onChange={() => {
                if (onChange) {
                    onChange();
                }
            }}
            defaultChecked={checked}/>
        </span>
    )
}
