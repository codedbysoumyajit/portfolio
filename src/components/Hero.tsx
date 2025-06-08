import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
    const texts = ['Full Stack Developer', 'Problem Solver', 'Code Enthusiast', 'Tech Explorer'];
    const [typedText, setTypedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing animation effect
    useEffect(() => {
        let timer: NodeJS.Timeout;

        const typeEffect = () => {
            const currentText = texts[textIndex];

            if (isDeleting) {
                setTypedText(prev => currentText.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            } else {
                setTypedText(prev => currentText.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            }

            // --- MAXIMALLY FASTER SPEEDS ---
            let typeSpeed = isDeleting ? 1 : 2; // Almost instant deleting (1ms) and typing (2ms)

            // When done typing a word
            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 400; // Pause at end of word (reduced further from 600ms to 400ms)
                setIsDeleting(true);
            }
            // When done deleting a word
            else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setTextIndex(prev => (prev + 1) % texts.length);
                typeSpeed = 100; // Pause after deleting (reduced from 150ms to 100ms)
            }
            
            timer = setTimeout(typeEffect, typeSpeed);
        };

        timer = setTimeout(typeEffect, 200); // Initial delay (reduced from 300ms to 200ms)

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, textIndex]);

    // Parallax effect (remains the same)
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const heroElement = document.querySelector('.hero') as HTMLElement;
            if (heroElement) {
                heroElement.style.transform = `translateY(${scrolled * 0.2}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>SOUMYAJIT DAS</h1>
                <p className="subtitle">Full Stack Developer</p>
                <div className="typing-text">
                    <span>{typedText}</span><span className="cursor">|</span>
                </div>
            </div>
            <div className="hero-arrow">
                <i className="bi bi-arrow-down-circle-fill"></i>
            </div>
        </section>
    );
};

export default Hero;
