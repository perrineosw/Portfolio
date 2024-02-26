import React from "react";
import {
  Box,
  Button,
  CardMedia,
  Grid,
  IconButton,
  Link,
  Modal,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faDownload } from "@fortawesome/free-solid-svg-icons";
import type IBlog from "../../interfaces/IBlog";
import ImageCarousel from "./ImageCarousel";

interface ModaleProps {
  blog: IBlog;
  open: boolean;
  handleClose: () => void;
  isDarkMode?: boolean;
}

const Modale: React.FC<ModaleProps> = ({
  blog,
  open,
  handleClose,
  isDarkMode,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ backdropFilter: "blur(5px)" }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxHeight: "calc(100vh - 40px)",
          overflowY: "auto",
          bgcolor: isDarkMode === true ? "var(--black-dark)" : "white",
          boxShadow: 24,
          borderRadius: "20px",
          p: 4,
          width: { xs: "80%", lg: "auto" },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <FontAwesomeIcon
            icon={faClose}
            className={isDarkMode === true ? "text-white" : "inherit"}
          />
        </IconButton>
        <Typography
          variant="h5"
          sx={{
            borderBottom: 2,
            borderColor: "var(--beige)",
            pb: 2,
            textAlign: "center",
            color: isDarkMode === true ? "white" : "var(--pink-date)",
          }}
        >
          {blog.title}
        </Typography>
        <Typography
          sx={{
            mt: 2,
            color: isDarkMode === true ? "white" : "var(--pink-date)",
          }}
        >
          Publié le {blog.date}
        </Typography>
        <CardMedia
          sx={{ height: 200, my: 4 }}
          image={blog.image}
          title={blog.title}
        />
        {blog.website != null && (
          <Box sx={{ mt: 4 }}>
            {blog.website.title.map((title, index) => (
              <div key={index}>
                {blog.website.content[index]
                  .split("\n")
                  .map((content, contentIndex) => (
                    <Link
                      key={contentIndex}
                      href={content}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={title}
                    >
                      <Typography
                        sx={{
                          color: isDarkMode === true ? "var(--blue)" : "none",
                        }}
                      >
                        {title}
                      </Typography>
                    </Link>
                  ))}
              </div>
            ))}
          </Box>
        )}
        {blog.description.title.map((title, index) => (
          <div key={index}>
            <Typography
              sx={{
                borderBottom: 2,
                borderColor: "var(--beige)",
                pb: 2,
                mt: 4,
                color: isDarkMode === true ? "white" : "var(--pink-date)",
              }}
            >
              {index + 1}.&nbsp;{title}
            </Typography>
            {blog.description.content[index]
              .split("\n")
              .map((line, lineIndex) => (
                <Typography
                  key={lineIndex}
                  sx={{ py: 1 }}
                  className={isDarkMode === true ? "text-white" : "inherit"}
                >
                  {line}
                </Typography>
              ))}
          </div>
        ))}
        <Grid
          container
          sx={{ borderTop: 2, borderColor: "var(--beige)", my: 4 }}
        >
          {blog.files != null &&
            blog.files.length > 0 &&
            blog.files.map((file, index) => (
              <Grid
                key={index}
                item
                xs={12}
                lg={6}
                sx={{ textAlign: "center" }}
              >
                <Button
                  variant="contained"
                  sx={{ mt: 3 }}
                  className="btn"
                  component="a"
                  href={file.src}
                  download={file.name}
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <Typography sx={{ ml: 1 }}>{file.titleButton}</Typography>
                </Button>
              </Grid>
            ))}
        </Grid>
        <br />
        <ImageCarousel
          open={open}
          images={blog.images}
          isDarkMode={isDarkMode}
        />
      </Box>
    </Modal>
  );
};

export default Modale;
