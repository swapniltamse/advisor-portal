import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        {
        <Typography variant="h3" gutterBottom>Welcome!<br />Why are you here today?</Typography>
        }
        <Typography variant="body1">
          Welcome to the True Express insurance advisor portal. 
          <br /> Select a section above to begin.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
