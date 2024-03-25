import { useEffect, useState } from 'react';
import axios from 'axios'
import PortfolioItem from '../components/PortfolioItem';
import Loader from '../components/Loader';

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredPortfolioItems, setFilteredPortfolioItems] = useState([]);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        setLoading(true);
        const {data} = await axios.get('https://portfoliojs-1q2i.onrender.com/api/portfolio');
        setPortfolioItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching portfolio items:', error);
        setLoading(false);
      }
    };

    fetchPortfolioItems();
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredPortfolioItems(portfolioItems);
    } else {
      setFilteredPortfolioItems(portfolioItems.filter(item => item.category.split(' ').includes(activeCategory)));
    }
  }, [portfolioItems, activeCategory]);

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="portfolio-section section" id="portfolio">
      {loading && <Loader />}
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="portfolio">Latest Works</h2>
          </div>
        </div>

        <div className="row">
          <div className="portfolio-filter">
            <span
              className={`filter-item ${activeCategory === 'all' ? 'active outer-shadow' : ''}`}
              onClick={() => handleCategoryFilter('all')}
            >
              all
            </span>
            <span
              className={`filter-item ${activeCategory === 'web-application' ? 'active outer-shadow' : ''}`}
              onClick={() => handleCategoryFilter('web-application')}
            >
              web application
            </span>
            <span
              className={`filter-item ${activeCategory === 'data-analysis' ? 'active outer-shadow' : ''}`}
              onClick={() => handleCategoryFilter('data-analysis')}
            >
              data analysis
            </span>
            <span
              className={`filter-item ${activeCategory === 'web-ui/ux' ? 'active outer-shadow' : ''}`}
              onClick={() => handleCategoryFilter('web-ui/ux')}
            >
              Web UI/UX
            </span>
            <span
              className={`filter-item ${activeCategory === 'art' ? 'active outer-shadow' : ''}`}
              onClick={() => handleCategoryFilter('art')}
            >
              art
            </span>
          </div>
        </div>

        <div className="row portfolio-items">
          {filteredPortfolioItems.map((item) => (
            <PortfolioItem key={item._id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio
