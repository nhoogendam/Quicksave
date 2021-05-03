import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Slider, TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch, useSelector} from 'react-redux';
import { createReview, updateReview } from '../../actions/reviews.js';

//Get the current Id


const Form = ( {currentId, setCurrentId}) => {
    const classes = useStyles();
    const [reviewData, setReviewData] = useState({gameName:'', reviewText:'',  rating: 0});
    const review = useSelector((state) => (currentId ? state.reviews.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if(review) setReviewData(review);
    }, [review]);

    const clear = () => {
        setCurrentId(0);
        setReviewData({ gameName:'', reviewText:'',  rating: 0 })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(reviewData);

        if(currentId){
            dispatch(updateReview(currentId, { ...reviewData, userEmail: user?.result?.userEmail }));
            clear();
        }
        else{ 
            // if(!(reviewData.gameName === '' ||
            // reviewData.userEmail === '' ||
            // (!Number.isInteger(reviewData.rating)))){
            //     if(reviewData.rating > 0 && reviewData.rating <= 5)
                    dispatch(createReview({ ...reviewData, userEmail: user?.result?.userEmail }));
            // }
            clear();
        }
    };

    const setRating = (e, val) => {
        setReviewData({...reviewData, rating: val});
    }

    if(!user?.result?.email){
        return(
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your own memories and like other's Reviews.
                </Typography>
            </Paper>
        )
    };

    
    return(
        <Paper className = {classes.paper}>
             <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h5">{currentId ? 'Editing': 'Creating'} a Review</Typography>
                <TextField name="gameName" required = "true" variant="outlined" label="Game" fullWidth value={reviewData.gameName} onChange={(e) => setReviewData({ ...reviewData, gameName: e.target.value})}/>
                <TextField name="reviewText"  variant="outlined" label="Review"  multiline = "true"  rows = "8" fullWidth value={reviewData.reviewText}  onChange={(e) => setReviewData({ ...reviewData, reviewText: e.target.value})}/>
                {/*<TextField name="rating"  variant="outlined" label="Rating"   fullWidth value={reviewData.rating}  onChange={(e) => setReviewData({ ...reviewData,  rating: e.target.value})}  />*/}
                <Slider name="rating" label="Rating" step={1} defaultValue={1} min={1} max={5} marks={true} valueLabelDisplay='auto' onChangeCommitted={setRating} />
                {/* <Typography variant="h6">Rating*</Typography> */}
                {/* <Slider name = "rating" label = "Rating"  step = {1} valueLabelDisplay = "on" defaultValue = {1} min = {1} max = {5} marks={true} onChange={(e) => setReviewData({ ...reviewData,  rating: e.target.value})}/> */}
                <Button className = {classes.buttonSubmit} variant= "contained" color = "primary" size= "large" type="submit" fullWidth>Submit</Button>
                <Button  variant= "contained" color = "secondary" size= "small" onClick = {clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;