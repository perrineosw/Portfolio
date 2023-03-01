import React, {useState} from "react";
import ModaleProjets from "./ModaleProjets"
import antigaspi from "../../images/projets/antigaspi.png";
import petiteannonce from "../../images/projets/petite-annonce.png";

const projets = [
    {
        color: '#fff3fc',
        image: petiteannonce,
        title: 'Petite-annonce',
        category: 'Site web',
        description: 'Site web réalisé en équipe de 6 étudiants. Notre objectif était de créer un site web qui permet aux ' +
            'utilisateurs (particuliers) de pouvoir déposer des annonces immobilières (locations, ventes et locations AirBnB) ' +
            'à destinations d\'autres utilisateurs (particuliers).',
        languages: 'Material UI, React JS, Node.js',
        website: 'non hébergé',
        customer: 'Formation'
    },
    {
        color: '#fff0f0',
        image: antigaspi,
        title: 'AntiGaspi',
        category: 'Site web',
        description: 'Site web réalisé en binôme avec un autre étudiant de ma promotion. Notre objectif via la création de se site était de créer un site fullstack et notre thématique est : accélérer le troc et lutter ensemble et gratuitement contre le gaspillage alimentaire !',
        languages: 'Bootstrap, Laravel',
        website: 'non hébergé',
        customer: 'Formation'
    }
];

const Projets = (): JSX.Element => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProjet, setSelectedProjet] = useState({ image: '', title: '', category: '',
                                                description: '', languages: '', website: '', customer: ''});

    const toggleModal = (projet: { image: string, title: string, category: string, description: string,
        languages: string, website: string, customer: string }) => {
        setSelectedProjet(projet);
        setShowModal(!showModal);
    };

    return (
        <div>
            <section className="container lg:rounded-2xl bg-white dark:bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20">
                <div className="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
                    <div className="py-12">
                        <h2 className="border-b-2 border-b-pink-600 text-[35px] dark:text-white font-medium pb-5 mb-5">
                            Mes projets
                        </h2>
                    </div>
                    {/* End py-12 */}

                    <div id="isotop-gallery-wrapper" className="mymix portfolio_list-two three-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
                        {/* portfolio items start */}
                        {projets.map((projet, index) => (
                            <div key={index} className={`py-4 dark:bg-transparent bg-[${projet.color}] pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2`}>
                                <button onClick={() => toggleModal(projet)} className="w-full">
                                    <div className="overflow-hidden rounded-lg">
                                        <img className="object-cover w-full h-40 rounded-lg cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                                            src={projet.image} alt={`Image du projet : ${projet.title}`}/>
                                    </div>
                                    <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
                                        {projet.category}
                                    </span>
                                    <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                        {projet.title}
                                    </h2>
                                </button>
                            </div>
                        ))}
                        </div>
                    </div>
                    <ModaleProjets isOpen={showModal} onClose={() => setShowModal(false)}
                                   image={selectedProjet.image}
                                   title={selectedProjet.title}
                                   category={selectedProjet.category}
                                   description={selectedProjet.description}
                                   languages={selectedProjet.languages}
                                   website={selectedProjet.website}
                                   customer={selectedProjet.customer}
                    />
                </div>
            </section>
        </div>
    )
}

export default Projets;