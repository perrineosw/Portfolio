import React from 'react';
import './App.css';
import './custom.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pathway from './pages/Pathway';
import Projets from './pages/Projets/Projets';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/NotFound';

/* https://bostamihtml.ibthemespro.com/homePage.html */

const App = () => {
    return (
        <div className="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full custom-class">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/pathway" element={<Pathway />} />
                    <Route path="/projets" element={<Projets />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                {(window.location.pathname !== '/home') ? <Footer /> : ""}

            </Router>
        </div>
    );
};

export default App;
