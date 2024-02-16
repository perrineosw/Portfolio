import React from "react";
import ynov from '../media/pathway/ynov.jpeg';
import uppa from '../media/pathway/uppa.jpeg';
import harountazieff from '../media/pathway/harountazieff.jpeg';
import okina from '../media/pathway/okina.png';
import avenirdata from '../media/pathway/avenirdata.jpeg';
import intermarche from '../media/pathway/intermarche.jpeg';
import stpaullesdax from '../media/pathway/stPaulLesDax.jpeg';
import feria from '../media/pathway/feria.jpeg';
import harmonie from '../media/pathway/harmonie.jpg';
import myLogo from "../media/logo-big.png";
import Footer from "../components/Footer";
import { Box, Card, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";

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
        link: 'https://formation.univ-pau.fr/fr/catalogue/sciences-technologies-sante-STS/licence-XA/licence-informatique-L3VENPWZ.html'
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
        image: okina,
        image_work: 'Okina',
        title: 'Alternance développement web fullstack\n',
        dates: 'Avril 2023 - Septembre 2024',
        description: 'Développement de site web fullstack en Java (SpringBoot), React JS, Angular JS et Docker',
        city: '40100 Dax',
        color: 'perso-bg-blue',
        link: 'https://www.okina.fr/'
    },
    {
        image: avenirdata,
        image_work: 'Avenir Data',
        title: 'Alternance développement web fullstack et data\n',
        dates: 'Septembre 2022 - Mars 2023',
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
        <Box sx={{ mx: { xs: 2, sm: 5, md: 10 }, p: 2, borderRadius: { lg: '16px' } }} className={isDarkMode ? 'transparent' : 'bg-white'}>
            <Box sx={{ styles }}>
                <Grid item sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', textAlign: { xs: 'center', sm: 'left' }, mb: 4, borderBottom: 2, borderColor: 'pink', pb: 2 }} >
                    <Box component="img" src={myLogo} alt="Logo de Perrine Oswald" sx={{ width: 60, marginRight: { sm: 2 } }} className={isDarkMode ? 'bg-white rounded-full p-1' : 'transparent'}/>
                    <Typography variant="h4" sx={{ my: 'auto' }}>
                        Parcours éducatif
                    </Typography>
                </Grid>
                <Grid container spacing={{ xs: 5, lg: 10 }}>
                    {etudes.map((etude, index) => (
                        <Grid item xs={12} lg={4} key={`${index}`}>
                            <Typography variant="h5" className={isDarkMode ? 'text-white' : 'text-red'}>
                                {etude.dates}
                            </Typography>
                            <Card className={isDarkMode ? etude.color+'-dark' : etude.color}>
                                <CardContent className={isDarkMode ? 'text-white' : 'text-black'}>
                                    <Typography variant="h5" component="div">
                                        {etude.title}
                                    </Typography>
                                    <Typography mt={2}>
                                        {etude.description}
                                    </Typography>
                                    <Typography mt={2}>
                                        {etude.city}
                                    </Typography>
                                    <CardMedia
                                        sx={{ height: 140, my: 4 }}
                                        image={etude.image}
                                        title="green iguana"
                                    />
                                    <Link href={etude.link} target="_blank" rel="noopener noreferrer">
                                        <Typography>
                                            Lien vers le site
                                        </Typography>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Grid item sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', textAlign: { xs: 'center', sm: 'left' }, my: 4, borderBottom: 2, borderColor: 'pink', pb: 2 }} >
                    <Box component="img" src={myLogo} alt="Logo de Perrine Oswald" sx={{ width: 60, marginRight: { sm: 2 } }} />
                    <Typography variant="h4" sx={{ my: 'auto' }}>
                        Parcours professionnel
                    </Typography>
                </Grid>
                <Grid container spacing={5}>
                    {works.map((work, index) => (
                        <Grid item xs={12} lg={4} key={`${index}`}>
                            <Typography variant="h5" className={isDarkMode ? 'text-white' : 'text-red'}>
                                {work.dates}
                            </Typography>
                            <Card className={isDarkMode ? work.color+'-dark' : work.color}>
                                <CardContent className={isDarkMode ? 'text-white' : 'text-black'}>
                                    <Typography variant="h5" component="div">
                                        {work.title}
                                    </Typography>
                                    <Typography mt={2}>
                                        {work.description}
                                    </Typography>
                                    <Typography mt={2}>
                                        {work.city}
                                    </Typography>
                                    <CardMedia
                                        sx={{ height: 140, my: 4 }}
                                        image={work.image}
                                        title="green iguana"
                                    />
                                    <Link href={work.link} target="_blank" rel="noopener noreferrer">
                                        <Typography>
                                            Lien vers le site
                                        </Typography>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Footer />
        </Box>
    )
}

export default Pathway