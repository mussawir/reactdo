import React from 'react'
import {  Link } from "react-router-dom";
import  "../New Dashboard/AdminDashboardStyle.css"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import TopAppBar from './TopBarDashboard/TopAppBar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
type Props = {}

const AdminDashboard = (props: Props) => {
  return (
    <>
   {/* <TopAppBar/> */}



    
 <List sx={{ width: '100%', maxWidth: 180,
 overflow: 'auto',
 maxHeight: 500,
  bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DashboardIcon />
          </Avatar>
        </ListItemAvatar>
      <Link  to="/admindashboard/adashboard">
      <ListItemText primary="Dashboard"  />
        </Link>  
      </ListItem>
      <Divider  component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AdminPanelSettingsIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/admindashboard/admin"><ListItemText primary="Admin"  /></Link>
      </ListItem>
      <Divider  component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AutoGraphIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/admindashboard/projectdetails">  <ListItemText primary="Project" /></Link>
      </ListItem>
      <Divider  component="li" />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SupervisorAccountIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/admindashboard/projectdetails">  <ListItemText primary="User" /></Link>
      </ListItem>
      <Divider  component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccountBoxIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/admindashboard/projectdetails">  <ListItemText primary="Profile" /></Link>
      </ListItem>
      <Divider  component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/admindashboard/projectdetails">  <ListItemText primary="Setting" /></Link>
      </ListItem>
      <Divider  component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/admindashboard/projectdetails">  <ListItemText primary="Help" /></Link>
      </ListItem>
      <Divider  component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/admindashboard/projectdetails">  <ListItemText primary="Logout" /></Link>
      </ListItem>
      <Divider  component="li" />
    </List>

        {/* <ul id="mainContainer">
            <li> <Link to="/admindashboard">Home</Link></li>
            <li> <Link to="/admindashboard/admin">Admin</Link></li>
            <li> <Link to="/admindashboard/projectdetails">Projects</Link></li>
            <li> <Link to="/">Help</Link></li>
        </ul> */}
    </>
  )
}

export default AdminDashboard;