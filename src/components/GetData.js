import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { getStatData, getNewsData } from "../js/actions/index";
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles({

  mainLoader: {
    position: "fixed", /* or absolute */
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"

  }

})

function GetData(props) {

  const classes = useStyles()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.getStatData() && props.getNewsData()) {
      setLoading(false)
    }
  }, [])

  return (
    <div className={classes.mainLoader}>
      {loading &&
        <CircularProgress />
      }
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    apiData: state.rootReducer,
  };
}

export default connect(
  mapStateToProps,
  { getStatData, getNewsData }
)(GetData);

