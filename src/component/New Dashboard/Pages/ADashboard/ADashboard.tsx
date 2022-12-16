import React from 'react'
import AdminDashboard from '../../AdminDashboard'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import './AdminStyle.css'
import TopAppBar from '../../TopBarDashboard/TopAppBar';
type Props = {}

const ADashboard = (props: Props) => {
  return (


    <>
    <TopAppBar/>

<Box sx={{ flexGrow: 1,m:2 }}>
      <Grid container spacing={2}>
       
        <Grid item xs={5} sm={4} md={2} lg={2}>
        <AdminDashboard/>
        </Grid>
        <Grid item xs={7} sm={8} md={10} lg={10}>
       <>
       DASHBOARD
       
       
       </>
        </Grid>
      </Grid>
    </Box>
      
 
    

    </>
  )
}

export default ADashboard