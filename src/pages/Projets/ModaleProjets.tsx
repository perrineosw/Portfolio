import React, {useState} from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFile, faLanguage, faUsers, faExternalLink} from '@fortawesome/free-solid-svg-icons';


type ModaleProps = {
    isOpen: boolean;
    onClose: () => void;
    isDarkMode: boolean;
    image: string;
    title: string;
    category: string;
    description: string;
    languages: string;
    website: string;
    customer: string;
    children?: React.ReactNode;
};

const ModaleProjets: React.FC<ModaleProps> = ({ isOpen, onClose, isDarkMode, image,title, category, description,
                                           languages, website, customer }) => {

    if (!isOpen) return null;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const imageClassName = classNames(
        "mx-auto rounded-lg h-auto transition duration-200 ease-in-out",
        /*{
            "lg:w-[50%]": !isClicked,
            "lg:w-full": isClicked
        }*/
    );

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={onClose} onTouchStart={onClose}>
                    <div className={`absolute inset-0 bg-gray-300 opacity-80`}></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
                <div className={`inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform 
                    transition-all py-8 align-middle lg:max-w-[80vw] ${isDarkMode ? 'perso-bg-dark' : 'bg-white'}`}
                    role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className={`lg:p-10 sm:p-2 ${isDarkMode ? 'perso-bg-dark' : 'bg-white'}`}>
                        <div className="overflow-y-scroll scroll-hide-1700 p-5 max-h-[80vh]">
                            <h2 className={`text-4xl text-center font-bold ${isDarkMode ? 'text-red-dark' : 'text-red'}`}>
                                {title}
                            </h2>
                            <div className="grid grid-cols-1 sm:flex-col lg:grid-cols-2 py-6">
                                <div className="space-y-2">
                                    <p className="flex items-center">
                                        <FontAwesomeIcon icon={faFile} />&nbsp;
                                        Projet :&nbsp;
                                        <span className="font-medium">{category}</span>
                                    </p>
                                    <p className="flex items-center">
                                        <FontAwesomeIcon icon={faLanguage} />&nbsp;
                                        Technologies :&nbsp;
                                        <span className="font-medium">{languages}</span>
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <p className="flex items-center pt-2 lg:pt-0">
                                        <FontAwesomeIcon icon={faUsers} />&nbsp;
                                        Client :&nbsp; <span className="font-medium">{customer}</span>
                                    </p>
                                    {website !== '' && (
                                        <p className="flex items-center">
                                            <FontAwesomeIcon icon={faExternalLink} />&nbsp;
                                            Site web :&nbsp;
                                            <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#C72475FF]">
                                                <a href={website} target="_blank" rel="noopener noreferrer"><u>{website}</u></a>
                                            </span>
                                        </p>
                                    )}
                                </div>
                            </div>
                            <p className="text-2line font-normal">
                                {description}
                            </p>
                            <div className="pr-3 pt-12">
                                <p className="hidden sm:flex items-center pb-5">
                                    <i>Cliquer sur l'image pour l'agrandir !</i>
                                </p>
                                <img id="my-image" className={imageClassName} onClick={handleClick} src={image} alt={`Image du projet : ${title}`} />
                            </div>
                        </div>
                        <button onClick={onClose} onTouchStart={onClose} className="close bg-close-light">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModaleProjets;