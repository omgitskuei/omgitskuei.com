import logo from "../app/icon.png";

const PageHeader = () => {
    return <div className="flex gap-10 lg:gap-20">
        <div className="flex gap-4 items-center flex-shrink-0">
            <button></button>
            <a href="/">
                <img src={logo.src} className="h-6"/>
            </a>
        </div>

        <div>

        </div>

        <div>

        </div>
    </div>;
}

export default PageHeader;