import express from 'express';

import { getReview, createReview, updateReview, deleteReview, likeReview } from '../controllers/reviews.js';
//import auth from '../middleware/auth.js';

const router = express.Router();



router.get('/', getReview);
router.post('/', createReview);
router.patch('/:id', updateReview);
router.delete('/:id', deleteReview);
router.patch('/:id/likeReview', likeReview);



export default router;
