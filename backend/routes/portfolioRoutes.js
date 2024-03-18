import express from 'express';
import { getPortfolioItems, getPortfolioItemById } from '../controllers/portfolioController.js';

const router = express.Router();

router.route('/').get(getPortfolioItems)
router.route('/:id').get(getPortfolioItemById);

export default router;