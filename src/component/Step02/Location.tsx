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
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import axios from "axios";
type Props = {};

const Location = (props: Props) => {
  const [countryData, SetCountryData] = React.useState<any[]>([]);
  const [Contry, setContry] = React.useState<any>("");

  const handleCountry = (event: SelectChangeEvent) => {
    setContry(event.target.value);
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/country")
      .then((res) => {
        console.log(res, "country Cheched");
        let CountryApi = res?.data;
        SetCountryData(CountryApi);
        console.log(countryData, "country Data");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  return (
    <>
      <Header />
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
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={Contry}
                      label="Select  Country"
                      onChange={handleCountry}
                    >
                      {countryData.map((item: any) => (
                        <MenuItem value={item?.CountryId}>
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
                    <Button variant="contained" id="buttoncoloroflocation">
                      <Link to="/ProjectOverview">
                        <span id="buttoncolorofLocationLink">Continue</span>{" "}
                      </Link>
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
