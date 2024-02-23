import React, { useState } from "react";
import Footer from "../../components/Footer";
import {
  Box,
  Grid,
  Typography,
  FormControl,
  MenuItem,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import AccessibiliteBlock from "./Accessibilite/Block";
import OtherBlock from "./Other/Block";
import WebBlock from "./Web/Block";

const Blogs = ({
  isDarkMode,
}: {
  isDarkMode: boolean;
}): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("tous");

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <Grid
        item
        sx={{
          textAlign: { xs: "center", sm: "left" },
          mb: 4,
          borderBottom: 2,
          borderColor: "pink",
          pb: 2,
        }}
      >
        <Typography variant="h4">Mon blog</Typography>
      </Grid>
      <Box sx={{ mb: 4 }}>
        <Typography>
          Vous pouvez filtrer mes différents articles par thématique :
        </Typography>
        <FormControl
          sx={{ m: 1, width: "auto", borderRadius: "20px" }}
          className="btn"
        >
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Vous pouvez filtrer mes différents articles par thématique :"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="tous">Tous les articles</MenuItem>
            <MenuItem value="web">Développement web / informatique</MenuItem>
            <MenuItem value="accessibilite">
              L&apos;accessibilité numérique
            </MenuItem>
            <MenuItem value="autre">Thématiques diverses</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {selectedCategory === "tous" || selectedCategory === "web" ? (
        <WebBlock isDarkMode={isDarkMode} />
      ) : null}
      {selectedCategory === "tous" || selectedCategory === "accessibilite" ? (
        <AccessibiliteBlock isDarkMode={isDarkMode} />
      ) : null}
      {selectedCategory === "tous" || selectedCategory === "autre" ? (
        <OtherBlock isDarkMode={isDarkMode} />
      ) : null}
      <Footer />
    </>
  );
};

export default Blogs;
