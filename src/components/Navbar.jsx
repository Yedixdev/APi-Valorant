import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { SiValorant } from "react-icons/si";
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="header">
      <div className="back">
         <div className="menu menu-container">
            <div className="logo">
            <SiValorant />
            </div>
            
            <input type="checkbox" id="menu" />

            <label htmlFor="menu">
               <div className="menu-icono">
                  <MdMenuOpen />
               </div>
            </label>
          
            <nav className="nav">
               <div className="navlink">
               <NavLink to="/home" className="nav-link">Home</NavLink>
               <NavLink to="/agents" className="nav-link">Agents</NavLink>
               <NavLink to="/maps" className="nav-link">Maps</NavLink>
               <NavLink to="/arms" className="nav-link">Arms</NavLink>
               </div>
               <div className="btn-play">
                  <a href="https://playvalorant.com/es-es/download/" className="btn">
                  Play Now
                  </a>
               </div>
            </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
