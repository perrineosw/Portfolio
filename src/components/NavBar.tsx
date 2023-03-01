import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = (): JSX.Element => {
    return (
        <header className="flex py-5 justify-between items-center px-10 bg-gray-300 fixed top-0 left-0 w-full bg-transparent lg:static z-[1111111111]">
            <div className="flex px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent dark:bg-black">
                <div className="flex justify-between w-full items-center space-x-4">
                    <div className="flex items-center">
                        {/* light and dark mode button */}
                        <button id="theme-toggle-mobile" type="button"
                                className="dark-light-btn lg:hidden w-[44px] h-[44px] ml-2">
                            <i id="theme-toggle-dark-icon-mobile" className="fa-solid text-xl fa-moon"></i>
                            <i id="theme-toggle-light-icon-mobile" className="fa-solid fa-sun text-xl hidden"></i>
                        </button>
                        {/* mobile toggle button */}
                        <button id="menu-toggle" type="button" className="menu-toggle-btn">
                            <i id="menu-toggle-open-icon" className="fa-solid fa-bars text-xl "></i>
                            <i id="menu-toggle-close-icon" className="fa-solid fa-xmark text-xl hidden  "></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* header items two for large screens */}
            <nav className="hidden lg:block">
                <ul className="flex">
                    <li>
                        <NavLink to="/home" className={(window.location.pathname === '/home') ? "menu-item-two-active" : "menu-item-two"} onClick={window.location.reload}>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={(window.location.pathname === '/about') ? "menu-item-two-active" : "menu-item-two"} onClick={window.location.reload}>
                            A propos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pathway" className={(window.location.pathname === '/pathway') ? "menu-item-two-active" : "menu-item-two"} onClick={window.location.reload}>
                            Mes parcours
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projets" className={(window.location.pathname === '/projets') ? "menu-item-two-active" : "menu-item-two"} onClick={window.location.reload}>
                            Mes projets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" className={(window.location.pathname === '/blogs') ? "menu-item-two-active" : "menu-item-two"} onClick={window.location.reload}>
                            Blogs
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;
