import React from "react"
import { Link } from "react-router-dom"
import logo from "/images/logo.png"

const Navbar = () => {
    return (
        <div className="w-[81%] mx-auto mt-10">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    {/* <a className="btn btn-ghost text-xl">Travel Guru</a> */}
                    <img className="w-[120px] h-14" src={logo} alt="" />
                </div>
                <div>
                    <input className="border max-w-[370px rounded-md py-3 pl-12 pr-28npm" type="text" placeholder="Search your Destination..." />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link>News</Link>
                        </li>
                        <li>
                            <Link to={"/start-booking"}>Destination</Link>
                        </li>
                        <li>
                            <Link>Blog</Link>
                        </li>
                        <li>
                            <Link>Contact</Link>
                        </li>
                        <li>
                            <Link to={"/login"} className="bg-[#F9A51A] text-black">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
