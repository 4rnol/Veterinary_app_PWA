import * as React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import { Router, withRouter,useLocation, matchPath  } from 'react-router-dom';
import {routes} from '../../router/RoutesConstants';
import './NavBar.css';
import { connect } from 'react-redux';
import { changeUser,cleanAllReducers,filterPublications } from '../../redux/actions/index.actions';
import imgPrueba from '../../assets/Perrito.jpg'; 

const {useState,useEffect,useRef}=React;

const NavBar =(props)=>{
  const isAuth=props.isAuth;
  const Location=useLocation();
  const wrapperRef = useRef(null);
  const {user} = props.userReducer;
  const [title,setTitle] = useState("");
  const[navOpen,setNavOpen]=useState(false);
  const [showSearch,setShowSearch]=useState(false);
  const textFilter = props.filterPubReducer;

  useEffect(() => {
    if(Location.pathname==="/publications") setShowSearch(true);
    else{setShowSearch(false)}
  }, [Location])

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setNavOpen(false);
        }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    setTitle(()=>{
      switch (Location.pathname) {
        case "/publications":
          return "";
        case "/registerPublication":
          return "Registrar Publicación";
        case "/checkPublications":
          return "Revisar Publicación";
        case 'publication':
          return "Publicación";
        default:
          return "Inicio"
      }
    });
    return () => {
    }
  }, [Location])

  const redirect=(path)=>{
    props.history.push(path);
    setNavOpen(false);
  };

  const Logout=()=>{
    setNavOpen(!navOpen);
    sessionStorage.clear();
    props.cleanAllReducers();
    props.history.push(routes.login);
  };

  const filterText=(inputValue)=>{
    props.filterPublications(inputValue);
  };

  return (
    <div role="navigation" className='navbar container-fluid'>
      <div>
        <div id="menuToggle" ref={wrapperRef}>          
          <input className="check" onChange={()=>setNavOpen(prev=>!prev)} type="checkbox" checked={navOpen}/>   
          <span></span>
          <span></span>     
          <span></span>
          <ul id="menu">
            {
              isAuth && 
                <div>
                    <Nav.Link onClick={()=>redirect(routes.registerPublication)}>
                      <li>Registrar publicacion</li>
                    </Nav.Link>
                    <hr />
                </div>
            }

            <Nav.Link onClick={()=>redirect(routes.publications)}>
              <li>Publicaciones</li>
            </Nav.Link>
            <hr />   

            {
              !isAuth && 
                <div>
                  <Nav.Link onClick={()=>redirect(routes.registerVeterinary)}>
                    <li>Registrar veterinaria</li>
                  </Nav.Link>
                  <hr />
                </div>
            }            
            {
              isAuth && 
                <div>
                  <Nav.Link onClick={()=>redirect(routes.veterinaryPublications)}>
                    <li>Mis publicaciones</li>
                  </Nav.Link>
                  <hr />
                </div>
            }            
            {
              user!==null&&((isAuth && user.email==='admin@admin.com') &&
                <div>
                  <Nav.Link onClick={()=>redirect(routes.checkPub)}>
                    <li>Revisar publicaciones pendientes</li>
                  </Nav.Link>
                  <hr />
                </div>)
            }            
            {/* {
              isAuth && 
                <div>
                    <Nav.Link onClick={()=>redirect(routes.account)}>
                      <li>Cuenta</li>
                    </Nav.Link>
                    <hr />
                </div>
            } */}
            { 
              isAuth ? <Nav.Link onClick={()=>Logout()}>
                <li>Cerrar Sesión</li>
              </Nav.Link>:
              <Nav.Link onClick={()=>redirect(routes.login)}>
                <li>Iniciar Sesión</li>
              </Nav.Link>
            }
            
          </ul>
        </div>
        <div className="title-navbar">
            <h3 className="title-nav">{title}</h3>
            {
              showSearch &&
                <input 
                  type="text" 
                  name="search"
                  maxLength="25"
                  value={textFilter} 
                  placeholder="Buscar publicación" 
                  onChange={({target})=>filterText(target.value)}
                />
            }
        </div>
      </div>
      {user && <img className="imgAccount-navbar" alt="" src={user.urlImg} onClick={()=>props.history.push(routes.account)}/>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
    filterPubReducer:state.filterPublicationsReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeUser: (user) => dispatch(changeUser(user)),
  cleanAllReducers:()=>dispatch(cleanAllReducers()),
  filterPublications:(text) => dispatch(filterPublications(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));