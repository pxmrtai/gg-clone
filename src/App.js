import React, { Component } from "react";
import "./styles.css";
import Navbar from './components/navbar/Navbar'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

export default class App extends Component{
  render(){
    return (
      <div className='App'>
        <Navbar />
        <Content />
        <Footer />
      </div>
     
    );
  }
}
