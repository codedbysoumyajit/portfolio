import React, { useEffect, useRef } from 'react';

const Social: React.FC = () => {
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
        <section id="social" className="section fade-in" ref={sectionRef}>
            <h2 className="section-title">connect</h2>
            <div className="social-links">
                <a href="mailto:pheonix85+dev@proton.me" className="social-link">
                    <i className="bi bi-envelope-fill social-icon"></i> <span>Email</span>
                </a>
                <a href="https://t.me/im_pheonix" className="social-link">
                    <i className="bi bi-telegram social-icon"></i> <span>Telegram</span>
                </a>
                <a href="https://github.com/codedbysoumyajit" className="social-link">
                    <i className="bi bi-github social-icon"></i> <span>GitHub</span>
                </a>
                <a href="https://x.com/CoderSoumyajit?t=-SYoZ8l3bmGr3VKqS7xhXA&s=09" className="social-link">
                    <i className="bi bi-twitter-x social-icon"></i> <span>Twitter</span>
                </a>
                <a href="https://discord.gg/Cqbxaf4Npm" className="social-link">
                    <i className="bi bi-discord social-icon"></i> <span>Discord</span>
                </a>
            </div>
        </section>
    );
};

export default Social;
