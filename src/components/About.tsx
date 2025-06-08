import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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
                    // We can disconnect observer once visible if we only want it to animate once
                    // observer.disconnect(); 
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
        <section id="about" className="section fade-in" ref={sectionRef}>
            <h2 className="section-title">about_me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>I am Soumyajit Das, a Computer Application student from Kolkata currently pursuing my 11th-grade education. My passion lies in the intricacies of computer technology, encompassing both hardware and software.</p>
                    <p>I possess a strong self-learning aptitude, acquiring coding skills through independent study of documentation and open-source projects hosted on GitHub. This self-directed learning reflects my proactive approach to mastering new technologies.</p>
                    <p>My future aspirations are focused on specializing in cloud computing and cybersecurity, driven by a keen interest in these rapidly evolving fields. I am confident in my abilities and eager to contribute to innovative technological advancements.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
