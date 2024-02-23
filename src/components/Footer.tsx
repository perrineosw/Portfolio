import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = (): JSX.Element => {
  return (
    <Box
      component="footer"
      sx={{
        overflow: "hidden",
        borderRadius: "16px",
        bgcolor: "transparent",
        mt: 5,
      }}
    >
      <Typography variant="body1" sx={{ textAlign: "center", pb: 2, pt: 5 }}>
        © {new Date().getFullYear()} - Tous droits réservés par Perrine OSWALD
      </Typography>
    </Box>
  );
};

export default Footer;
