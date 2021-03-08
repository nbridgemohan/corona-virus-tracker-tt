import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SlideItem from '../ui-components/SlideItem';


export default function Tips(props) {


    return (
        <div>
            <Grid item xs={12} container direction="row" justify="center" alignItems="center">
                <Box m={3}>
                    <Typography variant="h5">Tips</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={8} container direction="row" justify="center" alignItems="center">
                <Box m="auto" alignItems="center">
                    <SlideItem title="test" text="texsadsadasdasdasdasdasdasdsadst" href="https://google.com"/>
                </Box>
            </Grid>




        </div>
    );
}