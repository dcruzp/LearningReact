import React from "react";
import {slider as Menu} from 'react-burger-menu'  
import '../styles/Sidebar.css'

const Sidebar  = () => {
    return (
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/salads">
          Salads
        </a>
        <a className="menu-item" href="/pizzas">
          Pizzas
        </a>
        <a className="menu-item" href="/desserts">
          Desserts
        </a>
      </Menu>
    );
};

export default Sidebar; 