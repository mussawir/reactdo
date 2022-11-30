import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "../../Layer/Funding/FundingStyle.css"
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Dashboard from './../../oldDash';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

type Props = {}

const Funding = (props: Props) => {
  return (
    <>
    <Dashboard/>
    <Grid id="mainpic">
        <Grid xs={12} sm={10} md={8} lg={6}>
          <Typography id="id3">Funding</Typography>
            <Typography id="TopHeading">
            Smart Class Kit
            </Typography>
        </Grid>
        <Grid>
            <Typography id="loginhead">
                The simplest and the easiest way to make a video for the flipped classrooms.
            </Typography>
        </Grid>
       
        <Stack direction="row" spacing={2} id="flex">
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> <Typography>NeoLAB Convergence
      <Typography>1 Campaign | Los Angeles,United</Typography>
      </Typography>
    </Stack>
        <Grid>
            </Grid>
             <Grid xs={12} sm={10} md={8} lg={6} id="thflex">
            <Typography >
            £8,609 GBP
            </Typography>
            <Typography id="id1">
              128 backers
            </Typography>
        </Grid>
    </Grid>
     <Box sx={{ position: 'relative' }}>
   </Box>
    <Box sx={{ flexGrow: 1 }}>
    <br />
    <BorderLinearProgress variant="determinate" value={50} />
    </Box>
    <Grid>
            </Grid>
             <Grid xs={12} sm={10} md={8} lg={6} id="thflex">
            <Typography >
            55% of £15,404 Flexible Goal
            </Typography>
            <Typography id="id2">
              29 days left
            </Typography>
        </Grid>
  </>
 );
}

export default Funding;