import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomDropDown from '../Form/CustomDropDown/CustomDropDown';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import '../Step3/LocationStyle.css';
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
type Props = {};

type Values = {
  age: string;
};

const Location = (props: Props) => {



  return (
    <>
      <Grid id="FirstGridForlocation">
        <Box>
          <Typography id="headingoflocation">
            Last one—set a location for your project.
          </Typography>
          <br></br>
          <Typography id="pafterhead3">
            Pick your country of legal residence if you’re raising funds as an
            <br></br> individual. If you’re raising funds for a business or
            nonprofit, select the<br></br> country where the entity’s tax ID is
            registered.
          </Typography>
          <Box sx={{ flexGrow: 1 }} id="boxofdropdowns3">
            <Grid style={{width:"100%"}}>
              <Grid item xs={12} lg={12} >
                <Grid id="Dropdownn1h1">
                  
                  <FormControl  style={{width:"100%"}} >
                  <CustomDropDown  />
                    </FormControl>
                 
                </Grid>
                <Typography id="lineafterD">
                  Who’s eligible to run a Kickstarter project?
                </Typography>
              </Grid>
            </Grid>
            <Divider id="divider3" />
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} columns={16} id="Grid2ndForlocation">
                <Grid item xs={12} sm={6} md={6} lg={8}>
                  <Grid>
                    <KeyboardBackspaceIcon id="arrowicoN" />
                    <Button id="TypoGrid2oflocation">
                      {' '}
                      <Link to="/project/categories/subcategory/"> Additional Subcategory</Link>
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={8}>
                  <Grid>
                    <Button variant="contained" id="buttoncoloroflocation">
                    <Link to='/dashboard'>
                      
                    <span id="buttoncolorofLocationLink">Continue</span>  </Link>  
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Typography id="lineinbottomofGrid3">
            Please note: Your ability to edit, hide, or delete a project is
            limited after you launch a project.
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default Location;
