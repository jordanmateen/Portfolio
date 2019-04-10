import React from 'react'
import Welcome from './Welcome'
const Image = () =>{
    return(
       

        <div >
            <Welcome/>
            <img className = "profile" src = {require("../images/jordan3.jpeg")} alt = "jordan"/>
        </div>
        
    )
 }

export default Image

