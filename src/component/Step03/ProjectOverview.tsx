import { Button, Grid, Typography } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Divider from "@mui/material/Divider";
 import ProjectTabsLink from '../Step03/ProjectTabsLink';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../Step03/ProjectOverviewStyle.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import TopBar from "../Dashborad/TopBar/TopBar";
const style = {
  width: "100%",
  maxWidth: "100%",
  innerHeight: "120vh",
  bgcolor: "background.paper",
  border: "1px solid grey",
};
const style2 = {
  width: "100%",
  maxWidth: "100%",
  innerHeight: "120vh",
  bgcolor: "background.paper",
  border: "1px solid grey",
};

type Props = {
  // name:string
};

const ProjectOverview = (props: Props) => {
  return (
    <>
              {/* {props.name}  */}
    <TopBar/>
      <Grid>
        <Grid id="firstGridOfPreview">
          <Typography id="TypoOfPREVIEW1">Games Project</Typography>
          <Typography id="TypoOfPREVIEW2">by Brain M</Typography>
          <Grid id="iconAndPreviewheading">
            <RemoveRedEyeIcon id="iconofpreview" />
            <Button id="spanoficon">Preview</Button>
          </Grid>
        </Grid>
        <Divider id="DividerPreview" />
        <Grid id="firstGridOfPreviewx2">
          <Grid id="boxforGrid2x2">
            <Grid id="box1iinsideid">
              <FavoriteIcon id="FavIcon" />
              <Typography id="FavIcon">
                Take a moment to review our rules
              </Typography>
              <br></br>
              <Typography>
                Here are five rules every Kickstarter project must follow.
              </Typography>
              <Typography id="TypoAndIconofModel">
                <Typography id="numberinmodeler">1</Typography>Projects must{" "}
                <b> create something to share </b> with others.
              </Typography>
              <br></br>
              <Divider />
              <Typography id="TypoAndIconofModel">
                <Typography id="numberinmodeler">2</Typography>Projects must be
                honest and clearly presented..
              </Typography>
              <br></br>
              <Divider />
              <Typography id="TypoAndIconofModel">
                <Typography id="numberinmodeler">3</Typography>Projects can't
                fundraise for charity.
              </Typography>
              <br></br>
              <Divider />
              <Typography id="TypoAndIconofModel">
                <Typography id="numberinmodeler">4</Typography>Projects can't
                offer equity.
              </Typography>
              <br></br>
              <Divider />

              <Typography id="TypoAndIconofModel">
                <Typography id="numberinmodeler">5</Typography>Projects can't
                involve prohibited items.
              </Typography>
              <br></br>
              <Button variant="contained" color="primary" >
               <Link to='/creatproject' style={{color:"#fff"}}> Got it</Link>
              </Button>
              <br></br>
              <br></br>
              <a>Read more about our rules.</a>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Typography id="headingbeforedivider">Project Overview</Typography>
           <ProjectTabsLink />
          <Typography id="TypoOfPREVIEW3">
            Submit your project for preview
          </Typography>
          <Grid id="firstGridOfPreview">
            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem button>
                <CheckCircleOutlineIcon id="CircleCheckIcon" />

                <ListItemText
                  primary="Project Preview "
                  secondary="we'll check to make sure it follows our rules and guidelines."
                />
                <a>Please allow 1-3 bussiness days for a response.</a>
              </ListItem>
            </List>
          </Grid>
          <Typography id="Prepareheading">Prepare for launch</Typography>
          <Grid id="firstGridOfPreview">
            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem button>
                <CheckCircleOutlineIcon id="CircleCheckIcon" />
                <ListItemText
                  primary="Promotion "
                  secondary="Generate a project URL and activate your pre-launch page."
                />
              </ListItem>
            </List>
          </Grid>
          <Divider id="DividerPreview" />
          <Typography id="Prepareheading">Support</Typography>
          <Grid container>
            <Grid id="firstGridOfPreview" xs={12} sm={10} md={8} lg={6}>
              <List
                sx={style2}
                component="nav"
                grid-row
                aria-label="mailbox folders"
              >
                <ListItem button>
                  <CheckCircleOutlineIcon id="CircleCheckIcon" />
                  <ListItemText
                    primary="Creator Resources "
                    secondary="Learn about everything from shipping to communicating with backers."
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid id="firstGridOfPreview" xs={12} sm={10} md={8} lg={6}>
              <List sx={style2} component="nav" aria-label="mailbox folders">
                <ListItem button>
                  <CheckCircleOutlineIcon id="CircleCheckIcon" />
                  <ListItemText
                    primary="Creators Questions "
                    secondary="Get more help with any step of of the process"
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Divider id="DividerPreview" />
          <Grid id="deleteiconandtypo">
            <DeleteIcon id="Iconofdeletelast" />{" "}
            <Button id="buttoncolorofdelete">Delete Project</Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Grid>
          <Divider />
          <br></br>
        </Grid>
      </Grid>

      <Footer/>
    </>
  );
};

export default ProjectOverview;
