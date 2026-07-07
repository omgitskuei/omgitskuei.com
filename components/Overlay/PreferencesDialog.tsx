'use client'

import { useEffect, useRef } from "react";

import Image from "next/image";
import styles from "./page.module.css";

interface Option {
    value: string,
    label: string
}

export const PreferencesDialog = ({}: {}) => {

    // Refer to the dialog
    const dialogRef = useRef<HTMLDialogElement>(null);
    // Refer to the select-options fields
    const langSelectRef = useRef<HTMLSelectElement>(null);
    const themeSelectRef = useRef<HTMLSelectElement>(null);
    const fontsizeSelectRef = useRef<HTMLSelectElement>(null);

    // Constant defining the select options
    const langOptions: Option[] = [
        {
            value: "enUS",
            label: "English (US)"
        },
        {
            value: "zhTW",
            label: "Mandarin (Trad.)"
        },
    ];
    const themeOptions: Option[] = [
        {
            value: "light",
            label: "Light"
        },
        {
            value: "dark",
            label: "Dark"
        }
    ];
    const textSizeOptions: Option[] = [
        {
            value: "12",
            label: "Normal"
        },
        {
            value: "18",
            label: "Large"
        },
        {
            value: "24",
            label: "Largest"
        },
    ];

    // Only show the dialog if localStorage doesn't any Preferences Dialog values
    useEffect(() => {
        if (dialogRef.current) {
            const lang = window.localStorage.getItem("prefLang");
            const theme = window.localStorage.getItem("prefTheme");
            const textSize = window.localStorage.getItem("prefTextSize");

            if ((lang === null || lang == "")
                || (theme === null || theme == "")
                || (textSize === null || textSize == "")) {
                dialogRef.current.showModal();
            }
        }
    }, [])

    // Submit button onClick validates the user inputs and (if all valid) sets localStorage and closes the dialog
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (langSelectRef.current
            && themeSelectRef.current
            && fontsizeSelectRef.current) {
            if (langSelectRef.current.value === ""
                || themeSelectRef.current.value === ""
                || fontsizeSelectRef.current.value === ""
            ) {
                // User didn't fill out all fields - ignore the Submit onclick
            } else {
                window.localStorage.setItem("prefLang", langSelectRef.current.value);
                window.localStorage.setItem("prefTheme", themeSelectRef.current.value);
                window.localStorage.setItem("prefTextSize", fontsizeSelectRef.current.value);
                dialogRef.current?.close();
            }
        }
    }

    return (
        // Note that the dialog HTML element doesn't have a style.display - this is because it is automatically handled as display:none unless dialog.showModal() is called
        <dialog ref={dialogRef} className={styles.dialog} style={{ padding: "0px", borderRadius: "4px", overflowX: "hidden" }}>
            {/* This puts the form and image side-by-side */}
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", margin: "6% 3%" }}>
                    <h2>Welcome!</h2>
                    <p>Personalize your visit here.</p>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {/* Languages */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
                            <label htmlFor="langSelect" style={{ width: "75px" }}>Language: </label>
                            <select ref={langSelectRef} name="langSelect" id="langSelect" defaultValue="" style={{ width: "100px", textAlign: "left", paddingLeft: "5px" }}>
                                <option value={""} disabled>-- Select --</option>
                                {
                                    langOptions.map((item, index) => {
                                        return <option key={`${item.value}_${index}`} value={item.value}>{item.label}</option>;
                                    })
                                }
                            </select>
                        </div>
                        {/* Themes */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
                            <label htmlFor="themeSelect" style={{ width: "75px" }}>Theme: </label>
                            <select ref={themeSelectRef} name="themeSelect" id="themeSelect" defaultValue="" style={{ width: "100px", textAlign: "left", paddingLeft: "5px" }}>
                                <option value={""} disabled>-- Select --</option>
                                {
                                    themeOptions.map((item, index) => {
                                        return <option key={`${item.value}_${index}`} value={item.value}>{item.label}</option>;
                                    })
                                }
                            </select>
                        </div>
                        {/* Font sizes */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
                            <label htmlFor="fontsizeSelect" style={{ width: "75px" }}>Text size: </label>
                            <select ref={fontsizeSelectRef} name="fontsizeSelect" id="fontsizeSelect" defaultValue="" style={{ width: "100px", textAlign: "left", paddingLeft: "5px" }}>
                                <option value={""} disabled>-- Select --</option>
                                {
                                    textSizeOptions.map((item, index) => {
                                        return <option key={`${item.value}_${index}`} value={item.value}>{item.label}</option>;
                                    })
                                }
                            </select>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
                            <button type="submit" style={{ minWidth: "80px", padding: "5px" }}>Submit</button>
                        </div>
                    </form>
                </div>
                {/* Vertical banner on the right */}
                <Image src={"/imgs/welcome_dialog_vertical_banner.png"} alt={"Welcome Banner"} width={200} height={300}></Image>
            </div>
        </dialog>
    )
}