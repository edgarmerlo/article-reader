import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          Article Reader v0.1.0
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
