'use client'

export const Keypress = ({
    label,
}: {
    label: string,
}) => {
    return (
        <kbd style={{
            backgroundColor: "#eeeeee",
            borderRadius: "3px",
            border: "1px solid #b4b4b4",
            boxShadow: "0 1px 1px rgb(0 0 0 / 0.2), 0 2px 0 0 rgb(255 255 255 / 0.7) inset",
            color: "#333333",
            fontSize: "0.85em",
            fontWeight: "bold",
            display: "inline-block",
            lineHeight: "1",
            padding: "2px 4px",
            whiteSpace: "nowrap"
        }}>
            {label}
        </kbd >
    )
}