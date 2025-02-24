import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, List, ListItem, ListItemText, Typography } from '@mui/material';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    setLoading(true);
    setError(null);

    axios.get(`http://localhost:8080/search?q=${encodeURIComponent(query)}`)
      .then(response => {
        setResults(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Search error:', err);
        setError('An error occurred while searching.');
        setLoading(false);
      });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom align='center'>Search True Express</Typography>
      <TextField
        label="What are you looking for today?"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        disabled={loading}
        sx={{ display: 'block', margin: '0 auto' }} 
      >
        {loading ? 'Searching...' : 'Search'}
      </Button>
      {error && <Typography color="error" variant="body1">{error}</Typography>}
      <List>
        {results && results.length > 0 ? results.map((item, index) => (
          <ListItem key={index}>
            <ListItemText 
              primary={item.DocumentTitle || 'Untitled Document'} 
              secondary={item.DocumentExcerpt || 'No excerpt available'} 
            />
          </ListItem>
        )) : !loading && <Typography variant="body2" sx={{ mt: 2 }}>No results found.</Typography>}
      </List>
    </Container>
  );
};

export default SearchBox;
