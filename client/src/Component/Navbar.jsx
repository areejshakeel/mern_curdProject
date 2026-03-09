import { NavLink } from "react-router-dom"
import './Navbar.css'
export const Navbar = () =>{
    return (<>
    <header>
        <div className="container">
            <div>
                <NavLink to="/" > Testing Project</NavLink>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/" > HOME </NavLink></li>
                    <li><NavLink to="/about" > ABOUT </NavLink></li>
                    <li><NavLink to="/contact" > CONTACT US </NavLink></li>
                    <li><NavLink to="/login" > LOGIN </NavLink></li>
                    <li><NavLink to="/register" > REGISTER </NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
    </>)
}