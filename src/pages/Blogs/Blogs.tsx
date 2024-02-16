import React, {useState} from "react";
import IBlog from "./IBlog"
import myLogo from "../../media/logo-big.png";
import veilletechno from "../../media/blogs/rapport_veille_technologique.pdf";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Modale from "./Modale";
import { blogs } from "./Text";

const Blogs = ({styles, isDarkMode}: {styles: object, isDarkMode: boolean}): JSX.Element => {
    const [selectedBlog, setSelectedBlog] = useState({ color: '', image: '', date: '', title: '', description: { title: [''], content: [''] }, website: { title: [''], content: [''] } });

    const [open, setOpen] = useState(false);

    const handleOpen = (blog: IBlog) => {
        setSelectedBlog(blog);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Box sx={{ mx: { xs: 2, sm: 5, md: 10 }, p: 2, borderRadius: { lg: '16px' } }} className={isDarkMode ? 'transparent' : 'bg-white'}>
            <Box sx={{ styles }}>
                <Grid item sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', textAlign: { xs: 'center', sm: 'left' }, mb: 4, borderBottom: 2, borderColor: 'pink', pb: 2 }} >
                    <Box component="img" src={myLogo} alt="Logo de Perrine Oswald" sx={{ width: 60, marginRight: { sm: 2 } }} className={isDarkMode ? 'bg-white rounded-full p-1' : 'transparent'}/>
                    <Typography variant="h4" sx={{ my: 'auto' }}>
                        Mon blog / mes articles
                    </Typography>
                </Grid>
                <Button variant="contained" className="dowanload-btn" component="a" href={veilletechno} download="Comprendre_Eco_Conception.pdf">
                    <FontAwesomeIcon icon={faDownload} />
                    <Typography sx={{ ml: 1 }}>
                        Qu&apos;est ce que l&apos;Éco-Conception ?
                    </Typography>
                </Button>
                <Typography sx={{ mt: 2 }}>
                    .pdf - 337,08 Ko<br/>Publié le 8 mars 2023
                </Typography>
                <Grid container spacing={5} sx={{ mt: 4 }}>
                    {blogs.map((blog, index) => (
                        <Grid item xs={12} lg={4} key={`${index}`}>
                            <Typography mt={2} className={isDarkMode ? 'text-white' : 'text-red'}>
                                Publié le {blog.date}
                            </Typography>
                            <Card className={isDarkMode ? blog.color+'-dark' : blog.color} sx={{ my: 'auto' }}>
                                <CardActionArea onClick={() => handleOpen(blog)}>
                                    <CardContent className={isDarkMode ? 'text-white' : 'text-black'}>
                                        <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                            {blog.title}
                                        </Typography>
                                        <CardMedia sx={{ height: 140, my: 4 }} image={blog.image} title={blog.title} />
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                    {selectedBlog && <Modale blog={selectedBlog} open={open} handleClose={handleClose} isDarkMode={isDarkMode} />}
                </Grid>
            </Box>
            <Footer />
        </Box>
    )
}

export default Blogs;