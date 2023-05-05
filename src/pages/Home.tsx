import React from "react";
import profile from "../media/profile.jpeg";
import cv from "../media/cv_perrine_oswald.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import opquast from "../media/badge_confirme.svg";

const Home = ():
    JSX.Element => {
    return (
        <div className="z-50 pb-10 lg:pt-0 pt-10">
            <div className="container containerHome">
                <div className="flex flex-col items-center justify-center mt-20 h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 m-auto">
                        <div className="w-full">
                            <img className="rounded-full lg:px-10 lg:py-10 py-0 px-20" src={profile} alt="about avatar"/>
                        </div>
                        <div className="w-full my-auto pb-10">
                            <h1 className="mb-1 text-7xl text-center font-semibold">Perrine Oswald</h1>
                            <p className="py-8 text-center text-4xl">Développeuse web fullstack</p>
                            <p className="py-8 text-center text-4xl">Experte en Accessibilité et Qualité web</p>
                            <div className="flex justify-center items-center pt-5">
                                <a href="https://www.linkedin.com/in/perrine-oswald/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-6xl socialbtn linkedin">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </span>
                                </a>
                                <a href="https://directory.opquast.com/fr/certificat/PRBTQG/" className="ml-20">
                                    <u>Ma certification : <img src={opquast} alt="Logo OPQUAST" className="w-20 mx-auto"/></u>
                                </a>
                            </div>
                            <button className="dowanload-btn mt-12">
                                <a href={cv} download="CV_Perrine_Oswald.pdf">
                                    <span className="text-base">
                                        <FontAwesomeIcon icon={faDownload} />
                                    </span>
                                    <span className="ml-2">
                                        Télécharger mon CV
                                    </span>
                                </a>
                            </button>
                            <span className="flex justify-center text-sm mt-2">
                                .pdf - 905,54 Ko
                            </span>
                        </div>
                    </div>
                </div>
                {/* Home page contant End */}
            </div>
        </div>

    )
}

export default Home