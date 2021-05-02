import * as React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import { Router, withRouter } from 'react-router-dom';
import {routes} from '../../router/RoutesConstants'

import './NavBar.css';
const NavBar =(props)=>{
    return (
      <div role="navigation" className='navbar container-fluid'>
        <div id="menuToggle">          
          <input type="checkbox" />   
          <span></span>
          <span></span>     
          <span></span>
          <ul id="menu">
            <Nav.Link onClick={()=>props.history.push(routes.home)}><li>Inicio</li></Nav.Link>
            <hr />
            <Nav.Link onClick={()=>props.history.push(routes.publications)}><li>Publicaciones</li></Nav.Link>
            <hr />
            <Nav.Link onClick={()=>props.history.push(routes.registerPublication)}><li>Registrar publicacion</li></Nav.Link>
            <hr />
            <Nav.Link onClick={()=>props.history.push(routes.registerVeterinary)}><li>Registrar veterinaria</li></Nav.Link>
            <hr />
            <Nav.Link onClick={()=>props.history.push(routes.login)}><li>Account</li></Nav.Link>
            <hr />
            <Nav.Link onClick={()=>props.history.push(routes.login)}><li>Login</li></Nav.Link>
          </ul>
        </div>
        <h3 className="title-nav">Mi Veterinaria</h3>
    </div>
  );
}

export default withRouter(NavBar);