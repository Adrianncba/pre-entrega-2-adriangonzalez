import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/logo-proyecto.png'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {



  return (
    <div className="navbar">

      <Link className='brand-title' to="/">
        <img src={logo} alt="" />
      </Link>

      <div className="links">
        <NavLink to={`/nosotros`}>Nosotros</NavLink>
        <NavLink to={`/category/computadoras`}>Computadoras</NavLink>
        <NavLink to={`/category/perifericos`}>Perifericos</NavLink>
        <NavLink to={`/category/monitores`}>Monitores</NavLink>
        <NavLink to={`/category/sillas`}>Sillas</NavLink>
      </div>
      <div>
        <NavLink to={`/cart`}><CartWidget /></NavLink>
      </div>

    </div>
  );
};

export default Navbar;
