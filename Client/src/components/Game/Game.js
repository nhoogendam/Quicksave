import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';

import * as gameAPI from '../../api/games';

const Game = () => {
	const dispatch = useDispatch();

	const stuff = () => {
		dispatch(gameAPI.searchGames('sonic', 5));
	}

	return (
		<Container>
			<Button color='primary' variant='contained' onClick={stuff}>Gimme stuff</Button>
		</Container>
	);
};

export default Game;