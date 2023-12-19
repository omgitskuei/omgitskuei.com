const bcStyle: { [key: string]: React.CSSProperties } = {
    nav: {
        borderBottom: "1px solid white",
    },
    ol: {
        listStyleType: "none",
        paddingLeft: 0,
    },
    crumb: {
        display: "inline-block"
    },
    a: {
        color: "lightgrey"
    }
};

const seasons = ["Spring", "Summer", "Autumn", "Winter"];

function Breadcrumbs() {
    return <nav style={bcStyle.nav}>
        <ol style={bcStyle.ol}>
            <li key="0" style={bcStyle.crumb}>
                <a style={bcStyle.a} href="#">Home</a>
                <span style={bcStyle.a} > &gt; </span>
            </li>
            {seasons.map((i, season) => (
            <li key={i+1} style={bcStyle.crumb}>
                <a style={bcStyle.a} href="#">{i} {season}</a>
                <span style={bcStyle.a} > &gt; </span>
            </li>
            ))}
        </ol>
    </nav>;
}

export default Breadcrumbs;



