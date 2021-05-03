import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    gameName: String,
    userEmail: String,
    reviewText: String,
    rating: Number,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const ReviewMessage = mongoose.model('ReviewMessage', reviewSchema);

export default ReviewMessage;