import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import ErrorComponent from "./components/Error";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import { User } from "./components/User";

function Navigator()  {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/profile' element={<User />} ></Route>
                <Route path='/about' element={<About />} ></Route>
                <Route path='/errorComponent' element={<ErrorComponent />} ></Route>
                <Route path='/:username' element={<User />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Navigator
