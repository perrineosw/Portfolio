import React from "react";
import profile from "../media/profile.jpeg";
import opquast from "../media/badge_confirme.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faClock,
  faComputer,
  faCookieBite,
  faFaceSmile,
  faFolderTree,
  faGlobeEurope,
  faHandHoldingHeart,
  faLocation,
  faMagnifyingGlass,
  faMailBulk,
  faMusic,
  faPencil,
  faPersonRunning,
  faPhone,
  faPhotoVideo,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  linearProgressClasses,
  Link,
  Paper,
  Typography,
} from "@mui/material";

const About = ({ isDarkMode }: { isDarkMode: boolean }): JSX.Element => {
  const skills = [
    "Web fullstack",
    "Python",
    "SQL",
    "Django",
    "Angular JS",
    "React JS",
    "Node JS",
    "Tailwind",
    "Java",
    "SpringBoot",
    "Php",
    "Laravel",
    "Accessibilté et Qualité web",
  ];

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
        <Typography variant="h4">A propos de moi</Typography>
      </Grid>
      <Typography variant="h4" sx={{ my: 5 }}>
        Qui suis-je ?
      </Typography>
      <Grid container spacing={10} alignItems="center">
        <Grid item xs={12} lg={4}>
          <Avatar
            src={profile}
            alt="Photo de profile"
            sx={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Typography>
            J&apos;ai commencé par une licence en informatique NEC à ANGLET
            (64), et maintenant j&apos;étudie en alternance le développement
            d&apos;applications web à YNOV tout en travaillant chez Okina à Dax
            (40). Je peux travailler sur des projets variés, allant de
            l&apos;environnement à la logistique industrielle, la donnée B2B et
            la gestion de transport.
          </Typography>
          <br />
          <Typography>
            L&apos;accessibilité et la qualité web est une thématique qui me
            tient à coeur. Pour moi, un site web inaccessible est aussi utile
            qu&apos;une pelle à neige en Floride, et un code mal structuré est
            aussi agréable qu&apos;une chanson de Céline Dion mal chantée. Je
            suis l&apos;alliée déterminée des utilisateurs malvoyants et des
            développeurs soucieux de leur santé mentale. Alors si vous cherchez
            quelqu&apos;un pour rendre votre site accessible et agréable à
            utiliser, je suis la développeuse dont vous avez besoin !
          </Typography>
          <br />
          <Grid container spacing={10} alignItems="center">
            <Grid item xs={12} lg={7}>
              <Typography>
                Je suis certifiée OPQUAST avec 790 points et le niveau{" "}
                <strong>Confirmée</strong>.
              </Typography>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Link
                href="https://directory.opquast.com/fr/certificat/PRBTQG/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textAlign: "center", color: "black" }}
                aria-label="Lien vers les résultats de ma certification OPQUAST"
              >
                <Box
                  component="img"
                  src={opquast}
                  alt="Logo OPQUAST"
                  sx={{ width: 120, mx: "auto" }}
                />
              </Link>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            textAlign="center"
            sx={{ mt: 5 }}
            spacing={2}
          >
            <Grid item xs={6} lg={2}>
              <Typography variant="h5">
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ color: "var(--red)" }}
                  aria-label="Icône d'une horloge"
                />
              </Typography>
              <Typography>Ponctuelle</Typography>
            </Grid>
            <Grid item xs={6} lg={2}>
              <Typography variant="h5">
                <FontAwesomeIcon
                  icon={faPencil}
                  style={{ color: "var(--pink)" }}
                  aria-label="Icône d'un crayon"
                />
              </Typography>
              <Typography>Créative</Typography>
            </Grid>
            <Grid item xs={6} lg={2}>
              <Typography variant="h5">
                <FontAwesomeIcon
                  icon={faPersonRunning}
                  style={{ color: "var(--purple)" }}
                  aria-label="Icône d'une peronne entrain de courir"
                />
              </Typography>
              <Typography>Réactive</Typography>
            </Grid>
            <Grid item xs={6} lg={2}>
              <Typography variant="h5">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: "var(--blue)" }}
                  aria-label="Icône d'une loupe"
                />
              </Typography>
              <Typography>Curieuse</Typography>
            </Grid>
            <Grid item xs={6} lg={2}>
              <Typography variant="h5">
                <FontAwesomeIcon
                  icon={faFolderTree}
                  style={{ color: "var(--green)" }}
                  aria-label="Icône d'une organisation de fichier numérique (arborescence)"
                />
              </Typography>
              <Typography>Organisée</Typography>
            </Grid>
            <Grid item xs={6} lg={2}>
              <Typography variant="h5">
                <FontAwesomeIcon
                  icon={faFaceSmile}
                  style={{ color: "var(--red)" }}
                  aria-label="Icône d'un smiley qui sourit"
                />
              </Typography>
              <Typography>Positive</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="h4" sx={{ my: 5 }}>
        Informations personnelles
      </Typography>
      <Grid container alignItems="center" textAlign="center">
        <Grid item xs={12} lg={3}>
          <FontAwesomeIcon
            icon={faPhone}
            className="w-5 h-5"
            style={{ color: "var(--red)" }}
          />
          <Typography>
            <Link
              href="tel:+33768847401"
              rel="noopener noreferrer"
              sx={{ color: isDarkMode ? "var(--blue)" : "none" }}
            >
              +33 7 68 84 74 01
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3}>
          <FontAwesomeIcon
            icon={faLocation}
            className="w-5 h-5"
            style={{ color: "var(--pink)" }}
          />
          <Typography>Dax - France</Typography>
        </Grid>
        <Grid item xs={12} lg={3}>
          <FontAwesomeIcon
            icon={faMailBulk}
            className="w-5 h-5"
            style={{ color: "var(--green)" }}
          />
          <Typography>
            <Link
              href="mailto:oswald.perrinedu40@gmail.com"
              rel="noopener noreferrer"
              sx={{ color: isDarkMode ? "var(--blue)" : "none" }}
            >
              oswald.perrinedu40@gmail.com
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3}>
          <FontAwesomeIcon
            icon={faCar}
            className="w-5 h-5"
            style={{ color: "var(--blue)" }}
          />
          <Typography>Permis B</Typography>
        </Grid>
      </Grid>
      <br />
      <Typography>
        Je suis capable de m&apos;adapter à toutes les situations, de gérer le
        stress comme un Jedi, de travailler en équipe comme les Avengers, de
        communiquer comme un talkie-walkie, d&apos;être autonome comme un
        astronaute, organisée comme un bullet journal, rigoureuse comme un juge,
        curieuse comme un chat et réactive comme une super-héroïne. En bref, je
        suis le genre de personne que vous voulez avoir dans votre équipe !
      </Typography>
      <Typography variant="h4" sx={{ my: 5 }}>
        Mes centres d&apos;intérêts
      </Typography>
      <Grid container alignItems="center" spacing={5} sx={{ mb: 5 }}>
        <Grid item xs={12} lg={4}>
          <Card
            sx={{
              backgroundColor: isDarkMode
                ? "var(--red-dark)"
                : "var(--red-card)",
            }}
          >
            <CardContent className={isDarkMode ? "text-white" : "text-black"}>
              <Typography variant="h5" component="div">
                <FontAwesomeIcon icon={faComputer} />
                &nbsp;Programmation
              </Typography>
              <Typography mt={2}>
                (Maman disait toujours) le développement web est comme une boîte
                de chocolats : vous ne savez jamais sur quel navigateur votre
                site va s&apos;afficher. <br /> #ForrestGump
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card
            sx={{
              backgroundColor: isDarkMode
                ? "var(--pink-dark)"
                : "var(--pink-card)",
            }}
          >
            <CardContent className={isDarkMode ? "text-white" : "text-black"}>
              <Typography variant="h5" component="div">
                <FontAwesomeIcon icon={faPhotoVideo} />
                &nbsp;Photographie
              </Typography>
              <Typography mt={2}>
                En développement web comme en photographie, il faut savoir
                prendre le temps de régler les paramètres pour obtenir une image
                nette et une expérience utilisateur satisfaisante.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card
            sx={{
              backgroundColor: isDarkMode
                ? "var(--purple-dark)"
                : "var(--purple-card)",
            }}
          >
            <CardContent className={isDarkMode ? "text-white" : "text-black"}>
              <Typography variant="h5" component="div">
                <FontAwesomeIcon icon={faMusic} />
                &nbsp;Musique
              </Typography>
              <Typography mt={2}>
                Le développement web et la musique sont comme le rythme et la
                mélodie : vous pouvez avoir la meilleure harmonie du code, mais
                sans un bon rythme, votre site web sera comme une chanson sans
                refrain.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card
            sx={{
              backgroundColor: isDarkMode
                ? "var(--blue-dark)"
                : "var(--blue-card)",
            }}
          >
            <CardContent className={isDarkMode ? "text-white" : "text-black"}>
              <Typography variant="h5" component="div">
                <FontAwesomeIcon icon={faHandHoldingHeart} />
                &nbsp;Bénévolat
              </Typography>
              <Typography mt={2}>
                Le bénévolat tout comme le développement web requièrent de la
                patience, de la détermination et un souci constant pour les
                besoins des utilisateurs. Mais lorsque vous créez quelque chose
                qui a un impact positif sur les autres, la satisfaction que vous
                en tirez est incomparable !
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card
            sx={{
              backgroundColor: isDarkMode
                ? "var(--green-dark)"
                : "var(--green-card)",
            }}
          >
            <CardContent className={isDarkMode ? "text-white" : "text-black"}>
              <Typography variant="h5" component="div">
                <FontAwesomeIcon icon={faGlobeEurope} />
                &nbsp;Voyager
              </Typography>
              <Typography mt={2}>
                Voyager et développer un site web sont deux aventures qui se
                ressemblent : elles nécessitent une planification minutieuse,
                une capacité à résoudre des problèmes et à s&apos;adapter aux
                imprévus. Et dans les deux cas, le résultat peut être
                incroyablement gratifiant !
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card
            sx={{
              backgroundColor: isDarkMode
                ? "var(--red-dark)"
                : "var(--red-card)",
            }}
          >
            <CardContent className={isDarkMode ? "text-white" : "text-black"}>
              <Typography variant="h5">
                <FontAwesomeIcon icon={faCookieBite} />
                &nbsp;Cuisiner
              </Typography>
              <Typography mt={2}>
                La cuisine et le développement web ont un point commun : dans
                l&apos;un, on mélange des ingrédients pour créer un plat, et
                dans l&apos;autre, on mélange des codes pour créer un site web.
                Mais attention, dans les deux cas, il faut faire attention aux
                bugs et aux goûts différents des utilisateurs !
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={12} lg={6}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Langues étrangères
          </Typography>
          <Grid container alignItems="center" spacing={5}>
            <Grid item xs={12} lg={6} sx={{ justifyContent: "between" }}>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Espagnol</Typography>
                <Typography>70%</Typography>
              </Box>
              <Box width="100%" mr={1}>
                <LinearProgress
                  variant="determinate"
                  value={70}
                  sx={{
                    height: 8,
                    borderRadius: 5,
                    [`&.${linearProgressClasses.colorPrimary}`]: {
                      backgroundColor: "var(--black)",
                    },
                    [`& .${linearProgressClasses.bar}`]: {
                      borderRadius: 5,
                      backgroundColor: "var(--red)",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography>Anglais</Typography>
                <Typography>60%</Typography>
              </Box>
              <Box width="100%" mr={1}>
                <LinearProgress
                  variant="determinate"
                  value={60}
                  sx={{
                    height: 8,
                    borderRadius: 5,
                    [`&.${linearProgressClasses.colorPrimary}`]: {
                      backgroundColor: "var(--black)",
                    },
                    [`& .${linearProgressClasses.bar}`]: {
                      borderRadius: 5,
                      backgroundColor: "var(--purple)",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Connaissances
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: "8px", md: "16px" },
              justifyContent: "center",
            }}
          >
            {skills.map((skill, index) => (
              <Paper
                key={index}
                sx={{
                  px: 2,
                  py: 1,
                  bgcolor: isDarkMode ? "var(--pink-dark)" : "var(--black)",
                  color: isDarkMode ? "common.white" : "common.black",
                  textAlign: "center",
                  maxWidth: "fit-content",
                  mx: "auto",
                }}
              >
                <Typography variant="body2">{skill}</Typography>
              </Paper>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default About;
