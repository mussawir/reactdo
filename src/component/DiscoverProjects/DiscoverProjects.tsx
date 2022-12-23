import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../DiscoverProjects/DiscoverProjectsStyle.css";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { __PATH } from "../../component/env";

type Props = {};

const DiscoverProjects = (props: Props) => {
  const [project, SetProject] = React.useState<[]>([]);
  // const imgpath = "http://localhost:5000/";
  useEffect(() => {
    axios
      //.get("`_PATH` +project")
     .get(`${__PATH}project`)
      .then((res) => {
        console.log(res, "Get Data");
        SetProject(res?.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  const Root = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  }));

  return (
    <>
      <Header />

      <Grid id="GridforWeLove" xs={12} sm={12} md={12} lg={12}>
        <Typography id="Typo1forWeLove">Explore</Typography>
        <Typography id="Typo2forWeLove">56,015 projects</Typography>
      </Grid>
      <Divider />
   





  <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={4} id="cardContainer">
      <Grid xs sm={4} md={4} lg={4}> 
        {project.map((item: any) => (
          <Grid>
<Link  to="/discovery_overlay">
 <Card id="cardSection">
                  {/* <Typography id="TopTitle">{item?.title}</Typography> */}
                  {/* {item?.targetLaunchDate} */}
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={__PATH + item?.projectImage}
                      alt="Card Image"
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography id="CardSubTitle">{item?.subTitle}</Typography>
                    <Typography id="CardDescription">
                      {item?.description}
                    </Typography>

                    <Typography id="CardProjectBy">by {item?.title}</Typography>
                    <br />
                    <Divider />
                    <br />

                    <Typography id="footerCard">
                      <Grid id="footertext">
                        {item?.targetAmount}
                        <span id="footerSpan"> pledged </span>
                      </Grid>
                      <Grid id="footertext">
                        {item?.investorShare}{" "}
                        <span id="footerSpan"> funded </span>
                      </Grid>
                      <Grid id="footertext">
                        {item?.duration}
                        <span id="footerSpan"> hours to go </span>
                      </Grid>
                    </Typography>

                    <Typography id="footerCard">
                      <Grid id="footertext">
                        Product Design
                        <span id="footerSpan">
                          {" "}
                          <LocationOnIcon id="cardLocationIcon" /> Location{" "}
                        </span>
                      </Grid>
                    </Typography>
                  </CardContent>
                </Card></Link>
          </Grid>

))}
        </Grid>

      
        
      </Grid>
    </Box>
      <br></br>

 

      <Button variant="contained" color="primary" id="ButtonofLoadmore">
        Load More
      </Button>

      <Footer />
    </>
  );
};

export default DiscoverProjects;
