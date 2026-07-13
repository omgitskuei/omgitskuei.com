import { Breadcrumbs } from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export default function Page() {
    return (
        <>
            <Breadcrumbs separator="/"></Breadcrumbs>
            <h1>Contact</h1>

            Email
            Tel
            LinkedIn
            Telegram
            Discord
            Contact form
        </>
    );
}
