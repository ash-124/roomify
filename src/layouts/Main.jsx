import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Navbar */}
            <Navbar/>
            {/* Dynamic Contents */}
            <div className="flex-grow">
                <Outlet/>
            </div>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default Main;