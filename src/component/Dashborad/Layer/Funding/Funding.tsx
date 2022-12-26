import React from "react";
import Dashboard from "../../Dashboard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TopAppBar from "../../../New Dashboard/TopBarDashboard/TopAppBar";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import "../../Layer/Funding/FundingStyle.css"

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

type Props = {};

const Funding = (props: Props) => {
  return (
    <>
      <TopAppBar />

      <Box sx={{ flexGrow: 1, m: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={5} sm={4} md={2} lg={2}>
            <Dashboard />
          </Grid>
          <Grid item xs={7} sm={8} md={10} lg={10}>
            <>
            <Grid xs={12}>
            <Grid id="FundingContainer">
       Funding 
    </Grid>
    </Grid>
            
            <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
            
            </>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Funding;
