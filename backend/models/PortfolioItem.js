import mongoose from 'mongoose';

const portfolioItemSchema = new mongoose.Schema({
  category: String,
  title: String,
  imgSrc: Buffer,
  screenshots: [Buffer],
  description: String,
  date: String,
  tools: [String],
  webLink: String,
});

const PortfolioItem = mongoose.model('PortfolioItem', portfolioItemSchema);

export default PortfolioItem;