import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
    return (
        <>
            <Link href={"/professional/contact"}>Contact</Link>
            <Link href={"/professional/resume"}>Resume</Link>
        </>
    );
}
