import React, { useState } from "react";
import IBlog from "../../../interfaces/IBlog";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import Modale from "../Modale";
import { blogs } from "../../../texts/Blogs/WebTxt";
import MyPagination from "../../../components/Pagination";

import veilletechno from "../../../media/blogs/rapport_veille_technologique.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const WebBlock = ({
  isDarkMode,
}: {
  isDarkMode: boolean;
}): JSX.Element => {
  const [selectedBlog, setSelectedBlog] = useState({
    color: "",
    colorDark: "",
    image: "",
    date: "",
    title: "",
    description: { title: [""], content: [""] },
    website: { title: [""], content: [""] },
  });

  const [open, setOpen] = useState(false);

  const handleOpen = (blog: IBlog) => {
    setSelectedBlog(blog);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const blogPerPage = 3;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const indexOfLastBlog = currentPage * blogPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const PaginationProps = {
    currentPage,
    handlePageChange,
    totalPageCount: Math.ceil(blogs.length / blogPerPage),
    indexOfFirstBlog,
    indexOfLastBlog,
    total: blogs.length,
  };

  return (
    <>
      <Typography variant="h4" sx={{ my: 5 }}>
        Développement web / informatique
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} lg={4} sx={{ textAlign: "center", mx: "auto" }}>
          <Typography
            sx={{ mb: 1, color: isDarkMode ? "white" : "var(--pink-date)" }}
          >
            Publié le 8 mars 2023
          </Typography>
          <Button
            variant="contained"
            className="btn"
            component="a"
            href={veilletechno}
            download="Comprendre_Eco_Conception.pdf"
          >
            <FontAwesomeIcon icon={faDownload} />
            <Typography sx={{ ml: 1 }}>
              Qu&apos;est ce que l&apos;Éco-Conception ?
            </Typography>
          </Button>
          <Typography sx={{ mt: 2 }}>.pdf - 337,08 Ko</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        {currentBlogs.map((blog, index) => (
          <Grid item xs={12} lg={4} key={`${index}`}>
            <Typography
              mt={2}
              sx={{ color: isDarkMode ? "white" : "var(--pink-date)" }}
            >
              Publié le {blog.date}
            </Typography>
            <Card
              sx={{
                my: "auto",
                backgroundColor: isDarkMode ? blog.colorDark : blog.color,
              }}
            >
              <CardActionArea onClick={() => handleOpen(blog)}>
                <CardContent
                  className={isDarkMode ? "text-white" : "text-black"}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {blog.title}
                  </Typography>
                  <CardMedia
                    sx={{ height: 140, my: 4 }}
                    image={blog.image}
                    title={blog.title}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        {selectedBlog && (
          <Modale
            blog={selectedBlog}
            open={open}
            handleClose={handleClose}
            isDarkMode={isDarkMode}
          />
        )}
      </Grid>
      <MyPagination {...PaginationProps} />
    </>
  );
};

export default WebBlock;
