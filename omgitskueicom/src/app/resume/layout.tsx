import styles from './layout.module.css';

export default function ResumeLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <main className={styles.resumeMain}>
            {children}
        </main>
    )
}