import React, { useState,useEffect } from "react";
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
  const [select, setSelect] = React.useState<any>("");
  const [subSelect, setsubSelect] = React.useState<any>("");


  const [data, setData] = React.useState<any[]>([]);
  const handlesubSelect = (event: SelectChangeEvent) => {
    setsubSelect(event.target.value as string);
  };

  // const handSelect = (event: SelectChangeEvent) => {
  //   setSelect(event.target.value as string);
  // };
  //  console.log(select);

  const handSelect = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);

   console.log(select,"ID-GET-YOU_SELECTED");
   
  };

  useEffect(() => {
    axios.get("https://sea-lion-app-en7u9.ondigitalocean.app/categories")
    .then((res) => {
    console.log(res,"Respose Cheched");
      let  ApiResponse  = res?.data;
      
       setData(ApiResponse)
 

      //console.log(data,"usestate Data")
    })
    .catch((err) => {
      console.log(err, "error");
    });
  
    
  }, []);
  

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
                      onChange={handSelect}
                    >
                      {data.map((item:any) => (
                      <MenuItem value={item?.categoryId}>{item?.name}</MenuItem>
                      ))} 
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
                    
                      
              
                {/* <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={subSelect}
                      label="Age"
                      onChange={handlesubSelect}
                    >
                      {data.map((item) => (
                      <MenuItem value={item?.name}>{item?.name}</MenuItem>
                      ))} 
                    </Select> */}
                
        
                
              
           
                    
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
  <table className="table table-bordered">  
            
    
            {/* {data.map((item) => (  
              //const ={categoryId,name} = item;
              <tr >  
                
                
                <td>{item?.name}</td>  
                <td>{item?.categoryId}</td>  
                  
              </tr>  
            ))}   */}
    
        </table>  


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
