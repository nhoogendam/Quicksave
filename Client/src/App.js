import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import useStyles from './styles';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar.js';
import Auth from './components/Auth/Auth.js';
import Game from './components/Game/Game.js';

const App = () => {
    const classes = useStyles();

    return(
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar/>
                <Switch>
                    <Route path="/" exact component = {Home} />
                    <Route path ="/auth" exact component = {Auth} />
                    <Route path="/game" exact component = {Game} />
                </Switch>
            </Container>
        </BrowserRouter>
        
    );
}

export default App;