import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import "./CategoriesStyle.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import Location from "../Step02/Location";
import TopBar from './../Dashborad/TopBar/TopBar';

type Props = {
};

const Categories = (props: Props) => {
  
  const navigate = useNavigate();
  ////Category ////
  const [getCatData, SetCatData] = React.useState<any[]>([]);
  const [catId, setCatId] = React.useState<any>("");
  const [SubCatData, SetSubCatData] = React.useState<any[]>([]);
  const [SubcatId, setSubCatId] = React.useState<any>("");

  //////////Created Project Api////////
  const [categoryId, SetcategoryId] = React.useState("");
  const [subcatId, setsubcatId] = React.useState("");
  const [docId, setdocId] = React.useState("");
  const [projectId, SetProjectId] = React.useState("");


  // On page load bring list of categories
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
    SetcategoryId(categoryID);
    console.log(categoryId, "categoryId");
    axios
      // .get("https://sea-lion-app-en7u9.ondigitalocean.app/subcategories/68a8d684-f6d1-4dee-9cc8-9c926ddacd41")
      .get("http://localhost:5000/subcategories/" + categoryID)
      .then((res) => {
        // console.log(res, "sub_categories Cheched");
        let SubCategoryApi = res?.data;
        SetSubCatData(SubCategoryApi);
        console.log(SubCatData, "sub_categories Data");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  ////Sub Category End////


  //Create a new project with categories and sub categories
  const handleCreateProject = (e: any) => {
    e.preventDefault();
    console.log();

    // axios.post("http://localhost:5000/project/create-project", { categoryId, subcatId})
    axios.post("http://localhost:5000/project/create-project", { categoryId:categoryId, subcategoryId: subcatId})  
    .then((res) => {
        console.log(res, "Created ProjectCreated ProjectCreated Project");
        let Projectid = res?.data.projectId;
        SetProjectId(res?.data.projectId);
        let Id = res?.data._id;
        setdocId(Id);
        // console.log("////////////");
        console.log(projectId);
        // console.log(docId);
        // console.log("///////////");
        Location(res?.data.projectId);
     
      })
      .catch((err) => {
        console.log(err, "error");
      });
      
  };

  const Location = (projectid: string) => {
    // 👇️ navigate to / location
    navigate('/location/'+ projectid);
  };

  const SubCatHandler = (event: SelectChangeEvent) => {
    setSubCatId(event.target.value as string);
   // console.log(SubcatId,"SubCategory idididdidididi");
   //SetSub Title
   setsubcatId(SubcatId);
      console.log(subcatId, "subcatId");
  };





  return (
    <>
      <TopBar />
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
                      {getCatData.map((item: any) => (
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
                      {/* {GetCatData.map((item: any) => (
                        <MenuItem value={item?.categoryId}>
                          {item?.name}
                        </MenuItem>
                      ))} */}

                      {SubCatData?.map((item: any) => (
                        <MenuItem value={item?.subcategoryId}>
                          {item?.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            {/* <Divider  /> */}
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} id="Grid2ndForCategory">
                <Grid item xs={12} sm={6} md={6} lg={9}>
                  <Grid>
                    <Typography id="TypoGrid2ofCategory"></Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                  <Grid style={{ display: "flex", justifyContent: "end" }}>
                    <Button
                      onClick={handleCreateProject}
                      variant="contained"
                      id="buttoncolorofCategory"
                    >
                      Next: Location
                      {/* <Link
                        to="/location/{projectId}"
                        id="buttoncolorofCategoryLink"
                      >
                      </Link>                     */}
                      </Button>
                      
                      {/* <Button variant="contained" id="buttoncoloroflocation" onClick={handleCreateProject}>
                      <Link to="/location/{projectId}">
                        <span id="buttoncolorofLocationLink">Continue</span>{" "}
                      </Link>
                    </Button> */}
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


