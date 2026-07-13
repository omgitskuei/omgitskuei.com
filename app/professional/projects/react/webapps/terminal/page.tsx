import RedactedTerminal from "@/components/Terminal/RedactedTerminal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CSSProperties } from "react";
import { ProjectBreakdown } from "@/components/ProjectBreakdown";

const style: CSSProperties | undefined = {
    boxSizing: "border-box",
    flex: "0 0 calc(50% - 8px)",
    // textAlign: "center",
    border: "1px black solid"
};

export default function Page() {
    return (
        <>
            <Breadcrumbs separator="/"
                items={[
                    {
                        label: "Professional",
                        href: "/professional"
                    },
                    {
                        label: "Projects",
                        href: "/professional/projects"
                    },
                    {
                        label: "React",
                        href: "/professional/projects/react"
                    },
                    {
                        label: "Web Apps",
                        href: "/professional/projects/react/webapps"
                    },
                    {
                        label: "Terminal",
                        href: "/professional/projects/react/webapps/terminal"
                    },
                ]}>
            </Breadcrumbs>
            <h1>Terminal</h1>

            <section style={{ marginLeft: "10%", marginRight: "10%" }}>
                <ProjectBreakdown projectName={"Redacted Terminal"}
                    createDate="2026/06/25"
                    updateDate="2026/06/30"
                    technologyUsed={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Next.js"
                    ]}
                    goal={"Practice using frontend technologies to accurately recreate something in a webpage; a linux terminal's appearance, behavior, and features."}
                    summary={[
                        "The showcase is a highly accurate visual and behavioral replication of a Linux command-line interface (CLI) window inside a web browser.",
                        "It serves as a stylized navigation sitemap, transforming textual user terminal inputs like directory navigation into client-side page redirects.",
                        "While it mimic real terminal's aesthetics and user experience, its underlying shell features are greatly limited as only a small portion of features (listed below) are reimplemented."
                    ]}
                    scope={[
                        "This interactive Shell Suite implements functional mock commands: cd, clear, help, login, ls, pwd, and redirect.",
                        "The showcase monitors the Enter key and, when fired, evaluates and executes simulated shell utilities.",
                        "cd - move from current directory to new directory",
                        "clear - delete the terminal log history to declutter the UI",
                        "help - help - displays this list of commands",
                        "login - allows the user to enter a OTP as an --arg",
                        "ls - lists children inside the current directory",
                        "pwd - prints working/current directory",
                        "redirect - navigate the browser to another webpage on this website",
                        "The showcase monitors for mouse clicks anywhere within the terminal and will transfer focus to an invisible input field, mimicking the way terminals snap the blinking text cursor to a new line. The user doesn't need to click on the input element to begin typing.",
                        "The showcase models a terminal output logger showing previous commands and comes with a customized CSS-animated blinking visual cursor block.",
                        "The layout monitors the Tab key and, when fired, runs e.preventDefault(), and will attempt to autocomplete the user's input. Normally, pressing tab will blur and move focus onto another HTML element. Preventing default allows the to use the autocomplete features without needing to click on the terminal after every attempt. This works for both commands and their arguments, the user can attempt to autocomplete a command like 'cle' into 'clear' or a directory label like 'cd pers' into 'cd personal'.",
                        "The command redirect navigates the current webpage using native window.location.href. This triggers an explicit full-page browser refresh and leaves an entry in browser history so the user can [BACK] to return to the webpage with the terminal.",
                        "Features that affect authorization like sudo and su aren't implemented for security reasons and aren't possible without backend. Features that modify the 'filesystem' (which should always reflect the website's actual sitemap) like chmod, mkdir, mv, ln, and trash would break functionality of client-side page redirects so these aren't implemented. Features like apt, grep, and curl are not relevant to the scope of the showcase so these aren't implemented."
                    ]}
                    limitations={[
                        "The cd command can currently only handle single tier navigation. A real linux terminal's cd command can work with multi-tier path jumps (e.g., 'cd professional/resume'). Here, the user must navigate one folder at a time.",
                        "Another limitation of the cd command is usually typing 'cd', 'cd ~', 'cd $HOME' will navigate to the /user/home directory. Fast home paths like 'cd ~' or 'cd $HOME' fail immediately returning a hardcoded message indicating that the environment variable 'HOME' is not defined. This is realistic linux terminal behavior and can be left alone, or easily implemented later. There's not much benefit to the user to do this simply because the terminal starts the user off at HOME already, and the sitemap it reflects is not that deep and fairly small at the moment.",
                        "Pressing ArrowUp and ArrowDown currently does not fetch autofill the input from previous command history instead the terminal responds with a hardcoded message indicating history logging is disabled. If command history is to be included in the future, it should be limited in array length to prevent memory related abuses.",
                        "The mock filesystem object is currently hardcoded. While a limitation, denying user modifications during runtime is by design."
                    ]}>
                </ProjectBreakdown>
            </section>

            <section style={{ maxWidth: "960px" }}>
                <RedactedTerminal></RedactedTerminal>

            </section>
        </>
    );
}
