import React, { useEffect, useRef } from 'react';

const Projects: React.FC = () => {
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
        <section id="projects" className="section fade-in" ref={sectionRef}>
            <h2 className="section-title">projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <div className="project-header">
                        <div className="project-title">Phoenix XShare</div>
                        <div className="project-tech">EJS, Express.js, Crypto.js</div>
                    </div>
                    <div className="project-body">
                        <p className="project-description">
                            Phoenix XShare is an open source web application that allows users to upload and share files easily and securely.
                        </p>
                        <div className="project-links">
                            <a href="https://github.com/codedbysoumyajit/Phoenix-XShare" className="project-link"><i className="bi bi-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-header">
                        <div className="project-title">KernelView</div>
                        <div className="project-tech">Python, PSutil, OS</div>
                    </div>
                    <div className="project-body">
                        <p className="project-description">
                            KernelView is a modern and powerful system information tool built in Python.
                        </p>
                        <div className="project-links">
                            <a href="https://github.com/codedbysoumyajit/KernelView" className="project-link"><i className="bi bi-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-header">
                        <div className="project-title">PyroQuanta</div>
                        <div className="project-tech">Discord.js, Gemini API, Node.js</div>
                    </div>
                    <div className="project-body">
                        <p className="project-description">
                            PyroQuanta is an AI-based open source discord bot powered by Google's Gemini Pro model.
                        </p>
                        <div className="project-links">
                            <a href="https://github.com/codedbysoumyajit/PyroQuanta" className="project-link"><i className="bi bi-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
