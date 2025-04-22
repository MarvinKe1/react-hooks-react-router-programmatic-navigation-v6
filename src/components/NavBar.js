import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ logout }) {  // Accept logout prop from App.js
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
        end  // Ensures exact match for home route
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <button 
        onClick={logout} 
        className="logout-button"  // Add styling via NavBar.css
      >
        Logout
      </button>
    </nav>
  );
}

export default NavBar;