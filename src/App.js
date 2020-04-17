import React, { Component } from 'react';


import Footer from './Components/Footer';
import Navs from './Components/Nav';
import Content from './Components/Content';

import './App.scss';




class App extends Component{
  render(){
    return(
      <div className="App">
        <Navs/>
        <Content/>
        <Footer/>

      </div>
    )
  }
}







export default App;
