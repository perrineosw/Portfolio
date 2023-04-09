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
    const lightStyles = {color: "black", backgroundColor: "white", "bg-homeBg": true, "bg-homeBg-dark": false,};
    const darkStyles = { color: "white", backgroundColor: "transparent", "bg-homeBg": false, "bg-homeBg-dark": true,};

    /* stylesBgRed */
    const lightstylesBgRed = { "bg-[#E96464]": true, "perso-bg-red": true, "perso-bg-red-dark": false };
    const darkstylesBgRed = { "bg-[#E96464]": false, "perso-bg-red": false, "perso-bg-red-dark": true };

    /* stylesBgYellow */
    const lightstylesBgYellow = { "perso-bg-yellow": true, "perso-bg-yellow-dark": false };
    const darkstylesBgYellow = { "perso-bg-yellow": false, "perso-bg-yellow-dark": true };

    /* stylesBgOrange */
    const lightstylesBgOrange = { "perso-bg-orange": true, "perso-bg-orange-dark": false };
    const darkstylesBgOrange = { "perso-bg-orange": false, "perso-bg-orange-dark": true };

    /* stylesBgGreen */
    const lightstylesBgGreen = { "perso-bg-green": true, "perso-bg-green-dark": false };
    const darkstylesBgGreen = { "perso-bg-green": false, "perso-bg-green-dark": true };

    /* stylesBgPurple */
    const lightstylesBgPurple = { "perso-bg-purple": true, "perso-bg-purple-dark": false };
    const darkstylesBgPurple = { "perso-bg-purple": false, "perso-bg-purple-dark": true };

    /* stylesBgBlue */
    const lightstylesBgBlue = { "perso-bg-blue": true, "perso-bg-blue-dark": false };
    const darkstylesBgBlue = { "perso-bg-blue": false, "perso-bg-blue-dark": true };

    /* stylesBgGray */
    const lightstylesBgGray = { "bg-[#E1E1E1]": true, "perso-bg-gray": true, "perso-bg-gray-dark": false };
    const darkstylesBgGray = { "bg-[#E1E1E1]": false, "perso-bg-gray": false, "perso-bg-gray-dark": true };

    // Define the toggle function
    const toggleMode = () => {
        setIsDarkMode((prevState) => !prevState);
    };

    return (
        <div className={`${isDarkMode ? 'bg-homeBg-dark' : 'bg-homeBg'} lg:min-h-screen min-h-full bg-no-repeat bg-center bg-cover 
            bg-fixed md:pb-16 w-full custom-class`}
             style={isDarkMode ? darkStyles : lightStyles as React.CSSProperties}>
            <Router>
                <NavBar toggleMode={toggleMode} isDarkMode={isDarkMode}/>
                <Routes>
                    <Route path="/" element={<Home styles={isDarkMode ? darkStyles : lightStyles} />} />
                    <Route path="/home" element={<Home styles={isDarkMode ? darkStyles : lightStyles} />} />
                    <Route path="/about" element={<About styles={isDarkMode ? darkStyles : lightStyles}
                                                         stylesBgRed={isDarkMode ? darkstylesBgRed : lightstylesBgRed}
                                                         stylesBgYellow={isDarkMode ? darkstylesBgYellow : lightstylesBgYellow}
                                                         stylesBgOrange={isDarkMode ? darkstylesBgOrange : lightstylesBgOrange}
                                                         stylesBgGreen={isDarkMode ? darkstylesBgGreen : lightstylesBgGreen}
                                                         stylesBgPurple={isDarkMode ? darkstylesBgPurple : lightstylesBgPurple}
                                                         stylesBgBlue={isDarkMode ? darkstylesBgBlue : lightstylesBgBlue}
                                                         stylesBgGray={isDarkMode ? darkstylesBgGray : lightstylesBgGray}
                                                         isDarkMode={isDarkMode} />} />
                    <Route path="/pathway" element={<Pathway styles={isDarkMode ? darkStyles : lightStyles}
                                                             stylesBgRed={isDarkMode ? darkstylesBgRed : lightstylesBgRed}
                                                             stylesBgYellow={isDarkMode ? darkstylesBgYellow : lightstylesBgYellow}
                                                             stylesBgOrange={isDarkMode ? darkstylesBgOrange : lightstylesBgOrange}
                                                             stylesBgGreen={isDarkMode ? darkstylesBgGreen : lightstylesBgGreen}
                                                             stylesBgPurple={isDarkMode ? darkstylesBgPurple : lightstylesBgPurple}
                                                             stylesBgBlue={isDarkMode ? darkstylesBgBlue : lightstylesBgBlue}
                                                             stylesBgGray={isDarkMode ? darkstylesBgGray : lightstylesBgGray}
                                                             isDarkMode={isDarkMode} />} />
                    <Route path="/projets" element={<Projets styles={isDarkMode ? darkStyles : lightStyles}
                                                             stylesBgRed={isDarkMode ? darkstylesBgRed : lightstylesBgRed}
                                                             stylesBgYellow={isDarkMode ? darkstylesBgYellow : lightstylesBgYellow}
                                                             stylesBgOrange={isDarkMode ? darkstylesBgOrange : lightstylesBgOrange}
                                                             stylesBgGreen={isDarkMode ? darkstylesBgGreen : lightstylesBgGreen}
                                                             stylesBgPurple={isDarkMode ? darkstylesBgPurple : lightstylesBgPurple}
                                                             stylesBgBlue={isDarkMode ? darkstylesBgBlue : lightstylesBgBlue}
                                                             stylesBgGray={isDarkMode ? darkstylesBgGray : lightstylesBgGray}
                                                             isDarkMode={isDarkMode} />} />
                    <Route path="/blogs" element={<Blogs styles={isDarkMode ? darkStyles : lightStyles}
                                                         stylesBgRed={isDarkMode ? darkstylesBgRed : lightstylesBgRed}
                                                         stylesBgYellow={isDarkMode ? darkstylesBgYellow : lightstylesBgYellow}
                                                         stylesBgOrange={isDarkMode ? darkstylesBgOrange : lightstylesBgOrange}
                                                         stylesBgGreen={isDarkMode ? darkstylesBgGreen : lightstylesBgGreen}
                                                         stylesBgPurple={isDarkMode ? darkstylesBgPurple : lightstylesBgPurple}
                                                         stylesBgBlue={isDarkMode ? darkstylesBgBlue : lightstylesBgBlue}
                                                         stylesBgGray={isDarkMode ? darkstylesBgGray : lightstylesBgGray}
                                                         isDarkMode={isDarkMode} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
