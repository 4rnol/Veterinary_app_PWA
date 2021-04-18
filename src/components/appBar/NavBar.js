import * as React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import './NavBar.css';
const NavBar =()=>{
    return (
      <nav role="navigation" style={{backgroundColor:'red',height:'60px'}}>
        <div id="menuToggle">          
          <input type="checkbox" />   
          <span></span>
          <span></span>     
          <span></span>
          <ul id="menu">
            <a href="#"><li>Home</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Info</li></a>
            <a href="#"><li>Contact</li></a>
          </ul>
        </div>
        <h3 className="title-nav">asdasd</h3>
    </nav>
  );
}

export default NavBar;