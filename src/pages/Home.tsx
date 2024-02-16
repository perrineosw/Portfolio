import React from "react";
import profile from "../media/profile.jpeg";
import myLogo from "../media/logo-big.png";
import cv from "../media/cv_perrine_oswald.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import opquast from "../media/badge_confirme.svg";
import { Box, Grid, Typography, Button, Link, Avatar, Stack } from '@mui/material';

const Home= ({isDarkMode}: {isDarkMode: boolean}): JSX.Element => {
    return (
        <Box sx={{ pb: 10, pt: { xs: 10, lg: 0 }, zIndex: 'tooltip' }}>
            <Box className="containerHome">
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: { md: '90vh', lg: '80vh', xl: '71vh' }, px: { xs: 4, sm: 6, lg: 8 } }}>
                    <Grid container spacing={6} justifyContent="center" alignItems="center">
                        <Grid item xs={12} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Avatar src={profile} alt="Photo de Perrine Oswald" sx={{ width: '80%', height: 'auto', m: { lg: 5 } }} />
                        </Grid>
                        <Grid item xs={12} lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Grid item sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', textAlign: { xs: 'center', sm: 'left' } }} >
                                <img src={myLogo} alt="Logo de Perrine Oswald" width={150} className={isDarkMode ? 'bg-white rounded-full p-1' : 'transparent'}/>
                                <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', marginLeft: { xs: 0, lg: 5 }}}>
                                    Perrine<br/>Oswald
                                </Typography>
                            </Grid>
                            <Typography variant="h5" sx={{ mt: 4, py: 2, textAlign: 'center' }}>
                                Développeuse web fullstack
                            </Typography>
                            <Typography variant="h5" sx={{ py: 2, textAlign: 'center' }}>
                                Experte en Accessibilité et Qualité web
                            </Typography>
                        </Grid>
                        <Grid item xs={12} lg={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Link href="https://www.linkedin.com/in/perrine-oswald/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="w-20 h-20"/>
                            </Link>
                            <br/>
                            <Link href="https://directory.opquast.com/fr/certificat/PRBTQG/" target="_blank" rel="noopener noreferrer" sx={{ textAlign: 'center', color: 'black' }}>
                                <Box component="img" src={opquast} alt="Logo OPQUAST" sx={{ width: 120, mx: 'auto' }} />
                            </Link>
                            <br/>
                            <Button variant="contained" sx={{ mt: 3 }} className="dowanload-btn" component="a" href={cv} download="CV_Perrine_Oswald.pdf">
                                <FontAwesomeIcon icon={faDownload} />
                                <Typography sx={{ ml: 1 }}>
                                    Télécharger mon CV
                                </Typography>
                            </Button>
                            <Typography sx={{ mt: 2 }}>
                                .pdf - 905,54 Ko
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;
