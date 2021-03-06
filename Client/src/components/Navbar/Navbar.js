import React, {useState, useEffect} from 'react';
import {AppBar, Typography, Toolbar, Avatar, Button} from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar.js';

const NavBar = () => {
    const classes = useStyles();
    const  [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    //run after every render (every time the NavBar changes)
    //NOT! The second parameter means it only fires when location changes. This is react-router-dom stuff.
    useEffect(() => {
        const token =  user?.token;
        //JWT
        setUser(JSON.parse(localStorage.getItem('profile')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    
    const logout = () => {
        dispatch({ type: 'LOGOUT'});

        history.push('/');

        setUser(null);
    };

    return (
        <AppBar className = {classes.appBar} position="static">
            <div className = {classes.brandContainer}>
                <Typography component = {Link} to = "/" className = {classes.heading} variant='h2' align="center" >quicksave.me</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                <SearchBar />
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className = {classes.purple} alt = {user.result.name}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className = {classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant= "contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );

}

export default NavBar;