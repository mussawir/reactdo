import React from 'react'
import "../Comments/CommnetsStyle.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Divider, Grid, Typography, } from '@mui/material';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '0%',
}));



type Props = {}

const Comments = (props: Props) => {
    return (
        <>
            <Grid id="GRid1ofComment">
  

                        <Grid container spacing={2}>
                            <Grid xs={12} sm={12} md={7} lg={7}>
                                <Item id="IteMofComment">Only backers can post comments.</Item>
                            </Grid>
                            <Divider id="dividerdividedx" orientation="vertical" flexItem />
                            <Grid xs={12} sm={12} md={3} lg={3} >
                                <Grid><Typography id="secondGridinGrid1">This is your space to offer support and feedback. Remember to be constructive—there's a human behind this project.<br></br>
                                    Have a question for the creator?<br></br>
                                    <a href='#'>Check this project's FAQ</a></Typography></Grid>
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid xs={12} sm={12} md={7} lg={7}>
                                <Item id="boxofcomment">
                                    <Grid  >
                                        <Paper >
                                            <MenuList>
                                                <MenuItem>
                                                    <ListItemIcon>
                                                        <SendIcon fontSize="small" />
                                                    </ListItemIcon>
                                                    <Typography  id="NicolasFandall">ringmaster0325
                                                        <br></br>
                                                        <Typography id="poftypoofc">about 14 hours ago</Typography>
                                                    </Typography>
                                                    <Typography id="superbackercolor">
                                                        Superbacker
                                                    </Typography>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Typography fontSize="small" id="chotaonchotiscreen">
                                                        <br></br>
                                                        all i thought when i saw was this book is a Crown of Candy
                                                    </Typography>
                                                </MenuItem>
                                            </MenuList>
                                        </Paper>
                                    </Grid>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid xs={12} sm={12} md={7} lg={7}>
                                <Item id="boxofcomment">
                                    <Grid  >
                                        <Paper >
                                            <MenuList>
                                                <MenuItem>
                                                    <ListItemIcon>
                                                        <SendIcon fontSize="small" />
                                                    </ListItemIcon>
                                                    <Typography  id="NicolasFandall">Dream Realm Storytellers
                                                        <br></br>
                                                        <Typography id="poftypoofc">about 5 days ago</Typography>
                                                    </Typography>
                                                    <Typography id="superbackercolor" color="succes">
                                                       Creator
                                                    </Typography>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Typography fontSize="small" id="chotaonchotiscreen">
                                                        <br></br>
                                                        Thanks for the stats Landon
                                                    </Typography>
                                                </MenuItem>
                                            </MenuList>
                                        </Paper>
                                    </Grid>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid xs={12} sm={12} md={7} lg={7}>
                                <Item id="boxofcomment">
                                    <Grid  >
                                        <Paper >
                                            <MenuList>
                                                <MenuItem>
                                                    <ListItemIcon>
                                                        <SendIcon fontSize="small" />
                                                    </ListItemIcon>
                                                    <Typography  id="NicolasFandall">Landon Jamieson
                                                        <br></br>
                                                        <Typography id="poftypoofc">1 day ago</Typography>
                                                    </Typography>
                                                    <Typography id="superbackercolor">
                                                        Superbacker
                                                    </Typography>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Typography fontSize="small" id="chotaonchotiscreen">
                                                        <br></br>
                                                        Pledged: £85,428/949.2% (+£1,111/+12.34%)
<br></br>
Backers: 1,438 (+24)
<br></br>
Average Pledge: £59.41 (-£0.22)
<br></br>
Time Left: 9 Days 6 Hours 10 Minutes
<br></br>
Current Velocity: £1,103.27 / Day
<br></br>
7-Day Average: £1,273.00 (-£83.29)
<br></br>
Stretch Goal (Chapter Art): £99,079

                                                    </Typography>
                                                </MenuItem>
                                            </MenuList>
                                        </Paper>
                                    </Grid>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid xs={12} sm={12} md={7} lg={7}>
                                <Item id="boxofcomment">
                                    <Grid  >
                                        <Paper >
                                            <MenuList>
                                                <MenuItem>
                                                    <ListItemIcon>
                                                        <SendIcon fontSize="small" />
                                                    </ListItemIcon>
                                                    <Typography  id="NicolasFandall">ringmaster0325
                                                        <br></br>
                                                        <Typography id="poftypoofc">about 14 hours ago</Typography>
                                                    </Typography>
                                                    <Typography id="superbackercolor">
                                                        Superbacker
                                                    </Typography>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Typography fontSize="small" id="chotaonchotiscreen">
                                                        <br></br>
                                                        all i thought when i saw was this book is a Crown of Candy
                                                    </Typography>
                                                </MenuItem>
                                            </MenuList>
                                        </Paper>
                                    </Grid>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid xs={12} sm={12} md={7} lg={7}>
                                <Item id="boxofcomment">
                                    <Grid  >
                                        <Paper >
                                            <MenuList>
                                                <MenuItem>
                                                    <ListItemIcon>
                                                        <SendIcon fontSize="small" />
                                                    </ListItemIcon>
                                                  
                                                    <Typography id="NicolasFandall" >Nicolas F.
                                                        <br></br>
                                                        <Typography id="poftypoofc">about 1 week ago</Typography>
                                                    </Typography>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Typography  fontSize="small" id="chotaonchotiscreen">
                                                        Thanks for this fun looking setting!
                                                        <br></br>
                                                        My kids are already in love with their potential PCs  <br></br> and that will be a great<br></br> way to introduce them to 5e!
                                                    <br></br>Do you intend to provide a PDF version of the GM   <br></br>screen as an add-on or even a bonus?
                                                    </Typography>
                                                    
                                                </MenuItem>
                                                
                                            </MenuList>
                                            
                                        </Paper>
                                    </Grid>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid xs={12} sm={12} md={7} lg={7}>
                                <Item id="boxofcomment">
                                    <Grid  >
                                        <Paper >
                                            <MenuList>
                                                <MenuItem>
                                                    <ListItemIcon>
                                                        <SendIcon fontSize="small" />
                                                    </ListItemIcon>
                                                    <Typography  id="NicolasFandall">ringmaster0325
                                                        <br></br>
                                                        <Typography id="poftypoofc">about 14 hours ago</Typography>
                                                    </Typography>
                                                    <Typography id="superbackercolor">
                                                        Superbacker
                                                    </Typography>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Typography fontSize="small" id="chotaonchotiscreen">
                                                        <br></br>
                                                        all i thought when i saw was this book is a Crown of Candy
                                                    </Typography>
                                                </MenuItem>
                                            </MenuList>
                                        </Paper>
                                    </Grid>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid xs={12} sm={12} md={7} lg={7}>
                                <Item id="boxofcomment">
                                    <Grid  >
                                        <Paper >
                                            <MenuList>
                                                <MenuItem>
                                                    <ListItemIcon>
                                                        <SendIcon fontSize="small" />
                                                    </ListItemIcon>
                                                    <Typography  id="NicolasFandall">ringmaster0325
                                                        <br></br>
                                                        <Typography id="poftypoofc">about 14 hours ago</Typography>
                                                    </Typography>
                                                    <Typography id="superbackercolor">
                                                        Superbacker
                                                    </Typography>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Typography fontSize="small" id="chotaonchotiscreen">
                                                        <br></br>
                                                        all i thought when i saw was this book is a Crown of Candy
                                                    </Typography>
                                                </MenuItem>
                                            </MenuList>
                                        </Paper>
                                    </Grid>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid xs={12} sm={12} md={7} lg={7}>
                                <Item id="boxofcomment">
                                    <Grid  >
                                        <Paper >
                                            <MenuList>
                                                <MenuItem>
                                                    <ListItemIcon>
                                                        <SendIcon fontSize="small" />
                                                    </ListItemIcon>
                                                    <Typography  id="NicolasFandall">ringmaster0325
                                                        <br></br>
                                                        <Typography id="poftypoofc">about 14 hours ago</Typography>
                                                    </Typography>
                                                    <Typography id="superbackercolor">
                                                        Superbacker
                                                    </Typography>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Typography fontSize="small" id="chotaonchotiscreen">
                                                        <br></br>
                                                        all i thought when i saw was this book is a Crown of Candy
                                                    </Typography>
                                                </MenuItem>
                                            </MenuList>
                                        </Paper>
                                    </Grid>
                                </Item>
                            </Grid>
                        </Grid>
            </Grid>
        </>
    )
}

export default Comments;