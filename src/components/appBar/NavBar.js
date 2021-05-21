import * as React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import { Prev } from 'react-bootstrap/esm/PageItem';
import { Router, withRouter } from 'react-router-dom';
import {routes} from '../../router/RoutesConstants';
import './NavBar.css';

const {useState,useEffect} = React;

const NavBar =(props)=>{
  const[menuChecked,setMenuChecked]=useState(false);
  const handleChecked=()=>{
    setMenuChecked(Prev=>!Prev);
  };
    return (
      <div role="navigation" className='navbar container-fluid'>
        <div id="menuToggle">          
<<<<<<< HEAD
          <input type="checkbox" checked={menuChecked} onChange={()=>handleChecked()} />   
=======
          <input className="check" type="checkbox" />   
>>>>>>> 16273652fb914a8fd89c07031955e9c6e5a018af
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
        <div className="title">
            <h3 className="title-nav">Mi Veterinaria</h3>
        </div>
    </div>
  );
}

export default withRouter(NavBar);