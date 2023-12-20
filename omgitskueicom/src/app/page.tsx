'use client'

// import Image from 'next/image'
// import HockeyTeamList from '../components/Example'
import PageBody from '../components/PageBody'
import PageHeader from '../components/navbar/PageHeader'
import SidePanel from '../components/SidePanel'
// import NavbarExample from '../components/NavbarExample'

import { useState } from 'react';


export default function Home() {

  type NavChoice = "home" | "about" | "portfolio" | "resume" | "contact";
  const [navChoice, setNavChoice] = useState<NavChoice>("home");
  // const [index, setIndex] = useState(0);

  return ( 
    <main className="bg-metal text-metal">
      {/* <div className="flexbox-vertical"> */}
        <PageHeader/>
        <div className="flexbox-horizontal">
          <div>
            Sidebar
          </div>
          <div>
            Main article section
            <PageBody content="Home things... Lorem Ipsum is simply dummy text of the printing and typesetting industry." hidden={navChoice=="home" ? false : true}/>
            <PageBody content="About things... text text text..." hidden={navChoice=="about" ? false : true}/>
            <PageBody content="Portfolio things... text text text..." hidden={navChoice=="portfolio" ? false : true}/>
            <PageBody content="Resume things... text text text..." hidden={navChoice=="resume" ? false : true}/>
            <PageBody content="Contact things... text text text..." hidden={navChoice=="contact" ? false : true}/>
          </div>
        </div>   {/* flexbox-columns end*/}
        <div>
          {/* <SidePanel sfx="snowing"/> */}
          Footer
        </div>
      {/* </div>     flexbox-rows end */}
    </main>
  )
}
