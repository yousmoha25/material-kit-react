import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

function GlobalView() {
  
  return (
    <> 
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: '#cfe8fc', height: 'content'}}>
      <Paper elevation={20}>
      <Grid container spacing={3}>
        <Grid xs="auto">
        <Typography variant="h6" component="h6">Bonjour le monde de demain</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid xs="auto">
        <Typography variant="h6" component="h6">Bonjour le monde de demain</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid xs="auto">
        <Typography variant="h6" component="h6">Bonjour le monde de demain</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid xs="auto">
        <Typography variant="h6" component="h6">Bonjour le monde de demain</Typography>
        </Grid>
      </Grid>
      </Paper>
      </Box>
    </Container>
    </>
  )
}

export default GlobalView