// import Image from 'next/image'
import { sculptureList } from "./../assets/writeup/data.js";
import { useState } from 'react';





interface PageBodyProps {
    hidden: boolean;
    content: String;
}

function PageBody({ hidden, content }: PageBodyProps) {

    const [index, setIndex] = useState(0);

    function handleClick() {

        setIndex(index + 1);
    }
    let sculpture = {
        name : "",
        artist : "",
        url : "",
        alt : "",
        description : "",
    };
    if (index < sculptureList.length) {
        sculpture = sculptureList[index];
    } else {
        setIndex(0);
        sculpture = sculptureList[0];
    }

    if (hidden) {
        return null;
    }

    return (
        <div className="page-body">
            <p>{content}</p>
            <div>
                {
                    index < sculptureList.length ? 
                    <button onClick={handleClick}>Next</button>
                    : <button onClick={handleClick} disabled>Next</button>
                }
                <h2>
                    <i>{sculpture.name} </i>
                    by {sculpture.artist}
                </h2>
                <h3>
                    {
                    index < sculptureList.length ? 
                    <p>{index + 1} of {sculptureList.length}</p> 
                    : <p>End</p>
                    }
                </h3>
                <img
                    src={sculpture.url}
                    alt={sculpture.alt}
                />
                <p>
                    {sculpture.description}
                </p>
            </div>
            
        </div>
    );
}

export default PageBody;