import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Brightness1RoundedIcon from '@material-ui/icons/Brightness1Rounded';

import MainLoader from '../ui-components/MainLoader';
import PieChartCases from '../ui-components/PieChartCases';

export default function Summary(props) {


  if (props.countryStatData === undefined) {
    return <MainLoader />
  }
  else {
    let data = props.countryStatData['countrydata'][0]

    let pieChartData = [
      { name: 'Total Cases', value: data["total_cases"] }, { name: 'Total Recovered', value: data["total_recovered"] }, { name: 'Death Toll', value: data["total_deaths"] },
    ];

    return (
      <div>
        <Grid item xs={12} container direction="row" justify="center" alignItems="center">
          <Box m={3}>
            <Typography variant="h5">COVID-19 Summary</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} container direction="row" justify="center" alignItems="center">
          <PieChartCases data={pieChartData} />
        </Grid>
        <Grid item xs={12} container direction="row" justify="center" alignItems="center">
          <Box m={1}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell align="center">Cases (Total):</TableCell>
                    <TableCell align="center">{data["total_cases"]}</TableCell>
                    <TableCell align="center"><Brightness1RoundedIcon style={{ color: "#FF8042" }} /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Recovered:</TableCell>
                    <TableCell align="center">{data["total_recovered"]}</TableCell>
                    <TableCell align="center"><Brightness1RoundedIcon style={{ color: "#0088FE" }} /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">Deaths:</TableCell>
                    <TableCell align="center">{data["total_deaths"]}</TableCell>
                    <TableCell align="center"><Brightness1RoundedIcon style={{ color: "#FF0000" }} /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">New Cases(Today):</TableCell>
                    <TableCell align="center">{data["total_new_cases_today"]}</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </TableContainer>

          </Box>
        </Grid>


      </div>
    );
  }


}