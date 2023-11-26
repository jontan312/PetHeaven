import React from "react";
import logo from "/Users/jonathantan/Documents/Coding/frontEnd/isit207/my-react-app/src/components/PHlogo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav style={navStyles}>
        <div className="menuitem">
          <Link to="/PetHeaven">
            <img alt="companyLogo" src={logo} className="logo" />
          </Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/funcat" className="nav-link">Cats</Link>
          <Link to="/fundog" className="nav-link">Dogs</Link>
          <Link to="/adopt" className="nav-link">Adopt</Link>
          <Link to="/volunteer" className="nav-link">Volunteer</Link>
          <Link to="/release" className="nav-link">Release</Link>
        </div>
      </nav>
    </>
  );
};

const navStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', // Center vertically
  padding: '10px',
};

export default NavBar;