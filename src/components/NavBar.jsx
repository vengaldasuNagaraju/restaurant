import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from "react";


function NavBar() {
  const [openLinks , setOpenLinks] = useState(false);

  const toggleNavbar = () =>{
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide"  id={openLinks ? "open" : "close"}>
        <img src={logo}/>
        <h1>Flavors & Feast</h1>
        <div className="hiddenLinks">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon/>
        </button>
    
      </div>
    </div>
  );
}

export default NavBar;
