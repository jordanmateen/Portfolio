import React from 'react'
import ScrollspyNav from "react-scrollspy-nav";


const NavbarLinks = () => {
    return(

        <ScrollspyNav
            scrollTargetIds={["section_1", "section_2", "section_3"]}
            activeNavClass="is-active"
            scrollDuration="500"
            headerBackground="true"
        >
            <ul className="right">
                <li><a href="#section_2" className = 'btn btn-floating indigo lighten-2'>&lt;/&gt;</a></li>
                <li><a href="#section_3" className = 'btn btn-floating indigo lighten-2'> &#123; &#125; </a></li>
                <li><a href="#section_4" className = 'btn btn-floating indigo lighten-2'> &#35;</a></li>
                <li><a href="#section_1" className = 'btn btn-floating indigo lighten-2'>AB</a></li>
            </ul>
        
        </ScrollspyNav>
       
    )
}

export default NavbarLinks