import igdb from 'igdb-api-node';
//import * as config from './config.json';

const { twitch_id, twitch_token } = require('./config.json');
const client = igdb(twitch_id, twitch_token);

export const searchGames = (searchTerm, resultLimit) => async (dispatch) => {
	const response = await client
		.fields('name,game')
		.limit(resultLimit)
		.sort('desc')
		.search(searchTerm)
		.request('/games');

	console.log(searchGames);
}