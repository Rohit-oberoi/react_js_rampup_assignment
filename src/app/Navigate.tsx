import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import ErrorComponent from "./components/Error";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import { User } from "./components/User";
import * as Constants from './Constants'

function Navigator()  {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path={Constants.HOMEURL} element={<Home />} ></Route>
                <Route path={Constants.PROFILEURL} element={<User />} ></Route>
                <Route path={Constants.ABOUTURL} element={<About />} ></Route>
                <Route path={Constants.ERRORURL} element={<ErrorComponent />} ></Route>
                <Route path={Constants.USERURL} element={<User />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Navigator
