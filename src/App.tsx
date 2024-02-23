import React, { useState } from "react";
import "./App.css";
import "./css/custom.css";
import "./css/custom-dark.css";
import "./css/structure.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import Pathway from "./pages/Pathway";
import Projets from "./pages/Projets/Projets";
import Blogs from "./pages/Blogs/Blogs";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";

const App = () => {
  // Define state to toggle between light and dark modes
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Define styles for light and dark mode
  const lightStyles = { color: "black", backgroundColor: "white" };
  const darkStyles = { color: "white", backgroundColor: "transparent" };

  // Define the toggle function
  const toggleMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-homeBg-dark" : "bg-homeBg"
      } lg:min-h-screen min-h-full bg-no-repeat bg-center bg-cover 
            bg-fixed md:pb-16 w-full custom-class`}
      style={isDarkMode ? darkStyles : (lightStyles as React.CSSProperties)}
    >
      <BrowserRouter>
        <NavBar toggleMode={toggleMode} isDarkMode={isDarkMode} />
        <Box
          sx={{
            mx: { xs: 2, sm: 5, md: 10 },
            p: 2,
            borderRadius: { lg: "16px" },
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            backgroundColor: isDarkMode ? "var(--black-dark)" : "white",
          }}
        >
          <Box style={isDarkMode ? darkStyles : lightStyles}>
            <Routes>
              <Route
                path="/"
                element={
                  <Home/>
                }
              />
              <Route
                path="/home"
                element={
                  <Home/>
                }
              />
              <Route
                path="/about"
                element={
                  <About
                    isDarkMode={isDarkMode}
                  />
                }
              />
              <Route
                path="/pathway"
                element={
                  <Pathway
                    isDarkMode={isDarkMode}
                  />
                }
              />
              <Route
                path="/projets"
                element={
                  <Projets
                    styles={isDarkMode ? darkStyles : lightStyles}
                    isDarkMode={isDarkMode}
                  />
                }
              />
              <Route
                path="/blogs"
                element={
                  <Blogs
                    isDarkMode={isDarkMode}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </div>
  );
};

export default App;
