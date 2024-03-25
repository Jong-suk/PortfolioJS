import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const PortfolioItem = ({ _id, category, title, imgSrc }) => {
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        const fetchImage = async () => {
            try {
                setLoading(false);
            } catch (error) {
                console.error('Error fetching image:', error.message);
                setLoading(false);
            }
        };

        fetchImage();
    }, []);

    return (
        <div className="portfolio-item" data-category={category}>
            {loading && <Loader />}
            <Link to={`/portfolio/${_id}`} style={{ textDecoration: 'none' }}>
                <div className="portfolio-item-inner outer-shadow">
                    <div className="portfolio-item-img">
                        {imgSrc ? (
                            <Image src={imgSrc} alt={title} />
                        ) : (
                            <div>No Image Available</div>
                        )}
                        <span className="view-project">view project</span>
                    </div>
                    <p className="portfolio-item-title">{title}</p>
                </div>
            </Link>
        </div>
    );
};

export default PortfolioItem;