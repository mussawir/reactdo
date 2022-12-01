import React from "react";
import Dashboard from "./../Dashboard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
type Props = {};
const drawerWidth = 240;
const SideBar = (props: Props) => {
  return (
    <>
    <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <Link to="/funding">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SwitchAccessShortcutAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Funding" />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <Link to="/promotion">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ConnectWithoutContactIcon />
                    </ListItemIcon>

                    <ListItemText primary="Promotion" />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
            <Divider />

            <List>
              <Link to="/disbursment">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MoveUpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Disbursment" />
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
            <Divider />

            <List>
            <Link to="/roi">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AttachMoneyIcon />
                  </ListItemIcon>
                  <ListItemText primary="ROI" />
                </ListItemButton>
              </ListItem>
              
</Link>
            </List>
            <Divider />
          </Box>
        </Drawer>
    </>
  );
};

export default SideBar;
