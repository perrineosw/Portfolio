import { useState } from 'react';
import React from "react";
import {NavLink} from "react-router-dom";
import {faList} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="flex py-5 justify-between items-center px-10 bg-gray-300 fixed top-0 left-0 w-full bg-transparent lg:static z-[1111111111]">
            <div className="flex">
                <div className="flex justify-between w-full items-center space-x-4">
                    <div className="flex items-center">
                        <button id="menu-toggle" type="button" className="menu-toggle-btn" onClick={() => setOpen(!open)}>
                            <FontAwesomeIcon icon={faList} />
                        </button>
                        <nav id="navbar" className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${open ? 'flex' : 'hidden'}`}>
                            <ul className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white">
                                <li>
                                    <NavLink to="/home" className={(window.location.pathname === '/home') ? "mobile-menu-items-active" : "mobile-menu-items"} onClick={window.location.reload}>
                                        Accueil
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={(window.location.pathname === '/about') ? "mobile-menu-items-active" : "mobile-menu-items"} onClick={window.location.reload}>
                                        A propos
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pathway" className={(window.location.pathname === '/pathway') ? "mobile-menu-items-active" : "mobile-menu-items"} onClick={window.location.reload}>
                                        Mes parcours
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/projets" className={(window.location.pathname === '/projets') ? "mobile-menu-items-active" : "mobile-menu-items"} onClick={window.location.reload}>
                                        Mes projets
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blogs" className={(window.location.pathname === '/blogs') ? "mobile-menu-items-active" : "mobile-menu-items"} onClick={window.location.reload}>
                                        Blogs
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
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
                </div>
            </div>
        </header>
    );
};

export default NavBar;