import React, {useState} from 'react';
import './App.css';
import './css/custom.css';
import './css/custom-dark.css';
import './css/structure.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Pathway from './pages/Pathway';
import Projets from './pages/Projets/Projets';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/NotFound';

/* https://bostamihtml.ibthemespro.com/homePage.html */

const App = () => {
    // Define state to toggle between light and dark modes
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Define styles for light and dark mode
    const lightStyles = {
        color: "black",
        backgroundColor: "white",
        "bg-homeBg": true,
        "bg-homeBg-dark": false,
    };
    const darkStyles = {
        color: "white",
        backgroundColor: "transparent",
        "bg-homeBg": false,
        "bg-homeBg-dark": true,
    };

    /* stylesBgRed */
    const lightstylesBgRed = { "perso-bg-red": true, "perso-bg-red-dark": false };
    const darkstylesBgRed = { "perso-bg-red": false, "perso-bg-red-dark": true };

    // Define the toggle function
    const toggleMode = () => {
        setIsDarkMode((prevState) => !prevState);
    };

    // Set the styles based on the mode
    const styles = isDarkMode ? darkStyles : lightStyles;

    return (
        <div className={`${isDarkMode ? 'bg-homeBg-dark' : 'bg-homeBg'} lg:min-h-screen min-h-full bg-no-repeat bg-center bg-cover 
            bg-fixed md:pb-16 w-full custom-class`}
             style={styles as React.CSSProperties}>
            <Router>
                <NavBar toggleMode={toggleMode} isDarkMode={isDarkMode}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About styles={isDarkMode ? darkStyles : lightStyles}
                                                         stylesBgRed={isDarkMode ? darkstylesBgRed : lightstylesBgRed}
                                                         isDarkMode={isDarkMode}/>} />
                    <Route path="/pathway" element={<Pathway />} />
                    <Route path="/projets" element={<Projets />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
