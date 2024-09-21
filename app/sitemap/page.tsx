import styles from "./page.module.css";

export default function Home() {


    return (
        <>
            <h1 className={styles.title}>
                Site Map
            </h1>
            <ul className={styles.indent}>
                <li>
                    <h2>Resume</h2>
                    <ul className={styles.indent}>
                        <li>LinkedIn format [download PDF]</li>
                        <li>Indeed format [download PDF]</li>
                        <li>Custom format [download PDF]</li>
                    </ul>
                </li>
                <li>
                    <h2>Portfolio</h2>
                    <ul className={styles.indent}>
                        <li>
                            <h3>Web apps</h3>
                            <ul className={styles.indent}>
                                <li>Calculator</li>
                                <li>Checklist</li>
                                <li>Music player</li>
                                <li>Multipart form</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Mini games</h3>
                            <ul className={styles.indent}>
                                <li>Bubble Wrap</li>
                                <li>Chess</li>
                                <li>Tic Tac Toe</li>
                            </ul>
                        </li>
                        <li>
                            <h3>UI components</h3>
                            <ul className={styles.indent}>
                                <li>Buttons</li>
                                <li>Inputs</li>
                                <li>Breadcrumbs</li>
                                <li>Suspenses</li>
                                <li>Hero Images</li>
                                <li>Photo album</li>
                                <li>Carousels</li>
                                <li>Tables</li>
                                <li>Search and filtering</li>
                                <li>Tags</li>
                                <li>Tweets</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>Notes</h2>
                    <ul className={styles.indent}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>TS</li>
                        <li>Java</li>
                        <li>Spring/SpringBoot</li>
                        <li>NodeJS</li>
                        <li>NextJS</li>
                        <li>Browsers</li>
                    </ul>
                </li>
                <li>
                    <h2>Blog</h2>
                    <ul className={styles.indent}>
                        <li>Web development</li>
                        <li>Woodworking</li>
                        <li>Cooking</li>
                        <li>Gardening</li>
                        <li>Art</li>
                        <li>Video Games</li>
                    </ul>
                </li>
                <li>
                    <h2>About</h2>
                    <ul className={styles.indent}>
                        <li>Early education</li>
                        <li>Northeastern University</li>
                        <li>Institute for Information Industry</li>
                        <li>Volunteering and coops</li>
                        <li>Programming Career</li>
                    </ul>
                </li>
                <li>
                    <h2>Contact</h2>
                    <ul className={styles.indent}>
                        <li>Email</li>
                        <li>Tel</li>
                        <li>LinkedIn</li>
                        <li>Telegram</li>
                        <li>Discord</li>
                        <li>Contact form</li>
                    </ul>
                </li>
            </ul>
        </>
    );
}
