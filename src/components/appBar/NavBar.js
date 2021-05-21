import * as React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import { Router, withRouter } from 'react-router-dom';
import {routes} from '../../router/RoutesConstants';
import './NavBar.css';
import { connect } from 'react-redux';
import { changeUser,cleanAllReducers } from '../../redux/actions/index.actions';

const {useState,useEffect}=React;

const NavBar =(props)=>{
  const[navOpen,setNavOpen]=useState(false);
  const isAuth=props.isAuth;

  const redirect=(route)=>{
    props.history.push(route);
    setNavOpen(!navOpen);
  };

  const Logout=()=>{
    setNavOpen(!navOpen);
    sessionStorage.clear();
    props.cleanAllReducers();
    props.history.push(routes.login);
  };

  return (
    <div role="navigation" className='navbar container-fluid'>
      <div id="menuToggle">          
        <input className="check" onChange={()=>setNavOpen(!navOpen)} type="checkbox" checked={navOpen}/>   
        <span></span>
        <span></span>     
        <span></span>
        <ul id="menu">
          {/* {isAuth && 
            <div>
              <Nav.Link onClick={()=>redirect(routes.home)}><li>Inicio</li></Nav.Link>
              <hr />
            </div>} */}

          {isAuth && 
            <div>
                <Nav.Link onClick={()=>redirect(routes.registerPublication)}><li>Registrar publicacion</li></Nav.Link>
                <hr />
            </div>}

          <Nav.Link onClick={()=>redirect(routes.publications)}><li>Publicaciones</li></Nav.Link>
          <hr />   

          {!isAuth && 
            <div>
              <Nav.Link onClick={()=>redirect(routes.registerVeterinary)}><li>Registrar veterinaria</li></Nav.Link>
                <hr />
            </div>}            
          
          { 
            isAuth ? <Nav.Link onClick={()=>Logout()}><li>Logout</li></Nav.Link>:
            <Nav.Link onClick={()=>redirect(routes.login)}><li>Login</li></Nav.Link>
          }
          
        </ul>
      </div>
      <div className="title">
          <h3 className="title-nav">Mi Veterinaria</h3>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeUser: (user) => dispatch(changeUser(user)),
  cleanAllReducers:()=>dispatch(cleanAllReducers()),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));