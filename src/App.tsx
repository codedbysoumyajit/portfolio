import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Social from './components/Social';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Social />
            <Footer />
        </>
    );
};

export default App;
