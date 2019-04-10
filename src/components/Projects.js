import React from 'react'


const Projects = () =>{
    return (
        <div id = "section_2"className=" container">

            <h3 class = "center">Featured Projects</h3>

            <div class="row">
                <div class="col s12 m6">
                <div class="card">
                    <div class="card-image">
                    <img src = {require ('../images/Lituation.png')}/>
                    <a href="http://lituation.me/" class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">arrow_forward</i></a>
                    </div>
                    <div class="card-content">
                        <span class="card-title">Lituation</span>
                        <p>Social Mapping site allows user to see locations around them. Once a pin is dropped the "LitSpy" shows you all the lit places in town</p>
                        <h6>Technologies:</h6>
                        <ul>
                            <li>Google Maps API</li>
                            <li>Google Places API</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Firebase</li>
                            <li>Cyberduck</li>
                        </ul>
                    </div>
                </div>
                </div>
            

                
                <div class="col s12 m6">
                <div class="card">
                    <div class="card-image">
                    <img src = {require ('../images/ChatRoom.png')}/>
                    <a href="http://chatdc.herokuapp.com" class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">arrow_forward</i></a>
                    </div>
                    <div class="card-content">
                        <span class="card-title">Cha-Cha ChatRoom:</span>
                        <p>Imagine the loudest places on earth. Welcome to the Cha-Cha Chatroom where anyone can sign up and join on massive chat.</p>
                        <h6>Technologies:</h6>
                        <ul>
                            <li>EJS</li>
                            <li>Express</li>
                            <li>Node</li>
                            <li>Socket.io</li>
                            <li>MongoDB</li>
                            <li>Passport.js</li>
                            <li>Heroku</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>


            <div class="row">
                <div class="col s12 m12">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">Defintion Bee</span>
                            <p>Light Weight full stack game built using React. This madularized application renders a random defintion and the users habe to correctly guess the associated word. 
                                Designed with a RESTful backed server utilizing NPM technologies for models and endpoints. Fron-end state managed in Redux. </p>
                            <p>Technologies: React, Redux, Node, Express, MongoDB, React Bootstrap</p>
                        </div>
                        <div class="card-action">
                        <a class="waves-effect waves-light btn green"><i class="material-icons left">developer_mode</i>See Code</a>
                            
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <hr/>
            
        </div>
    )
}

export default Projects