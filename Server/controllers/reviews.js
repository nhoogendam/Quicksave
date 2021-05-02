import ReviewMessage from '../models/reviewMessage.js';
import mongoose from 'mongoose';

export const getReview = async(req, res) => {
    try{
        const reviewMessages = await ReviewMessage.find();

        res.status(200).json(reviewMessages)
    } catch(err){
        res.status(404).json({ message: err.message });
    }
}

export const createReview =  async (req, res) => {
    const review = req.body;

    const newReview = new ReviewMessage(review);
    try{
        await newReview.save();
        res.status(201).json(newReview);
        
    } catch(err){
        res.status(409).json({ message: err.message });
    }
}

export const updateReview = async( req, res) => {
    const { id: _id} = req.params;
    const review = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No review with that name');

       const updateReview = await ReviewMessage.findByIdAndUpdate(_id, review, { new: true});

       res.json(updateReview);
}

export const deleteReview = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No review with that Id");

    await ReviewMessage.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully'});
}