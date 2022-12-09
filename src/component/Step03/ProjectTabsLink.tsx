import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Grid } from '@mui/material';
import "../Step03/ProjectTabsLinkStyle.css"
import { Link } from "react-router-dom";
const style = {
    width: '100%',
    maxWidth: '100%' ,
    innerHeight: '120vh',
    bgcolor: 'background.paper',
    border: '1px solid grey',
};
type Props = {}

const ProjectTabsLink = (props: Props) => {
  return (
<Grid id="firstGridOfPreview">
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
      <CheckCircleOutlineIcon id="CircleCheckIcon"/>
      
        <Link to="/creatproject"> <ListItemText  primary= "Basic" secondary="Name your Project, upload an image or video and establish your campaign details."  /></Link>
      </ListItem>
      <Divider />
      <ListItem button divider>
      <CheckCircleOutlineIcon id="CircleCheckIcon"/>
        <ListItemText primary="Funding" secondary="Set your rewards and shipping costs." />
      </ListItem>
      <ListItem button>
      <CheckCircleOutlineIcon id="CircleCheckIcon"/>
        <ListItemText primary="Story" secondary="Add a detailed project discription and convey your risks and challenges." />
      </ListItem>
      <Divider light />
      <ListItem button>
      <CheckCircleOutlineIcon id="CircleCheckIcon"/>
        <ListItemText primary="My Team" secondary="Edit your kickstarter profile and add colaborators" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <br></br>
      <CheckCircleOutlineIcon id="CircleCheckIcon"/>
        <ListItemText primary="Payment Method" secondary="Verify details and link a bank account" />
      </ListItem>
    </List>
    </Grid>

  )
}

export default ProjectTabsLink;