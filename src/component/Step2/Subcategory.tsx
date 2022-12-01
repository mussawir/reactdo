import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../Step2/SubcategoryStyle.css';
import Box from '@mui/material/Box';
import CustomDropDown from '../Form/CustomDropDown/CustomDropDown';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

type Props = {};



const Subcategory = (props: Props) => {



  return (
    <>
      <Grid id="FirstGridForSubCategory">
        <Box>
          <Typography id="headingofCatergoryscreen2">
            Select one more subcategory.
          </Typography>
          <br></br>
          <Typography id="pafterhead2">
            It’ll help us provide more relevant guidance for your project.
          </Typography>
          <Box sx={{ flexGrow: 1 }} id="boxofdropdowns2">
            <Grid container spacing={2} columns={16} id="busyu">
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Grid id="Dropdownn1h1">
                  <CustomDropDown
                    
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Grid id="Dropdownn2">
                  <CustomDropDown
                   
                  />
                </Grid>
              </Grid>
            </Grid>
            <Divider id="divider2" />
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} columns={16} id="Grid2ndForCategory2">
                <Grid item xs={12} sm={6} md={6} lg={8}>
                  <Grid>
                    <KeyboardBackspaceIcon id="iconSubcatgeory" />{' '}
                    <Button id="TypoGrid2ofCategory2">
                      <Link to="/project/categories">Category</Link>{' '}
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={8}>
                  <Grid>
                    <Button variant="contained" id="buttoncolorofCategory2">
                      <Link to="/project/categories/subcategory/location" id="buttoncolorofCategory2Link">Next: Location</Link>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Typography id="lineinbottomofGrid2">
            Please note: Your ability to edit, hide, or delete a project is
            limited after you launch a project.
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default Subcategory;
