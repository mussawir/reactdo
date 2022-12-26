import React, { useState } from "react";
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import { styled, alpha } from '@mui/material/styles';
import {  InputBase, Typography } from "@mui/material";
import "../Header/Header.css"
import Stack from "@mui/material/Stack";
import logo from "../images/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import DiscoverModal from "../DiscoverModal/DiscoverModal";




export default function Header() {


const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));
  const [open, setOpen] = useState(false);
  return (
    <>
    <AppBar position="sticky" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Grid container spacing={2}>
                <Grid xs={2}>
                <Typography id="Discover">
                                            <DiscoverModal />
                                        </Typography>
                </Grid>
                <Grid xs={2} >
                  <Grid >

                  <Link to="/project" id="StartaProject">
                                            Start a project
                                        </Link>
                  </Grid>
                </Grid>
                <Grid xs={4}>
                  <Grid id="LogoStyling">
                    <Link to="/">
                      <img src={logo} id="imgsizeoflogo" />
                    </Link>
                  </Grid>
                </Grid>
                <Grid xs={2}>
                  <Grid>
                    <Search id="search">
                      <SearchIconWrapper  ></SearchIconWrapper>
                      <SearchIcon />
                      {/* <StyledInputBase id="searchField"
                        placeholder="Search"
                        inputProps={{ "aria-label": "search" }}
                      /> */}
                    </Search>
                  </Grid>
                </Grid>
                <Grid xs={2}>
                  <Grid id="Login">
                  <Link to="/login" id="loginLink"> Login  </Link></Grid>
                </Grid>
              </Grid>
           
          <Hidden xsDown>
            
            
          </Hidden>
          <Hidden smUp>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
     
        <ListItem ><Link to="/"><img src={logo} id="imgsizeoflogo" /></Link> <SearchIcon /></ListItem> 
        <Divider />
            <ListItem > <DiscoverModal /></ListItem>
            <Divider />
            <ListItem > <Link to="/project" id="loginLink"> Start a project  </Link> </ListItem>
            <Divider />
            <ListItem >  <Link to="/login" id="loginLink"> Login  </Link> </ListItem>
            <Divider />
      
        </List>
      </SwipeableDrawer>
    </AppBar>



    <Grid xs={12}  style={{display:"flex",justifyContent:"center"}}>
                <Stack direction="row" spacing={2} id="button1x1">
                    <Grid xs={12} lg={4} >
                      <Link to="/project" id="color">
                        <Typography id="istSection">
                            Become an invester
                        </Typography></Link>
                    </Grid>
                    <Grid xs={12} lg={4} >
                      <Link to="/"  id="color">
                      <Typography  id="iistSection">
                            Become a member
                        </Typography></Link>
                        
                    </Grid>
                    <Grid xs={12}  lg={4}>
                    <Link to="/login"  id="color">
                        <Typography  id="iiistSection" >
                            Join the investingverse
                        </Typography></Link>
                    </Grid>
                </Stack>
            </Grid>

</>


  );
}