import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <ul className="nav justify-content-end bg-dark">
            <li className="nav-item">
                <NavLink to={"/"} className="nav-link" href="#">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={"/"} className="nav-link" href="#">Contraseñas Guardadas</NavLink>
            </li>
        </ul>
    )
}

export default Navbar;