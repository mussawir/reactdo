import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomDropDown from '../Form/CustomDropDown/CustomDropDown';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../Step1/CategoriesStyle.css';
type Props = {};

type Values = {
  age: string;
};

const ages = [
  { value: '20-40', label: 'art' },
  { value: '40-50', label: 'Food' },
  { value: '40-50', label: 'comics' },
  { value: '40-50', label: 'crafts' },
  { value: '40-50', label: 'film and video' },
  { value: '40-50', label: 'Music' },
  { value: '40-50', label: 'Photography' },
  { value: '40-50', label: 'Theater' },
  { value: '40-50', label: 'crafts' },
  { value: '40-50', label: 'Technology' },
  { value: '40-50', label: 'Publishing' },
  { value: '40-50', label: 'Games' },
  { value: '40-50', label: 'Journalism' },
];

const Categories = (props: Props) => {
  const [values, setValues] = useState<Values>({
    age: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Grid id="FirstGridForCategory">
        <Box>
          <Typography id="headingofCatergoryscreen">
            First, let’s get you set up.
          </Typography>
          <Typography id="headingofCatergoryscreen">
            Select a primary category and subcategory for your <br></br>new
            project.
          </Typography>
          <Typography id="pafterhead">
            These will help backers find your project, and you can change them
            <br></br> later if you need to.
          </Typography>
          <Box sx={{ flexGrow: 1 }} id="boxofdropdowns">
            <Grid container spacing={2} columns={16} id="busyu">
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Grid id="Dropdownn1">
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
            <Divider id="divider" />
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} columns={16} id="Grid2ndForCategory">
                <Grid item xs={12} sm={6} md={6} lg={8}>
                  <Grid>
                    <Typography id="TypoGrid2ofCategory"></Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={8}>
                  <Grid>
                    <Button variant="contained" id="buttoncolorofCategory">
                      <Link to="/project/categories/subcategory" id="buttoncolorofCategoryLink">
                        Next: Additional Subcategory</Link>
                    </Button>

                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Typography id="lineinbottomofGrid">
            Please note: Your ability to edit, hide, or delete a project is
            limited after you launch a project.
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default Categories;
