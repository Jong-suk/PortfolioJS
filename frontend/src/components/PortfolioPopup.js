import React, { useState, useEffect, useRef } from 'react';
import Loader from './Loader';
import { Image } from 'react-bootstrap';

const PortfolioPopup = ({portfolioItem}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const popupRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                await new Promise(resolve => setTimeout(resolve, 2000));
                setLoading(false);
                setSlideIndex(0);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % portfolioItem.screenshots.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [portfolioItem.screenshots.length]);

    const handlePrevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === 0 ? portfolioItem.screenshots.length - 1 : prevIndex - 1));
    };

    const handleNextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === portfolioItem.screenshots.length - 1 ? 0 : prevIndex + 1));
    }; 
    
    const handleClosePopup = () => {
        window.location.href = '/portfolio';
    };

    return (
        <div className="pp portfolio-popup" ref={popupRef}>
            {loading && <Loader />}

            <div className={`pp-details `}>
                <div className="pp-close-btn outer-shadow hover-in-shadow" onClick={handleClosePopup}>&times;</div>
                <div className="pp-details-inner">
                    <div className="pp-title">
                        <h2>{portfolioItem.title}</h2>
                        <p>
                            Category - <span className="pp-project-category">{portfolioItem.category}</span>
                        </p>
                    </div>
                    <div className="pp-project-details">
                        <div className="row">
                            <div className="description">
                                <h3>Project Brief:</h3>
                                <p>{portfolioItem.description}</p>
                            </div>
                            <div className="info">
                                <h3>Project Info</h3>
                                <ul>
                                    <li>Date - <span>{portfolioItem.date}</span></li>
                                    <li>Tools - <span>{portfolioItem.tools.join(', ')}</span></li>
                                    {portfolioItem.webLink && (
                                        <li>
                                            Web - <span><a href={portfolioItem.webLink} target="_blank" rel="noreferrer">{portfolioItem.title}</a></span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pp-main">
                <div className="pp-main-inner">
                    <div className="pp-image-container">
                        <div className="pp-prev" onClick={handlePrevSlide}><i className="fas fa-chevron-left"></i></div>
                        <div className="pp-next" onClick={handleNextSlide}><i className="fas fa-chevron-right"></i></div>
                        <Image src={portfolioItem.screenshots[slideIndex]} alt="img" className="pp-img outer-shadow" />
                    </div>

                    <div className="pp-circles">
                        {portfolioItem.screenshots.map((_, index) => (
                            <div
                                key={index}
                                className={`pp-circle ${index === slideIndex ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                </div>
                <div className="pp-loader">
                    <div></div>
                </div>
            </div>
            
        </div>
    );
};

export default PortfolioPopup;