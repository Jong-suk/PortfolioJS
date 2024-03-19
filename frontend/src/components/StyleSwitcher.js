import React, { useEffect, useState } from 'react';

const StyleSwitcher = () => {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [color, setColor] = useState(localStorage.getItem('color') || '');

    const colors = {
        'color-1': '#fb839e', 
        'color-2': '#ec9412', 
        'color-3': '#1fc586', 
        'color-4': '#2eb1ed',
        'color-5': '#cc3a3b',
    };

    const alternateStyles = Object.keys(colors).map((title) => ({
        title,
        color: colors[title],
    }));

    const setActiveStyle = (color) => {
        setColor(color);
        setOpen(false);
        const root = document.documentElement;
        root.style.setProperty('--skin-color', color);
    };

    useEffect(() => {
        if (theme === 'dark') {
        document.body.classList.add('dark');
        } else {
        document.body.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        if (color) {
            document.documentElement.style.setProperty('--skin-color', color);
            localStorage.setItem('color', color);
        }
    }, [color]);

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

    useEffect(() => {
        updateIcon();
    }, [theme]);

    return (
        <div className={`style-switcher outer-shadow ${open ? 'open' : ''}`}>
            <div className="style-switcher-toggler s-icon outer-shadow hover-in-shadow" onClick={() => setOpen(!open)}>
                <i className="fas fa-cog fa-spin"></i>
            </div>
            <div className="day-night s-icon outer-shadow hover-in-shadow" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
            </div>
            <div className={`theme-colors ${open ? 'open' : ''}`}>
                <h4>Theme Colors</h4>
                <div className="colors">
                {alternateStyles.map((style) => (
                    <span
                    key={style.title}
                    className={`color ${color === style.title ? 'active' : ''}`}
                    style={{ backgroundColor: style.color }}
                    onClick={() => {
                        setActiveStyle(style.color);
                    }}
                    ></span>
                ))}
                </div>
            </div>
        </div>
    );
};

export default StyleSwitcher;