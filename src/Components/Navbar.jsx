import { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white text-black shadow-md">
      <div className="flex items-center">
       Untitled UI
      </div>

      <div className="hidden md:flex space-x-6 items-center">
        <Link to="/" className="text-black hover:text-gray-900">Home</Link>
        <Link to="/" className="text-black hover:text-gray-900">Pricing</Link>
        <Link to="/" className="text-black hover:text-gray-900">How it works</Link>
        <Link to="/" className="text-black hover:text-gray-900">Resources</Link>
        <Link to="/" className="text-black hover:text-gray-900">Company</Link>
        
        
        <button className=" px-4 py-2 ">Login</button>
          <button className=" px-4 py-2 bg-black text-white rounded-full">
            Signup
          </button>
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl text-gray-700">
          {menuOpen ? <IoClose /> : <TiThMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-start p-4 space-y-4 md:hidden">
          <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Home</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Pricing</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>How it works</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Resources</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Company</Link>
          
          
          <button className="w-full px-4 py-2">Login</button>
          <button className="w-full px-4 py-2 bg-black text-white rounded-full">
            Signup
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;