import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            let current = '';

            sections.forEach(section => {
                // Type assertion for HTMLElement
                const htmlSection = section as HTMLElement; 
                const sectionTop = htmlSection.offsetTop;
                // Removed 'sectionHeight' as it was not being used
                // const sectionHeight = htmlSection.clientHeight; 

                if (window.scrollY >= (sectionTop - 250)) {
                    current = htmlSection.getAttribute('id') || '';
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const target = document.querySelector(`#${id}`);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <nav>
            <div className="nav-container">
                <a href="#home" className="logo" onClick={(e) => handleSmoothScroll(e, 'home')}>~/portfolio</a>
                <ul className="nav-links">
                    <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a></li>
                    <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => handleSmoothScroll(e, 'about')}>About</a></li>
                    <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={(e) => handleSmoothScroll(e, 'skills')}>Skills</a></li>
                    <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a></li>
                    <li><a href="#social" className={activeSection === 'social' ? 'active' : ''} onClick={(e) => handleSmoothScroll(e, 'social')}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
