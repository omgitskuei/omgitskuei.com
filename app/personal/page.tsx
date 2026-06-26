import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
    return (
        <>
            <Link href={"/personal/blog"}>Blog</Link>
        </>
    );
}
