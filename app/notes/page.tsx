import styles from "./page.module.css";

export default function Page() {

    return (
        <>
            <h1 className={styles.title}>
                Notes
            </h1>
            <ul className={styles.indent}>
                <li>
                    <h2>HTML</h2>
                </li>
                <li>
                    <h2>CSS</h2>
                </li>
                <li>
                    <h2>JS</h2>
                </li>
                <li>
                    <h2>TS</h2>
                </li>
                <li>
                    <h2>Java</h2>
                </li>
                <li>
                    <h2>Spring/SpringBoot</h2>
                </li>
                <li>
                    <h2>NodeJS</h2>
                </li>
                <li>
                    <h2>NextJS</h2>
                </li>
                <li>
                    <h2>Browsers</h2>
                </li>
            </ul>
        </>
    );
}
