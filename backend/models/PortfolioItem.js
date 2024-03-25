import mongoose from 'mongoose';

const portfolioItemSchema = new mongoose.Schema({
  category: String,
  title: String,
  imgSrc: String,
  screenshots: [String],
  description: String,
  date: String,
  tools: [String],
  webLink: String,
});

const PortfolioItem = mongoose.model('PortfolioItem', portfolioItemSchema);

export default PortfolioItem;