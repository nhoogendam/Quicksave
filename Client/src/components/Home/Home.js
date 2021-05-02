import React , {useEffect, useState} from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Reviews from '../Reviews/Reviews';
import Form from '../Form/Form';
import { useDispatch} from 'react-redux';
import { getReviews } from '../../actions/reviews.js';



const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    //const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getReviews());
    }, [currentId, dispatch]);

    return(
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Form currentId = {currentId} setCurrentId = {setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Reviews setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;