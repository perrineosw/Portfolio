import { useState } from 'react';
import React from "react";
import {NavLink} from "react-router-dom";
import {faList, faHouse, faUser, faListDots, faSuitcase, faFile} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavBar = ({toggleMode, isDarkMode}: {toggleMode: () => void, isDarkMode: boolean}) => {
    const [open, setOpen] = useState(false);

    const [, setActiveLink] = useState(window.location.hash);

    const handleLinkClick = (hash: React.SetStateAction<string>) => {
        setActiveLink(hash);
    };

    return (
        <header className="flex py-5 justify-between items-center px-10 bg-gray-300 fixed top-0 left-0 bg-transparent lg:static z-[1111111111]">
            <div className="flex">
                <div className="flex justify-between w-full items-center space-x-4">
                    <div className="flex items-center">
                        <button id="menu-toggle" type="button" className="menu-toggle-btn" onClick={() => setOpen(!open)}>
                            <FontAwesomeIcon icon={faList} />
                        </button>
                        <nav id="navbar" className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${open ? 'flex' : 'hidden'}`}>
                            <ul className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white">
                                <li>
                                    <NavLink to="/home" className={(window.location.hash === '#/home' || window.location.hash === '') ? "mobile-menu-items-active" : "mobile-menu-items"} onClick={() => handleLinkClick('#/home')}>
                                        <FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;&nbsp;&nbsp;Accueil
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink to="/about" className={(window.location.hash === '#/about') ? "mobile-menu-items-active" : "mobile-menu-items"} onClick={() => handleLinkClick('#/about')}>
                                        <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;&nbsp;A propos
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pathway" className={(window.location.hash === '#/pathway') ? "mobile-menu-items-active" : "mobile-menu-items"} onClick={() => handleLinkClick('#/pathway')}>
                                        <FontAwesomeIcon icon={faListDots} />&nbsp;&nbsp;&nbsp;&nbsp;Mes parcours
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/projets" className={(window.location.hash === '#/projets') ? "mobile-menu-items-active" : "mobile-menu-items"} onClick={() => handleLinkClick('#/projets')}>
                                        <FontAwesomeIcon icon={faSuitcase} />&nbsp;&nbsp;&nbsp;&nbsp;Mes projets
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blogs" className={(window.location.hash === '#/blogs') ? "mobile-menu-items-active" : "mobile-menu-items"} onClick={() => handleLinkClick('#/blogs')}>
                                        <FontAwesomeIcon icon={faFile} />&nbsp;&nbsp;&nbsp;&nbsp;Blogs
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <nav className="hidden lg:block">
                        <ul className="flex">
                            <li><button onClick={toggleMode}>Toggle Mode</button></li>
                            <li>
                                <NavLink to="/home" className={(window.location.hash === '#/home' || window.location.hash === '') ? "menu-item-two-active" : "menu-item-two"} onClick={() => handleLinkClick('#/home')}>
                                    <FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;&nbsp;&nbsp;Accueil
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={(window.location.hash === '#/about') ? "menu-item-two-active" : "menu-item-two"} onClick={() => handleLinkClick('#/about')}>
                                    <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;&nbsp;&nbsp;A propos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/pathway" className={(window.location.hash === '#/pathway') ? "menu-item-two-active" : "menu-item-two"} onClick={() => handleLinkClick('#/pathway')}>
                                    <FontAwesomeIcon icon={faListDots} />&nbsp;&nbsp;&nbsp;&nbsp;Mes parcours
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projets" className={(window.location.hash === '#/projets') ? "menu-item-two-active" : "menu-item-two"} onClick={() => handleLinkClick('#/projets')}>
                                    <FontAwesomeIcon icon={faSuitcase} />&nbsp;&nbsp;&nbsp;&nbsp;Mes projets
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/blogs" className={(window.location.hash === '#/blogs') ? "menu-item-two-active" : "menu-item-two"} onClick={() => handleLinkClick('#/blogs')}>
                                    <FontAwesomeIcon icon={faFile} />&nbsp;&nbsp;&nbsp;&nbsp;Blogs
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default NavBar;