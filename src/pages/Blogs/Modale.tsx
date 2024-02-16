import React from "react";
import { Box, CardMedia, IconButton, Link, Modal, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import IBlog from "./IBlog";

interface ModaleProps {
  blog: IBlog;
  open: boolean;
  handleClose: () => void;
  isDarkMode?: boolean;
}

const Modale: React.FC<ModaleProps> = ({ blog, open, handleClose, isDarkMode }) => {
  return (
    <Modal open={open} onClose={handleClose} sx={{ backdropFilter: "blur(5px)" }}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', bgcolor: isDarkMode ? 'grey.900' : 'background.paper', boxShadow: 24, borderRadius: '20px', p: 4, width: {xs: '80%', lg: 'auto'} }} >
        <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }} >
          <FontAwesomeIcon icon={faClose}  className={isDarkMode ? 'text-white' : 'inherit'}/>
        </IconButton>
        <Typography variant="h5" sx={{ borderBottom: 2, borderColor: 'pink', pb: 2, textAlign: 'center' }} className={isDarkMode ? 'text-white' : 'text-red'}>
          {blog.title}
        </Typography>
        <Typography sx={{ mt: 2 }} className={isDarkMode ? 'text-white' : 'inherit'}>
          Publié le {blog.date}
        </Typography>
        <CardMedia sx={{ height: 200, my: 4 }} image={blog.image} title={blog.title} />
        {blog.website &&
          <Box sx={{ mt: 4 }}>
            {blog.website.title.map((title, index) => (
              <div key={index}>
                {blog.website.content[index].split('\n').map((content, contentIndex) => (
                  <Link key={contentIndex} href={content} target="_blank" rel="noopener noreferrer">
                    <Typography>
                      {title}
                    </Typography>
                  </Link>
                ))}
              </div>
            ))}
          </Box>
        }
        {blog.description.title.map((title, index) => (
          <div key={index}>
              <Typography sx={{ borderBottom: 2, borderColor: 'pink', pb: 2, mt: 4 }} className={isDarkMode ? 'text-white' : 'text-red'}>
                {index + 1}.&nbsp;{title}
              </Typography>
              {blog.description.content[index].split('\n').map((line, lineIndex) => (
                  <Typography key={lineIndex} sx={{ py: 1, textAlign: 'justify' }}  className={isDarkMode ? 'text-white' : 'inherit'}>
                      {line}
                  </Typography>
              ))}
          </div>
        ))}
      </Box>
    </Modal>
  );
};

export default Modale;
