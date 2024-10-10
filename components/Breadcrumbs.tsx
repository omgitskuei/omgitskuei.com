'use client'

export const Breadcrumbs = ({
    exampleFunction,
    string = "false",
    bool = false,
    children
}: {
    exampleFunction: Function,
    string?: string,
    bool?: boolean,
    children: JSX.Element[] | JSX.Element
}) => {
    return (
        <div id="breadcrumb" style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            height: "100vh",
            width: "100vw",
            zIndex: "10",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
            onClick={() => {
                exampleFunction();
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

const Breadcrumb = () => {
    return (
        <>
        
        </>
    )
}