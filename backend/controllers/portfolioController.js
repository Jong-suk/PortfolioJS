import asyncHandler from 'express-async-handler';
import PortfolioItem from '../models/PortfolioItem.js';

const getPortfolioItems = asyncHandler( async (req, res) => {
    try {
        const portfolioItems = await PortfolioItem.find();

        if(!portfolioItems) {
            return res.status(404).json({ message: 'Portfolio not found' });
        }
        
        const portfolioItemsWithBase64Images = await Promise.all(portfolioItems.map(async (item) => {
            return {
              ...item.toJSON(),
            };
        }));
      
        res.json(portfolioItemsWithBase64Images);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

const getPortfolioItemById = asyncHandler(async (req, res) => {
    const portfolioItem = await PortfolioItem.findById(req.params.id);
    
    if (portfolioItem) {
      try {
  
        const portfolioItemWithBase64Images = {
          ...portfolioItem.toJSON(),
        };
  
        res.json(portfolioItemWithBase64Images);
      } catch (error) {
        console.error('Error converting images to base64:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    } else {
      res.status(404).json({ message: 'Portfolio item not found' });
    }
});  

export { getPortfolioItems, getPortfolioItemById }