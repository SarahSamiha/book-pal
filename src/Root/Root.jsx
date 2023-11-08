import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Footer from "./components/Footer";


const Root = () => {
    const [theme, setTheme] = useState(true);
    return (
        <div data-theme={theme ? "myTheme1" : "myTheme2"}>
            <Navbar theme={theme} setTheme={setTheme}></Navbar>
            <Outlet></Outlet>
            <Footer theme ={theme}></Footer>
        </div>
    );
};

export default Root;