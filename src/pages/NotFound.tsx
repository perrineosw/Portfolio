import React, {useState} from "react";
import errorpage from "../media/404-cat.png";
import {NavLink} from "react-router-dom";

const NotFound = (): JSX.Element => {
    const [, setActiveLink] = useState(window.location.hash);

    const handleLinkClick = (hash: React.SetStateAction<string>) => {
        setActiveLink(hash);
    };
    return (
        <section className="container bg-white rounded-2xl px-4 sm:px-5 md:px-10 lg:px-20">
            <div data-aos="fade" className="aos-init aos-animate">
                <div className="container sm:px-5 md:px-10 lg:px-20">
                    <div className="lg:pt-12 lg:pb-12 pt-24 px-4">
                        <div className="grid lg:px-10 px-2 py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 justify-center">
                            <div className="grid-col m-auto lg:pl-10">
                                <div className="text-5xl font-dark font-bold">404</div>
                                <p className="text-2xl md:text-3xl font-light leading-normal">
                                    Désolé, nous n&apos;avons pas pu trouver cette page.
                                </p>
                                <p className="mb-8">
                                    Oups ! On dirait que vous vous êtes égaré sur mon site.
                                    Mais pas de soucis, vous pouvez retourner sur la page d&apos;accueil en cliquant sur
                                    le bouton :
                                </p>
                                <NavLink to="/home" onClick={() => handleLinkClick('#/home')}>
                                    <button className="menu-item-two-active">Retour vers l&apos;accueil</button>
                                </NavLink>
                            </div>
                            <div className="grid-col max-w-lg">
                                <img src={errorpage} alt="Chat qui dort" className="mx-auto"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default NotFound