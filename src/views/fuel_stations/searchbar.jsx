import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({search, setSearch, handleSearch}) => {
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mt: 3 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search a fuel station by name"
                inputProps={{ 'aria-label': 'search a fuel station by name' }}
                onChange={e => setSearch(e.target.value)}
                value={search}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" color='secondary' onClick={handleSearch}>
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
    );
}

export default SearchBar;