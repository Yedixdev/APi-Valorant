import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { SiValorant } from "react-icons/si";

const Navbar = () => {
   return (
   <div className="header">
      <div className="logo">
         <SiValorant />
      </div>
      <div className="nav">
         <NavLink to="/home" className="a">Home</NavLink>
         <NavLink to="/agents" className="a">Agents</NavLink>
         <NavLink to="/maps" className="a">Maps</NavLink>
         <NavLink to="/Arms" className="a">Arms</NavLink>
      </div>
      <div className="btn-play">
         <a
         href="https://playvalorant.com/es-es/download/"
         className="btn btn-1"
         >
         Play now
         </a>
      </div>
   </div>
   )
}

export default Navbar
