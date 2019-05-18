import React from 'react'
import { Link } from 'react-router-dom'


const NavbarLinks = () => {
    return(

        <div>
            <Link to = '/' className = "brand-logo col s12">#Portfolio</Link>
            <ul className="right">
                <li><a href="https://github.com/jordanmateen?tab=repositories/" class="waves-effect waves-light btn indigo lighten-2">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/jordan-mateen-2a6038100/" class="waves-effect waves-light btn indigo"><i class="material-icons left">account_circle</i>connect</a></li>
            </ul>
      
        </div>
    )
}

export default NavbarLinks