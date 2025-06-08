import React, { useEffect, useRef } from 'react';

const Skills: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // Scroll animation effect
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="skills" className="section fade-in" ref={sectionRef}>
            <h2 className="section-title">skills</h2>
            <div className="skills-grid">
                <div className="skill-category">
                    <h3>Frontend</h3>
                    <div className="skill-list">
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">EJS</span>
                        <span className="skill-tag">HTML5</span>
                        <span className="skill-tag">CSS3</span>
                        <span className="skill-tag">Bootstrap CSS</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Backend</h3>
                    <div className="skill-list">
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">Express</span>
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">Typescript</span>
                        <span className="skill-tag">MongoDB</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Tools & Others</h3>
                    <div className="skill-list">
                        <span className="skill-tag">Git</span>
                        <span className="skill-tag">AWS</span>
                        <span className="skill-tag">Linux</span>
                        <span className="skill-tag">Nginx</span>
                        <span className="skill-tag">Cloudflare</span>
                        <span className="skill-tag">Canva</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
