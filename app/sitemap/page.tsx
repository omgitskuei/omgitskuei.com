import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {


    return (
        <>
            <h1 className={styles.title}>
                Site Map
            </h1>
            <ul className={styles.indent}>
                <li>
                    <h2>Resume</h2>
                    <ul className={styles.indent}>
                        <li><Link href={"/resume#experience"}>Experience</Link></li>
                        <li><Link href={"/resume#education"}>Education</Link></li>
                        <li><Link href={"/resume#volunteering"}>Volunteering</Link></li>
                        <li><Link href={"/resume#honors"}>Honors & Awards</Link></li>
                        <li>
                            <h3>Download</h3>
                            <ul className={styles.indent}>
                                <li>
                                    <h4>English (American)</h4>
                                    <ul className={styles.indent}>
                                        <li><a href="/files/resumes/resume_linkedin.pdf" target="_blank" download="Kuei Feng Tung Chris Resume.pdf">LinkedIn format, en-US, PDF</a></li>
                                        <li><a href="/files/resumes/pdf/resume_enUS.pdf" target="_blank" download="Kuei Feng Tung Chris Resume.pdf">Custom format, en-US, PDF</a></li>
                                        <li><a href="/files/resumes/docx/resume_enUS.pdf" target="_blank" download="Kuei Feng Tung Chris Resume.pdf">Custom format, en-US, DOCX</a></li>
                                        <li><a href="/files/resumes/odt/resume_enUS.pdf" target="_blank" download="Kuei Feng Tung Chris Resume.pdf">Custom format, en-US, ODT</a></li>
                                        <li><a href="/files/resumes/txt/resume_enUS.pdf" target="_blank" download="Kuei Feng Tung Chris Resume.pdf">Custom format, en-US, TXT</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>English (British)</h4>
                                    <ul className={styles.indent}>
                                        <li><a href="/files/resumes/pdf/resume_enGB.pdf" target="_blank" download="Kuei Feng Tung Chris Resume.pdf">Custom format, en-GB, PDF</a></li>
                                        <li><a href="/files/resumes/docx/resume_enGB.pdf" target="_blank" download="Kuei Feng Tung Chris Resume.pdf">Custom format, en-GB, DOCX</a></li>
                                        <li><a href="/files/resumes/odt/resume_enGB.pdf" target="_blank" download="Kuei Feng Tung Chris Resume.pdf">Custom format, en-GB, ODT</a></li>
                                        <li><a href="/files/resumes/txt/resume_enGB.pdf" target="_blank" download="Kuei Feng Tung Chris Resume.pdf">Custom format, en-GB, TXT</a></li>
                                    </ul>
                                </li>
                                {/* <li>
                                    <h4>Mandarin (Traditional)</h4>
                                    <ul className={styles.indent}>
                                        <li>Custom format, zh-HANT, PDF</li>
                                        <li>Custom format, zh-HANT, DOCX</li>
                                        <li>Custom format, zh-HANT, ODT</li>
                                        <li>Custom format, zh-HANT, TXT</li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Mandarin (Simplified)</h4>
                                    <ul className={styles.indent}>
                                        <li>Custom format, zh-HANS, PDF</li>
                                        <li>Custom format, zh-HANS, DOCX</li>
                                        <li>Custom format, zh-HANS, ODT</li>
                                        <li>Custom format, zh-HANS, TXT</li>
                                    </ul>
                                </li> */}
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>Portfolio</h2>
                    <ul className={styles.indent}>
                        <li>
                            <h3>Web apps</h3>
                            <ul className={styles.indent}>
                                <li><Link href={"/portfolio/app/todolist"}>To Do List</Link></li>
                                <li><Link href={"/portfolio/app/calc"}>Calculator</Link></li>
                                <li><Link href={"/portfolio/app/chat"}>Chat</Link></li>
                                {/* <li>Music player</li>
                                <li>Surverys</li> */}
                            </ul>
                        </li>
                        <li>
                            <h3>Mini games</h3>
                            <ul className={styles.indent}>
                                <li><Link href={"/portfolio/game/chess"}>Chess</Link></li>
                                <li><Link href={"/portfolio/game/tictactoe"}>Tic Tac Toe</Link></li>
                                <li><Link href={"/portfolio/game/dices"}>Dices</Link></li>
                                <li><Link href={"/portfolio/game/bubblewrap"}>Bubble Wrap</Link></li>
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
                        <li>Meet the developer</li>
                        <li>Purpose of this website</li>
                        <li>How to use this website</li>
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
