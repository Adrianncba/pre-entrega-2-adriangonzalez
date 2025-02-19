import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import logo from '../../assets/logo-proyecto.png'




const Navbar = () => {

  return (
    <div className="navbar">

      <Link className='brand-title' to="/">
        <img src={logo} alt="" />
      </Link>
    
      <div className="links">

        <NavLink to={`/category/computadoras`}>Computadoras</NavLink>
        <NavLink to={`/category/perifericos`}>Perifericos</NavLink>
        <NavLink to={`/category/monitores`}>Monitores</NavLink>
        <NavLink to={`/category/sillas`}>Sillas</NavLink>
      </div>

      <div className="cart-widget">
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
