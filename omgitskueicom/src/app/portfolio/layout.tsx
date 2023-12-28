import styles from './layout.module.css';

export default function PortfolioLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <main className={styles.portfolioMain}>
            {children}
        </main>
    )
}