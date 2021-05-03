import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardMedia, Button, Typography} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import { deleteReview, likeReview } from '../../../actions/reviews';

const Review = ({review, setCurrentId}) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return(
        <Card className = {classes.card}>
            <CardMedia className = {classes.media} title={review.title} component='div' />
            <div className = {classes.overlay}>
                <Typography variant="h6">{review.gameName}</Typography>
            
            <CardActions className={classes.cardActions}>
                <Typography variant="h7">{review.userEmail} </Typography>
                <Typography variant="h7">{review.rating} / 5</Typography>
            </CardActions>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: "white"}} size="small" onClick = {() => setCurrentId(review._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className = {classes.details}>
                <Typography variant="body2" style={{color: "black"}} >{review.reviewText}</Typography>
            </div>
            <CardActions className= {classes.cardActions}>
                <Button size = "small" color="primary" onClick={() =>dispatch(likeReview(review._id))}>
                    <ThumbUpAltIcon fontSize = "small"/>
                    Like &nbsp;
                    {review.likeCount}
                </Button>
                <Typography variant="body2" style={{color: "grey"}}>{moment(review.createdAt).fromNow()}</Typography>
                <Button size = "small" color="primary" onClick={() => dispatch(deleteReview(review._id))}>
                    <DeleteIcon fontSize = "small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Review;