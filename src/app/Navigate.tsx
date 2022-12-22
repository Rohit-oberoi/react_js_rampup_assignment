import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import ErrorComponent from "./components/UserNotFound";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import { User } from "./components/User";
import { ROUTES } from "./constants/routeConstants";

function Navigator()  {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.PROFILE} element={<User />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.USER_NOT_FOUND} element={<ErrorComponent />} />
                <Route path={ROUTES.USERNAME} element={<User />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Navigator
