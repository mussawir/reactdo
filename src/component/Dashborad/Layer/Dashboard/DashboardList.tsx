import React, { useEffect } from "react";
import Dashboard from "../../Dashboard";
import Box from "@mui/material/Box";
import {Grid , Button, ButtonBase, Typography, Paper} from "@mui/material";
import TopAppBar from "../../../New Dashboard/TopBarDashboard/TopAppBar";
import { Link } from "react-router-dom";
import {List ,ListItem,ListItemButton,ListItemText}  from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import "../Dashboard/DashboradList.css"
import StarIcon from '@mui/icons-material/Star';
import { __PATH } from "../../../env";
import axios from "axios";
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
type Props = {};
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
const DashboardList = (props: Props) => {

  const [user,setUser]=  React.useState<string[]>([]); 
  const [project, SetProject] = React.useState<[]>([]);
  // const imgpath = "http://localhost:5000/";
  useEffect(() => {
    axios
      //.get("`_PATH` +project")
      .get(`${__PATH}project`)
      .then((res) => {
        console.log(res, "Project List All");
        SetProject(res?.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);




  useEffect(() => {
    axios
      .get(`${__PATH}user`)
      .then((res) => {
         console.log(res , "User List");
       
        setUser(res?.data);
         console.log(user, "userId Data......");
      })
      .catch((err) => {
        console.log(err, "error");
      });


  }, []);




  return (
    <>
      <TopAppBar />

      <Box sx={{ flexGrow: 1, m: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={5} sm={4} md={2} lg={2}>
            <Dashboard />
          </Grid>
          <Grid item xs={7} sm={8} md={10} lg={10}>
            <>


            <Link to="/categories"><Button variant="contained"> Create a Project  <AddIcon/></Button> </Link>


  <Grid xs={12}>
    <Grid id="projectList">
       Project List
    </Grid>
    </Grid>


    {/* {project?.map((item:any) =>(
  <List
      sx={{ width: '100%', maxWidth:"100%", bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
    
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText  >  {item?.title}</ListItemText>
          <ListItemText  >  {item?.subTitle}</ListItemText>
        </ListItemButton>
      </ListItem>
     
    </List>
          ))} */}

{project?.map((item:any) =>(  
     <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: "100%",
        flexGrow: 1,
        backgroundColor: "white",
        marginBottom:"20px"
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={__PATH + item?.projectImage} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              {item?.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
              {item?.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Duration: {item?.duration}
              </Typography>
            </Grid>
          
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            {item?.targetAmount}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
      ))}

            </>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashboardList;
