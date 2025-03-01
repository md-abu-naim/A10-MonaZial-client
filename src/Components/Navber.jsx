import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo2.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navber = () => {
    const { user, logOut, loading } = useContext(AuthContext)
    const [theme, setTheme] = useState('light')
    // console.log(user);


    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleTheme = e => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }


    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
        // console.log(localTheme);
    }, [theme])

    const navLinks = <>
        <NavLink data-tooltip-id="my-tooltip" data-tooltip-content="This is Home Page" to="/" className={({ isActive }) => isActive ? 'border p-2 border-[#9b5273] text-[#9b5273] font-black' : 'font-black p-2'}>Home</NavLink>
        <NavLink data-tooltip-id="my-tooltip" data-tooltip-content="This is All Art&Craft items page" to="/allArt&craftItems" className={({ isActive }) => isActive ? 'border p-2 border-[#9b5273] text-[#9b5273] font-black' : 'font-black p-2'}>All Art & craft Items</NavLink>
        {user && <>
            <NavLink to="/addCraftItem" data-tooltip-id="my-tooltip" data-tooltip-content="This is Add Craft Item Page" className={({ isActive }) => isActive ? 'border p-2 border-[#9b5273] text-[#9b5273] font-black' : 'font-black p-2'}>Add Craft Item</NavLink>
            <NavLink to="/artCraftList" data-tooltip-id="my-tooltip" data-tooltip-content="This is My Art&Craft List Page" className={({ isActive }) => isActive ? 'border p-2 border-[#9b5273] text-[#9b5273] font-black' : 'font-black p-2'}>My Art&Craft List</NavLink>
        </>}
    </>
    return (
        <div className="navbar pt-5 bg-[#F1EBEE] text-black  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] cursor-pointer p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link data-tooltip-id="my-tooltip" data-tooltip-content="MonaZila is our website Name" to="/" className="btn md:text-3xl flex items-center btn-ghost text-xl"><img className="md:w-10 w-6" src={logo} alt="Monazila" />MonaZila</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal cursor-pointer px-1 gap-3">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label data-tooltip-id="my-tooltip" data-tooltip-content="If you want to Theme change. Please Click" className="swap swap-rotate pr-2">
                    {/* this hidden checkbox controls the state */}
                    <input onChange={handleTheme} type="checkbox" className="theme-controller" value="synthwave" />

                    {/* sun icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>

                {loading ? <span className="loading loading-infinity loading-sm"></span> : user ?
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img title={user?.displayName} alt="User Profile" src={user?.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#F1EBEE] rounded-box w-52">
                            <li className="hover:bg-white"><a>{user?.displayName}</a></li>
                            <li onClick={handleLogout} className="hover:bg-white" ><Link to="/login">Logout</Link></li>
                        </ul>
                    </div> :
                    <><Link to="/register" data-tooltip-id="my-tooltip" data-tooltip-content="Register Now" className="btn font-bold hidden md:block pt-4 text-white bg-[#9b5273]">Register</Link>
                        <Link to="/login" data-tooltip-id="my-tooltip" data-tooltip-content="Login Now" className="btn font-bold text-white bg-[#9b5273]">Login</Link></>}
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Navber;