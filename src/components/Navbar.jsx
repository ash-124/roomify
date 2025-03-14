import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";


const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext)



    const logStat = (loading, user, handleLogOut) => {
        if (loading) {
            return <Link to={'/login'} >
                <button className='btn '>Login Now! </button>
            </Link>
        }
        if (user) {
            return <button onClick={handleLogOut} className='btn '>Logout </button>
        } else {
            return <Link to={'/login'} >
                <button className='btn '>Login Now! </button>
            </Link>
        }
    }
    const handleLogOut = () => {
        logOut()
            .then(() => {

                toast.success('Logout successfully')
            })
            .catch((error) => {
                toast.error(error.message);
            });

    }

    const links =
        <>
            <li><NavLink role="tab" to="/" >Home</NavLink></li>
            <li><NavLink role="tab" to="/rooms" >Rooms</NavLink></li>
            <li><NavLink role="tab" to="/my-bookings"  >My Bookings</NavLink></li>


        </>
    return (
        <div className="navbar bg-blue-700/50  fixed z-[200] bg-base-100">
            <div className="navbar-start">
                <div className="dropdown z-30">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        role="tablist"
                        tabIndex={0}
                        className="menu menu-sm tabs tabs-lifted dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="flex gap-0">
                    <Link to={"/"} className="btn btn-ghost text-xl">Roomify</Link >
                    <div className="w-[40px] h-auto"></div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    logStat(loading, user, handleLogOut)
                }

                {
                    user ?
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <img
                                alt="user profile"
                                src={user?.photoURL || "https://i.pinimg.com/enabled_lo_mid/474x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg"} />
                        </div>
                        :
                        ""
                }
            </div>
        </div>
    );
};

export default Navbar;