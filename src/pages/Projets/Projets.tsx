import React, {useState} from "react";
import ModaleProjets from "./ModaleProjets"
import antigaspi from "../../media/projets/antigaspi.png";
import petiteannonce from "../../media/projets/petite-annonce.png";
import datactive from "../../media/projets/datactive.png";
import data from "../../media/projets/data.jpeg";
import inway from "../../media/projets/inway.png";

const projets = [
    {
        color: 'perso-bg-red',
        image: inway,
        title: 'Atlas InWay',
        category: 'Site web',
        description: "L'Atlas InWay est une base de données universelle à destination des utilisateurs d'instrumentation " +
            "chirurgicale regroupant l'ensemble des références existantes sur le marché. Au sein d'Avenir Data, nous " +
            "devions en équipe refaire leur site web avec des fonctionnalités supplémentaires. J'étais en charge du front " +
            "(mise en place du style, des composants, du nettoyage et du respect des règles), j'ai également participé à " +
            "bons nombres de fonctionnalités (fullstack) notamment par des appels API et création d'endpoints pour l'API.",
        languages: 'Bootstrap, Django, Ajax',
        website: '',
        customer: 'InWay'
    },
    {
        color: 'perso-bg-yellow',
        image: petiteannonce,
        title: 'Petite-annonce',
        category: 'Site web',
        description: 'Site web réalisé en équipe de 6 étudiants. Notre objectif était de créer un site web qui permet aux ' +
            'utilisateurs (particuliers) de pouvoir déposer des annonces immobilières (locations, ventes et locations AirBnB) ' +
            'à destinations d\'autres utilisateurs (particuliers).',
        languages: 'Material UI, React JS, Node.js',
        website: '',
        customer: 'Formation'
    },
    {
        color: 'perso-bg-orange',
        image: antigaspi,
        title: 'AntiGaspi',
        category: 'Site web',
        description: 'Site web réalisé en binôme avec un autre étudiant de ma promotion. Notre objectif via la création de se site était de créer un site fullstack et notre thématique est : accélérer le troc et lutter ensemble et gratuitement contre le gaspillage alimentaire !',
        languages: 'Bootstrap, Laravel',
        website: '',
        customer: 'Formation'
    },
    {
        color: 'perso-bg-green',
        image: data,
        title: 'Socle de données & export',
        category: 'Data',
        description: "Pour la société d'Avenir Data, l'une des missions principales était la constitution d'un socle de " +
            "données complet, c'est à dire regrouper différentes sources comme INSEE, Google ou encore Linkedin. J'ai " +
            "donc participé un temps à ce projet, via des traitements SQL poussé, des procédures et des scripts Python " +
            "dans le but d'automatiser les relations et nettoyage des données récupérées mais également la préparation " +
            "d'export pour des clients.",
        languages: 'Python, SQL',
        website: '',
        customer: 'Avenir Data'
    },
    {
        color: 'perso-bg-purple',
        image: datactive,
        title: 'Datactive',
        category: 'Site web',
        description: 'Datactive est une plateforme d’automatisation commerciale et d’engagement client pour développer ' +
            'la visibilité des sociétés sur le web. Dans ce projet, j\'ai participé au développement web (fullstack) des ' +
            'interfaces notamment via des reportings sur des statistiques provenant de réseaux sociaux connectés à ' +
            'l\'application. Egalement des reportings et analyses de fiches Google, le positionnement Google Local Pack ' +
            'et SEO dans le but de permettre aux clients de la société d\'augmenter leur visibilité sur internet et ainsi ' +
            'augmenter leur audience web. J\'ai également eu a créer tout le process de paramétrage directement disponible ' +
            'sur l\'application pour permettre aux clients d\'avoir une autonomie et un contrôle sur leurs comptes, ' +
            'établissements et droits associés.',
        languages: 'Bootstrap, Django, Python',
        website: 'https://app.datactive.io/accounts/login/?next=/',
        customer: 'Avenir Data'
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
            <section className="container lg:rounded-2xl bg-white px-4 sm:px-5 md:px-10 lg:px-20">
                <div className="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
                    <div className="lg:pt-12 lg:pb-12 pt-24">
                        <h2 className="border-b-2 border-b-pink-600 text-[35px] font-medium pb-5 mb-5">
                            Mes projets
                        </h2>
                    </div>
                    {/* End py-12 */}

                    <div id="isotop-gallery-wrapper" className="mymix portfolio_list-two three-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
                        {/* portfolio items start */}
                        {projets.map((projet, index) => (
                            <div key={index} className={`py-4 ${projet.color} pl-5 pr-3 space-y-2 mb-6 rounded-lg`}>
                                <button onClick={() => toggleModal(projet)} className="w-full">
                                    <div className="overflow-hidden rounded-lg">
                                        <img className="object-cover w-full h-40 rounded-lg cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                                            src={projet.image} alt={`Image du projet : ${projet.title}`}/>
                                    </div>
                                    <span className="pt-5 text-[14px] font-normal text-gray-lite block">
                                        {projet.category}
                                    </span>
                                    <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252]">
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