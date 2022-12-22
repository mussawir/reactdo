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
import axios from "axios";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {};

const DiscoverProjects = (props: Props) => {
  const [project, SetProject] = React.useState<[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/project")
      .then((res) => {
        console.log(res, "Get Data");
        SetProject(res?.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  const projectImage =
    "http://localhost:5000/dickens-lin-aIME5bDuANI-unsplash-64df.jpg";

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
      <Box p={5} id="Gridforwelovecards">
        {project.map((item: any) => (
            <Link to="/discovery_overlay">
          <Grid sx={{ flexGrow: 1 }} columns={12}>
            <Grid xs={12} lg={2} style={{ margin: "20px" }}>
              <Card style={{ padding: "10px" }}>
                <Typography id="TopTitle">{item?.title}</Typography>
                {/* {item?.targetLaunchDate} */}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={projectImage}
                    alt="Card Image"
                  />
                </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item?.subTitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item?.description}
                  </Typography>

                  <br />
                  <Divider />
                  <br />

                  <Typography
                    variant="body2"
                    color="text.dark"
                    style={{ padding: "5px" }}
                  >
                    <Grid>
                      {" "}
                      {item?.targetAmount}{" "}
                      <span style={{ color: "gray" }}> pledged </span>{" "}
                    </Grid>
                    <Grid>
                      {" "}
                      {item?.investorShare}{" "}
                      <span style={{ color: "gray" }}> funded </span>
                    </Grid>
                    <Grid>
                      {" "}
                      {item?.duration}{" "}
                      <span style={{ color: "gray" }}> hours to go </span>
                    </Grid>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          </Link>
        ))}
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
