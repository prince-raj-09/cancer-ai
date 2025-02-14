import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#F38181] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Cancer AI Detection</Link>
        <div>
          <Link to="/" className="text-white mx-2">Home</Link>
          <Link to="/detection" className="text-white mx-2">Detection</Link>
          <Link to="/results" className="text-white mx-2">Results</Link>
          {/* <Link to="/about" className="text-white mx-2">About</Link> */}
          {/* <Link to="/contact" className="text-white mx-2">Contact</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
