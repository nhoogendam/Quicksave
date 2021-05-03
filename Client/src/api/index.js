import axios from 'axios';

const url = 'http://localhost:5000/Reviews';

export const fetchReviews = () => axios.get(url);
export const createReview = (newPost) => axios.post(url, newPost);
export const likeReview = (id) => axios.patch(`${url}/${id}/likePost`);
export const updateReview = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deleteReview = (id) => axios.delete(`${url}/${id}`);

