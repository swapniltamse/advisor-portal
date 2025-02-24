import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const MarketingMaterials = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    // Replace with your Spring Boot endpoint URL
    axios.get('http://localhost:8080/documents')
      .then(response => setMaterials(response.data))
      .catch(error => console.error('Error fetching marketing materials:', error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Marketing Materials</Typography>
      <List>
        {materials.map((item) => (
          <ListItem key={item.id} button component="a" href={item.url} target="_blank">
            <ListItemText primary={item.name} secondary={item.category} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default MarketingMaterials;
