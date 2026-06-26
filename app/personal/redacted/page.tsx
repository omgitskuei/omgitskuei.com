import Link from "next/link";
import styles from "./page.module.css";
import RedactedTerminal from "@/components/Terminal/RedactedTerminal";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function Page() {
    return (
        <>
            <Breadcrumbs items={[]} separator="/"></Breadcrumbs>
            <RedactedTerminal></RedactedTerminal>
        </>
    );
}
