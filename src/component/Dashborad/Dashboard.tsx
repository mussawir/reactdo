import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Funding from "./Layer/Funding/Funding";
import TopBar from './TopBar/TopBar';
import SideBar from "./Sidbar/SideBar";


export default function Dashboard() {


  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
      
       <TopBar/>

       <SideBar/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <>
            <Funding />
          </>
        </Box>
      </Box>
    </>
  );
}
