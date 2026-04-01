import { NavLink, Outlet } from "react-router-dom"
import { FaUserTie } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { FaRegListAlt } from "react-icons/fa";
import "./adminLayout.css";

const adminLayout = () => {
    return (
        <>
            <div className="admin-layout">

                {/* LEFT SIDEBAR */}
                <aside className="sidebar">
                    <h3 className="logo">Admin Panel</h3>
                    <nav>
                        <ul>
                            <li><NavLink to="/admin/user"> <FaUserTie /> User </NavLink></li>
                            <li><NavLink to="/admin/contact"> <GrContact /> Contact </NavLink></li>
                            <li><NavLink to="/admin/service"> <FaRegListAlt /> SERVICE </NavLink></li>
                        </ul>
                    </nav>
                </aside>

                {/* RIGHT CONTENT AREA */}
                <main className="content">
                    <Outlet />
                </main>
            </div>
        </>
    )
}
export default adminLayout