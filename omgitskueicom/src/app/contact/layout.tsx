import styles from './layout.module.css';

export default function ContactLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <main className={styles.contactMain}>
            {children}
        </main>
    )
}