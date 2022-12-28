import React from "react";
import Container from "@mui/material/Container";
import { Button, Grid, Stack, Typography } from "@mui/material";
import updates from "../images/updates_05.png";

import "../discoveryOverlay/discoveryOverlayStyle.css";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import ExploreIcon from "@mui/icons-material/Explore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Footer from "../Footer/Footer";
import TopBar from "../Dashborad/TopBar/TopBar";
import TabsDicover from "../discoveryOverlay/TabsDiscovers/TabsDicover";
import { Link } from 'react-router-dom';

type Props = {};

function discoveryOverlay(props: Props) {
  return (
    <>
      <TopBar />
      <Grid className="invertingXcArDs" xs={12} md={12} sm={12} lg={12}>
        <Grid id="topHeadIngIdofCaRd" xs={12} md={12} sm={12} lg={12}>
          <Grid xs={12} md={12} sm={12} lg={12}>
            <Typography id="HeadingOfCRad">TOKYO JAZZ JOINTS</Typography>
            <Typography className="lineAFTERCJ">
              A photobook documenting Japan's vanishing world of jazz 'kissa'
              coffee shops and bars.
            </Typography>
          </Grid>
          <Grid container>
            <Grid xs={12} sm={12} md={8} lg={8}>
              {/* <img
                id="pictureOfcArD"
                src="https://ksr-ugc.imgix.net/assets/039/397/711/8975fd96ab5a080a5586aff4679dd904_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1670273566&auto=format&frame=1&q=92&s=acb983705e627434b2d666bb7aa0971c"
                alt=""
              /> */}

              <Grid>
                {/* <source  src="https://youtu.be/gbRRpOnmERA" type="video/mp4" />
                Download thesfdre */}
                {/* <video autoPlay loop controls width="95%" height="350"   poster="https://ksr-ugc.imgix.net/assets/039/397/711/8975fd96ab5a080a5586aff4679dd904_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1670273566&auto=format&frame=1&q=92&s=acb983705e627434b2d666bb7aa0971c">
                   <source src="https://youtu.be/gbRRpOnmERA"  type="video/mp4"/>
                </video> */}
             

            <iframe width="98%" height="400" src="https://www.youtube.com/embed/gbRRpOnmERA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
              </Grid>
            </Grid>
            <Grid xs={12} sm={12} md={4} lg={4} id="pledgedupid">
              <Typography id="he26594">$26,594</Typography>
              <small>pledged of $31,933 goal</small>
              <Typography id="hp294">237</Typography>
              <Typography>backers</Typography>
              <Typography id="hp294">31</Typography>
              <Typography>days</Typography>
              <Button
                variant="contained"
                id="buttonofbackthisproject"
                color="primary"
              >
                <Link to="/investerinfo">     Back this project</Link>
           
              </Button>
              <Grid id="ICONSALIGNED">
                {" "}
                <Button variant="outlined" color="error">
                  <AddAlertIcon /> Remind me
                </Button>
                <FacebookIcon id="iconsinserted" />
                <TwitterIcon id="iconsinserted" />
                <EmailIcon id="iconsinserted" />
                <InstagramIcon id="iconsinserted" />
              </Grid>
              <p id="ICONSALIGNEDx2">
                All or nothing. This project will only be funded if it reaches
                its goal by Sun, January 22 2023 1:56 PM UTC +05:00.
              </p>
            </Grid>
          </Grid>
          <br></br>
          <Grid id="ICONSALIGNEDx3">
            <Stack direction="row" spacing={1}>
              <FavoriteIcon />
              <Typography id="ICONSALIGNEDx3">Project we love</Typography>
              <ExploreIcon />
              <Typography id="ICONSALIGNEDx3">Photobooks</Typography>
              <LocationOnIcon />
              <Typography id="ICONSALIGNEDx3">Tokyo japan</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={12} sm={12} md={12} lg={12} id="SecondGridofCArDs">
        <Grid id="SecondGridSecondidofid">
          <Grid xs={12} sm={12} md={4} lg={4}>
            <Typography id="typoofseconidG">
              Kickstarter connects creators with backers to fund projects.
            </Typography>
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4}>
            <Typography id="typoofseconidG">
              Rewards aren’t guaranteed, but creators must regularly update
              backers.
            </Typography>
          </Grid>
          <Grid xs={12} sm={12} md={4} lg={4}>
            <Typography id="typoofseconidG">
              You’re only charged if the project meets its funding goal by the
              campaign deadline.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

     <TabsDicover/>




<br/>

<>
{/* <Footer /> */}
</>

    </>
  );
}

export default discoveryOverlay;
