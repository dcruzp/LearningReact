import logo from '../img/daniel-logo.png'
import React from 'react' ; 
import '../styles/header.css';

class Header extends React.Component{
  render(){
    return (
      <header class= "header">
        <div className= "header-camp">
          <a className="header-camp-logo">
            <img src={logo} className="header-logo" height="40" alt="logo"/>
            <span className="header-camp-name">Daniel</span>
          </a>
          <nav className="header-camp-nav">
            <a className="header-camp-nav-items">Comentarios </a>
            <a className="header-camp-nav-items">Colores </a>
            <a className="header-camp-nav-items">Ayuda </a>
          </nav>
          <a className= "header-camp-figure">
            <img src={logo} height="30" />
          </a>
        </div>
      </header>
    ); 
  }
}

export default Header;