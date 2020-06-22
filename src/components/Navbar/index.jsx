import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/portfolio">WORK</Link>
    </nav>
  );
};

export default Navbar;
