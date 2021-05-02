import express from 'express';

import { getReview, createReview, updateReview, deleteReview } from '../controllers/reviews.js';
import auth from '../middleware/auth.js';

const router = express.Router();



router.get('/', getReview);
router.post('/', createReview);
router.patch('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;
