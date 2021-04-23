import * as React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import { Router, withRouter } from 'react-router-dom';
import {routes} from '../../router/RoutesConstants'
import './NavBar.css';
const NavBar =(props)=>{
    return (
      <nav role="navigation" style={{backgroundColor:'red',height:'60px'}}>
        <div id="menuToggle">          
          <input type="checkbox" />   
          <span></span>
          <span></span>     
          <span></span>
          <ul id="menu">
            <a href={routes.home} ><li>Inicio</li></a>
            <hr/>
            <a href={routes.publications}><li>Publicaciones</li></a>
            <hr/>
            <a href={routes.registerPublication}><li>Registrar publicacion</li></a>
            <hr/>
            <a href="#"><li>Contact</li></a>
            <hr/>
            <a href="#"><li>Account</li></a>
            <hr/>
            <a href="#"><li>Log out</li></a>
          </ul>
        </div>
        <h3 className="title-nav">asdasd</h3>
    </nav>
  );
}

export default withRouter(NavBar);