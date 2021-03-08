import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

export default function SlideItem(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4">
            <Box m="auto" alignItems="center">
            {props.title}
              </Box>
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6">
              
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
        <Box m="auto" alignItems="center">

            {props.text}
            </Box>
        </Typography>
      </div>
      <Divider variant="middle" />
      <div className={classes.section3}>
        <Button color="primary" href={props.href}>Learn More</Button>
      </div>
    </div>
  );
}