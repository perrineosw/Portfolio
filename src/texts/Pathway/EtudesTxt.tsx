import type IEtude from "../../interfaces/IEtude";
import ynov from "../../media/pathway/ynov.jpeg";
import uppa from "../../media/pathway/uppa.jpeg";
import harountazieff from "../../media/pathway/harountazieff.jpeg";

export const etudes: IEtude[] = [
  {
    image: ynov,
    alt: "Ynov",
    title: "Bâtiment de l'école Ynov à Bordeaux",
    description:
      "Expert en développement web & Expert Accessibilité et Qualité web à YNOV",
    dates: "2022 - 2024",
    city: "33063 Bordeaux",
    color: "var(--red-card)",
    colorDark: "var(--red-dark)",
    link: "https://www.ynov.com/formation/ynov-masteres/expert-developpement-web/",
  },
  {
    image: uppa,
    alt: "Bâtiment de l'école UPPA à Anglet",
    title: "Licence informatique",
    description: "Numérique pour les Environnements Connectés à l'U.P.P.A.",
    dates: "2019 - 2022",
    city: "64600 Anglet",
    color: "var(--pink-card)",
    colorDark: "var(--pink-dark)",
    link: "https://formation.univ-pau.fr/fr/catalogue/sciences-technologies-sante-STS/licence-XA/licence-informatique-L3VENPWZ.html",
  },
  {
    image: harountazieff,
    alt: "Bâtiment du Lycée Haroun Tazieff à Saint-Paul-lès-Dax",
    title: "Bac S",
    description: "Sciences de l'Ingénieur au Lycée Haroun Tazieff",
    dates: "2019",
    city: "40990 Saint-Paul-lès-Dax",
    color: "var(--purple-card)",
    colorDark: "var(--purple-dark)",
    link: "https://www.lyceeharountazieff.com/",
  },
];
