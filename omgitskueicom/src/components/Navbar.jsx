import Image from 'next/image'


function Navbar(props) {
    console.log(props);

    // const { yes } = props;

    return (
        <div>
            {/* Logo */}
            <Image
                alt="OmgItsKuei Icon"
                src="/icon.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
            />

            <ul>
                {/* Home */}
                <li>
                    <a href="#home">Home</a>
                </li>
                {/* About */}
                <li>
                    <a href="#about">About</a>
                </li>
                {/* Portfolio */}
                <li>
                    <a href="#profolio">Portfolio</a>
                </li>
                {/* Hobbies */}
                <li>
                    <a href="#hobbies">Hobbies</a>
                    <ul>
                        {/* Woodworking */}
                        <li>
                            <a href="#woodworking">Woodworking</a>
                        </li>
                        {/* Cooking */}
                        <div>
                            Cooking
                        </div>

                        {/* Gardening */}
                        <div>
                            Gardening
                        </div>
                    </ul>
                </li>
            </ul>
        </div>
    );


}

export default Navbar;