import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFile, faLanguage, faUsers, faExternalLink} from '@fortawesome/free-solid-svg-icons';


type ModaleProps = {
    isOpen: boolean;
    onClose: () => void;
    image: string;
    title: string;
    category: string;
    description: string;
    languages: string;
    website: string;
    customer: string;
    children?: React.ReactNode;
};

const ModaleProjets: React.FC<ModaleProps> = ({ isOpen, onClose, image,title, category, description,
                                           languages, website, customer, children }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedList, setSelectedList] = useState("");

    const handleDateChange = (date: Date | null) => {
        if (date) {
            setSelectedDate(date);
            setSelectedList(""); // reset the value of selectedList
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                    onClick={onClose}
                >
                    <div className={`absolute inset-0 bg-gray-300 opacity-80`}></div>
                </div>
                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                >

                </span>
                <div
                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl
                                transform transition-all my-8 align-middle max-w-[80vw]"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="bg-white p-10 sm:p-6 sm:pb-4">
                        <div className="overflow-y-scroll scroll-hide-1700 p-5 max-h-[80vh] scrollbarLight">
                            <h2 className="text-[#ef4060] text-4xl text-center font-bold">
                                {title}
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                                <div className="space-y-2">
                                    <p className="flex items-center text-[15px] sm:text-lg">
                                        <FontAwesomeIcon icon={faFile} />&nbsp;
                                        Projet :&nbsp;
                                        <span className="font-medium">{category}</span>
                                    </p>
                                    <p className="flex items-center text-[15px] sm:text-lg">
                                        <FontAwesomeIcon icon={faLanguage} />&nbsp;
                                        Langages :&nbsp;
                                        <span className="font-medium">{languages}</span>
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <p className="flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg">
                                        <FontAwesomeIcon icon={faUsers} />&nbsp;
                                        Client :&nbsp; <span className="font-medium">{customer}</span>
                                    </p>
                                    <p className="flex items-center text-[15px] sm:text-lg">
                                        <FontAwesomeIcon icon={faExternalLink} />&nbsp;
                                        Site web :&nbsp;
                                        <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                          <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <p className="text-2line font-normal text-[15px] sm:text-sm">
                                {description}
                            </p>
                            <div className="pr-3">
                                <img className="w-[50%] mx-auto mt-12 rounded-lg h-auto border-2 border-[#B5B5B5] transition duration-200 ease-in-out transform hover:scale-150"
                                     src={image} alt={`Image du projet : ${title}`} />
                            </div>

                        </div>
                        <button onClick={onClose} className="close bg-close-light">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModaleProjets;