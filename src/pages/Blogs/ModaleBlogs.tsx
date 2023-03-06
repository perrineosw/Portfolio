import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExternalLink} from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames";


type ModaleProps = {
    isOpen: boolean;
    onClose: () => void;
    image: string;
    title: string;
    description: {
        title: string[];
        content: string[];
    };
    website: string;
    children?: React.ReactNode;
};

const ModaleProjets: React.FC<ModaleProps> = ({ isOpen, onClose, image,title,
                                                  description, website}) => {
    if (!isOpen) return null;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const imageClassName = classNames(
        "mx-auto mt-5 rounded-lg h-auto border-2 border-[#B5B5B5] transition duration-200 ease-in-out",
        {
            "lg:w-[50%]": !isClicked,
            "lg:w-full": isClicked
        }
    );

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
                                transform transition-all my-8 align-middle lg:max-w-[80vw]"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="bg-white lg:p-10 sm:p-2">
                        <div className="overflow-y-scroll scroll-hide-1700 p-5 max-h-[80vh]">
                            <h2 className="text-[#ef4060] text-4xl text-center font-bold">
                                {title}
                            </h2>
                            {website !== '' && (
                                <div className="space-y-2 my-5">
                                    <p className="flex items-center text-[15px] sm:text-lg">
                                        <FontAwesomeIcon icon={faExternalLink} />&nbsp;
                                        Site web :&nbsp;
                                        <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]">
                                          <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
                                        </span>
                                    </p>
                                </div>
                            )}

                            <p className="mt-5 text-2line font-normal text-[15px] sm:text-sm">
                                {description.title.map((title, index) => (
                                    <div key={index}>
                                        <p className="flex items-center font-bold text-[15px] sm:text-lg">
                                            {title}
                                        </p>
                                        <p className="my-5">
                                            {description.content[index].split('\n').map((line, index) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </p>
                                    </div>
                                ))}
                            </p>
                            <div className="pr-3 mt-12">
                                <p className="flex items-center text-[15px] sm:text-lg text-[#ef4080]">
                                    <i>Cliquez sur l'image pour l'agrandir !</i>
                                </p>
                                <img id="my-image" className={imageClassName}
                                     onClick={handleClick}
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