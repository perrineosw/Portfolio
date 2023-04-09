import React from "react";
import ynov from '../media/pathway/ynov.jpeg';
import uppa from '../media/pathway/uppa.jpeg';
import harountazieff from '../media/pathway/harountazieff.jpeg';
import avenirdata from '../media/pathway/avenirdata.jpeg';
import intermarche from '../media/pathway/intermarche.jpeg';
import stpaullesdax from '../media/pathway/stPaulLesDax.jpeg';
import feria from '../media/pathway/feria.jpeg';
import harmonie from '../media/pathway/harmonie.jpg';
import Footer from "../components/Footer";

const etudes = [
    {
        image: ynov,
        title: 'Master\n',
        description: 'Expert en développement web & Expert Accessibilité et Qualité web à YNOV',
        dates: '2022 - 2024',
        city: '33063 Bordeaux',
        color: 'perso-bg-red',
        link: 'https://www.ynov.com/formation/ynov-masteres/expert-developpement-web/'
    },
    {
        image: uppa,
        title: 'Licence informatique\n',
        description: 'Numérique pour les Environnements Connectés à l\'U.P.P.A.',
        dates: '2019 - 2022',
        city: '64600 Anglet',
        color: 'perso-bg-purple',
        link: 'https://formation.univ-pau.fr/fr/catalogue/sciences-technologies-sante-STS/licence-12/licence-informatique-45_1/l1-l2-l3-informatique-parcours-numerique-pour-les-environnements-connectes-nec-JDODLMEJ.html'
    },
    {
        image: harountazieff,
        title: 'Bac S\n',
        description: 'Sciences de l\'Ingénieur au Lycée Haroun Tazieff',
        dates: '2019',
        city: '40990 Saint-Paul-lès-Dax',
        color: 'perso-bg-red',
        link: 'https://www.lyceeharountazieff.com/'
    }
];

const works = [
    {
        image: avenirdata,
        image_work: 'Avenir Data',
        title: 'Alternance informatique et data\n',
        dates: '2022 - 2024',
        description: 'Développement web en Django\nExploitation, compréhension, modélisation de la donnée B2B',
        city: '40100 Dax',
        color: 'perso-bg-green',
        link: 'https://www.avenirdata.com/'
    },
    {
        image: avenirdata,
        image_work: 'Avenir Data',
        title: 'Stage informatique et data\n',
        dates: 'Avril - Août 2022',
        description: 'Bot de parsing de flux RSS\nExploitation, compréhension, modélisation de la donnée B2B',
        city: '40100 Dax',
        color: 'perso-bg-blue',
        link: 'https://www.avenirdata.com/'
    },
    {
        image: intermarche,
        image_work: 'Intermarché',
        title: 'Hôtesse de caisse\n',
        dates: 'Juin / Juillet / Août 2021',
        description: "Poste d'hôtesse de caisse, agent d'entretien et mise en rayon\n",
        city: '40075 Castets',
        color: 'perso-bg-green',
        link: 'https://www.intermarche.com/magasins/05798/castets-40260/infos-pratiques'
    },
    {
        image: stpaullesdax,
        image_work: 'Mairie de Saint-Paul-lès-Dax',
        title: 'Stage informatique\n',
        dates: '2020',
        description: "Gestion d'un parc d'appareils mobiles (tablettes) via le MDM Jamf Pro (pour appareils Apple)",
        city: '40990 Saint-Paul-lès-Dax',
        color: 'perso-bg-blue',
        link: 'https://www.st-paul-les-dax.fr/'
    },
    {
        image: feria,
        image_work: 'Feria de Dax',
        title: 'Vendeuse\n',
        dates: 'Août 2019',
        description: "Vente de tickets pour les navettes bus / parkings relais pour les férias de DAX (journée & nuit)",
        city: '40990 Saint-Paul-lès-Dax',
        color: 'perso-bg-green',
        link: 'https://www.trans-landes.fr/'
    },
    {
        image: feria,
        image_work: 'Feria de Dax',
        title: 'Vendeuse\n',
        dates: 'Août 2017',
        description: "Vente de tickets pour les navettes bus / parkings relais pour les férias de DAX (journée)",
        city: '40990 Saint-Vincent-de-Paul',
        color: 'perso-bg-blue',
        link: 'https://www.trans-landes.fr/'
    },
    {
        image: harmonie,
        image_work: 'Harmonie de Christus',
        title: "Bénévole dans une association musicale\n",
        dates: 'Depuis 2015',
        description: "Aide à l'organisation et aux animations lors des concerts et déplacements",
        city: '40990 Saint-Vincent-de-Paul',
        color: 'perso-bg-green',
        link: 'https://www.harmonie-de-christus.com/'
    }
];

const Pathway = ({styles, isDarkMode}: {styles: object, isDarkMode: boolean}): JSX.Element => {
    return (
        <div>
            <div className="container lg:rounded-2xl px-4 sm:px-5 md:px-10 lg:px-20 lg:pt-0 pt-20" style={styles}>
                <h1 className="border-b-2 border-b-pink-600 text-[35px] font-medium pb-5 lg:pt-5">Parcours éducatif</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6 pt-5">
                    {etudes.map((etude, index) => (
                        <div key={`${index}`}>
                            <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-red'}`}>{etude.dates}</span>
                            <div className={`py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg 
                                ${
                                    etude.color === 'perso-bg-red' ? (isDarkMode ? 'perso-bg-red-dark' : 'perso-bg-red') : 
                                    (etude.color === 'perso-bg-purple' ? (isDarkMode ? 'perso-bg-purple-dark' : 'perso-bg-purple') : '')
                                }`}>
                                <h3 className="text-xl font-bold">
                                    {etude.title.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </h3>
                                {etude.description.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                                <p className="text-tiny">{etude.city}</p>
                                <div className="overflow-hidden rounded-lg">
                                    <img className="object-cover w-full h-40 rounded-lg transition duration-200 ease-in-out transform hover:scale-110"
                                         src={etude.image} alt={`Image de l'école : ${etude.description}`}/>
                                </div>
                                <a className="text-xs" href={etude.link}><u>A propos de l'école</u></a>
                            </div>
                        </div>
                    ))}
                </div>
                <h1 className="border-b-2 border-b-pink-600 text-[35px] font-medium pb-5 lg:pt-5">Parcours professionnel</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6 pt-5">
                    {works.map((work, index) => (
                        <div key={`${index}`}>
                            <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-red'}`}>{work.dates}</span>
                            <div className={`py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg 
                                ${
                                    work.color === 'perso-bg-green' ? (isDarkMode ? 'perso-bg-green-dark' : 'perso-bg-green') :
                                    (work.color === 'perso-bg-blue' ? (isDarkMode ? 'perso-bg-blue-dark' : 'perso-bg-blue') : '')
                                }`}>
                                <h3 className="text-xl font-bold">
                                    {work.title.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </h3>
                                {work.description.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                                <p className="text-tiny">{work.city}</p>
                                <div className="overflow-hidden rounded-lg">
                                    <img className="object-cover w-full h-40 rounded-lg transition duration-200 ease-in-out transform hover:scale-110"
                                         src={work.image} alt={`Image de : ${work.image_work}`}/>
                                </div>
                                <a className="text-xs" href={work.link}><u>A propos de la société</u></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Pathway