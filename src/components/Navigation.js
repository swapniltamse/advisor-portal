import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

const Navigation = () => (
  <AppBar position="static">
    <Toolbar>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/marketing">Marketing Materials</Button>
      <Button color="inherit" component={Link} to="/pipeline">In-Pipeline Customers</Button>
      <Button color="inherit" component={Link} to="/renewals">Renewals</Button>
      <Button color="inherit" component={Link} to="/inforce">Inforce Status</Button>
    </Toolbar>
  </AppBar>
);

export default Navigation;
