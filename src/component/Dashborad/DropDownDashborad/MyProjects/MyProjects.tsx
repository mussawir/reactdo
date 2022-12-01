import React from 'react'
import Footer from '../../../Footer/Footer'
import Header from '../../../Header/Header'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid } from '@mui/material';

import "../MyProjects/MyProjects.css";


function createData(
  Date: string,
  PN: string,
  Inv: number,
  time: string,
  fund: number,
  Action: any,

) {
  return { Date, PN, Inv, time, fund, Action };
}

const rows = [
  createData('Dec 21', 'Garments Factory', 10000, 'six months', 500, <Button variant="contained">Details</Button>),
  createData('Nov 30', 'School', 20000, 'one year', 1200, <Button variant="contained">Details</Button>),
  createData('Oct 23', 'Animals', 6000, 'two months', 1500, <Button variant="contained">Details</Button>),
  createData('Feb 23', 'Shop', 32000, 'eight months', 200, <Button variant="contained">Details</Button>),
  createData('Jan 23', 'Coaching', 72000, 'two years', 1920, <Button variant="contained">Details</Button>),
  createData('Nov 30', 'Showroom', 20000, 'one year', 1000, <Button variant="contained">Details</Button>),
  createData('Oct 23', 'Airport', 6000, 'two months', 2100, <Button variant="contained">Details</Button>),
  createData('Feb 23', 'Banquet', 32000, 'eight months', 2500, <Button variant="contained">Details</Button>),
  createData('Dec 21', 'Garments Factory', 10000, 'six months', 9500, <Button variant="contained">Details</Button>),
  createData('Nov 30', 'School', 20000, 'one year', 120, <Button variant="contained">Details</Button>),
  createData('Oct 23', 'Animals', 6000, 'two months', 3100, <Button variant="contained">Details</Button>),

];


const MyProjects = () => {
  return (
    <>
      <Header />
      <>
        <Grid id="mainGridofProjectmy1" xs={12} sm={10} md={8} lg={6}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" id="headingoftableofmyproject">Date</TableCell>
                  <TableCell align="center" id="headingoftableofmyproject">Project Name</TableCell>
                  <TableCell align="center" id="headingoftableofmyproject">Target Investments</TableCell>
                  <TableCell align="center" id="headingoftableofmyproject">Time</TableCell>
                  <TableCell align="center" id="headingoftableofmyproject">Fundraised</TableCell>
                  <TableCell align="center" id="headingoftableofmyproject">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.Date}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {row.Date}
                    </TableCell>
                    <TableCell align="center">{row.PN}</TableCell>
                    <TableCell align="center">{row.Inv}</TableCell>
                    <TableCell align="center">{row.time}</TableCell>
                    <TableCell align="center">{row.fund}</TableCell>
                    <TableCell align="center">{row.Action}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </>
      <Footer />
    </>
  )
}

export default MyProjects