import React, { useState, useEffect } from "react";
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
type Props = {};

const Categories = (props: Props) => {
  ////Category ////
  const [GetCatData, SetCatData] = React.useState<any[]>([]);
  const [catId, setCatId] = React.useState<any>("");
  const [SubCatData, SetSubCatData] = React.useState<any[]>([]);
  const [SubcatId, setSubCatId] = React.useState<any>("");

  const GetCats = (event: SelectChangeEvent) => {
    setCatId(event.target.value as string);
    console.log(catId,"Category");
  };

  const SubCatHandler = (event: SelectChangeEvent) => {
    setSubCatId(event.target.value as string);
    console.log(SubcatId,"Category");
  };

// Bring list of categories 
  useEffect(() => {
    axios
      .get("https://sea-lion-app-en7u9.ondigitalocean.app/categories")
      .then((res) => {
        // console.log(res, "categories Cheched");
        let CategoryApi = res?.data;
        SetCatData(CategoryApi);
        //console.log(data,"usestate Data")
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);
  ////Category End////

  /////////////////Sub-Category //////////////
  const GetSubCats = (event: SelectChangeEvent) => {
    
    setCatId(event.target.value as string);
    // console.log(catId,"sub Cat_categories Cheched");
    var categoryID = event.target.value;
    // alert(categoryID);
    axios
     // .get("https://sea-lion-app-en7u9.ondigitalocean.app/subcategories/68a8d684-f6d1-4dee-9cc8-9c926ddacd41")
      .get("http://localhost:5000/subcategories/" + categoryID)
      .then((res) => {
        // console.log(res, "sub_categories Cheched");
        let SubCategoryApi = res?.data;
        SetSubCatData(SubCategoryApi);
      //  console.log(SubCatData, "sub_categories Data");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  
  };
  ////Sub Category End////

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
                      Select Main Category
                    </InputLabel>

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={catId}
                      label="Select Main Category"
                      onChange={GetSubCats}
                    >
                      {GetCatData.map((item: any) => (
                        <MenuItem value={item?.categoryId}>
                          {item?.name}
                        </MenuItem>
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

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={SubcatId}
                      label="Sub Cat"
                      onChange={SubCatHandler}
                    >
                      {SubCatData?.map((list: any) => (
                        <MenuItem value={list?.subcategoryId}>
                          {list?.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
