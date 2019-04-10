import React from 'react'
import { Link } from 'react-router-dom'
import NavbarLinks from './NavbarLinks'

const NavBar = ()=>{

    return(

        
           <nav className="navbar nav-wrapper">
               <div className="container">
                <Link to = '/' className = "brand-logo">#Portfolio</Link>
                <NavbarLinks/>
               </div>
           </nav>
    

    )
}

export default NavBar