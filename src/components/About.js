import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


export default function About() {

    return (
        <div>
            <Grid item xs={12} container direction="row" justify="center" alignItems="center">
                <Box m={3}>
                    <Typography variant="h4">About</Typography>
                </Box>
            </Grid>
            <Grid item xs={12}container direction="row" justify="center" alignItems="center">
                <Box m={1}>
                    <Typography variant="h6"> Designed by <a href="https://www.linkedin.com/in/bridgemohan" target="_blank" rel="noopener noreferrer">Nicholas Bridgemohan</a></Typography>
                </Box>
            </Grid>
            <Grid item xs={12}container direction="row" justify="center" alignItems="center">
                <Box m={1}>
                    <Typography variant="h6">API from thevirustracker.com</Typography>
                </Box>
            </Grid>
        </div>
    );
}