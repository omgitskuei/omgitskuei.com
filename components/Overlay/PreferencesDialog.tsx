'use client'

import { useEffect, useRef, useState } from "react";
import { Overlay } from "./Overlay";
import { InputGroup } from "../InputGroup";
import { SelectGroup } from "../SelectGroup";

import styles from "./page.module.css";

export const PreferencesDialog = ({
    dim = false,
    blur = false,
    children
}: {
    dim?: boolean,
    blur?: boolean,
    children: JSX.Element[] | JSX.Element
}) => {

    // const [showOverlay, setShowOverlay] = useState<boolean>(true);

    const dialogRef = useRef<HTMLDialogElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        if (dialogRef.current) {
            const lang = window.localStorage.getItem("omgitskuei_pref_lang");
            if (lang === null || lang == "") {
                dialogRef.current.showModal();
            }
        }
    }, [])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dialogRef.current?.close();
        if (selectRef.current) {
            // window.localStorage.setItem("omgitskuei_pref_lang", 
            //     selectRef.current.value);
            alert(selectRef.current.value);
        }
    }

    return (
        <dialog ref={dialogRef} className={styles.dialog}>
            <h2>Preferences</h2>
            <form onSubmit={handleSubmit}>


                <SelectGroup ref={selectRef} label={"Language"}
                    inputWidth={"300px"}
                    options={[{
                        label: "English (American)",
                        value: "enUS"
                    },
                    {
                        label: "Mandarin (Traditional)",
                        value: "zhTW"
                    }]}
                    onChange={(e: string) => { alert(e) }}>

                </SelectGroup>

            </form>
            <button type="submit">Submit</button>
        </dialog>
    )
}