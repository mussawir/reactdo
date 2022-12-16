import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "../Step02/LocationStyle.css";
import { Link, useParams, useNavigate  } from "react-router-dom";
import Footer from "../Footer/Footer";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import axios from "axios";
import TopBar from "../Dashborad/TopBar/TopBar";
type Props = { 
};

// const Location:React.FC<Props> = (projectId) => {
const Location = (props: Props) => {
  const navigate = useNavigate();
  const [countries, SetCountries] = React.useState<string[]>([]); 
  const [countryId, setCountryId] = React.useState<string>("");
  const {projectId} = useParams();

  const handleCountry = (event: SelectChangeEvent) => {
    console.clear();
    setCountryId(event.target.value);
    console.log(countryId);
  }

  const handleupdateLocation = (e: any) => {
    e.preventDefault();
    // console.log({projectId});
    // console.log({countryId});
    
    axios.patch("http://localhost:5000/project/location/"+ projectId,  { countryId: countryId } )  
    .then((res) => {
       // console.clear();
         console.log(res, "Update Location ID");
        //  let Countryid = res?.data;
        //  console.log("Location Id",Countryid)
        toCreateProject(projectId); 
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }

  const toCreateProject = (projectId: any) => {
    // 👇️ navigate to / location
    navigate('/basic/'+ projectId);
  }


  useEffect(() => {
    axios
      .get("http://localhost:5000/country")
      .then((res) => {
         console.log(res.data, "Countries List");
        // let CountryApi = res?.data.countryId;
        SetCountries(res?.data);
        // console.log(countryId, "country Data");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  return (
    <>
      <TopBar />
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
            <Grid style={{ width: "100%" }}>
              <Grid item xs={12} lg={12}>
                <Grid id="Dropdownn1h1">
                  <FormControl sx={{ m: 1 }} style={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Select your country
                    </InputLabel>
                    {/* <label> {projectId}</label> */}
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={countryId}
                      label="Select  Country"
                      onChange={handleCountry}
                    >
                      {countries.map((item: any) => (
                        <MenuItem value={item?.countryId}>
                          {item?.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Typography id="lineafterD">
                  <span>
                    <HelpOutlineOutlinedIcon style={{ fontSize: "15px" }} />
                  </span>{" "}
                  Who’s eligible to run a Kickstarter project?
                </Typography>
              </Grid>
            </Grid>
            <Divider id="divider3" />
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} columns={12} id="Grid2ndForlocation">
                <Grid item xs={12} sm={6} md={6} lg={9}>
                  <Grid>
                    <KeyboardBackspaceIcon id="arrowicoN" />
                    <Button id="TypoGrid2oflocation" variant="text">
                      <Link to="/categories" id="catBack">
                        {" "}
                        Additional Category
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                  <Grid style={{ display: "flex", justifyContent: "end" }}>
                    <Button variant="contained" 
                    id="buttoncoloroflocation"
                    onClick={handleupdateLocation}
                    >
                      Continue
                      {/* <Link to="/ProjectOverview">
                        <span id="buttoncolorofLocationLink">Continue</span>{" "}
                      </Link> */}
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
      <Footer />
    </>
  );
};

export default Location;
