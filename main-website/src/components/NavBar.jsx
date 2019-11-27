import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  let location = useLocation();

  let navbar = "navbar";
  let asp = "as";


  if(location.pathname === "/") {
    navbar = "navbar"
  } else {
    navbar = "navbar navbarAlt"
    asp = "linksAlt"
  };

    return (
            <nav className={navbar}>
            <h1>ANTHONY VIGLIOTTA</h1>
            <div className="links">
                <NavLink className={asp} activeClassName="selected" exact to="/">Home</NavLink>
                <NavLink className={asp} activeClassName="selected" to="/about">About</NavLink>
                <a className={asp} href="#" >Skills</a>
                <a className={asp} href="#" >Work</a>
                <a className={asp} href="#" >Resume</a>
                <a className={asp} href="#" >Contact</a>
            </div>
            </nav>
    )
}

export default NavBar;
