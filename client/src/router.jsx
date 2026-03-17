import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Views/Home/home";
import ContactUs from "./Views/Contact/contactUs";
import Login from "./Views/login/login";
import Register from "./Views/login/register";
import About from "./Views/About/about";
import { Navbar } from "./Component/Navbar";
import ErrorPage from "./Views/ErrorPage";
import FooterComponent from "./Component/Footer";
import Logout from "./Views/login/logout";
import ServiceFile from "./Views/ServiceFile/service";

const Router = () => {
    return (
        <>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<ServiceFile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <FooterComponent/>
        </BrowserRouter>
   </> )
}
export default Router