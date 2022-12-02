import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../Step1/CategoriesStyle.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
type Props = {

};

const Categories = (props: Props) => {
  const [select, setSelect] = React.useState("");
  const [subSelect, setsubSelect] = React.useState("");
  //const [data, setData] = React.useState([]);
  const handlesubSelect = (event: SelectChangeEvent) => {
    setsubSelect(event.target.value as string);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);

    console.log(select);

    axios
      .get("https://sea-lion-app-en7u9.ondigitalocean.app/project_categories")

      .then((res) => {
        console.log(res,"Respose Cheched");
       
        let ApiResponse = res?.data;
        
        //  setData(ApiResponse)
        console.log(ApiResponse, "Api Call Success!");

        //console.log(data,"usestate Data")
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  const students = [  
    {  
      'id': 1,   
      'name': "Jack",   
      'email': 'jack@gmail.com'  
    },  
    {  
      'id': 2,   
      'name': 'Mary',   
      'email': "mary@gmail.com",  
    },  
    {  
      'id': 3,   
      'name': 'John',   
      'email': 'john@gmail.com'  
    },  
];
  return (
    <>
      <Header />
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
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={select}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
              
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={8}>
                <Grid id="Dropdownn2">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Sub Select
                    </InputLabel>
                    
                    
                    
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={subSelect}
                      label="Age"
                      onChange={handlesubSelect}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>


<Grid>
  <>
  {/* <table className="table table-bordered">  
            <tr>  
                <th>ID</th>  
                <th>Name</th>  
                <th>Email</th>  
            </tr>  
    
            {res?.data?.map((name) => (  
              <tr >  
                <td>{name._id}</td>  
                <td>{name}</td>  
                  
              </tr>  
            ))}  
    
        </table>   */}


  {/* {students.map(name => (  
          <h1>  
            {name}  
          </h1>  
        ))}  */}
  {/* {data.map((_id, name) => {
                      return (
                        <tr key={name}>
                          <th scope="row">{_id}</th>
                      
                        </tr>
                      );
                    })} */}
                  </>
                  <Grid>
                    {/* <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eum molestiae ea voluptate, rem explicabo corporis. Soluta corrupti incidunt minima laborum perspiciatis ullam ipsam magni, dolorem dolor, repudiandae, dicta beatae!
                    </Typography> */}
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
                      <Link
                        to="/project/categories/subcategory"
                        id="buttoncolorofCategoryLink"
                      >
                        Next: Additional Subcategory
                      </Link>
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

      <Footer />
    </>
  );
};

export default Categories;
