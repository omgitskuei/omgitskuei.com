import styles from './layout.module.css';

export default function AboutLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <main className={styles.aboutMain}>
            {children}
        </main>
    )
}