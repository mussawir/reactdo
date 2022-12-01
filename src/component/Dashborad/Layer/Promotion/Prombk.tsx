import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TopBar from './../../TopBar/TopBar';
import SideBar from './../../Sidbar/SideBar';

function createData(
  name: string,
  calories: number,
  fat: number,
) {
  return { name, calories, fat,};
}

const rows = [
  createData('Project A', 10, 150000,),
  createData('Project B', 20, 200000),
  createData('Project C', 6, 100000),
];

const  Promotion =() =>{
  return (
    <>
        <TopBar/>
 <SideBar />
 <div>TExt here</div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell align="right">Key Issues*</TableCell>
            <TableCell align="right">Return of Investment(in $)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>
  );
}

export default Promotion;