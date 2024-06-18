import { NavLink } from "react-router-dom"
import css from "./Navbar.module.css"
import clsx from "clsx"

const getClassNames = ({ isActive }) => { return clsx(css.link, isActive && css.isActive) };

function Navbar() { 
    return (
          <nav className={css.navigation}>
            <NavLink className={getClassNames} to='/'>Home</NavLink>
            <NavLink className={getClassNames} to='/movies'>Movies</NavLink>
          </nav>
    )
};

export default Navbar