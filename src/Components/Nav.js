import React from "react";
import {  Navbar, Nav, NavItem } from 'react-bootstrap';



import '../App.scss';

function Navs(){
    return(
    <div className="main-Navs">
  <Navbar bg="dark" >
           <Navbar.Brand href="#home"> 
           <img src="./img/logo.png" />
           </Navbar.Brand>
            <Nav className="ml-auto" >
            <NavItem>Menu
            <svg className="bi bi-filter-right" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M14 10.5a.5.5 0 00-.5-.5h-3a.5.5 0 000 1h3a.5.5 0 00.5-.5zm0-3a.5.5 0 00-.5-.5h-7a.5.5 0 000 1h7a.5.5 0 00.5-.5zm0-3a.5.5 0 00-.5-.5h-11a.5.5 0 000 1h11a.5.5 0 00.5-.5z" clipRule="evenodd"/>
        </svg>
          </NavItem>
            </Nav>
          </Navbar>
    </div>
      
    )
}

export default Navs;