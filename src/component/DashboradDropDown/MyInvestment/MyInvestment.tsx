import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../MyInvestment/MyInvestment.css"
import { Button, Grid } from '@mui/material';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function createData(
  Date: string,
  PN: string,
  Inv: number,
  ROI: number,
  Status: string,
  Action: any,

) {
  return { Date, PN, Inv, ROI, Status, Action };
}

const rows = [
  createData('Dec 21', 'Website development', 100000, 150000, 'Active', <Button variant='contained'>Details</Button>  ),
  createData('Nov 30', 'App Development', 200000, 100000,'Active',   <Button variant='contained'>Details</Button>),
  createData('Oct 23','Project Mecha' , 300000, 100000,'Done', <Button variant='contained'>Details</Button>),
  createData('Feb 23', 'Project Point', 600000, 100000,'Active' , <Button variant='contained'>Details</Button>),
  createData('Jan 23','Project Zen' , 500000, 100000,'Done' , <Button variant='contained'>Details</Button>),
  createData('Mar 23','Command Program' , 500000, 100000,'Done' , <Button variant='contained'>Details</Button>),
  createData('Apr 23','Program Pad.' , 500000, 100000,'Done' , <Button variant='contained'>Details</Button>),
  createData('May 23','Dynamic Program' , 500000, 100000,'Done' , <Button variant='contained'>Details</Button>),
  createData('Jun 23','Project Force' , 500000, 100000,'Done' , <Button variant='contained'>Details</Button>),

];


const MyInvestment = () => {
  return (
    <>
    <Header/>
    <>
    <Grid xs={12} sm={10} md={8} lg={6}  id="table">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center' id="date">Date</TableCell>
            <TableCell align='center' id="pn">Project Name</TableCell>
            <TableCell align='center' id="inv">Investments</TableCell>
            <TableCell align='center' id="roi">ROI</TableCell>
            <TableCell align='center' id="sta">Status</TableCell>
            <TableCell align='center' id="act">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Date}
             >
              <TableCell align='center' id="table">{row.Date}</TableCell>
              <TableCell align='center'>{row.PN}</TableCell>
              <TableCell align='center'>{row.Inv}</TableCell>
              <TableCell align='center'>{row.ROI}</TableCell>
              <TableCell align='center'>{row.Status}</TableCell>
              <TableCell align='center'>{row.Action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </>
    <Footer/>
    </>
  )
}

export default MyInvestment