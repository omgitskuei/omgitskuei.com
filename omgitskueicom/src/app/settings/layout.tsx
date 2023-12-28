import styles from './layout.module.css';

export default function SettingsLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <main className={styles.settingsMain}>
            {children}
        </main>
    )
}