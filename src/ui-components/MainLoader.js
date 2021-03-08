import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles({
  mainLoader: {
    position: "fixed", /* or absolute */
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
})

export default function MainLoader() {
  const classes = useStyles()

  return (
    <div className={classes.mainLoader}>
        <CircularProgress />
    </div>
  );
}


