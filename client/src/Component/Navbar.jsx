import { NavLink } from "react-router-dom"
import './Navbar.css'
import { useAuth } from "../store/auth"


export const Navbar = () => {
    const {isloggedIn} = useAuth()

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
                        {isloggedIn == true ? (<li><NavLink to="/logout" > LOGOUT </NavLink></li>)
                            : (<>
                                <li><NavLink to="/login" > LOGIN </NavLink></li>
                                <li><NavLink to="/register" > REGISTER </NavLink></li>
                            </>)}
                    </ul>
                </nav>
            </div>
        </header>
    </>)
}