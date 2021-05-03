import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5000"});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchReviews = () => API.get('/reviews');
export const createReview = (newReview) => API.post('/reviews', newReview);
export const updateReview = (id, updateReview) => API.patch(`/reviews/${id}`, updateReview);
export const deleteReview = (id) => API.delete(`/reviews/${id}`);
export const likeReview = (id) => API.patch(`/reviews/${id}/likeReview`);

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);



