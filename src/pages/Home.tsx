import React from "react";
import profile from "../images/profile.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Home = (): JSX.Element => {
    return (
        <div className="z-50">
            {/* container start */}
            <div className="container">
                {/* Home page contant start */}
                <div
                    className="flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center aos-init aos-animate"
                    data-aos="fade">
                    {/* personal image */}
                    <img className="mt-10 rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]" src={profile} alt="about avatar"/>
                    <h1 className="mt-6 mb-1 text-6xl font-semibold">Perrine Oswald</h1>
                    <p className="my-4 text-center text-2xl">Développeuse web<br/>Experte en Accessibilité et Qualité web</p>
                    {/* social link and social  buttons */}
                    <div className="flex space-x-3">
                        {/* facebook link */}
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <span className="text-6xl socialbtn text-[#1C9CEA]">
                                <FontAwesomeIcon icon={faFacebook} />
                            </span>
                        </a>
                        {/* linkedin icon and link */}
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <span className="text-6xl socialbtn text-[#0072b1]">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                        </a>
                    </div>
                    {/* dowanload button */}
                    <a href="" download>
                        <button className="dowanload-btn">
                            <span className="mr-2 text-base">
                                <FontAwesomeIcon icon={faDownload} />
                            </span>
                            Télécharger mon CV
                        </button>
                    </a>
                </div>
                {/* Home page contant End */}
            </div>
        </div>
    )
}

export default Home