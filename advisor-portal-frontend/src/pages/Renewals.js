import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import axios from 'axios';

const Renewals = () => {
  const [renewals, setRenewals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/renewals')
      .then(response => setRenewals(response.data))
      .catch(error => console.error('Error fetching renewals:', error));
  }, []);

  const handleCall = (customer) => {
    // Implement the call-to-action logic (e.g., open a dialer or mark the follow-up)
    alert(`Call ${customer.name} at ${customer.phone}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Renewals</Typography>
      <List>
        {renewals.map(item => (
          <ListItem key={item.id}>
            <ListItemText 
              primary={`${item.customerName} - Policy ends on ${item.endDate}`} 
              secondary={`Policy ID: ${item.policyId}`} 
            />
            <Button variant="contained" color="primary" onClick={() => handleCall(item)}>
              Call
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Renewals;
