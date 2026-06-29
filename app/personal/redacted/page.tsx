import Link from "next/link";
import styles from "./page.module.css";
import RedactedTerminal from "@/components/Terminal/RedactedTerminal";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CSSProperties, HTMLAttributes } from "react";
import { InputGroup } from "@/components/InputGroup";

const style: CSSProperties | undefined = {
    boxSizing: "border-box",
    flex: "0 0 calc(50% - 8px)",
    // textAlign: "center",
    border: "1px black solid"
};

export default function Page() {
    return (
        <>
            <Breadcrumbs items={[]} separator="/"></Breadcrumbs>

            <div>
                Showcase breakdown
            </div>
            <div>
                Showcase:
                Redacted Terminal
            </div>
            <div>
                Created date:
                2026/6
            </div>
            <div>
                Last Update date:
                2026/06
            </div>
            <div>
                Technology used:
                HTML, CSS, JavaScript, TypeScript, React
            </div>
            <div>
                Core Goal:
                Practice using frontend technologies to accurately recreate something in a webpage; a linux terminal's appearance, behavior, and features.
            </div>
            <div>
                Summary:
                The showcase simulates an interactive retro command-line interface (CLI) window based on a linux terminal inside a web browser.
                It serves as a stylized navigation sitemap, transforming textual user terminal inputs (like directory navigation)into
                client-side page redirects.
                While appearing very close to a real linux terminal, only a small portion of features (listed below) are reimplemented.
            </div>
            <div>
                Scope:
                The showcase monitors the Enter key and, when fired, evaluates and executes simulated shell utilities:
                cd - move from current directory to new directory
                clear - delete the terminal log history to declutter the UI
                help - 
                login -
                ls -
                pwd -
                redirect -

                The showcase monitors for mouse clicks anywhere within the terminal and will transfer focus to an invisible input field, 
                mimicking the way terminals snap the blinking text cursor to a new line. The user doesn't need to click on the input
                element to begin typing.
                
                The showcase models a terminal output logger with a customized, CSS-animated blinking visual cursor block.
                
                The layout interceptively monitors the Tab key paired with e.preventDefault(). This way, the user can attempt to 
                autocomplete the command they are typing against an internal whitelist array without the Tab keypress loosing
                focus of the input element. If a user is mid-argument within a cd command, it attempts to autocomplete against available 
                labels under the active directory node to find matching folder names.

                2. Page Reload Transitions: Triggering the redirect instruction alters the destination using native window.location.href. 
                This overrides standard Next.js Single Page Application (SPA) routing advantages by forcing an explicit full-page browser refresh.

                Features that affect authorization like sudo and su aren't implemented for security reasons and aren't possible without
                backend.
                Features that modify the 'filesystem' (which should always reflect the website's actual sitemap) like chmod, mkdir, mv, ln,
                and trash would break functionality of client-side page redirects so these aren't implemented.
                Features like apt, grep, and curl are not relevant to the scope of the showcase so these aren't implemented.
            </div>
            <div>
                Possible future improvements:

                1. Incomplete Command Features: Pressing ArrowUp does not fetch preceding command history; it triggers an explicit hardcoded string indicating history logging is disabled.

                2. Path Navigation Restrictions: Multi-tier path jumps (e.g., cd professional/resume) are explicitly blocked by a validation statement check for / characters. Users can only advance one directory tier at a time.

                3. Hardcoded Context Fallbacks: Fast home paths like cd ~ or cd $HOME fail immediately with a mock fallback error string indicating the environment variable is not defined.

                4. Static Environment Config: The mock filesystem object and command parameters are completely hardcoded. 
                They cannot handle runtime updates, dynamically loaded data, or external system mutations.

                1. Hardcoded Dimensions: Layout containers are styled inline with restrictive dimensions (maxWidth: "320px", maxHeight: "320px"), preventing fluid, responsive dashboard scaling.


            </div>


            
            <div>
                Specifications:
                The terminal should support the cmds "cd", "clear", "help", "login", "ls", "pwd".
                The terminal should have a functional Tab autocomplete features when halfway typing a cmd or a directory label.
                The terminal should have a working Tab autocomplete features.
                The terminal should take a JavaScript object (TypeScript)

            </div>




            <InputGroup id={"showcasename"} label={"Show Case: "} type={"text"}
                inputWidth={""} value="">
            </InputGroup>

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                width: "100%",
                boxSizing: "border-box"
            }}>
                <div style={style}>
                    <input type="text" />
                </div>
                <div style={style}>
                    Item 2 (Row 1)
                </div>
                <div style={style}>
                    Item 3 (Row 2)
                </div>
                <div style={style}>
                    Item 4 (Row 2)
                </div>
                <div style={style}>
                    Item 5 (Row 3)
                </div>
                <div style={style}>
                    Item 6 (Row 3)
                </div>
            </div >


            <div>
                <span>Show case name: </span>
                <span>Redacted Terminal</span>
            </div>
            <div>

            </div>


            <RedactedTerminal></RedactedTerminal>
        </>
    );
}
