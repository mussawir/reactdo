import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import { Grid, IconButton, InputBase } from "@mui/material";
import Stack from "@mui/material/Stack";
import "../Header/Header.css"
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import SearchIcon from '@mui/icons-material/Search';
import DiscoverModal from "../DiscoverModal/DiscoverModal";


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

interface Header {

}

const Header: React.FC<Header> = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [oldSticky, newSticky] = React.useState("StikcyNav");
    window.onscroll = () => {
        let temp;
        let top = window.scrollY;
        if (top > 140) {
            temp = ("StikcyNav")
        }
        else {
            temp = "TopNavbar";
        }
        return newSticky(temp);

    }
    return (
        <>

            <Box sx={{ flexGrow: 1 }} className="TopBarx1">
                <AppBar id="TopNavbarx12" className={oldSticky}>
                    <Toolbar>
                        <Grid container spacing={2} id="tbnubdyhv">
                            <Grid item xs={1}>
                                <Grid className="searchCol">
                                    <Stack direction="row" spacing={2} id="button1">
                                        <Typography id="a3">
                                            <DiscoverModal />
                                        </Typography>


                                    </Stack>
                                </Grid>

                            </Grid>
                            <Grid item xs={2}>
                                <Grid>
                                    <Stack>
                                        <Link to="/project" id="a3">
                                            Start a project
                                        </Link>
                                    </Stack>

                                </Grid>
                            </Grid>


                            <Grid xs={2}>
                                <Link to="/">
                                    <img src={logo} id="imgsizeoflogo" />
                                </Link>
                            </Grid>

                            <Grid item xs={2} id="itemsysearch">
                                <Search id="a1">
                                    <SearchIconWrapper id="a1"></SearchIconWrapper>
                                    <SearchIcon />
                                    <StyledInputBase
                                        placeholder="Search"
                                        inputProps={{ "aria-label": "search" }}
                                    />
                                </Search>


                     
                            <Grid item xs={2} id="itemsysearch2">
                           
                                    <Link to="/login">
                                        Login
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Toolbar>
                </AppBar>
            </Box>
            <Grid xs={12} sm={12} md={12} lg={12} >
                <Stack direction="row" spacing={1} id="button1x1">
                    <Grid xs={4} lg={4} id="headformtopnext" >
                        <Typography id="h3ofbecomeinvest">
                            Become an invester
                        </Typography>
                    </Grid>
                    <Grid xs={4} lg={4} id="headformtopnext" >
                        <Typography id="h3ofbecomeinvest">
                            Become a member
                        </Typography>
                    </Grid>
                    <Grid xs={4} lg={4} id="headformtopnext" >
                        <Typography id="h3ofbecomeinvest">
                            Join the investingverse
                        </Typography>
                    </Grid>
                </Stack>
            </Grid>

     

        </>
    );
};

export default Header;