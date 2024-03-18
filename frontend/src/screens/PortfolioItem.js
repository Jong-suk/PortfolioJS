import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PortfolioPopup from '../components/PortfolioPopup';
import Loader from '../components/Loader';

const PortfolioItem = () => {
    const { id } = useParams();
    const [portfolioItem, setPortfolioItem] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPortfolioItem = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/portfolio/${id}`);
                if (!response.ok) {
                    throw new Error('Portfolio item not found');
                }
                const data = await response.json();
                setPortfolioItem(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching portfolio item:', error.message);
                setLoading(false);
            }
        };

        fetchPortfolioItem();
    }, [id]);

    return (
        <div>
            {loading && <Loader />}
            <div className="portfolio-item" data-category={portfolioItem && portfolioItem.category}>
                {portfolioItem && <PortfolioPopup portfolioItem={portfolioItem} />}
            </div>
        </div>
    );
}

export default PortfolioItem