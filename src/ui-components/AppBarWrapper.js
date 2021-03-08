import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SubjectIcon from '@material-ui/icons/Subject';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import {
  useHistory
} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }),
);



function ListItemButton(props) {
  let history = useHistory();
  function handleClick() {
    history.push("/" + props.route);
  }
  return (
    <ListItem button key={props.route} onClick={handleClick}>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>);
}



export default function AppBarWrapper() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const shareOnFacebook = () => {
    window.open(
      "https://www.facebook.com/sharer.php?u=https%3A%2F%2Fcorona-virus-tracker-tt.firebaseapp.com%2F", "_blank");
  }

  const shareOnTwitter = () => {
    window.open(
      "https://twitter.com/intent/tweet?url=https%3A%2F%2Fcorona-virus-tracker-tt.firebaseapp.com%2F&text=Keep%20up%20to%20date%20with%20the%20latest%20about%20COVID-19%20in%20Trinidad%20%26%20Tobago&hashtags=coronaviruscovid19trinidadandtobago", "_blank");
  }



  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >

      <List>
        <Box m={2}><Typography>COVID-19 Tracker Trinidad & Tobago</Typography></Box>
        <Divider />

        <ListItemButton route="summary" icon={<SubjectIcon />} text="Stats" />
        <Divider />
        <ListItem button key="facebook-share" onClick={shareOnFacebook}><ListItemIcon><FacebookIcon /></ListItemIcon><ListItemText primary="Share on Facebook" /></ListItem>
        <ListItem button key="twitter-share" onClick={shareOnTwitter}><ListItemIcon><TwitterIcon /></ListItemIcon><ListItemText primary="Share on Twitter" /></ListItem>
        <Divider />
        <ListItemButton route="about" icon={<SentimentSatisfiedAltIcon />} text="About" />

      </List>
    </div>
  );


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="p" className={classes.title}>
            COVID-19 Tracker Trinidad & Tobago
          </Typography>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}

