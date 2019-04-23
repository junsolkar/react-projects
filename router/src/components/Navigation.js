    
import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={
            {color:'green'}
          }>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" exact activeStyle={
            {color:'green'}
          }>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact activeStyle={
            {color:'green'}
          }>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/user/john" exact activeStyle={
            {color:'green'}
          }>User John</NavLink>
        </li>
      </ul>
      
    </div>
  );
};

export default Navigation;