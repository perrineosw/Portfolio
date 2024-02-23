import React from "react";
import ynov from "../media/pathway/ynov.jpeg";
import uppa from "../media/pathway/uppa.jpeg";
import harountazieff from "../media/pathway/harountazieff.jpeg";
import okina from "../media/pathway/okina.png";
import avenirdata from "../media/pathway/avenirdata.jpeg";
import intermarche from "../media/pathway/intermarche.jpeg";
import stpaullesdax from "../media/pathway/stPaulLesDax.jpeg";
import feria from "../media/pathway/feria.jpeg";
import harmonie from "../media/pathway/harmonie.jpg";
import Footer from "../components/Footer";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";

const etudes = [
  {
    image: ynov,
    title: "Master",
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
    title: "Bac S",
    description: "Sciences de l'Ingénieur au Lycée Haroun Tazieff",
    dates: "2019",
    city: "40990 Saint-Paul-lès-Dax",
    color: "var(--purple-card)",
    colorDark: "var(--purple-dark)",
    link: "https://www.lyceeharountazieff.com/",
  },
];

const works = [
  {
    image: okina,
    image_work: "Okina",
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
    image_work: "Avenir Data",
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
    image_work: "Avenir Data",
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
    image_work: "Intermarché",
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
    image_work: "Mairie de Saint-Paul-lès-Dax",
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
    image_work: "Feria de Dax",
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
    image_work: "Feria de Dax",
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
    image_work: "Harmonie de Christus",
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

const Pathway = ({
  isDarkMode,
}: {
  isDarkMode: boolean;
}): JSX.Element => {
  return (
    <>
      <Grid
        item
        sx={{
          textAlign: { xs: "center", sm: "left" },
          mb: 4,
          borderBottom: 2,
          borderColor: "var(--beige)",
          pb: 2,
        }}
      >
        <Typography variant="h4">Parcours éducatif</Typography>
      </Grid>
      <Grid container spacing={{ xs: 5, lg: 10 }}>
        {etudes.map((etude, index) => (
          <Grid item xs={12} lg={4} key={`${index}`}>
            <Typography
              variant="h5"
              sx={{ color: isDarkMode ? "white" : "var(--pink-date)" }}
            >
              {etude.dates}
            </Typography>
            <Card
              sx={{
                backgroundColor: isDarkMode ? etude.colorDark : etude.color,
                my: 2,
              }}
            >
              <CardContent sx={{ color: isDarkMode ? "white" : "black" }}>
                <Typography variant="h5" component="div">
                  {etude.title}
                </Typography>
                {etude.description.split("\n").map((line, lineIndex) => (
                  <Typography
                    key={lineIndex}
                    sx={{ py: 1 }}
                    className={isDarkMode ? "text-white" : "inherit"}
                  >
                    {line}
                  </Typography>
                ))}
                <Typography mt={2}>{etude.city}</Typography>
                <CardMedia
                  sx={{ height: 140, mt: 4 }}
                  image={etude.image}
                  title="green iguana"
                />
              </CardContent>
            </Card>
            <Link
              href={etude.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: isDarkMode ? "var(--blue)" : "none" }}
            >
              <Typography>Lien vers le site</Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid
        item
        sx={{
          textAlign: { xs: "center", sm: "left" },
          mt: 5,
          mb: 4,
          borderBottom: 2,
          borderColor: "var(--beige)",
          pb: 2,
        }}
      >
        <Typography variant="h4" sx={{ my: "auto" }}>
          Parcours professionnel
        </Typography>
      </Grid>
      <Grid container spacing={5}>
        {works.map((work, index) => (
          <Grid item xs={12} lg={4} key={`${index}`}>
            <Typography
              variant="h5"
              sx={{ color: isDarkMode ? "white" : "var(--pink-date)" }}
            >
              {work.dates}
            </Typography>
            <Card
              sx={{
                backgroundColor: isDarkMode ? work.colorDark : work.color,
                my: 2,
              }}
            >
              <CardContent sx={{ color: isDarkMode ? "white" : "black" }}>
                <Typography variant="h5" component="div">
                  {work.title}
                </Typography>
                <Typography mt={2}>
                  {work.description.split("\n").map((line, lineIndex) => (
                    <Typography
                      key={lineIndex}
                      sx={{ py: 1 }}
                      className={isDarkMode ? "text-white" : "inherit"}
                    >
                      {line}
                    </Typography>
                  ))}
                </Typography>
                <Typography mt={2}>{work.city}</Typography>
                <CardMedia
                  sx={{ height: 140, my: 4 }}
                  image={work.image}
                  title="green iguana"
                />
              </CardContent>
            </Card>
            <Link
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: isDarkMode ? "var(--blue)" : "none" }}
            >
              <Typography>Lien vers le site</Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </>
  );
};

export default Pathway;
