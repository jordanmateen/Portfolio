import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Image from './components/HomeImg'
import Nametag from './components/Nametag'
import NavBar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'

import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div >
          <NavBar/>
          <header className="App App-header">
            <Image/>
            <Nametag/>
          </header>
          <Body/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
