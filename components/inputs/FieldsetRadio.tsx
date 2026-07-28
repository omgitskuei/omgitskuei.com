'use client'

export const FieldsetRadio = ({
    header,
    options,
}: {
    header: string,
    options: {
        label: string,
        value: string
    }[]
}) => {
    return (
        <fieldset style={{ display: "flex", gap: "10px", padding: "16px 10px", flexWrap: "wrap" }}>
            <legend style={{ paddingLeft: "5px", paddingRight: "5px" }}>{header}</legend>
            {
                options.map((option) => {
                    const optionKey = `fieldset_${header.toLowerCase()}_radio_${option.value}`;
                    const name = `fieldset_${header.toLowerCase()}`;
                    return (
                        <div key={optionKey} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <input type="radio" name={name} id={optionKey} value={option.value} />
                            <label htmlFor={optionKey}>{option.label}</label>
                        </div>
                    );
                })
            }
        </fieldset>
    );
};
