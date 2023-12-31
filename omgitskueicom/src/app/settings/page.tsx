import SchemeCard from "@/components/body/SchemeCard";
import ToggleSwitch from "@/components/body/ToggleSwitch";

import homeIcon from "../../assets/icons/home.png"

const ThisStyle: { [key: string]: React.CSSProperties } = {
    inline: {
        display: "inline",
    },
    borderTop: {
        borderTop: "solid white 1px"
    },
    centerItems: {
        // display: "flex",
        // justifyContent: 'center',

    },
    section: {
        display: "flex",
        flexDirection: "column",
        // paddingTop: "10px",
        // paddingBottom: "15px",
        paddingLeft: "15px",
        paddingRight: "15px",
    },
    fieldset: {
        border: "rgb(var(--text-color)) solid 1px",
        // padding: "20px",
        paddingTop: "10px",
        paddingBottom: "20px",
        paddingLeft: "15px",
        paddingRight: "15px",
        marginTop: "15px",
        marginLeft: "30px",
        marginRight: "30px",
    },
    legend: {
        // https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
        // textDecoration: "underline  overline",
        fontWeight: "bolder",
        paddingLeft: "10px",
        paddingRight: "10px",
        // marginLeft: "150px",
    },
    h1: {
        fontWeight: "bolder",
        fontSize: "medium",
        marginLeft: "15px",
        // marginBottom: "15px",
    },
    select: {
        width: "200px",
        textAlign: "center",
        borderRadius: "5px",
        backgroundColor: "rgb(var(--background-start-rgb))",
        border: "rgb(var(--text-color)) 1px solid",
        marginLeft: "10px",
        // color: ""
    },
    p: {
        marginRight: "7px"
    }
};


export default function Page() {
    return (<section style={ThisStyle.section}>

        <h1 style={ThisStyle.h1}>Settings</h1>
        {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset */}
        <fieldset style={ThisStyle.fieldset}>
            <legend style={ThisStyle.legend}>Appearance</legend>
            <div className="flexbox-vertical flexbox-center">
                <p style={ThisStyle.p} className="">This website adapts its color scheme based on your preferences.</p>
                <p>Choose which color scheme you’d like to use for this site.</p>
                <div className="flexbox-horizontal flexbox-center">
                    <SchemeCard darkmode={false}></SchemeCard>
                    <span>OR</span>
                    <SchemeCard darkmode={true}></SchemeCard>
                </div>
            </div>
            <ToggleSwitch
                id={"toggle_scheme"}
                label={"color scheme"}
                labelChecked={""}
                labelUnchecked={""}
                valueChecked={"Dark"}
                valueUnchecked={"Light"}></ToggleSwitch>
        </fieldset>

        <fieldset style={ThisStyle.fieldset}>
            <legend style={ThisStyle.legend}>Language</legend>
            <div className="flexbox-vertical flexbox-center">
                <p style={ThisStyle.p} className="">This website supports multiple languages used to display pages. Choose which language you  would prefer for this site.</p>
                <div className="flexbox-horizontal flexbox-center">
                    TODO add visual aid
                </div>
            </div>
            <div className="flexbox-horizontal flexbox-center">
                <label>Current language: </label>
                <select style={ThisStyle.select}>
                    <option value="enUS">English</option>
                    <option value="zhHANT">Chinese (Traditional)</option>
                    <option value="zhHANS">Chinese (Simplified)</option>
                </select>
            </div>
        </fieldset>

        <fieldset style={ThisStyle.fieldset}>
            <legend style={ThisStyle.legend}>Fonts</legend>
            <div className="flexbox-vertical flexbox-center">
                <p style={ThisStyle.p} className="">This website defaults to medium font size. Choose a different font size here.</p>
                <div className="flexbox-horizontal flexbox-center">
                    TODO add visual aid
                </div>
            </div>
            <div className="flexbox-horizontal flexbox-center">
                <label>Font Size: </label>
                <select style={ThisStyle.select}>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="42">42</option>
                </select>
            </div>
        </fieldset>
    </section>)
}