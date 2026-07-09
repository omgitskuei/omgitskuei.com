import Link from "next/link";
import styles from "./page.module.css";
import { MandarinPinyin } from "@/components/i18n/MandarinPinyin";

export default function Page() {
    return (
        <>
            <Link href={"/professional/contact"}>Contact</Link>
            <Link href={"/professional/resume"}>Resume</Link>

            <p>

                <MandarinPinyin baseText={"你的字體太長了"}
                    annotation={"NI5de2zi4ti3ta4icha2ngle2"}
                    translation={"Your text is too long"}>
                </MandarinPinyin>
            </p>
        </>
    );
}
