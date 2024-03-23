import { BrowserRouter, Route, Routes  } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";
import Register from "../pages/Register";



// create component
const Navigation = () =>{
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Navigation;