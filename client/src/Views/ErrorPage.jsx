import { NavLink } from "react-router-dom"
const ErrorPage = () => {
    return (
        <div className="text-center m-3">
            <h1>404</h1>
            <h2>Page was not found</h2>
            <p>Sorry, something went wrong there. Try again</p>
            <div className="d-flex justify-content-center gap-2">
                <button className="error-btn">
                    <NavLink to="/" > Return Home </NavLink>
                </button>
                <button className="error-btn">
                    <NavLink to="/contact" > Report Problem </NavLink>
                </button>
            </div>
        </div>
    )
}
export default ErrorPage