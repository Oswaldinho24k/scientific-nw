import React, { Component } from 'react';
import {Routes} from './Routes';
import Nav from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './index.css'


class App extends Component {
  render() {
    return (
      <div>
          <Nav/>
          <Routes/>
          <Footer/>
      </div>
    );
  }
}

export default App;
