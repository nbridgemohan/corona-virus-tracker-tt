import React from 'react';
import AppBarWrapper from './ui-components/AppBarWrapper'
import BottomNavWrapper from './ui-components/BottomNavWrapper'
import AppFooter from './ui-components/AppFooter'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GetData from './components/GetData';
import Summary from './components/Summary';
import Latest from './components/Latest';
import Tips from './components/Tips';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { connect } from "react-redux";

import './App.css';



const mapStateToProps = (state) => {
  return {
    stats: state.stats,
    news: state.news
  };
}

function ConnectedApp({ news, stats }) {
  let countryStatData = undefined
  let countryNewsData = undefined
  if (news || stats) {
    countryStatData = stats[0]
    countryNewsData = news[0]
  }


  return (
    <Router>
      <div>
        <GetData />

        <div>
          <Grid container>
            <Grid item xs={12}>
              <AppBarWrapper />
            </Grid>
            <Grid item xs={12} container direction="row" justify="center" alignItems="center">
              <Switch>

                <Route path="/tips">
                  <Tips />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <Summary countryStatData={countryStatData} />
                </Route>
              </Switch>
            </Grid>
            <Grid item xs={12} >
              <Box display={{ xs: 'block', md: 'none' }}>
                <BottomNavWrapper />
              </Box>
              <Box display={{ xs: 'none', md: 'block' }}>
                <AppFooter />
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </Router>
  );


}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
