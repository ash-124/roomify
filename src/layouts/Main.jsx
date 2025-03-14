import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div className="flex min-h-screen flex-col bg-gray-300/50 ">
            {/* Navbar */}
            <div className="mb-[68px]">
                <Navbar />
            </div>
            {/* Dynamic Contents */}
            <div className="flex-grow">
                <Outlet />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Main;