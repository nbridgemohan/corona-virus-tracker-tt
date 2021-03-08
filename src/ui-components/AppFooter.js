
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
    logo: {
        height: '75px'
    },
    toolbar: {
        background: 'transparent',
        boxShadow: 'none'
    },
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
}));



export default function Footer() {
    const classes = useStyles();
    return (
        <div>
            <CssBaseline />
            <footer className={classes.stickToBottom}>

                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">Designed by <Link href="https://www.linkedin.com/in/bridgemohan">Nicholas Bridgemohan</Link> API from <Link href="https://thevirustracker.com/api">thevirustracker.com</Link> </Typography>
            </footer>
        </div>
    )
}
