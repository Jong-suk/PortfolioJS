import React, { useEffect, useState } from 'react';

const StyleSwitcher = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
        document.body.classList.add('dark');
        } else {
        document.body.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const updateIcon = () => {
            const dayNightIcon = document.querySelector('.day-night i');
            if (dayNightIcon) {
                if (theme === 'dark') {
                    dayNightIcon.classList.remove('fa-moon');
                    dayNightIcon.classList.add('fa-sun');
                } else {
                    dayNightIcon.classList.remove('fa-sun');
                    dayNightIcon.classList.add('fa-moon');
                }
            }
        };

        updateIcon();
    }, [theme]);

    return (
        <div className={`style-switcher outer-shadow`}>
            <div className="day-night s-icon outer-shadow hover-in-shadow" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
            </div>
        </div>
    );
};

export default StyleSwitcher;