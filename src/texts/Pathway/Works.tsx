import okina from "../../media/pathway/okina.png";
import avenirdata from "../../media/pathway/avenirdata.jpeg";
import intermarche from "../../media/pathway/intermarche.jpeg";
import stpaullesdax from "../../media/pathway/stPaulLesDax.jpeg";
import feria from "../../media/pathway/feria.jpeg";
import harmonie from "../../media/pathway/harmonie.jpg";
import type IWork from "../../interfaces/IWork";

export const works: IWork[] = [
  {
    image: okina,
    alt: "Logo de la société Okina",
    title: "Alternance développement web fullstack",
    dates: "Avril 2023 - Septembre 2024",
    description:
      "Développement de site web fullstack en Java (SpringBoot), React JS, Angular JS et Docker",
    city: "40100 Dax",
    color: "var(--blue-card)",
    colorDark: "var(--blue-dark)",
    link: "https://www.okina.fr/",
  },
  {
    image: avenirdata,
    alt: "Logo de la société Avenir Data",
    title: "Alternance informatique",
    dates: "Septembre 2022 - Mars 2023",
    description:
      "Développement web en Django\nExploitation, compréhension, modélisation de la donnée B2B",
    city: "40100 Dax",
    color: "var(--green-card)",
    colorDark: "var(--green-dark)",
    link: "https://www.avenirdata.com/",
  },
  {
    image: avenirdata,
    alt: "Logo de la société Avenir Data",
    title: "Stage informatique et data",
    dates: "Avril - Août 2022",
    description:
      "Bot de parsing de flux RSS\nExploitation, compréhension, modélisation de la donnée B2B",
    city: "40100 Dax",
    color: "var(--red-card)",
    colorDark: "var(--red-dark)",
    link: "https://www.avenirdata.com/",
  },
  {
    image: intermarche,
    alt: "Enseigne de l'Intermarché de Castets",
    title: "Hôtesse de caisse",
    dates: "Juin / Juillet / Août 2021",
    description:
      "Poste d'hôtesse de caisse, agent d'entretien et mise en rayon",
    city: "40075 Castets",
    color: "var(--pink-card)",
    colorDark: "var(--pink-dark)",
    link: "https://www.intermarche.com/magasins/05798/castets-40260/infos-pratiques",
  },
  {
    image: stpaullesdax,
    alt: "Bâtiment de la Mairie de Saint-Paul-lès-Dax",
    title: "Stage informatique",
    dates: "2020",
    description:
      "Gestion d'un parc d'appareils mobiles (tablettes) via le MDM Jamf Pro (pour appareils Apple)",
    city: "40990 Saint-Paul-lès-Dax",
    color: "var(--purple-card)",
    colorDark: "var(--purple-dark)",
    link: "https://www.st-paul-les-dax.fr/",
  },
  {
    image: feria,
    alt: "Banderole de feria de Dax",
    title: "Vendeuse",
    dates: "Août 2019",
    description:
      "Vente de tickets pour les navettes bus / parkings relais pour les férias de DAX (journée & nuit)",
    city: "40990 Saint-Paul-lès-Dax",
    color: "var(--blue-card)",
    colorDark: "var(--blue-dark)",
    link: "https://www.trans-landes.fr/",
  },
  {
    image: feria,
    alt: "Banderole de feria de Dax",
    title: "Vendeuse",
    dates: "Août 2017",
    description:
      "Vente de tickets pour les navettes bus / parkings relais pour les férias de DAX (journée)",
    city: "40990 Saint-Vincent-de-Paul",
    color: "var(--green-card)",
    colorDark: "var(--green-dark)",
    link: "https://www.trans-landes.fr/",
  },
  {
    image: harmonie,
    alt: "Photo de groupe de l'harmonie de Christus lors d'un concert au lac de Christus à Saint-Paul-lès-Dax",
    title: "Bénévole : Association musicale",
    dates: "Depuis 2015",
    description:
      "Aide à l'organisation et aux animations lors des concerts et déplacements",
    city: "40990 Saint-Vincent-de-Paul",
    color: "var(--red-card)",
    colorDark: "var(--red-dark)",
    link: "https://www.harmonie-de-christus.com/",
  },
];
