import React from 'react'
import {useNavigate,  Link } from "react-router-dom";

import {List,Button} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import LoginIcon from '@mui/icons-material/Login';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import  "../Dashborad/DashboardStyle.css";

type Props = {}

const Dashboard = (props: Props) => {
  const navigate = useNavigate();
  
  const logout=()=>{                    
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>



    
 <List sx={{ width: '100%', maxWidth: 180,
 overflow: 'auto',
 maxHeight: 500,
  bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
       
            <DashboardIcon  id="iconStyle"/>
          
        </ListItemAvatar>
      <Link  to="/dashboard/iv">
      <ListItemText primary="Dashboard"   id="color"  />
        </Link>  
      </ListItem>
      <Divider  component="li" />
      <ListItem>
        <ListItemAvatar>
          
            <AdminPanelSettingsIcon id="iconStyle" />
          
        </ListItemAvatar>
        <Link to="/dashboard/funding"><ListItemText id="color" primary="Funding"  /></Link>
      </ListItem>
      <Divider  component="li" />
      <ListItem>
        <ListItemAvatar>
          
            <AutoGraphIcon id="iconStyle" />
          
        </ListItemAvatar>
        <Link to="/dashboard/disbursment">  <ListItemText  id="color"  primary="Disbursment" /></Link>
      </ListItem>
      <Divider  component="li" />

      <ListItem>
        <ListItemAvatar>
          
            <SupervisorAccountIcon  id="iconStyle"/>
          
        </ListItemAvatar>
        <Link to="/dashboard/promotion">  <ListItemText id="color"  primary="Promotion" /></Link>
      </ListItem>
      <Divider  component="li" />
      <ListItem>
        <ListItemAvatar>
          
            <AccountBoxIcon id="iconStyle" />
          
        </ListItemAvatar>
        <Link to="/dashboard/roi">  <ListItemText id="color"  primary="Roi" /></Link>
      </ListItem>
      <Divider  component="li" />
    

      <ListItem>
        <ListItemAvatar>
       
            <LoginIcon  id="iconStyle"/>
          
        </ListItemAvatar>
        <Button style={{padding:"0px"}} onClick={logout}>  <ListItemText  id="color"   className="logoutBtn">Logout</ListItemText></Button>
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

export default Dashboard;