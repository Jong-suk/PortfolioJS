import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const PortfolioItem = ({ _id, category, title, imgSrc }) => {
    const [imageSrc, setImageSrc] = useState('');
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const fetchImage = async () => {
            try {
              setLoading(true);
              console.log("Img Src: ", imgSrc);
              const response = await fetch(imgSrc);
              const data = await response.blob();
              const url = URL.createObjectURL(data);
              setImageSrc(url);
              setLoading(false);
            } catch (error) {
              console.error('Error fetching image:', error.message);
              setLoading(false);
            }
        };
    
        fetchImage();
      }, [imgSrc]);

  return (
    <div className="portfolio-item" data-category={category}>
      {loading && <Loader />}
      <Link to={`/portfolio/${_id}`} style={{ textDecoration: 'none' }}>
        <div className="portfolio-item-inner outer-shadow">
          <div className="portfolio-item-img">
            <Image src={ imageSrc } alt={title} />
            <span className="view-project">view project</span>
          </div>
          <p className="portfolio-item-title">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioItem;