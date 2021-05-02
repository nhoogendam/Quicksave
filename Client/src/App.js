import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getReviews } from './actions/reviews';
import Reviews from './components/Reviews/Reviews.js';
import Form from './components/Forms/Form.js';
import Login from './components/Login/login.js';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getReviews());
    }, [currentId, dispatch]);

    return(
        <Container maxWidth="lg">
            <AppBar className = {classes.appBar} position="static" color = "inherit">
                <Typography className = {classes.heading} variant="h2" align="center">QuickSave.Me</Typography>
                <Button className = {classes.buttonLogin}  variant= "contained" color = "secondary" size= "small" onClick={() => {}}>Login</Button>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Form currentId = {currentId} setCurrentId = {setCurrentId} />
                            <Login />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Reviews setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;