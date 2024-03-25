import React, { useState, useEffect, useRef } from 'react';
import Loader from './Loader';
import { Image } from 'react-bootstrap';

const PortfolioPopup = ({portfolioItem}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [showProjectDetails, setShowProjectDetails] = useState(false);
    const [loading, setLoading] = useState(false);
    const popupRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                await new Promise(resolve => setTimeout(resolve, 2000));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handlePrevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === 0 ? portfolioItem.screenshots.length - 1 : prevIndex - 1));
    };

    const handleNextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === portfolioItem.screenshots.length - 1 ? 0 : prevIndex + 1));
    };

    const toggleProjectDetails = () => {
        if (showProjectDetails) {
            setShowProjectDetails(false);
            setTimeout(() => {
                const projectDetailsContainer = document.querySelector(".pp-details");
                projectDetailsContainer.style.maxHeight = 0 + "px";
            }, 100);
        } else {
            setShowProjectDetails(true);
            setTimeout(() => {
                const projectDetailsContainer = document.querySelector(".pp-details");
                projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";
                popupRef.current.scrollTop = projectDetailsContainer.offsetTop;
            }, 100);
        }
    };
    
    const handleClosePopup = () => {
        window.location.href = '/portfolio';
    };

    return (
        <div className="pp portfolio-popup" ref={popupRef}>
            {loading && <Loader />}
            <div className={`pp-details ${showProjectDetails ? 'active' : ''}`}>
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

            <div className="separator"></div>

            <div className="pp-main">
                <div className="pp-main-inner">
                    <div className="pp-project-details-btn outer-shadow hover-in-shadow" onClick={toggleProjectDetails}>
                        Project Details <i className={`fas ${showProjectDetails ? 'fa-minus' : 'fa-plus'}`}></i>
                    </div>
                    <div className="pp-close-btn outer-shadow hover-in-shadow" onClick={handleClosePopup}>&times;</div>
                    <div className="pp-image-container">
                        <Image src={portfolioItem.screenshots[slideIndex]} alt="img" className="pp-img outer-shadow" />
                        {/* pp navigation */}
                        <div className="pp-prev" onClick={handlePrevSlide}><i className="fas fa-play"></i></div>
                        <div className="pp-next" onClick={handleNextSlide}><i className="fas fa-play"></i></div>
                    </div>
                    <div className="pp-counter">{slideIndex + 1} of {portfolioItem.screenshots.length}</div>
                </div>
                <div className="pp-loader">
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPopup;