import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ChatIcon from '@material-ui/icons/Chat';
import SubjectIcon from '@material-ui/icons/Subject';
import ShareIcon from '@material-ui/icons/Share';

import {
  useHistory
} from "react-router-dom";
const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});


function BottomNavigationActionButton(props) {
  let history = useHistory();
  function handleClick() {
    history.push("/" + props.route);
  }
  return (
    <BottomNavigationAction label="Latest" icon={props.icon} onClick={handleClick} />
  );
}

const toShare = {
  title: "COVID-19 Tracker Trinidad & Tobago",
  text: "Keep updated on the latest COVID-19 Virus news and statistics in Trinidad and Tobago.",
  url: "https://corona-virus-tracker-tt.firebaseapp.com/"
};

async function shareMe() {
  try {
    await navigator.share(toShare); // Will trigger the native "share" feature
  }
  catch (err) {
    console.log(err);
  }
}

export default function BottomNavWrapper() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.stickToBottom}
    >


      <BottomNavigationActionButton route="summary" icon={<SubjectIcon />} />
      <BottomNavigationAction label="" icon={<ShareIcon />} onClick={shareMe} />

    </BottomNavigation>
  );
}

