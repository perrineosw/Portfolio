import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import { faSun, faMoon, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myLogo from "../media/logo-big.png";

const pages = [
  {
    title: "Accueil",
    url: "/",
  },
  {
    title: "A propos",
    url: "/about",
  },
  {
    title: "Parcours",
    url: "/pathway",
  },
  // {
  //   title: "Projets",
  //   url: "/projets",
  // },
  {
    title: "Blog",
    url: "/blogs",
  },
];

const NavBar = ({
  toggleMode,
  isDarkMode,
}: {
  toggleMode: () => void;
  isDarkMode: boolean;
}) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        mx: { xs: 0, sm: 5, md: 10 },
        width: "auto",
        backgroundColor: isDarkMode ? "var(--red-dark)" : "var(--blue-navbar)",
        borderRadius: "5px",
        mb: 2,
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <IconButton
            size="large"
            aria-label="Button pour changer de mode : clair ou sombre"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleMode}
            sx={{ color: isDarkMode ? "white" : "black" }}
          >
            {isDarkMode ? (
              <FontAwesomeIcon icon={faMoon} />
            ) : (
              <FontAwesomeIcon icon={faSun} />
            )}
          </IconButton>
          <Button onClick={() => navigate("/")}>
            <Box
              component="img"
              src={myLogo}
              alt="Logo de Perrine Oswald"
              sx={{
                width: 60,
                mx: "auto",
                backgroundColor: "white",
                p: 1,
                borderRadius: "50%",
              }}
            />
          </Button>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Button pour changer de mode : clair ou sombre"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: isDarkMode ? "white" : "black" }}
            >
              <FontAwesomeIcon icon={faList} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={() => { handleCloseNavMenu(); navigate(page.url); }}>
                  <Typography
                    textAlign="center"
                  >
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => navigate(page.url)}
                sx={{
                  height: "100%",
                  color:
                    window.location.pathname === page.url
                      ? "black"
                      : isDarkMode
                      ? "white"
                      : "black",
                  mx: 4,
                  backgroundColor:
                    window.location.pathname === page.url
                      ? "var(--beige)"
                      : "transparent",
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
