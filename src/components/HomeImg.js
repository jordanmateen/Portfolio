import React from 'react'
import Welcome from './Welcome'
const Image = () =>{
    return(
       

        <div >
            <Welcome/>
            <img className = "profile" src = {require("../images/jordan-stripes.jpg")} alt = "jordan"/>
        </div>
        
    )
 }

export default Image

