'use client'

export const Ruby = ({
    baseText,
    annotation,
}: {
    baseText: string,
    annotation: string,
}) => {
    return (
        <ruby style={{ fontSize: "30px", 
            padding: "0px", 
            rubyAlign: "center", 
            rubyPosition: "over" }}>{baseText}
            <rp>(</rp>
            <rt>{annotation}</rt>
            <rp>)</rp>
        </ruby>
    )
}