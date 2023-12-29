const ThisStyle: { [key: string]: React.CSSProperties } = {
    settingsMain: {
        paddingTop: "24px",
        paddingBottom: "24px",
        border: "solid 2px purple",
    }
};

export default function SettingsLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <main style={ThisStyle.settingsMain}>
            {children}
        </main>
    )
}