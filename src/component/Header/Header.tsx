import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "../Header/Header.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
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

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" id="bar1">
          <Toolbar>
            <Typography>
              <Stack direction="row" spacing={2} id="button1">
                <Typography  id="a3">
                 <DiscoverModal/>
                </Typography>

                <Link to="/project" id="a3">
                  Start a project
                </Link>
              </Stack>
            </Typography>
            <Typography
              id="h1"
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link to="/">
                <img src={logo} id="mainLogo" />
              </Link>
            </Typography>
            <Search id="a1">
              <SearchIconWrapper id="a1"></SearchIconWrapper>
              <SearchIcon />
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Link to="/login" id="a1">
              Login
            </Link>
          </Toolbar>
        </AppBar>
        <Stack direction="row" spacing={1} id="button1">
          <Typography variant="h6" id="h3">
            Become an invester
          </Typography>
          <Typography variant="h6" id="h2">
            Become a member
          </Typography>
          <Typography variant="h6" id="h2">
            Join the investingverse
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Header;
