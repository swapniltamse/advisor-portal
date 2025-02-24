import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

const InforceStatus = () => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/inforce')
      .then(response => setPolicies(response.data))
      .catch(error => console.error('Error fetching inforce policies:', error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Inforce Status</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Policy ID</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {policies.map(policy => (
              <TableRow key={policy.id}>
                <TableCell>{policy.policyId}</TableCell>
                <TableCell>{policy.customerName}</TableCell>
                <TableCell>{policy.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default InforceStatus;
