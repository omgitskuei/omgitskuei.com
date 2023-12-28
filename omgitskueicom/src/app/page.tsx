'use client'

// import Image from 'next/image'
// import HockeyTeamList from '../components/Example'
// import PageBody from '../components/PageBody'
// import SidePanel from '../components/SidePanel'
// import NavbarExample from '../components/NavbarExample'

import { useState } from 'react';

const hStyle: { [key: string]: React.CSSProperties } = {
  main: {
    border: "2px solid orange",
    paddingTop: "24px",
  }
};


export default function Home() {

  // type NavChoice = "home" | "about" | "portfolio" | "resume" | "contact";
  // const [navChoice, setNavChoice] = useState<NavChoice>("home");
  // const [index, setIndex] = useState(0);

  return (
    <main style={hStyle.main}>
      <section>
        <h1>Hello, Home Page!</h1>
      </section>
    </main>
    )
}


// {/* <div className="flexbox-vertical"> */}
        // <div className="flexbox-horizontal">
        //   <div style={pStyle.sidebarContainer}>
        //     <h2>Sidebar</h2>
        //     <ol>
        //       <li>ham</li>
        //       <li>cheese</li>
        //       <li>lettuce</li>
        //     </ol>
        //   </div>
        //   <div style={pStyle.mainContainer}>
        //     Main article section
            // {/* <PageBody content="Home things... Lorem Ipsum is simply dummy text of the printing and typesetting industry." hidden={navChoice=="home" ? false : true}/> */}
            // {/* <PageBody content="About things... text text text..." hidden={navChoice=="about" ? false : true}/> */}
            // {/* <PageBody content="Portfolio things... text text text..." hidden={navChoice=="portfolio" ? false : true}/> */}
            // {/* <PageBody content="Resume things... text text text..." hidden={navChoice=="resume" ? false : true}/> */}
            // {/* <PageBody content="Contact things... text text text..." hidden={navChoice=="contact" ? false : true}/> */}
          // </div>
        // </div>   {/* flexbox-columns end*/}
      // {/* </div>     flexbox-rows end */}
    // </>
  // )
