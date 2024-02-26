import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ImageProps {
  name: string;
  alt: string;
}

interface ImageCarouselProps {
  open: boolean;
  images?: ImageProps[];
  isDarkMode?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  open,
  images,
  isDarkMode,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [showAltText, setShowAltText] = useState(false); // L'état initial pour le texte alternatif est "caché".
  const maxSteps = images?.length ?? 0;

  const handleNext = () => {
    if (maxSteps > 1) {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    }
  };

  const handleBack = () => {
    if (maxSteps > 1) {
      setActiveStep(
        (prevActiveStep) => (prevActiveStep + maxSteps - 1) % maxSteps,
      );
    }
  };

  const toggleAltText = () => {
    setShowAltText(!showAltText); // Cette fonction bascule l'affichage du texte alternatif.
  };

  if (images == null || images.length === 0) {
    return null;
  }

  return (
    <Box
      display={open ? "flex" : "none"}
      flexDirection="column"
      position="relative"
      alignItems="center"
    >
      <IconButton
        onClick={handleBack}
        style={{ position: "absolute", left: 0, zIndex: 1, color: "white" }}
        className="btn"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </IconButton>
      <img
        src={images[activeStep].name}
        alt={images[activeStep].alt}
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
          marginBottom: showAltText ? "20px" : "0",
        }}
      />
      {showAltText &&
        images[activeStep].alt.split("\n").map((line, lineIndex) => (
          <>
            <Typography
              key={lineIndex}
              sx={{ mx: 1 }}
              className={isDarkMode === true ? "text-white" : "text-black"}
            >
              {line}
            </Typography>
            <br />
          </>
        ))}
      <IconButton
        onClick={handleNext}
        style={{ position: "absolute", right: 0, zIndex: 1, color: "white" }}
        className="btn"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </IconButton>
      <Button
        onClick={toggleAltText}
        style={{ marginTop: "10px", color: "white" }}
        className="btn"
      >
        {showAltText ? "Cacher le texte" : "Afficher le texte de l'image"}
      </Button>
    </Box>
  );
};

export default ImageCarousel;
