import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './src/Navbar.jsx';
import Footer from './src/Footer.jsx';
import Home from './src/Home.jsx';
import Menu from './src/Menu.jsx';
import About from './src/About.jsx';
import Contact from './src/Contact.jsx'; 
import Franchise from './src/Franchise.jsx'; 

// Helper component to fix scroll position on page change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                {/* Forces the page to top whenever a link is clicked */}
                <ScrollToTop />

                {/* Navbar stays at the top of every page */}
                <Navbar />

                {/* Main Content Area */}
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/franchise" element={<Franchise />} />
                    </Routes>
                </main>

                {/* Footer stays at the bottom of every page */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;