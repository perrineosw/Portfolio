import React from "react";
import profile from "../media/profile.jpeg";
import cv from "../media/cv_perrine_oswald.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Home = (): JSX.Element => {
    return (
        <div className="z-50 pb-10">
            {/* container start */}
            <div className="container">
                {/* Home page contant start */}
                <div className="flex flex-col items-center justify-center mt-20 h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 m-auto">
                        {/* personal image */}
                        <div className="w-full">
                            <img className="mt-10 rounded-full lg:w-[300px] lg:h-[300px] w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px] mx-auto" src={profile} alt="about avatar"/>
                        </div>
                        <div className="w-full">
                            <h1 className="mt-6 mb-1 text-7xl text-center font-semibold">Perrine Oswald</h1>
                            <p className="my-8 text-center text-4xl">Développeuse web<br/>Experte en Accessibilité et Qualité web</p>
                            {/* social link and social  buttons */}
                            <div className="flex justify-center items-center space-x-3 pt-5">
                                {/* facebook link */}
                                <a href="https://www.facebook.com/perrine.osw" target="_blank" rel="noopener noreferrer">
                                    <span className="text-6xl socialbtn text-[#1C9CEA]">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </span>
                                </a>
                                {/* linkedin icon and link */}
                                <a href="https://www.linkedin.com/in/perrine-oswald/" target="_blank" rel="noopener noreferrer">
                                    <span className="text-6xl socialbtn text-[#0072b1]">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </span>
                                </a>
                            </div>
                            {/* dowanload button */}
                            <a href={cv} download="CV_Perrine_Oswald.pdf">
                                <button className="dowanload-btn">
                                    <span className="mr-2 text-base">
                                        <FontAwesomeIcon icon={faDownload} />
                                    </span>
                                    Télécharger mon CV
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Home page contant End */}
            </div>
        </div>

    )
}

export default Home