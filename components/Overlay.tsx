'use client'

export const Overlay = ({
    showOverlay,
    closeOverlay,
    dim = false,
    blur = false,
    children
}: {
    showOverlay: boolean,
    closeOverlay: Function,
    dim?: boolean,
    blur?: boolean,
    children: JSX.Element[] | JSX.Element
}) => {
    return (
        <div id="blurOverlay" style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            height: "100vh",
            width: "100vw",
            backdropFilter: blur ? "blur(6px)" : "none",
            background: dim ? "rgb(50, 50, 50, 0.75)" : "none",
            zIndex: "10",
            display: (showOverlay) ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            overflowY: showOverlay ? "hidden" : "auto"
        }}
            onClick={() => {
                closeOverlay();
            }}>
            <div onClick={(e) => {
                e.stopPropagation();
            }}
                style={{
                    width: "min-content",
                    height: "min-content"

                }}>{
                    children
                }
            </div>
        </div>
    )
}