import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import Footer from "../components/Footer";
import { etudes } from "../texts/Pathway/EtudesTxt";
import type IEtude from "../interfaces/IEtude";
import { works } from "../texts/Pathway/Works";

const Pathway = ({ isDarkMode }: { isDarkMode: boolean }): JSX.Element => {
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
        {etudes.map((etude: IEtude, index: number) => (
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
                  title={etude.alt}
                />
              </CardContent>
            </Card>
            <Link
              href={etude.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: isDarkMode ? "var(--blue)" : "none" }}
              aria-label="Lien vers le site de l'école / la formation"
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
                  title={work.alt}
                />
              </CardContent>
            </Card>
            <Link
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: isDarkMode ? "var(--blue)" : "none" }}
              aria-label="Lien vers le site de la société"
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
