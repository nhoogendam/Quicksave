import useStyles from './styles';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import { useDispatch } from 'react-redux';

const SearchBar = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleSearch = (e) => {
		if(e.target.value) {
			
		}
	};

	return (
		<TextField
			className={classes.searchBar}
			id='search'
			label='Search'
			variant='filled'
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>
						<SearchIcon />
					</InputAdornment>
				)
			}}
			onChange={handleSearch}
		/>
	);
}

export default SearchBar;