import React from "react";
import ynov from '../images/pathway/ynov.jpeg';
import uppa from '../images/pathway/uppa.jpeg';
import harountazieff from '../images/pathway/harountazieff.jpeg';
import avenirdata from '../images/pathway/avenirdata.jpeg';
import intermarche from '../images/pathway/intermarche.jpeg';
import stpaullesdax from '../images/pathway/stPaulLesDax.jpeg';
import feria from '../images/pathway/feria.jpeg';
import harmonie from '../images/pathway/harmonie.jpg';

const etudes = [
    {
        image: ynov,
        title: 'Master',
        description: 'Expert en développement web & Expert Accessibilité et Qualité web à YNOV',
        dates: '2022 - 2024',
        city: '33063 Bordeaux',
        color: 'perso-bg-red',
        link: 'https://www.ynov.com/formation/ynov-masteres/expert-developpement-web/'
    },
    {
        image: uppa,
        title: 'Licence informatique',
        description: 'Numérique pour les Environnements Connectés à l\'U.P.P.A.',
        dates: '2019 - 2022',
        city: '64600 Anglet',
        color: 'perso-bg-purple',
        link: 'https://formation.univ-pau.fr/fr/catalogue/sciences-technologies-sante-STS/licence-12/licence-informatique-45_1/l1-l2-l3-informatique-parcours-numerique-pour-les-environnements-connectes-nec-JDODLMEJ.html'
    },
    {
        image: harountazieff,
        title: 'Bac S',
        description: 'Sciences de l\'Ingénieur au Lycée Haroun Tazieff\n',
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
        title: 'Alternance informatique et data',
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
        title: 'Stage informatique',
        dates: '2020',
        description: "Gestion d'un parc d'appareils mobiles (tablettes) via le MDM Jamf Pro (pour appareils Apple)",
        city: '40990 Saint-Paul-lès-Dax',
        color: 'perso-bg-blue',
        link: 'https://www.st-paul-les-dax.fr/'
    },
    {
        image: feria,
        image_work: 'Feria de Dax',
        title: 'Vendeuse',
        dates: 'Août 2019',
        description: "Vente de tickets pour les navettes bus / parkings relais pour les férias de DAX (journée & nuit)",
        city: '40990 Saint-Paul-lès-Dax',
        color: 'perso-bg-green',
        link: 'https://www.trans-landes.fr/'
    },
    {
        image: feria,
        image_work: 'Feria de Dax',
        title: 'Vendeuse',
        dates: 'Août 2017',
        description: "Vente de tickets pour les navettes bus / parkings relais pour les férias de DAX (journée)",
        city: '40990 Saint-Vincent-de-Paul',
        color: 'perso-bg-blue',
        link: 'https://www.trans-landes.fr/'
    },
    {
        image: harmonie,
        image_work: 'Harmonie de Christus',
        title: "Bénévole dans une association musicale",
        dates: 'Depuis 2015',
        description: "Aide à l'organisation et aux animations lors des concerts et déplacements",
        city: '40990 Saint-Vincent-de-Paul',
        color: 'perso-bg-green',
        link: 'https://www.harmonie-de-christus.com/'
    }
];

const Pathway = (): JSX.Element => {
    return (
        <div>
            <section className="container lg:rounded-2xl bg-white dark:bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20">
                <div data-aos="fade" className="aos-init aos-animate">
                    <div className="container sm:px-5 md:px-10 lg:px-20">
                        <div className="py-12 px-4">
                            <h1 className="border-b-2 border-b-pink-600 text-6xl mb-5 pb-5">Parcours éducatif</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                                {etudes.map((etude, index) => (
                                    <div key={`${index}`}
                                         className={`py-4 dark:bg-transparent ${etude.color} pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2`}>
                                        <span className="text-tiny text-gray-lite">{etude.dates}</span>
                                        <h3 className="text-xl dark:text-white">
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
                                        <p className="text-tiny text-gray-lite">{etude.city}</p>
                                        <div className="overflow-hidden rounded-lg">
                                            <img className="object-cover w-full h-40 rounded-lg transition duration-200 ease-in-out transform hover:scale-110"
                                                 src={etude.image} alt={`Image de l'école : ${etude.description}`}/>
                                        </div>
                                        <a className="text-xs" href={etude.link}><u>A propos de l'école</u></a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="container sm:px-5 md:px-10 lg:px-20">
                        <div className="py-12 px-4">
                            <h1 className="border-b-2 border-b-pink-600 text-6xl mb-5 pb-5">Parcours professionnel</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                                {works.map((work, index) => (
                                    <div key={`${index}`}
                                         className={`py-4 dark:bg-transparent ${work.color} pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2`}>
                                        <span className="text-tiny text-gray-lite">{work.dates}</span>
                                        <h3 className="text-xl dark:text-white">
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
                                        <p className="text-tiny text-gray-lite">{work.city}</p>
                                        <div className="overflow-hidden rounded-lg">
                                            <img className="object-cover w-full h-40 rounded-lg transition duration-200 ease-in-out transform hover:scale-110"
                                                 src={work.image} alt={`Image de : ${work.image_work}`}/>
                                        </div>
                                        <a className="text-xs" href={work.link}><u>A propos de la société</u></a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pathway